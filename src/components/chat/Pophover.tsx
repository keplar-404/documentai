"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { ReactNode, useState } from "react";
import {
  DeleteChatIcon,
  EditPencilIcon,
  MoreIcon,
  SettingsIcon,
} from "@/components/svgs";

type ActionProps = {
  key: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  color?: string;
};

const Actions = ({ actions }: { actions: ActionProps[] }) => (
  <PopoverContent>
    <Listbox
      aria-label="Actions"
      disabledKeys={["devider"]}
      // onAction={(key) => actions.find((a) => a.key === key)?.onClick?.()}
      className="w-[10rem]"
    >
      {actions.map((action) => (
        <ListboxItem
          key={action.key}
          onClick={action.onClick}
          color={action.key === "delete" ? "danger" : "default"}
          className={action.key === "delete" ? "text-danger" : ""}
        >
          <div className="flex items-center gap-2">
            {action.icon}
            <p>{action.label}</p>
          </div>
        </ListboxItem>
      ))}
    </Listbox>
  </PopoverContent>
);

export default function Pophover() {
  const [isOpen, setIsOpen] = useState(false);
  const actions = [
    {
      key: "rename",
      label: "Rename",
      icon: <EditPencilIcon />,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      key: "settings",
      label: "Setting",
      icon: <SettingsIcon />,
      onClick: () => setIsOpen(!isOpen),
    },
    {
      key: "devider",
      label: "",
      icon: <hr className="w-full h-[2px] bg-neutral_color/35 rounded-full" />,
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteChatIcon />,
      onClick: () => setIsOpen(!isOpen),
    },
  ];
  return (
    <button
      className="px-[9px] py-[13px]"
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
    >
      <Popover
        placement="right"
        backdrop="blur"
        isOpen={isOpen}
        onKeyDown={(key) => {
          if (key.key === "Escape") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <PopoverTrigger>
          <div onClick={() => setIsOpen(!isOpen)}>
            <MoreIcon className="text-white" />
          </div>
        </PopoverTrigger>
        <Actions actions={actions} />
      </Popover>
    </button>
  );
}
