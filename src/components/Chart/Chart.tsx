/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from 'styled-components'
import ChartBar from './ChartBar'

import { IChildChartDataPoints } from '../../models/interfaces/charts/i.child.chart'

const Chart = (props: IChildChartDataPoints) => {
  const dataPointValues = props['dataPoints'].map(
    (dataPoint) => dataPoint['value'],
  )
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <StyledChart>
      {props['dataPoints'].map((dataPoint: any) => (
        <ChartBar
          key={dataPoint['label']}
          value={dataPoint['value']}
          maxValue={totalMaximum}
          label={dataPoint['label']}
        />
      ))}
    </StyledChart>
  )
}

export default Chart

const StyledChart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`
