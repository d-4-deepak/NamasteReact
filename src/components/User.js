import React, { useState } from 'react'

const User = (props) => {
    const {name} =props;
    const[count] =useState(0);
    const [count2] =useState(0);
  return (
    (
        <div className="user-card">
          <h2>Count : {count}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : Hoshiarpur</h3>
            <h4>contact : dg9345gmail.com</h4>
        </div>
    )
  )
}

export default User
