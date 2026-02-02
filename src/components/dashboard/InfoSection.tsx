import { ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  children: ReactNode;
}

export default function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
      <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 border-b pb-2">
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}