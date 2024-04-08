'use client'
import Link from "next/link";
import Pophover from "./Pophover";

// create function to generate unique id

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export default function ChatWeight() {
  return (
    <>
    <div
      tabIndex={0}
      className="flex justify-between  w-full items-center rounded-xl cursor-pointer hover:bg-neutral_color transition-all ease-linear duration-500"
      >
    <Link href={`/chat/${generateUniqueId()}`} className="w-full">
      <p className="text-sm h-full  px-[9px] py-[13px]"> chat name here </p>
      </Link>
      
        <Pophover />
   
    </div>
        </>
  );
}
