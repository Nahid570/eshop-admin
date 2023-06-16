/* eslint-disable react/prop-types */

const DashCard = ({ cardContent }) => {
  return (
    <div className="min-w-[300px] grow flex flex-col gap-8 p-4 shadow-md bg-white1 rounded-md text-slate-700">
      <div className="flex justify-between items-center">
        <p>{cardContent.title}</p>
        <cardContent.icon className="cursor-pointer" />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-3xl">${cardContent.amount}</p>
        <div className={`flex flex-col items-end`}>
          <div className="flex items-end">
            <span className={`${cardContent.color} text-2xl`}>
              {<cardContent.sellsIndicator />}
            </span>
            <span className="ml-2">{cardContent.text}%</span>
          </div>
          <small>{cardContent.predict}</small>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
