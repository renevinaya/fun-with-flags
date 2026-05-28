import { FLAGS, type Flag } from './flags.ts'

export const QUESTIONS_PER_GAME = 10
export const CHOICES_PER_QUESTION = 4

export interface Question {
  correctFlag: Flag
  choices: Flag[]
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function buildGame(): Question[] {
  const pool = shuffle([...FLAGS])
  const correct = pool.slice(0, QUESTIONS_PER_GAME)

  return correct.map(correctFlag => {
    const distractors = shuffle(
      FLAGS.filter(f => f.id !== correctFlag.id)
    ).slice(0, CHOICES_PER_QUESTION - 1)

    const choices = shuffle([correctFlag, ...distractors])
    return { correctFlag, choices }
  })
}