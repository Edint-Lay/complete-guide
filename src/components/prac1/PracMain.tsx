import keyConceptsImage from '../../assets/images/key-concepts.png'
import componentsImage from '../../assets/images/components.png'
import stateImage from '../../assets/images/state.png'
import eventsImage from '../../assets/images/events.png'

import PracItem from './PracItem'
import { styled } from 'styled-components'
import PracHeader from './PracHeader'

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
]

function PracMain() {
  return (
    <StyledPracMainBox>
      <PracHeader keyConceptsImage={keyConceptsImage}></PracHeader>
      <StyledPracBox>
        <PracItem concepts={concepts} />
      </StyledPracBox>
    </StyledPracMainBox>
  )
}

export default PracMain

const StyledPracMainBox = styled.div`
display: grid;
background-color: rgba(0, 0, 128, 0.8); ;
max-height: 100%;
height: 874px;
max-width: 100%;
width: 1360px;
`

const StyledPracBox = styled.div`
  display: flex;
  justify-content: center;
`
