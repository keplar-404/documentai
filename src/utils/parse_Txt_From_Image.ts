import Tesseract from "tesseract.js";

export const parse_Txt_From_Image = async (image: File): Promise<string> => {
  try {
    const worker = await Tesseract.createWorker();
    const { data: { text } } = await worker.recognize(image);

    // Clean up
    await worker.terminate();

    return text || ""; // Return the recognized text or an empty string if text is undefined
  } catch (error) {
    console.error("An error occurred during text recognition:", error);
    return ""; // Return an empty string in case of an error
  }
};