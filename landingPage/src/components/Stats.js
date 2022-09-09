import React from 'react';

const bankProfileStatistics = [
  {
    id: 1,
    impactNumber: '3800',
    data: 'Users Active',
  },
  {
    id: 2,
    impactNumber: '230',
    data: 'Trusted by Company',
  },
  {
    id: 3,
    impactNumber: '$230',
    data: 'Transactions',
  },
];
const Stats = () => {
  const renderBankStats = bankProfileStatistics.map((bankStat) => {
    return (
      <div
        className="flex w-full md:w-1/4 justify-center gap-9  items-center my-10 md:mr-10"
        key={bankStat.id}
      >
        <span className=" mr-2 text-5xl font-bold w-md">
          {bankStat.impactNumber}+
        </span>
        <span className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-100">
          {bankStat.data}
        </span>
      </div>
    );
  });
  return (
    <div className="w-11/12  justify-between flex flex-col md:flex-row md:items-center   ">
      {renderBankStats}
    </div>
  );
};

export default Stats;
