import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const CardEditDialog = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {};
  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger className="uppercase text-sm font-medium duration-200 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md">
          edit
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 bg-black/70 fixed" />
          <Dialog.Content className="text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-4 w-96 space-y-4 bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
              <div className="px-4 py-2 text-center text-white">
                <h1 className="text-3xl font-semibold">Edit Entry</h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className="m-6 flex flex-col gap-4 text-white font-medium text-lg"
              >
                <div>
                  <label htmlFor="title">Title </label>
                  <br />
                  <input
                    type="text"
                    minLength={1}
                    maxLength={50}
                    required
                    defaultValue={item.title}
                    name="title"
                    id="title"
                    className="bg-black/50 outline-none  p-1 rounded-md text-base font-normal w-full"
                  />
                </div>
                <div>
                  <label htmlFor="description">Description </label>
                  <br />
                  <textarea
                    type="text"
                    minLength={1}
                    maxLength={100}
                    required
                    rows={8}
                    defaultValue={item.description}
                    name="description"
                    id="description"
                    className="bg-black/50 outline-none  p-1 rounded-md text-sm font-normal font-mono w-full"
                  />
                </div>
                <div className="flex px-2 justify-around">
                  <button
                    type="submit"
                    className="px-2 py-1 uppercase text-sm font-medium duration-200 bg-blue-500 hover:bg-blue-600 w-min align-middle rounded-md"
                  >
                    Save
                  </button>
                  <Dialog.Close className="uppercase text-sm font-medium duration-200 bg-red-500 hover:bg-red-600 rounded-md px-3 py-1">
                    Cancel
                  </Dialog.Close>
                </div>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default CardEditDialog;
