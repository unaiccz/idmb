import React from 'react';
import Card from './Card';

function Result({ result }) {
  return (
    <div>
      <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {result.map((item, id) => (
          <div>
            <Card key={item.id} item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
