import { API_BASE_URL } from '@/config';

export type Question = {
  id: number;
  content: string;
  choices: string[];
  trait_type: string;
}

export interface Character {
  id: number
  name: string
  work: string
  description: string
  image_url: string
  media_url: string
}

export interface TestResult {
  character: Character
  description: string
  modern_interpretation?: string
  advice?: string
}