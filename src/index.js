import React from 'react';
import ReactDOM from 'react-dom';

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/1/')
  .then((body) => {
    console.log(body);
  });

ReactDOM.render(<div />, document.getElementById('root'));
