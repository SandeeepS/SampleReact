import React from 'react'

function Counter(props) {
    const {title,count} = props;
  return (
    <div>
       <h3>{title} {count}</h3>
    </div>
  )
}

export default Counter
