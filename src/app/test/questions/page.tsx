'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Question as QuestionType } from '@/lib/types'
import { fetchQuestions } from '@/lib/api'
import { useTestStore } from '@/lib/store'
import Question from '@/components/Question'
import Progress from '@/components/Progress'

export default function Questions() {
  const router = useRouter()
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { answers, setAnswer } = useTestStore()

  useEffect(() => {
    fetchQuestions().then(setQuestions)
  }, [])

  const handleSelect = (choice: number) => {
    setAnswer(questions[currentIndex].id.toString(), choice)
    
    if (currentIndex === questions.length - 1) {
      router.push('/test/result')
    } else {
      setCurrentIndex(prev => prev + 1)
    }
  }

  if (questions.length === 0) {
    return <div className="p-8 text-center">Loading...</div>
  }

  const currentQuestion = questions[currentIndex]

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <Progress current={currentIndex + 1} total={questions.length} />
      <Question
        content={currentQuestion.content}
        choices={currentQuestion.choices}
        onSelect={handleSelect}
        selectedChoice={answers[currentQuestion.id]}
      />
    </div>
  )
}