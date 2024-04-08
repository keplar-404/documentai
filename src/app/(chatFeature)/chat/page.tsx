import InputMessage from "@/components/chat/InputMessage";
import Message from "@/components/chat/Message";
import { Upload } from "@/components/svgs";

export default function page() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between gap-2 py-4 px-4">
        {/* <div className="">
<Message/>
</div> */}

        <div className="w-full h-full flex flex-col justify-center items-center">
          <div>
            <input type="file" id="upload-file" className="hidden" multiple />
            <label
              htmlFor="upload-file"
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <Upload className="text-neutral_color w-[38px] h-[38px]" />
              <p className=" text-sm mt-4">
                <span className="text-accent_color-light font-medium">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs">Up to 4MB</p>
            </label>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <InputMessage />
        </div>
      </div>
    </>
  );
}
