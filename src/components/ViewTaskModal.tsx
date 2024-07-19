import * as React from "react";

import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { GiCheckMark } from "react-icons/gi";
import Stack from "@mui/joy/Stack";

interface Prop {
  title: string;
  description: string;
  isImportant: boolean;
  isCompleted: boolean;
  date: string;
}
export default function ViewTaskModal({
  title,
  description,
  isImportant,
  isCompleted,
  date,
}: Prop) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)} className="text-2xl font-bold mb-2">
        {title}
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <Stack spacing={3} className="w-[30rem] ">
            <h2 className="font-normal text-xl"> Task Title: </h2>
            <div className=" h-12 p-3 font-normal text-lg outline-none focus:outline-outline-blue  rounded-md bg-background">
              {title}
            </div>

            <h2 className="font-normal text-xl"> Task Description: </h2>
            <div className="  p-3 font-normal h-72 text-lg bg-background outline-none focus:outline-outline-blue resize-none  rounded-md">
              {description}
            </div>

            <div className="flex flex-col gap-3 ">
              <h2 className="font-normal text-xl flex">
                Important:{" "}
                {isImportant ? (
                  <GiCheckMark className="mt-1 ml-3 text-success " />
                ) : (
                  "no"
                )}
              </h2>

              <h2 className="font-normal text-xl flex">
                Completed:{" "}
                {isCompleted ? (
                  <GiCheckMark className="mt-1 ml-3 text-success " />
                ) : (
                  "no"
                )}
              </h2>
            </div>

            <h2 className="font-normal text-xl"> {date} </h2>
          </Stack>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
