import './LectureHistory.css'

function LectureHistory() {
  return (
    <div>
      <h1>강의 내용 정리</h1>
      <div className='list-box'>
        <ul className="list-1">
          <li>
            Apps에서 소문자로 구성된 요소는 HTML에 내장된 고유한 요소로 인식한다.<br />
            대문자로 구성된 요소는 개발자가 정의한 요소로 인식한다.
          </li>
          <li>
            기술적으로 class라고 써도 작동하지만 <strong>className</strong>이 공식적인 사용이다.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LectureHistory
