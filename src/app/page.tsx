import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '중국 고전 성격 테스트'
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-8">나와 닮은 중국 고전 속 인물 찾기</h1>
      <p className="text-gray-600 mb-8 text-center">
        12개의 질문을 통해 당신과 가장 잘 어울리는 인물을 찾아보세요
      </p>
      <Link 
        href="/test"
        className="block w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
      >
        테스트 시작하기
      </Link>
    </div>
  )
}
