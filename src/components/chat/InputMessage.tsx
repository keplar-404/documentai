"use client";

import { useEffect, useRef } from "react";

export default function InputMessage() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      const adjustTextareaHeight = () => {
        textarea.style.height = "auto";
        const newHeight = `${textarea.scrollHeight}px`;
        if (parseInt(newHeight) <= 200) {
          // Check if new height is less than or equal to 60 pixels
          textarea.style.height = newHeight;
        } else {
          textarea.style.height = "200px"; // Limit height to 60 pixels
        }
      };

      adjustTextareaHeight();

      textarea.addEventListener("input", adjustTextareaHeight);

      return () => {
        textarea.removeEventListener("input", adjustTextareaHeight);
      };
    }
  }, [textareaRef]);
  return (
    <>
      <textarea
        ref={textareaRef}
        id="my-text"
        className="w-full bg-primary_color border-2 border-neutral_color p-4 rounded-xl text-white"
        placeholder="Message"
        rows={1}
        style={{ height: "auto", overflowY: "hidden", resize: "none" }}
      />
    </>
  );
}
