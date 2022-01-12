import React from 'react'

export default function Counter({ count, onDecrement, onIncrement }) {
  console.log(count)
  const countnum = count.toJSON().count
  return (
    <div class="App">
      <h1>Counter</h1>
      <div class="d-flex flex-row bd-highlight mb-3 App">
        <button onClick={() => onDecrement()}>-</button>
        <h2>{countnum}</h2>
        <button onClick={() => onIncrement()}>+</button>
      </div>
    </div>
  )
}
