import type { language } from './translations.ts'

export type FlagType = 'stripes' | 'stripes-proportional' | 'stripes-with-circle' | 'svg'

interface FlagBase {
  id: string
  name: Record<language, string>
  description: Record<language, string>
  type: FlagType
}

export interface StripesFlag extends FlagBase {
  type: 'stripes'
  colors: string[]
}

export interface StripesProportionalFlag extends FlagBase {
  type: 'stripes-proportional'
  colors: string[]
  proportions: number[]
}

export interface StripesWithCircleFlag extends FlagBase {
  type: 'stripes-with-circle'
  background: string
  circleColor: string
}

export interface SvgFlag extends FlagBase {
  type: 'svg'
  svg: string
}

export type Flag = StripesFlag | StripesProportionalFlag | StripesWithCircleFlag | SvgFlag

export const FLAGS: Flag[] = [
  {
    id: 'rainbow',
    name: { en: 'Rainbow (LGBT+)', de: 'Regenbogen (LGBT+)' },
    description: {
      en: 'Designed by Gilbert Baker in 1978, the rainbow flag is the most recognized symbol of LGBTQ+ pride. The six stripes originally represented life, healing, sunlight, nature, harmony, and spirit.',
      de: 'Entworfen von Gilbert Baker im Jahr 1978, ist die Regenbogenfahne das bekannteste Symbol der LGBTQ+-Pride. Die sechs Streifen standen ursprünglich für Leben, Heilung, Sonnenlicht, Natur, Harmonie und Geist.',
    },
    type: 'stripes',
    colors: ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'],
  },
  {
    id: 'transgender',
    name: { en: 'Transgender', de: 'Transgender' },
    description: {
      en: 'Represents people whose gender identity differs from the sex they were assigned at birth. Light blue and pink reflect traditional gender colors; white represents those who are transitioning, non-binary, or intersex.',
      de: 'Repräsentiert Menschen, deren Geschlechtsidentität von dem bei der Geburt zugewiesenen Geschlecht abweicht. Hellblau und Rosa stehen für traditionelle Geschlechterfarben; Weiß steht für Menschen in der Transition, Nicht-Binäre oder Intersexuelle.',
    },
    type: 'stripes',
    colors: ['#55CDFC', '#F7A8B8', '#FFFFFF', '#F7A8B8', '#55CDFC'],
  },
  {
    id: 'bisexual',
    name: { en: 'Bisexual', de: 'Bisexuell' },
    description: {
      en: 'Represents people who experience attraction to more than one gender. Pink symbolizes same-gender attraction, blue represents attraction to different genders, and the lavender overlap blends both.',
      de: 'Repräsentiert Menschen, die Anziehung zu mehr als einem Geschlecht erleben. Rosa steht für Anziehung zum gleichen Geschlecht, Blau für Anziehung zu anderen Geschlechtern, und die Lavendel-Überlappung verbindet beide.',
    },
    type: 'stripes-proportional',
    colors: ['#D60270', '#9B4F96', '#0038A8'],
    proportions: [2, 1, 2],
  },
  {
    id: 'nonbinary',
    name: { en: 'Non-Binary', de: 'Nicht-Binär' },
    description: {
      en: 'Represents people whose gender identity does not fit within the binary of male or female. Yellow stands for genders outside the binary, white for all genders, purple for mixed genders, and black for agender identity.',
      de: 'Repräsentiert Menschen, deren Geschlechtsidentität nicht in das Binärsystem von männlich oder weiblich passt. Gelb steht für Geschlechter jenseits des Binärsystems, Weiß für alle Geschlechter, Lila für gemischte Geschlechter und Schwarz für Agender-Identität.',
    },
    type: 'stripes',
    colors: ['#FCF434', '#FFFFFF', '#9C59D1', '#2D2D2D'],
  },
  {
    id: 'asexual',
    name: { en: 'Asexual', de: 'Asexuell' },
    description: {
      en: 'Represents people who experience little or no sexual attraction to others. Black symbolizes asexuality, grey the asexual spectrum, white non-asexual partners and allies, and purple community unity.',
      de: 'Repräsentiert Menschen, die wenig oder keine sexuelle Anziehung erleben. Schwarz symbolisiert Asexualität, Grau das asexuelle Spektrum, Weiß nicht-asexuelle Partner und Verbündete, und Lila die Gemeinschaft.',
    },
    type: 'stripes',
    colors: ['#000000', '#A4A4A4', '#FFFFFF', '#810081'],
  },
  {
    id: 'pansexual',
    name: { en: 'Pansexual', de: 'Pansexuell' },
    description: {
      en: 'Represents people who experience attraction regardless of gender — sometimes described as attraction to people of all genders. Pink symbolizes women, yellow non-binary people, and blue men.',
      de: 'Repräsentiert Menschen, die Anziehung unabhängig vom Geschlecht erleben – manchmal als Anziehung zu allen Geschlechtern beschrieben. Rosa symbolisiert Frauen, Gelb nicht-binäre Menschen und Blau Männer.',
    },
    type: 'stripes',
    colors: ['#FF218C', '#FFD800', '#21B1FF'],
  },
  {
    id: 'lesbian',
    name: { en: 'Lesbian', de: 'Lesbisch' },
    description: {
      en: 'Represents women and non-binary people primarily attracted to women. The shades of orange, pink, red, and white reflect community, independence, love, and womanhood.',
      de: 'Repräsentiert Frauen und nicht-binäre Menschen, die hauptsächlich zu Frauen hingezogen sind. Die Schattierungen von Orange, Rosa, Rot und Weiß stehen für Gemeinschaft, Unabhängigkeit, Liebe und Weiblichkeit.',
    },
    type: 'stripes',
    colors: ['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B55690', '#A50062'],
  },
  {
    id: 'aromantic',
    name: { en: 'Aromantic', de: 'Aromantisch' },
    description: {
      en: 'Represents people who experience little or no romantic attraction, regardless of sexual orientation. Green tones symbolize the aromantic spectrum, white represents platonic connections, and grey and black represent the sexuality spectrum.',
      de: 'Repräsentiert Menschen, die wenig oder keine romantische Anziehung erleben, unabhängig von ihrer sexuellen Orientierung. Grüntöne symbolisieren das aromantische Spektrum, Weiß platonische Verbindungen, und Grau und Schwarz das Sexualitätsspektrum.',
    },
    type: 'stripes',
    colors: ['#3DA542', '#A8D379', '#FFFFFF', '#A9A9A9', '#000000'],
  },
  {
    id: 'genderfluid',
    name: { en: 'Genderfluid', de: 'Genderfluid' },
    description: {
      en: 'Represents people whose gender identity shifts or changes over time. Pink represents femininity, white all genders, purple a mix of genders, black all other genders, and blue masculinity.',
      de: 'Repräsentiert Menschen, deren Geschlechtsidentität sich im Laufe der Zeit verändert oder wechselt. Rosa steht für Weiblichkeit, Weiß für alle Geschlechter, Lila für eine Mischung, Schwarz für alle anderen Geschlechter und Blau für Männlichkeit.',
    },
    type: 'stripes',
    colors: ['#FF76A4', '#FFFFFF', '#C011D7', '#000000', '#2C3E80'],
  },
  {
    id: 'genderqueer',
    name: { en: 'Genderqueer', de: 'Genderqueer' },
    description: {
      en: 'Represents people who identify outside the binary gender system. Lavender blends traditional male and female colors, white symbolizes agender identity, and green (the inverse of purple) represents non-binary genders.',
      de: 'Repräsentiert Menschen, die sich außerhalb des binären Geschlechtersystems identifizieren. Lavendel verbindet traditionelle männliche und weibliche Farben, Weiß symbolisiert Agender-Identität, und Grün (das Gegenteil von Lila) steht für nicht-binäre Geschlechter.',
    },
    type: 'stripes',
    colors: ['#B899DF', '#FFFFFF', '#498022'],
  },
  {
    id: 'intersex',
    name: { en: 'Intersex', de: 'Intersex' },
    description: {
      en: 'Represents people born with sex characteristics that do not fit typical binary definitions of male or female. The yellow background and purple circle symbolize completeness and wholeness, free from gendered associations.',
      de: 'Repräsentiert Menschen, die mit Geschlechtsmerkmalen geboren wurden, die nicht in die typischen Binärdefinitionen von männlich oder weiblich passen. Der gelbe Hintergrund und der lila Kreis symbolisieren Vollständigkeit und Ganzheit, frei von geschlechtlichen Assoziationen.',
    },
    type: 'stripes-with-circle',
    background: '#FFD800',
    circleColor: '#7A00AC',
  },
  {
    id: 'agender',
    name: { en: 'Agender', de: 'Agender' },
    description: {
      en: 'Represents people who identify with no gender at all. Black and white symbolize the complete absence of gender, grey partial absence, and green represents non-binary identity.',
      de: 'Repräsentiert Menschen, die sich mit keinem Geschlecht identifizieren. Schwarz und Weiß stehen für das vollständige Fehlen von Geschlecht, Grau für das teilweise Fehlen, und Grün für nicht-binäre Identität.',
    },
    type: 'stripes',
    colors: ['#000000', '#BABABA', '#FFFFFF', '#B8F483', '#FFFFFF', '#BABABA', '#000000'],
  },
  {
    id: 'progress',
    name: { en: 'Progress Pride', de: 'Progress Pride' },
    description: {
      en: 'An evolution of the rainbow flag created by Daniel Quasar in 2018. The chevron adds light blue, pink, and white for transgender people, and brown and black for LGBTQ+ people of color and those lost to HIV/AIDS.',
      de: 'Eine Weiterentwicklung der Regenbogenfahne von Daniel Quasar aus dem Jahr 2018. Der Pfeil fügt Hellblau, Rosa und Weiß für Transgender-Menschen sowie Braun und Schwarz für LGBTQ+-Menschen of Color und die durch HIV/AIDS Verstorbenen hinzu.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="10" fill="#E40303"/><rect x="0" y="10" width="100" height="10" fill="#FF8C00"/><rect x="0" y="20" width="100" height="10" fill="#FFED00"/><rect x="0" y="30" width="100" height="10" fill="#008026"/><rect x="0" y="40" width="100" height="10" fill="#004DFF"/><rect x="0" y="50" width="100" height="10" fill="#750787"/><polygon points="0,15 15,30 0,45" fill="#FFFFFF"/><polygon points="0,10 20,30 0,50 0,45 15,30 0,15" fill="#FFAFC8"/><polygon points="0,5 25,30 0,55 0,50 20,30 0,10" fill="#74D7EE"/><polygon points="0,0 30,30 0,60 0,55 25,30 0,5" fill="#613915"/><polygon points="5,0 35,30 5,60 0,60 30,30 0,0" fill="#000000"/></svg>',
  },
  {
    id: 'demisexual',
    name: { en: 'Demisexual', de: 'Demisexuell' },
    description: {
      en: 'Represents demisexual people, who only experience sexual attraction after forming a strong emotional connection with someone. Part of the asexual spectrum — the black triangle and grey stripe link it to the asexual flag.',
      de: 'Repräsentiert demisexuelle Menschen, die sexuelle Anziehung erst nach dem Aufbau einer starken emotionalen Verbindung erleben. Teil des asexuellen Spektrums – das schwarze Dreieck und der graue Streifen verbinden sie mit der Asexuellen-Fahne.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#FFFFFF"/><rect x="0" y="20" width="100" height="20" fill="#7B7B7B"/><rect x="0" y="40" width="100" height="20" fill="#810081"/><polygon points="0,0 30,30 0,60" fill="#000000"/></svg>',
  },
  {
    id: 'polysexual',
    name: { en: 'Polysexual', de: 'Polysexuell' },
    description: {
      en: 'Represents people attracted to multiple genders, but not necessarily all of them. Unlike pansexuality, polysexuality involves attraction to some genders but not others. Pink, green, and blue represent different gender attractions.',
      de: 'Repräsentiert Menschen, die zu mehreren, aber nicht unbedingt allen Geschlechtern hingezogen sind. Im Gegensatz zur Pansexualität beinhaltet Polysexualität die Anziehung zu einigen, aber nicht allen Geschlechtern. Rosa, Grün und Blau stehen für verschiedene Geschlechteranziehungen.',
    },
    type: 'stripes',
    colors: ['#F61CB9', '#07D569', '#2C04F6'],
  },
  {
    id: 'polyamory',
    name: { en: 'Polyamory', de: 'Polyamorie' },
    description: {
      en: 'Represents ethical non-monogamy: maintaining multiple loving relationships with the full knowledge and consent of all involved. The gold pi symbol represents infinite love; blue represents openness, red passion, and black solidarity.',
      de: 'Repräsentiert ethische Nicht-Monogamie: mehrere Liebesbeziehungen mit vollem Wissen und Einverständnis aller Beteiligten zu führen. Das goldene Pi-Symbol steht für unendliche Liebe; Blau für Offenheit, Rot für Leidenschaft und Schwarz für Solidarität.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#0000FF"/><rect x="0" y="20" width="100" height="20" fill="#FF0000"/><rect x="0" y="40" width="100" height="20" fill="#000000"/><text x="50" y="38" text-anchor="middle" font-size="28" fill="#FFD700" font-family="serif">π</text></svg>',
  },
  {
    id: 'bear',
    name: { en: 'Bear Brotherhood', de: 'Bärenbruderschaft' },
    description: {
      en: 'Represents the bear community within gay and bisexual culture, typically men with larger, hairier bodies. The stripe colors reflect natural fur tones and celebrate body diversity within the LGBTQ+ community.',
      de: 'Repräsentiert die Bären-Gemeinschaft innerhalb der schwulen und bisexuellen Kultur, typischerweise Männer mit größeren, behaarteren Körpern. Die Streifenfarben spiegeln natürliche Fellfarben wider und feiern die Körpervielfalt in der LGBTQ+-Gemeinschaft.',
    },
    type: 'stripes',
    colors: ['#623804', '#D36400', '#FDD700', '#FFF5BE', '#FFFFFF', '#999999', '#000000'],
  },
  {
    id: 'leather',
    name: { en: 'Leather Pride', de: 'Leder-Pride' },
    description: {
      en: 'Represents the leather and BDSM communities within LGBTQ+ culture. Designed by Tony DeBlase in 1989, the blue and black stripes symbolize leather culture, and white represents purity of purpose.',
      de: 'Repräsentiert die Leder- und BDSM-Gemeinschaften innerhalb der LGBTQ+-Kultur. Von Tony DeBlase 1989 entworfen, symbolisieren die blauen und schwarzen Streifen die Lederkultur, und Weiß steht für die Reinheit der Absichten.',
    },
    type: 'stripes',
    colors: ['#000000', '#0038A8', '#000000', '#0038A8', '#FFFFFF', '#0038A8', '#000000', '#0038A8', '#000000'],
  },
  {
    id: 'two-spirit',
    name: { en: 'Two-Spirit', de: 'Zweigeistig' },
    description: {
      en: 'A term used by some Indigenous North American peoples for a person who holds both a masculine and feminine spirit, fulfilling a traditional third-gender or gender-variant role. The flag combines rainbow colors with white to honor this identity.',
      de: 'Ein Begriff einiger indigener Völker Nordamerikas für eine Person, die sowohl einen männlichen als auch einen weiblichen Geist trägt und eine traditionelle dritte oder geschlechtsvariante Rolle erfüllt. Die Fahne verbindet Regenbogenfarben mit Weiß.',
    },
    type: 'stripes',
    colors: ['#E40303', '#FF8C00', '#FFED00', '#FFFFFF', '#008026', '#004DFF', '#750787'],
  },
  {
    id: 'gay',
    name: { en: 'Gay Men', de: 'Schwul' },
    description: {
      en: 'Represents gay men and others who identify with the gay male community. The green and teal tones symbolize community and nature, white represents gender-neutral relationships, and the blue and purple shades represent the spectrum of masculinity.',
      de: 'Repräsentiert schwule Männer und andere, die sich mit der schwulen Gemeinschaft identifizieren. Die grünen und türkisen Töne stehen für Gemeinschaft und Natur, Weiß für geschlechtsneutrale Beziehungen, und Blau und Lila für das Spektrum der Männlichkeit.',
    },
    type: 'stripes',
    colors: ['#078D70', '#26CEA8', '#98E8C1', '#FFFFFF', '#7BADE2', '#5049CC', '#3D1A8E'],
  },
  {
    id: 'aroace',
    name: { en: 'Aromantic Asexual (AroAce)', de: 'Aromantisch Asexuell (AroAce)' },
    description: {
      en: 'Represents people who identify as both aromantic (experiencing little or no romantic attraction) and asexual (experiencing little or no sexual attraction). The warm orange and yellow tones blend both identities on the spectrum.',
      de: 'Repräsentiert Menschen, die sich sowohl als aromantisch (wenig oder keine romantische Anziehung) als auch als asexuell (wenig oder keine sexuelle Anziehung) identifizieren. Die warmen Orange- und Gelbschattierungen verbinden beide Identitäten im Spektrum.',
    },
    type: 'stripes',
    colors: ['#E28C00', '#ECCD00', '#FFFFFF', '#62AEDC', '#203D72'],
  },
]

export const FLAG_MAP: Record<string, Flag> = Object.fromEntries(
  FLAGS.map(f => [f.id, f])
)
