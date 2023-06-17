import { dashTableData } from "../../utils/content";
import { Table } from "../../components/index";

const Coupons = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Coupons</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Coupons;
