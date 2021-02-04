import React, {useState} from 'react';
import FAQTile from './FAQTile';

const FAQIndex = props => {
  const [selectedId, setSelectedId] = useState(null)

  let questions = props.data.map(question => {

    const handleClickFunction = () => {
      if (question.id === selectedId) {
        setSelectedId(null)
      } else {
        setSelectedId(question.id)
      }
    }

    let selectedStatus = false

    if (question.id === selectedId) {
      selectedStatus = true
    }

    let answer
    if (selectedStatus === true) {
      answer = question.answer
    }

    return(
      <FAQTile
        key={question.id}
        question={question.question}
        answer={answer}
        handleClickFunction={handleClickFunction}
        selectedStatus={selectedStatus}
      />
    )
  })

  return (
    <div>
      {questions}
    </div>
  )
}

export default FAQIndex;
