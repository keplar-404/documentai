import text_Extractor_Controller from "./call_Text_Extractor_Controller";
import checkFileType from "./checkFileType";
import { parse_Txt_From_Image } from "./parse_Txt_From_Image";

export default async function handleFileReader(
  file: File
): Promise<string | boolean> {
  return new Promise((resolve, reject) => {
    const type = checkFileType(file.type);

    if (!type) {
      resolve(false);
      return;
    }

    if (
      file.type === "image/png" || // PNG
      file.type === "image/jpeg" || // JPEG
      file.type === "image/jp2" || // JP2 (JPEG 2000 Image File)
      file.type === "image/webp" || // webp (WebP)
      file.type === "image/avif" // avif (AV1 Image File Format)
    ) {
      resolve(parse_Txt_From_Image(file));
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
