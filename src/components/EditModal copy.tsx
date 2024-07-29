import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import { LuFileEdit } from "react-icons/lu";
import Stack from "@mui/joy/Stack";

import { Checkbox, Textarea } from "@mui/joy";
import useTaskStore from "../store/store";
import {} from "react-icons/fa";
interface Prop {
  id: number;
  oldTitle: string;
  oldDescription: string;
  isImportant: boolean;
}
export default function InputTask({
  id,
  oldTitle,
  oldDescription,
  isImportant,
}: Prop) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [important, setImportant] = React.useState(isImportant);
  const [title, setTitle] = React.useState(oldTitle);
  const [description, setDescription] = React.useState(oldDescription);
  const editTask = useTaskStore((state) => state.editTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      editTask(id, title, description, important);

      setTitle("");
      setDescription("");
      setOpen(false);
    }
  };
  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>
        <LuFileEdit />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Edit Task</DialogTitle>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} className="md:w-[30rem] w-[15rem]">
              <FormControl>
                <FormLabel>Task Title:</FormLabel>
                <Input
                  autoFocus
                  required
                  className="p-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Task</FormLabel>
                <Textarea
                  minRows={2}
                  size="lg"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-3"
                />
              </FormControl>
              <FormControl>
                <Checkbox
                  checked={important}
                  onChange={() => setImportant(!important)}
                  label="Mark as Important"
                  name=""
                />
              </FormControl>
              <Button type="submit">Edit Task</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
