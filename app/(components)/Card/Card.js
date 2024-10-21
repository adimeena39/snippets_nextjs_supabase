"use client";

import React, { useRef, useState } from "react";
import {
  MdModeEdit,
  MdDelete,
  MdSettingsBackupRestore,
  MdFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { folders } from "@/data/dummy";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

const Card = (
  {
    // snippets, searchSnippets, folders, handleDelete, handleRestore, handleFavorite,handleRemoveFavorite,handlePermanentDelete,active
  }
) => {
  const router = useRouter();
  const { snippets } = useSelector((state) => state.snippets);

  const cardRef = useRef(null);

  function handleDragStart(e, id) {
    e.dataTransfer.setData("text/plain", id);
  }

  const handleApi = async () => {
    const repsonse = await fetch(
      "http://localhost:3000/api/supabase/create-folder",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "No Js" }), // Convert the JavaScript object to JSON
      }
    );
    const data = await repsonse.json();
    debugger;
  };

  return (
    <div className="relative top-5 w-[80%] flex justify-start place-items-start ">
      <button onClick={handleApi}>FetchAPi</button>
      <div className="flex flex-col justify-start w-full max-w-[1200px] py-7">
        {/* Search Input */}
        <div className="mb-5">
          <div className="relative group w-1/2 mx-auto">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Snippet Cards */}
        <div className="flex flex-wrap justify-between items-start gap-y-6 ">
          {snippets.length > 0 ? (
            snippets.map((slice) => (
              <div
                key={slice?.id}
                className="relative md:w-[32%] px-2  w-full min-h-[450px] py-5 bg-white rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105"
              >
                <Link href={`/edit/${slice?.id}`}>
                  <img
                    src={
                      slice?.images
                        ? slice?.images[0]
                        : "https://www.codiga.io/img/posts/how-to-display-code-snippets-in-html/pre-tag-html.png"
                    }
                    alt={""}
                    className="w-full h-[250px] rounded-md  object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col items-center mt-3 ">
                  <h3 className="text-lg text-gray-700 font-semibold mb-2">
                    {slice?.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-2">
                    {slice?.tags?.slice(0, 5).map((tag, index) => (
                      <span
                        key={index}
                        className="mr-2 px-2 py-1 rounded-full bg-gray-300 text-xs text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mt-auto ">
                  {folders
                    .filter((folder) => folder.id === slice?.folderId)
                    .map((folder) => (
                      <span
                        key={folder.id}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md"
                      >
                        {folder.name}
                      </span>
                    ))}
                  <div className="flex items-center space-x-2">
                    <Link href={`/edit/${slice?.id}`}>
                      <FiEdit className="text-lg text-gray-500 cursor-pointer hover:text-blue-500 transition" />
                    </Link>
                    {slice?.isDeleted ? (
                      ""
                    ) : slice?.isFavorites ? (
                      <MdFavorite className="text-lg text-red-500 cursor-pointer hover:text-red-600 transition" />
                    ) : (
                      <MdOutlineFavoriteBorder className="text-lg cursor-pointer hover:text-gray-500 transition" />
                    )}
                    {slice?.isDeleted ? (
                      <>
                        <MdSettingsBackupRestore className="text-lg text-gray-500 cursor-pointer hover:text-gray-600 transition" />
                        <RiDeleteBin7Fill className="text-lg text-red-500 cursor-pointer hover:text-red-600 transition" />
                      </>
                    ) : (
                      <MdDelete className="text-lg text-red-500 cursor-pointer hover:text-red-600 transition" />
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="mt-32 text-lg text-center w-full">
              No snippets to show here,{" "}
              <Link href="./create" className="text-blue-500 hover:underline">
                Create
              </Link>{" "}
              Some
            </h1>
          )}
        </div>

        {/* Download Section Message */}
        {1 === 4 && (
          <h1 className="mt-36 text-lg text-center">
            Check your <span className="text-blue-500">Download</span> section
            for the progress.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Card;
