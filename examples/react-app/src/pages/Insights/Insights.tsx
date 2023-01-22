import React from 'react'
import './tableau-viz.d.ts';



const Insights = () => {
  return (
    <div style={{ display: 'block', width: '1100px', margin: '10px auto' }}>
      <h1>Dashboard</h1>
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/RacetoAlaska/RacetoAlaska"
        device="desktop"
        width="1600"
        height="1200"
        toolbar="bottom"
        hide-tabs
      ></tableau-viz>
    </div>
  )
}

export default Insights
