export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
        <p className="text-gray-500 font-medium">Loading Dashboard...</p>
      </div>
    </div>
  );
}