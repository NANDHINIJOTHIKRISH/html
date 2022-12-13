import React from 'react'


export default function Listex() {
    const cars=[
      {model:"nano",id:1},
      {model:"800",id:2},
      {model:"scorpioo",id:3}];
return (
      <h1>{cars.map(
      (val) => <li key={val.id}>{val.model}</li>
      )}
      </h1>
    )
  }

