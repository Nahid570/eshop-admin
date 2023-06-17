import { Table } from "../components/index";
import { dashTableData } from "../utils/content";

const Enquires = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Customer Enquries</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Enquires;
