"use client";

import { BiSearch } from "react-icons/bi";
export interface SearchProps {}

export default function Search({}: SearchProps) {
  return (
    <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center">
          any week
        </div>
        <div className="text-sm pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block">add guest</div>
          <div className="p-2 bg-[#ff5964] rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
