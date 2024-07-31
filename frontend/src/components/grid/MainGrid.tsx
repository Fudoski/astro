import { ReactNode } from "react";

export default function MainGrid({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-[124px] grid grid-cols-12 gap-2">
      {children}
    </div>
  );
}
