import { dashTableData } from "../../utils/content";
import { Table } from "../../components/index";

const ProductCategories = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Product Categories</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default ProductCategories;












