import { create } from 'zustand'

type TestStore = {
  answers: Record<string, number>;
  setAnswer: (questionId: string, choice: number) => void;
  resetAnswers: () => void;
}

export const useTestStore = create<TestStore>((set) => ({
  answers: {},
  setAnswer: (questionId, choice) => 
    set((state) => ({
      answers: { ...state.answers, [questionId]: choice }
    })),
  resetAnswers: () => set({ answers: {} }),
}))