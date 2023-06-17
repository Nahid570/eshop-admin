import { dashTableData } from "../utils/content";
import { Table } from "../components/index";

const Orders = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Orders</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Orders;
