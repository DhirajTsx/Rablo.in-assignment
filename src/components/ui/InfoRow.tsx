interface InfoRowProps {
  label: string;
  value: string | number;
}

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div>
      <span className="block text-xs text-gray-400 mb-0.5">{label}</span>
      <span className="text-sm font-semibold text-gray-800 break-words">{value}</span>
    </div>
  );
}