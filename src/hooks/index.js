import { useState } from 'react'

export function useIsAnswer() {
  const [isAnswer, setIsAnswer] = useState(false)

  function reAnswer() {
    setIsAnswer(isAnswer === false)
  }

  return [isAnswer, reAnswer]
}
