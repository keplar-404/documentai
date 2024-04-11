import text_Extractor_Controller from "./call_Text_Extractor_Controller";
import checkFileType from "./checkFileType";

export default async function handleFileReader(file: File): Promise<string | boolean> {
  
  return new Promise((resolve, reject) => {
    const type = checkFileType(file.type);



    if (!type) {
      resolve(false);
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      // @ts-ignore
      const fileContent = event.target.result;

      if (fileContent === null || typeof fileContent === "string") {
        resolve(false);
        return;
      }

      try {
        const result = await text_Extractor_Controller(file, fileContent);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}
