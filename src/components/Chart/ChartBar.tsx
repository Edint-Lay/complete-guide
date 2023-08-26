/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from 'styled-components'

import { IChildChartBar } from '../../models/interfaces/charts/i.child.chart'

const ChartBar = (props: IChildChartBar) => {
  let barFillHeight = '0%'

  if (props['maxValue'] > 0) {
    barFillHeight = Math.round((props.value / props['maxValue']) * 100) + '%'
  }
  return (
    <StyledChartBar>
      <StyledChartBarInner>
        <StyledChratBarFill
          style={{
            height: barFillHeight,
            backgroundColor: 'red',
          }}
        ></StyledChratBarFill>
        <StyledChartBarLabel>{props['label']}</StyledChartBarLabel>
      </StyledChartBarInner>
    </StyledChartBar>
  )
}

export default ChartBar

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StyledChratBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`

const StyledChartBarLabel = styled.label`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`
