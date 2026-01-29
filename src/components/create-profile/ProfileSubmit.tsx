"use client";

type Props = {
  onSubmit: () => void;
  loading?: boolean;
};

export default function ProfileSubmit({ onSubmit, loading }: Props) {
  return (
    <button
      disabled={loading}
      onClick={onSubmit}
      className="bg-lime-400 disabled:opacity-60 text-black py-3 rounded-xl mt-4 w-full font-semibold"
    >
      {loading ? "Submitting..." : "Submit Profile"}
    </button>
  );
}
