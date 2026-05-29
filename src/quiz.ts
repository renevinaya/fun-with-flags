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

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

function rgbDistance(a: [number, number, number], b: [number, number, number]): number {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2)
}

function extractSvgColors(svg: string): string[] {
  return [...new Set(
    [...svg.matchAll(/fill="(#[0-9A-Fa-f]{6})"/g)]
      .map(m => m[1])
      .filter((c): c is string => c !== undefined)
  )]
}

function getFlagColors(flag: Flag): string[] {
  switch (flag.type) {
    case 'stripes': return flag.colors
    case 'stripes-proportional': return flag.colors
    case 'stripes-with-circle': return [flag.background, flag.circleColor]
    case 'svg': return extractSvgColors(flag.svg)
  }
}

function flagSimilarity(a: Flag, b: Flag): number {
  const rgbA = getFlagColors(a).map(hexToRgb)
  const rgbB = getFlagColors(b).map(hexToRgb)
  return rgbA.reduce<number>((sum, ca) => {
    return sum + Math.min(...rgbB.map(cb => rgbDistance(ca, cb)))
  }, 0) / rgbA.length
}

// Precomputed once at module load: for each flag, others sorted from most to least similar
const SIMILARITY_MAP = new Map<string, Flag[]>(
  FLAGS.map(flag => {
    const sorted = FLAGS
      .filter(f => f.id !== flag.id)
      .sort((a, b) => flagSimilarity(flag, a) - flagSimilarity(flag, b))
    return [flag.id, sorted] as [string, Flag[]]
  })
)

export function buildGame(): Question[] {
  const pool = shuffle([...FLAGS])
  const correct = pool.slice(0, QUESTIONS_PER_GAME)

  return correct.map(correctFlag => {
    const similar = SIMILARITY_MAP.get(correctFlag.id) ?? []
    // Pick 3 distractors randomly from the 6 most visually similar flags
    const distractors = shuffle([...similar.slice(0, 6)]).slice(0, CHOICES_PER_QUESTION - 1)
    const choices = shuffle([correctFlag, ...distractors])
    return { correctFlag, choices }
  })
}
