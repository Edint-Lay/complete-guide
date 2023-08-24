import styled from 'styled-components'

interface PracItemProps {
  concepts: {
    title: string
    image: string
    description: string
  }[]
}
function PracItem(props: PracItemProps) {
  const pracItem = props['concepts'].map((concept) => {
    return (
      <StyledPracItem id="concepts">
        <StyledImage src={concept['image']} alt={concept['title']} />
        <h2>{concept['title']}</h2>
        <p>{concept['description']}</p>
      </StyledPracItem>
    )
  })
  return <div>{pracItem}</div>
}

export default PracItem

const StyledImage = styled.img`
  max-width: 100%;
  width: 100px;
`

const StyledPracItem = styled.ul`
  padding: 40px 20px;
  margin: 20px;
  width: 200px;
  display: inline-block;
  white-space: normal;
  transition: box-shadow 1s ease-in-out; /* 호버링 효과를 위한 트랜지션 설정 */
  font-size: 12px;
  color: white;
  background-color: #4B0082;
  position: relative;
  &:hover {
    box-shadow: 0px 4px 8px purple; /* 호버링 시 변경될 스타일 */
  }

  &:before {
    content: attr(data-text); /* 텍스트 내용을 가상 요소의 내용으로 설정 */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background-image: linear-gradient(to right, transparent, transparent, #9400D3, transparent, transparent);
    background-clip: text;
    -webkit-background-clip: text;
    z-index: -1; /* 가상 요소를 텍스트 뒤로 보내기 */
  }
`
