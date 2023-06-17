import { Table } from "../../components/index";
import { dashTableData } from "../../utils/content";

const Blogs = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Blogs</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Blogs;
