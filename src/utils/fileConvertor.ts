// FileConvertor.ts
import fs from 'fs';
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL, fetchFile } from "@ffmpeg/util";

export async function loadFfmpeg(): Promise<FFmpeg> {
  try {
    const ffmpeg = new FFmpeg();
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });

    console.log("FFmpeg loaded successfully");
    return ffmpeg;
  } catch (error) {
    console.error("Failed to load FFmpeg:", error);
    throw error;
  }
}

export async function convertToPDF(ffmpeg: FFmpeg, inputFile: File): Promise<string> {
  try {
    const fileExtension = inputFile.name.split(".").pop()?.toLowerCase();

    const documentTypes = [
      "doc",
      "docx",
      "odt",
      "rtf",
      "txt",
      "html",
      "csv",
      "xml",
      "json",
      "yaml",
      "markdown",
    ];

    if (fileExtension && documentTypes.includes(fileExtension)) {
      const inputFileName = `input.${fileExtension}`;
      const outputFileName = `output.pdf`;

      await ffmpeg.writeFile(inputFileName, await fetchFile(inputFile));

      const ffmpegCommand = ["-i", inputFileName, outputFileName];

      await ffmpeg.exec(ffmpegCommand);

      const pdfData = await ffmpeg.readFile(outputFileName);

      const blob = new Blob([pdfData], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      return url;
    } else {
      throw new Error("Unsupported document type");
    }
  } catch (error) {
    console.error("Conversion to PDF failed:", error);
    throw error;
  }
}





