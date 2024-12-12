import { Question, TestResult } from './types'
import { config } from '@/config';


export const IMAGE_BASE_URL = config.api.baseUrl.replace('/api', '')

export async function fetchQuestions(): Promise<Question[]> {
  const response = await fetch(`${config.api.baseUrl}/questions`);
  if (!response.ok) throw new Error('Failed to fetch questions');
  return response.json();
}

export async function submitAnswers(answers: Record<string, number>): Promise<TestResult> {
  const response = await fetch(`${config.api.baseUrl}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers }),
  });
  if (!response.ok) throw new Error('Failed to analyze answers');
  return response.json();
}