import React from 'react';

function Result({ result }) {
  return (
    <div>
      <h2>Home</h2>
      <div>
        {result.map((item, id) => (
          <div key={id}>
            {item.original_title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
