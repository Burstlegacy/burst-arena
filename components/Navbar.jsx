import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-[#111]">
      <h1 className="text-red-500">🔥 Burst Arena</h1>

      <div className="flex gap-4">
        Play
        Tournaments
        Leaderboard
        Settings
      </div>
    </div>
  );
}
