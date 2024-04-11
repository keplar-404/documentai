import { DeleteChatIcon, FileIcon } from "@/components/svgs";
import { removeFile, textFromatter } from "@/utils/fileUploadController";

type Props = {
  id: number;
  fileName: string;
  size: number;
  fileType: string;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export function FileItem({ id, fileName, size, fileType, setFiles }: Props) {

  return (
    <div className="border w-[25rem] rounded-md px-4 py-3 my-3 transition-colors ease-in-out duration-300">
      <div className=" grid grid-cols-8 gap-6">
        <FileIcon />
        <p className="font-medium col-span-2">{textFromatter(fileName)}</p>
        <p className="text-sm col-span-2">{(size /1024).toFixed(2)} MB</p>
        <p className="text-sm col-span-2">.{textFromatter(fileType)}</p>
        <button
          onClick={() => removeFile(id, setFiles)}
          className="cursor-pointer"
        >
          <DeleteChatIcon />
        </button>
      </div>
      
      {/* progress bar */}
      <div className="w-[100%] h-[3px] bg-white rounded-full mt-2 transition-all ease-linear duration-500"></div>
    </div>
  );
}
