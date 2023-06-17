import { dashTableData } from "../../utils/content";
import { Table } from "../../components/index";

const Products = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Products</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Products;
