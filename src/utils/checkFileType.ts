const fileTypes = [
  // @pspdfkit/nodejs

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  "application/vnd.ms-word.document.macroEnabled.12",

  // Audio Formats
  "audio/mpeg", // MP3 (MPEG Audio Layer III)
  "audio/wav", // WAV (Waveform Audio File Format)
  "audio/flac", // FLAC (Free Lossless Audio Codec)
  "audio/aac", // AAC (Advanced Audio Coding)
  "audio/ogg", // OGG (Ogg Vorbis)
  "audio/m4a", // m4a (MPEG-4 Audio File)
  "audio/x-ms-wma", // wma (Windows Media Audio)

  "text/markdown", // Markdown
  "text/csv", // CSV (Comma-Separated Values)
  "text/plain", // TXT (Plain Text)
  "text/html", // HTML (Hypertext Markup Language)
  "application/xml", // XML (eXtensible Markup Language)
  "application/json", // JSON (JavaScript Object Notation)
  "text/yaml", // YAML (YAML Ain't Markup Language)
  "application/vnd.ms-excel",

  "text/xml",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "application/vnd.ms-excel.sheet.macroEnabled.12",

  // image formats
  "image/png", // PNG
  "image/jpeg", // JPEG
  "image/jp2", // JP2 (JPEG 2000 Image File)
  "image/webp", // webp (WebP)
  "image/avif", // avif (AV1 Image File Format)

  // Video Formats
  "video/mp4", // MP4 (MPEG-4 Part 14)
  "video/mp4", // m4v (MPEG-4 Video File)
  "video/mp4", // mp4v (MPEG-4 Video File)
  "video/3gpp", // 3gp (3GPP Multimedia File)
  "video/3gpp2", // 3g2 (3GPP2 Multimedia File)
  "video/avi", // avi (Audio Video Interleave)
  "video/quicktime", // mov (QuickTime Movie)
  "video/x-ms-wmv", // wmv (Windows Media Video)
  "video/x-matroska", // mkv (Matroska Video)
  "video/x-flv", // flv (Flash Video)
  "video/ogg", // ogv (Ogg Video)
  "video/webm", // webm (WebM)
  "video/h264", // h264 (H.264 Video File)
  "video/h264", // 264 (H.264 Video File)
  "video/hevc", // hevc (High Efficiency Video Coding)
  "video/hevc", // 265 (High Efficiency Video Coding)
];

export default function checkFileType(type: string) {
  const file_Type = fileTypes.filter((fileType) => fileType === type);

  if (file_Type.length > 0) {
    return true;
  } else {
    return false;
  }
}
