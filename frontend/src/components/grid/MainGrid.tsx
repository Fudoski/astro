import { ReactNode } from "react";

export default function MainGrid({
  children,
  px,
  py,
}: {
  children: ReactNode;
  px?: string;
  py?: string;
}) {
  return (
    <div
      className={`container mx-auto grid grid-cols-12 gap-2 
        ${px ? px : "px-[124px]"} 
        ${py ? py : ""}`}
    >
      {children}
    </div>
  );
}
