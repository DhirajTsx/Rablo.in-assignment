type Props = {
  userID: string | null;
  accCreated: string | null;
};

export default function UserCard({ userID, accCreated }: Props) {
  return (
    <div className="bg-white  text-black  rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-2">Account Info</h2>

      <p className="text-sm">
        <span>UserID:</span> {userID}
      </p>

      <p className="text-sm mt-1">
        <span>Role:</span> Manager
      </p>

      <p className="text-sm mt-1">
        <span>Profile Status:</span>{" "}
        {accCreated === "1" ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
}
