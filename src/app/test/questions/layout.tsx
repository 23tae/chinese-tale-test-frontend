import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '테스트 진행 중 | 중국 고전 성격 테스트'
}

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}