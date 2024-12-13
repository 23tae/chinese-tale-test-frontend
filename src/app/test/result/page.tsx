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
      await navigator.clipboard.writeText(`${window.location.origin}`);
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
  
        const canvas = await html2canvas(element, {
          useCORS: true
        });
        const dataUrl = canvas.toDataURL('image/png');
        
        const now = new Date();
        const formattedDate = now.toISOString().replace(/[-:T.]/g, '').slice(0, 12);    
        
        const link = document.createElement('a');
        link.download = `중국고전테스트_${formattedDate}.png`;
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
            <img
            src={`${IMAGE_BASE_URL}${result.character.image_url}`}
            alt={result.character.name}
            width={300}
            height={300}
            className="rounded-lg shadow-md"
            crossOrigin="anonymous"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">{result.character.name}</h1>
          <p className="text-gray-600 text-lg">{result.character.work}</p>
        </div>

        <div className="space-y-6">
          {/* 인물 설명 */}
          <div className="prose max-w-none">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {result.character.description}
            </p>
          </div>

          {/* 기본 해석 */}
          {result.description && (
            <div className="relative bg-blue-50 p-6 rounded-lg">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-300 rounded-l-lg"></div>
              <div className="pl-4">
                <div className="text-blue-800 font-bold mb-2">기본 해석</div>
                <p className="text-gray-800 leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          )}
          
          {/* 현대적 해석 */}
          {result.modern_interpretation && (
            <div className="relative bg-green-50 p-6 rounded-lg">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-300 rounded-l-lg"></div>
              <div className="pl-4">
                <div className="text-green-800 font-bold mb-2">현대적 해석</div>
                <p className="text-gray-800 leading-relaxed">
                  {result.modern_interpretation}
                </p>
              </div>
            </div>
          )}

          {/* 조언 */}
          {result.advice && (
            <div className="relative bg-red-50 p-6 rounded-lg">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-300 rounded-l-lg"></div>
              <div className="pl-4">
                <div className="text-red-800 font-bold mb-2">조언</div>
                <p className="text-gray-800 leading-relaxed">
                  {result.advice}
                </p>
              </div>
            </div>
          )}
        </div>

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