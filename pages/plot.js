import plotly from 'plotly.js/dist/plotly';
import createPlotComponent from 'react-plotly.js/factory';
import { useEffect } from 'react'

const Plot = createPlotComponent(plotly);

var data1 = [];
for (var i = 0; i < 100; i++) {
  data1[i] = Math.floor(Math.random() * 18)
}

var data2 = [];
for (var i = 0; i < 100; i++) {
  data2[i] = Math.floor(Math.random() * 18)
}

// plot component
export default () => (
  <div>
    <Plot
      data={[
        {
          type: 'histogram',
          // TODO update this to the dataset
          x: data1,
        }
      ]}

      layout={{
        width: 800,
        height: 600,
        title: 'Cock Score Distrobution'
      }}
    />
  </div>
)
