import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MdDeleteForever } from "react-icons/md";

const CardDeleteDialog = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleDelete = () => {};
  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger className="uppercase text-sm font-medium duration-200 bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md">
          <MdDeleteForever size={20} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 bg-black/70 fixed" />
          <Dialog.Content className="text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-4 space-y-4 bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
              <h2 className="text-xl font-semibold whitespace-nowrap">
                Are you sure you want to delete this Entry ?
              </h2>
              <div className="flex px-2 justify-around">
                <Dialog.Close className="uppercase text-sm font-medium duration-200 bg-blue-500 hover:bg-blue-600 rounded-md px-3 py-1">
                  Cancel
                </Dialog.Close>
                <button
                  onClick={handleDelete}
                  className="uppercase text-sm font-medium duration-200 bg-red-500 hover:bg-red-600 rounded-md px-3 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default CardDeleteDialog;
