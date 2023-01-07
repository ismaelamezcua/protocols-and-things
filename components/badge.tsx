import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center bg-rose-100 px-2 py-1 text-rose-600 font-semibold rounded">
      <span className="h-2 w-2 bg-rose-600 rounded-full mr-2"></span>
      {children}
    </div>
  );
}
