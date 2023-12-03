import { dataMenu } from "@/data";
import Link from "next/link";
import React from "react";

export default function DesktopLinks() {
  return (
    <>
      <div className="hidden justify-between gap-4  rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2 md:flex">
        {dataMenu.map((el, index) => (
          <React.Fragment key={index}>
            <Link
              href={el.href}
              className="flex h-auto w-auto cursor-pointer flex-row items-center "
            >
              <p className="text-base font-semibold tracking-wider text-white">
                {el.name}
              </p>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
