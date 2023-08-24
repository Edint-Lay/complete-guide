import { styled } from 'styled-components'

interface PracHeaderProps {
  keyConceptsImage: string
}

function PracHeader(props: PracHeaderProps) {
  return (
    <StyledPracHeader>
      <StyledheaderImage src={props['keyConceptsImage']} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </StyledPracHeader>
  )
}

export default PracHeader

const StyledheaderImage = styled.img`
    width: 100px;
`

const StyledPracHeader = styled.header`
  display: grid;
  justify-content: center;
  padding: 40px 20px;
  margin: auto;

`
