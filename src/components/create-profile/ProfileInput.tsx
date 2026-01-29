type Props = {
  placeholder: string;
  type?: "text" | "tel" | "date";
};

export default function ProfileInput({ placeholder, type = "text" }: Props) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
    />
  );
}
