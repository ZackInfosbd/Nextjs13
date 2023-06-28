import React from 'react';
import ReactDOM from 'react-dom/client';
import Testing from './testing';

function Greeting() {
  //   return <h1>this is my first component</h1>;

  return (
    <>
      <h3>
        <Testing />
      </h3>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
