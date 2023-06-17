/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Table = ({ tableData }) => {
  return (
    <div className="relative w-[300px] xs:w-[400px] sm:w-[100%] overflow-x-auto shadow-md rounded-md mt-5 bg-white1">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            {tableData.head.map((item) => (
              <th scope="col" className="px-6 py-3" key={item.id}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.body.map((item) => (
            <tr key={item.id}>
              <th scope="row" className="px-6 py-4 font-medium text-slate-700">
                {item.name}
              </th>
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.product}</td>
              <td className="px-6 py-4">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
