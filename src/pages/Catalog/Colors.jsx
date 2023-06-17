import { dashTableData } from "../../utils/content";
import { Table } from "../../components/index";

const Colors = () => {
  return (
    <div>
      <p className="text-2xl text-slate-700 font-bold">Colors</p>
      <Table tableData={dashTableData} />
    </div>
  );
};

export default Colors;
