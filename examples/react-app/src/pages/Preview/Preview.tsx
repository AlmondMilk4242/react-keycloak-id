import * as React from 'react'

const Preview = () => {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        display: 'block',
        width: '800px',
        margin: '10px auto',
      }}
    >
      <h1>Hello</h1>
      <div
        style={{
          backgroundColor: 'green',
          display: 'block',
          width: '800px',
          margin: '10px auto',
        }}
      >
        <h1>World</h1>
      </div>
    </div>
  )
}

export default Preview
