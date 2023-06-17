import { dashTableData } from "../../utils/content";
import { Table } from "../../components/index";

const Brands = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Brands</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Brands;
