import Dropezone from "@/components/Dropzone";
import InputMessage from "@/components/chat/InputMessage";
import Message from "@/components/chat/Message";

export default function page() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between gap-2 py-4 px-4">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Dropezone />
        </div>

        <div className="flex justify-center items-center w-full">
          <InputMessage />
        </div>
      </div>
    </>
  );
}
