"use client";
import { getXataClient } from "@/xata";
import { revalidatePath } from "next/cache";
import React, { useRef } from "react";
import { z } from "zod";

const FolderForm = ({
  handleCreateFolder,
}: {
  handleCreateFolder: (formData: FormData) => void;
}) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={(formData) => {
        handleCreateFolder(formData);
        ref.current?.reset();
      }}
      className="mb-4 w-full flex gap-x-2 items-center"
      ref={ref}
    >
      <div className="grow">
        <label
          htmlFor="name"
          className="text-gray-300 text-sm font-bold mb-2 hidden"
        >
          New Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="my folder"
          className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
        />
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">
        Submit
      </button>
    </form>
  );
};

export default FolderForm;
