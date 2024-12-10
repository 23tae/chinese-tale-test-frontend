'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TestResult } from '@/lib/types'
import { submitAnswers } from '@/lib/api'
import { useTestStore } from '@/lib/store'
import { IMAGE_BASE_URL } from '@/lib/api'
import ResultActions from '@/components/result/ResultActions'
import html2canvas from 'html2canvas';


export default function Result() {
  const router = useRouter()
  const [result, setResult] = useState<TestResult | null>(null)
  const { answers, resetAnswers } = useTestStore()

  useEffect(() => {
    if (Object.keys(answers).length === 0) {
      router.replace('/test')
      return
    }

    submitAnswers(answers)
      .then(setResult)
      .catch(console.error)
  }, [answers, router])

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/test`);
      alert('링크가 복사되었습니다!')
    } catch (err) {
      console.error('링크 복사 실패:', err)
    }
  }

  const handleRetake = () => {
    resetAnswers()
    router.replace('/test')
  }

    const handleDownload = async () => {
      try {
        const element = document.getElementById('result-content');
        if (!element) return;
  
        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL('image/png');
        
        const link = document.createElement('a');
        link.download = `${result?.character.name}_결과.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('이미지 저장 실패:', err);
        alert('이미지 저장에 실패했습니다.');
      }
    };

  if (!result) {
    return <div className="p-8 text-center">결과를 분석하고 있습니다...</div>
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div id="result-content" className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image 
              src={`${IMAGE_BASE_URL}${result.character.image_url}`}
              alt={result.character.name}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">{result.character.name}</h1>
          <p className="text-gray-600 text-lg">{result.character.work}</p>
        </div>

        <div className="space-y-6">
          {/* 기본 설명 */}
          <div className="prose max-w-none">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {result.description}
            </p>
          </div>

          {/* 현대적 해석 */}
          {result.modern_interpretation && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-blue-900">현대적 해석</h2>
              <p className="text-gray-800 leading-relaxed">
                {result.modern_interpretation}
              </p>
            </div>
          )}

          {/* 조언 */}
          {result.advice && (
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-green-900">당신을 위한 조언</h2>
              <p className="text-gray-800 leading-relaxed">
                {result.advice}
              </p>
            </div>
          )}
        </div>

        {/* ResultActions 컴포넌트로 교체 */}
        <ResultActions 
          mediaUrl={result.character.media_url}
          onShare={handleShare}
          onRetake={handleRetake}
          onDownload={handleDownload}
        />
      </div>
    </div>
  )
}