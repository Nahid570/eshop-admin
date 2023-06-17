import { dashCardData, dashTableData } from "../utils/content";
import { BarChart, DashCard, Table } from "../components/index";

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
      <div className="mt-5">
        <p className="text-2xl text-slate-700 font-bold">Recent Orders</p>
        <Table tableData={dashTableData} />
      </div>
    </>
  );
};

export default Dashboard;
