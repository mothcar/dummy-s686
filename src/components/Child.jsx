import React from 'react'

const Child = (props) => {
  console.log(props);

  return (
    <>
      {...props.toChild}
      
      {props.toChild.map((item, index) => (
        <div key={index}>
          <div>{item}</div>
        </div>
      ))}
    </>
  )
}

export default Child