import {
  get_Data_From_Excel,
  get_TXT_From_MS_Document,
  get_TXT_From_Pdf,
  get_TXT_From_Xml,
  get_TXT_From_textDocument,
} from "./get_TXT_From_Documents";

export default async function text_Extractor_Controller(
  file: File,
  fileContent: ArrayBuffer
) {
  try {
    if (
      // Word document (DOCX, DOC, DOTX, DOCM)
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template" ||
      file.type === "application/vnd.ms-word.document.macroEnabled.12" ||
      // PowerPoint presentation (PPTX, PPT, PPTM)
      file.type ===
        "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
      file.type === "application/vnd.ms-powerpoint" ||
      file.type === "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
    ) {
      const a = await get_TXT_From_MS_Document(fileContent);

      return a;
    } else if (file.type === "application/pdf") {
      // pdf
      return await get_TXT_From_Pdf(fileContent);
    } else if (
      // plain text
      file.type === "text/markdown" || // Markdown
      file.type === "text/csv" || // CSV (Comma-Separated Values)
      file.type === "text/plain" || // TXT (Plain Text)
      file.type === "text/html" || // HTML (Hypertext Markup Language)
      file.type === "application/xml" || // XML (eXtensible Markup Language)
      file.type === "application/json" || // JSON (JavaScript Object Notation)
      file.type === "text/yaml" || // YAML (YAML Ain't Markup Language)
      (file.type === "application/vnd.ms-excel" &&
        !file.name.toLowerCase().endsWith(".xls"))
    ) {
      return await get_TXT_From_textDocument(fileContent);
    } else if (file.type === "text/xml") {
      return get_TXT_From_Xml(file);
    } else if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.type === "application/vnd.ms-excel" ||
      file.type === "application/vnd.ms-excel.sheet.macroEnabled.12" ||
      (file.type === "application/vnd.ms-excel" &&
        file.name.toLowerCase().endsWith(".xls"))
    ) {
      return await get_Data_From_Excel(fileContent);
    } else {
      return "Unsupported file type";
    }
  } catch (error) {
    return error;
  }
}
