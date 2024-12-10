import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '테스트 결과 | 중국 고전 성격 테스트'
}

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}