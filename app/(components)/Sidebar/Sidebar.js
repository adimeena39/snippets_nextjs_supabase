"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineFolderOpen,
  MdDelete,
  MdDownload,
  MdOutlineStarOutline,
} from "react-icons/md";
import { GoCode } from "react-icons/go";

import { FaTrashAlt } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import { tools } from "@/data/dummy";
import { useDispatch, useSelector } from "react-redux";
import {
  addFolder,
  fetchFolders,
} from "@/app/lib/store/features/folders/foldersSlice";
const Sidebar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const { folders } = useSelector((state) => state.folders);

  useEffect(() => {
    dispatch(fetchFolders());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="relative w-[20%] flex flex-col"
      onClick={() => dispatch(addFolder("react"))}
    >
      <div className={`fixed ${isSticky && " mt-20"}  min-w-[230px] `}>
        <div className="w-[98%] mb-[30px] p-[20px] rounded-[16px]">
          <h3 className="flex justify-between text-[20px] font-semibold">
            Tools
          </h3>
          <div className="flex flex-col mt-[10px]">
            {tools.map((tool) => (
              <div
                className={`flex items-center w-[90%] ml-[10px] px-[9px] text-[#1397e9] my-[5px] ${
                  tool.index === 1 && "active_folder"
                }`}
                key={tool.id}
              >
                <p className={`${tool.index === 1 && "active_folder"}`}>
                  <span className="text-[16px] mr-[5px]">
                    {tool.index === 1 && <GoCode className="text-[28px]" />}
                    {tool.index === 2 && (
                      <MdOutlineStarOutline className="text-[28px]" />
                    )}
                    {tool.index === 3 && (
                      <FaTrashAlt className="ml-[6px] text-[18px]" />
                    )}
                    {tool.index === 4 && (
                      <MdDownload className="ml-[2px] text-[28px]" />
                    )}
                  </span>
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[98%] p-[20px] rounded-[16px] ">
          <h3 className="flex justify-between text-[20px] font-semibold">
            Folders{" "}
            <span>
              <AiFillFolderAdd className="text-[#1397e9]" />
            </span>
          </h3>
          <div className="flex flex-col mt-[10px]">
            {folders?.map((folder) => (
              <div
                className={`flex items-center w-[90%] ml-[10px] px-[9px] text-[#1397e9] ${
                  2 == folder.id && "active_folder"
                }`}
                key={folder.id}
              >
                <p
                  className={`relative w-full font-semibold cursor-pointer ${
                    folder.isOpen && "drag-target"
                  }`}
                >
                  <span className="text-[16px] pr-[5px]">
                    <MdOutlineFolderOpen
                      className={`text-[28px] ${
                        2 == folder.id && "active_folder-icon"
                      }`}
                    />
                  </span>
                  {folder.name}
                </p>
                {true && (
                  <div className="relative text-red-500 cursor-pointer ml-auto">
                    <MdDelete />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
