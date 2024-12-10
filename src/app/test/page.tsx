import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '테스트 안내 | 중국 고전 성격 테스트'
}

export default function TestIntro() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="text-2xl font-bold text-center mb-6">테스트 안내</h1>
      <div className="space-y-4 mb-8">
        <p className="text-gray-600">• 약 3분이 소요됩니다</p>
        <p className="text-gray-600">• 각 질문에 솔직하게 답변해주세요</p>
        <p className="text-gray-600">• 정답은 없으니 편하게 응답해주세요</p>
      </div>
      <Link 
        href="/test/questions"
        className="block w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
      >
        시작하기
      </Link>
    </div>
  )
}