"use client";
import { Button } from "@nextui-org/react";
import { ChatIcon } from "@/components/svgs";
import ChatWeight from "./ChatWeight";
import Link from "next/link";
import { useState } from "react";

export default function ChatLeftSection() {
  const [chats, setChats] = useState<JSX.Element[]>([]);

  return (
    <aside className="w-[290px] h-screen overflow-y-scroll bg-secondary_color-dark border-r border-neutral_color px-[0.7rem] py-[1.3rem]">
      {/* new chat */}
      <Button
        className="w-full bg-accent_color-light font-medium text-sm hover:bg-accent_color-light/95"
        data-hover="false"
        onClick={() => setChats([...chats, <ChatWeight />])}
      >
        <ChatIcon className="text-black" />
        New chat
      </Button>

      {/* chat list */}
      <div className="mt-[45px] w-full">
        {/* chat item 1 */}
        {chats.map((data, index) => (
          <ChatWeight key={index} />
        ))}
      </div>
    </aside>
  );
}
