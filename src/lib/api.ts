import { Question, TestResult } from './types'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
export const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '')

export async function fetchQuestions(): Promise<Question[]> {
  const response = await fetch(`${API_BASE_URL}/questions`);
  if (!response.ok) throw new Error('Failed to fetch questions');
  return response.json();
}

export async function submitAnswers(answers: Record<string, number>): Promise<TestResult> {
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers }),
  });
  if (!response.ok) throw new Error('Failed to analyze answers');
  return response.json();
}