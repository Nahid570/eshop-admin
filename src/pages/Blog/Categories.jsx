import { Table } from "../../components";
import { dashTableData } from "../../utils/content";

const Categories = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Blog Categories</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Categories;
