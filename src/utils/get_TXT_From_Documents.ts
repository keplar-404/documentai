import mammoth from "mammoth";
import * as XLSX from "xlsx";

// Word document (DOCX, DOC, DOTX, DOCM)
export const get_TXT_From_MS_Document = async (fileContent: ArrayBuffer) => {
  try {
    const result = await mammoth.extractRawText({ arrayBuffer: fileContent });
    return result.value;
  } catch (error) {
    return error;
  }
};

export const get_TXT_From_Pdf = async (fileContent: ArrayBuffer) => {
  try {
    const typedArray = new Uint8Array(fileContent);
    // @ts-ignore
    // the pdfjsLib comes from script tage which is added in the /app/layout.tsx
    const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

    const pageTexts = await Promise.all(
      Array.from({ length: pdf.numPages }, (_, index) =>
        pdf
          .getPage(index + 1)
          .then((page: any) =>
            page
              .getTextContent()
              .then((content: any) =>
                content.items.map((item: any) => item.str).join(" ")
              )
          )
      )
    );

    const filteredText = pageTexts.join(" ").replace(/[^a-zA-Z0-9\s]/g, "");

    return filteredText;
  } catch (error) {
    return error;
  }
};

export const get_TXT_From_textDocument = (fileContent: ArrayBuffer) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      // @ts-ignore
      const contents = e.target.result;
      resolve(contents);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsText(new Blob([fileContent]));
  });
};

export const get_TXT_From_Xml = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target?.result;
      if (fileContent) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(
          fileContent as string,
          "text/xml"
        );
        const textContent = xmlDoc.documentElement.textContent;
        const index = textContent?.indexOf("Normal.");
        const processedText =
          index !== -1 ? textContent?.substring(0, index) : textContent;
        // @ts-ignore
        resolve(processedText);
      } else {
        reject(new Error("Failed to read file content"));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

// Excel spreadsheet (XLSX, XLS, XLSM)
export const get_Data_From_Excel = async (fileContent: ArrayBuffer) => {
  const workbook = await XLSX.read(fileContent, { type: "array" });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const data = XLSX.utils
    .sheet_to_json(worksheet, { header: 1 })
    .map((arr: any) => arr.join(","))
    .join("\n");
  // console.log(data);
  return data
};

