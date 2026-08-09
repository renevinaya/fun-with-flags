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
      en: 'An evolution of the rainbow flag, updated in 2021 by Valentino Vecchietti to add an intersex-inclusive yellow triangle with a purple circle. The chevron also represents transgender people (light blue, pink, white) and LGBTQ+ people of color (brown, black).',
      de: 'Eine Weiterentwicklung der Regenbogenfahne, 2021 von Valentino Vecchietti um ein Intersex-inklusives gelbes Dreieck mit lila Kreis ergänzt. Der Pfeil steht auch für Transgender-Menschen (Hellblau, Rosa, Weiß) und LGBTQ+-Menschen of Color (Braun, Schwarz).',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 3810"><path fill="#6d2380" d="M0 0h6000v3810H0z"/><path fill="#2c58a4" d="M0 0h6000v3175H0z"/><path fill="#78b82a" d="M0 0h6000v2540H0z"/><path fill="#efe524" d="M0 0h6000v1905H0z"/><path fill="#f28917" d="M0 0h6000v1270H0z"/><path fill="#e22016" d="M0 0h6000v635H0z"/><path d="M0 0h1577l1764 1905-1764 1905H0z"/><path fill="#945516" d="M0 0h1209l1764 1905-1764 1905H0z"/><path fill="#7bcce5" d="M0 0h844l1764 1905L844 3810H0z"/><path fill="#f4aec8" d="M0 0h477l1764 1905L477 3810H0z"/><path fill="#ffffff" d="M0 0h111l1763 1905L111 3810H0z"/><path fill="#fdd817" d="m0 278 1507 1627L0 3532z"/><circle cx="556" cy="1905" r="404" fill="none" stroke="#66338b" stroke-width="95"/></svg>',
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
    name: { en: 'Polyamory (1995)', de: 'Polyamorie (1995)' },
    description: {
      en: 'Designed by Jimmy Weiss in 1995. Represents ethical non-monogamy: maintaining multiple loving relationships with the full knowledge and consent of all involved. The gold pi symbol represents infinite love; blue represents openness, red passion, and black solidarity.',
      de: 'Entworfen von Jimmy Weiss im Jahr 1995. Repräsentiert ethische Nicht-Monogamie: mehrere Liebesbeziehungen mit vollem Wissen und Einverständnis aller Beteiligten zu führen. Das goldene Pi-Symbol steht für unendliche Liebe; Blau für Offenheit, Rot für Leidenschaft und Schwarz für Solidarität.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#0000FF"/><rect x="0" y="20" width="100" height="20" fill="#FF0000"/><rect x="0" y="40" width="100" height="20" fill="#000000"/><text x="50" y="38" text-anchor="middle" font-size="28" fill="#FFD700" font-family="serif">π</text></svg>',
  },
  {
    id: 'polyamory-tricolor',
    name: { en: 'Polyamory (Tricolor, 2022)', de: 'Polyamorie (Tricolor, 2022)' },
    description: {
      en: 'A newer polyamory flag design featuring blue, magenta, and purple stripes with a white chevron and gold heart. The heart symbolizes love, and the chevron shape points toward an open, expanding future for the relationship.',
      de: 'Ein neueres Design der Polyamorie-Flagge mit blauen, magentafarbenen und lila Streifen sowie einem weißen Winkel und einem goldenen Herz. Das Herz symbolisiert Liebe, und die Winkelform zeigt auf eine offene, wachsende Zukunft der Beziehung.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 768"><rect x="0" y="0" width="1280" height="256" fill="#009FE3"/><rect x="0" y="256" width="1280" height="256" fill="#E50051"/><rect x="0" y="512" width="1280" height="256" fill="#340C46"/><polygon points="0,0 256,0 512,256 0,768" fill="#FFFFFF"/><path d="M29,16 C29,16 18.5,32 9.5,32 C4.25,32 0,27.5 0,22.5 C0,19.5 1.5,17 4,16 C1.5,15 0,12.5 0,9.5 C0,4.5 4.25,0 9.5,0 C18.5,0 29,16 29,16 Z" fill="#FCCA2A" transform="translate(99,107) scale(9.311)"/></svg>',
  },
  {
    id: 'bear',
    name: { en: 'Bear Brotherhood', de: 'Bären' },
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
    name: { en: 'Two-Spirit', de: 'Two-Spirit' },
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
  {
    id: 'ally',
    name: { en: 'Straight Ally', de: 'Straight Ally' },
    description: {
      en: 'Represents heterosexual and cisgender people who actively support the LGBTQ+ community. The black and white stripes come from the heterosexual flag, and the rainbow "A" (for Ally) symbolizes active solidarity.',
      de: 'Repräsentiert heterosexuelle und cisgender Menschen, die die LGBTQ+-Gemeinschaft aktiv unterstützen. Die schwarz-weißen Streifen stammen von der heterosexuellen Flagge, und das Regenbogen-„A" (für Ally) symbolisiert aktive Solidarität.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 432"><path fill="#fff" d="M0 0h648v432H0z"/><path d="M0 0h648v72H0z"/><path d="M0 144h648v72H0z"/><path d="M0 288h648v72H0z"/><path fill="#750787" d="M54 360 270 144V360l-54 72H0Z"/><path fill="#750787" d="M594 360 378 144V360l54 72H648Z"/><path fill="#004dff" d="M108 288 324 216 540 288l54 72h-216l-54-72-54 72h-216z"/><path fill="#008026" d="M162 216 324 144 486 216l54 72H108z"/><path fill="#ffed00" d="M216 144 324 72 432 144l54 72H162z"/><path fill="#ff8c00" d="M270 72 324 36 378 72l54 72H216z"/><path fill="#e40303" d="M270 72l54-72 54 72z"/></svg>',
  },
]

export const FLAG_MAP: Record<string, Flag> = Object.fromEntries(
  FLAGS.map(f => [f.id, f])
)
