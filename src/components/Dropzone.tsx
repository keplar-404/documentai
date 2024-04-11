"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "@/components/svgs";
import { FileItem } from "./FileItem";
import { loadFfmpeg, convertToPDF } from "@/utils/fileConvertor";
import checkFileType from "@/utils/checkFileType";
import text_Extractor_Controller from "@/utils/call_Text_Extractor_Controller";
import handleFileReader from "@/utils/handleFileReader";

// import officeToPdf from "@/utils/office_To_Pdf_convertor";

let ffmpegInstance: any;

const Dropezone = () => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  //   useEffect(() => {
  //     loadFfmpeg().then((ffmpeg) => {
  //       ffmpegInstance = ffmpeg;
  //       console.log("FFmpeg loaded successfully");
  //     }).catch(error => {
  //       console.error("Failed to load FFmpeg:", error);
  //     });
  //   }, []);

  //   const handleConvertToPDF = async () => {
  //     if (files.length === 0) {
  //       console.error("No file selected for conversion");
  //       return;
  //     }

  // const fa = loadFfmpeg()

  //     try {
  //       const pdfUrl = await convertToPDF(fa, files[0]);
  //       console.log("PDF URL:", pdfUrl);
  //       // Handle the PDF URL, e.g., display it in an iframe or download it
  //     } catch (error) {
  //       console.error("Conversion failed:", error);
  //       // Display error message to user
  //     }
  //   };

  const handleConvertToPDF = async() => {
    // officeToPdf(files[0]);

   const a = await  handleFileReader(files[0]);

   console.log(a)
  };

  return (
    <div>
      {/* Dropzone */}
      <div {...getRootProps()}>
        <input {...getInputProps()} id="dropzone" />
        <label
          htmlFor="dropzone"
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <Upload className="text-neutral_color w-[38px] h-[38px]" />
          <p className="text-sm mt-4">
            <span className="text-accent_color-light font-medium">
              Click to upload{" "}
            </span>
            or drag and drop
          </p>
          <p className="text-xs">Up to 4MB</p>
        </label>
      </div>

      {/* File list */}
      <div>
        {files.map((file, index) => (
          <FileItem
            key={index}
            id={index}
            fileName={file.name}
            size={parseFloat((file.size / 1024).toFixed(2))}
            fileType={file.type}
            setFiles={setFiles}
          />
        ))}
      </div>

      <button onClick={handleConvertToPDF}>Convert</button>
    </div>
  );
};

export default Dropezone;
