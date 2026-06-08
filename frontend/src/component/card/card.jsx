import React from 'react';

const Card = ({ title, highlightedValues }) => {
  const filteredValues = highlightedValues
//   console.log( "this is filtered value" , filteredValues);

  return (
    <>
      <div className='card-main'>
      <div><h1 style={{ backgroundColor: "green" }}>{title}</h1></div>
      <div className='border-2 border-green-500 bg-green-100 p-2 sm:p-4 rounded-md gap-2 grid grid-cols-3'>
        <div className='bg-green-500 text-center rounded-md font-bold col-span-2'>Test</div>
        <div className='bg-green-500 text-center rounded-md font-bold sm:min-w-14'>Result</div>
        { filteredValues.map((highlightedValue, index) => (
          <React.Fragment key={index}>
            <div className='bg-green-300 pl-1 rounded-md col-span-2'>{highlightedValue.testName}</div>
            <div className='bg-green-300 pl-1 rounded-md sm:min-w-14'>{highlightedValue.testValue}</div>
          </React.Fragment>
        ))}
      </div>
      </div>
    </>
  );
};

export default Card;
