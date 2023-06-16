import { dashCardData } from "../utils/content";
import { BarChart, DashCard } from "../components/index";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-6 flex-wrap">
        {dashCardData.map((card) => (
          <DashCard key={card.id} cardContent={card} />
        ))}
      </div>
      <div className="mt-5">
        <p className="text-2xl text-slate-700 font-bold">Income Stats</p>
        <BarChart />
      </div>
    </>
  );
};

export default Dashboard;
