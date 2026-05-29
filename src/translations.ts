const languages = ['de', 'en'] as const
export type language = typeof languages[number]

export function getBrowserLanguage(): language {
  for (const lang of languages) {
    if (navigator.language.startsWith(lang)) return lang
  }
  return 'en'
}

export const displayNames: Record<language, string> = {
  de: 'Deutsch',
  en: 'English',
}

export const ui: Record<string, Record<language, string>> = {
  tagline:      { en: 'Do you know your pride flags?',                                de: 'Kennst du deine Pride-Flaggen?' },
  intro:        { en: "You'll see {n} flags — pick the right name from 4 options.",   de: 'Du wirst {n} Flaggen sehen — wähle den richtigen Namen aus 4 Optionen.' },
  startBtn:     { en: 'Start Quiz',                                                   de: 'Quiz starten' },
  question:     { en: 'What flag is this?',                                           de: 'Welche Flagge ist das?' },
  learnMore:    { en: 'Learn more',                                                   de: 'Mehr erfahren' },
  complete:     { en: 'Quiz Complete!',                                               de: 'Quiz abgeschlossen!' },
  playAgain:    { en: 'Play Again',                                                   de: 'Nochmal spielen' },
  close:        { en: 'close',                                                        de: 'schließen' },
  viewOnGithub: { en: 'View on GitHub',                                               de: 'Auf GitHub ansehen' },
  madeBy:       { en: 'Made by',                                                      de: 'Erstellt von' },
}
