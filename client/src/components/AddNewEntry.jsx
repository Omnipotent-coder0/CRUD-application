import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoCreate } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const AddNewEntry = () => {
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      title: { value: title },
      description: { value: description },
      visibility: { value: visibility },
    } = e.target;
    const data = { title, description, visibility };
    try {
      const response = await axios.post("/api/entry", data);
      if (response.status == 201) {
        toast.success("Entry is successfully created !");
        window.location.reload();
      } else {
        toast.error("Something went wrong !");
        localStorage.clear();
        setAuthUser(null);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      localStorage.clear();
      setAuthUser(null);
    }
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="w-64 h-[354px] text-white/50 hover:text-white duration-200 flex justify-center items-center bg-blu-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <IoCreate size={100} />
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
                  name="description"
                  id="description"
                  className="bg-black/50 outline-none  p-1 rounded-md text-sm font-normal font-mono w-full"
                />
              </div>
              <div>
                <label htmlFor="visibility">Visibility : </label>
                <select
                  name="visibility"
                  id="visibility"
                  className="bg-black/50 outline-none  p-1 rounded-md text-sm font-normal font-mono w-28 text-center"
                >
                  <option
                    value={true}
                    className="bg-blue-800/50 outline-none  p-1 rounded-md text-sm font-normal font-mono text-center"
                  >
                    Public 🔓
                  </option>
                  <option
                    value={false}
                    className="bg-green-600/50 outline-none  p-1 rounded-md text-sm font-normal font-mono text-center"
                  >
                    Private 🔒
                  </option>
                </select>
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
  );
};

export default AddNewEntry;
