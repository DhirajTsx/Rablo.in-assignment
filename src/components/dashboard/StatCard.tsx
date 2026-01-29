type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white text-black rounded-xl p-4 shadow flex flex-col">
      <span className="text-xs">{title}</span>
      <span className="text-xl font-bold mt-1">{value}</span>
    </div>
  );
}
