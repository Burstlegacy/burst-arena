import LeaderboardCard from "@/components/LeaderboardCard";

export default function Leaderboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-red-500">
        Championship Rankings
      </h1>

      <div className="mt-6 space-y-3">
        <LeaderboardCard name="PlayerX" rank="Champion" />
        <LeaderboardCard name="PlayerY" rank="Gold" />
      </div>
    </div>
  );
}
