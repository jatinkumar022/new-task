import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import { FaPlus } from "react-icons/fa6";
import Stack from "@mui/joy/Stack";

import { Checkbox, Textarea } from "@mui/joy";
import useTaskStore from "../store/store";

export default function InputTask() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [important, setImportant] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      addTask(title, description, important);

      setTitle("");
      setDescription("");
      setOpen(false);
    }
  };
  return (
    <React.Fragment>
      <button
        className="md:w-80 border-2  border-dashed  border-card-border p-4 rounded-xl  h-60  flex justify-center items-center gap-2
text-close-icon "
        onClick={() => setOpen(true)}
      >
        <FaPlus />
        Add New Task
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Add Task</DialogTitle>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} className="w-[30rem]">
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
              <Button type="submit">Add Task</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
