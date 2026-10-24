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
      en: 'Designed by Gilbert Baker in 1978, the rainbow flag is the most recognized symbol of LGBTQ+ pride. The original had eight stripes; since 1979 the six-stripe version has been the most common, its colors standing for life, healing, sunlight, nature, serenity, and spirit.',
      de: 'Entworfen von Gilbert Baker im Jahr 1978, ist die Regenbogenfahne das bekannteste Symbol der LGBTQ+-Pride. Das Original hatte acht Streifen; seit 1979 ist die Version mit sechs Streifen am verbreitetsten, deren Farben für Leben, Heilung, Sonnenlicht, Natur, Gelassenheit und Geist stehen.',
    },
    type: 'stripes',
    colors: ['#E50000', '#FF8D00', '#FFEE00', '#028121', '#004CFF', '#770088'],
  },
  {
    id: 'transgender',
    name: { en: 'Transgender', de: 'Transgender' },
    description: {
      en: 'Represents people whose gender identity differs from the sex they were assigned at birth. Light blue and pink are the traditional colors for baby boys and girls; white stands for people who are intersex, transitioning, or have a neutral or undefined gender.',
      de: 'Repräsentiert Menschen, deren Geschlechtsidentität von dem bei der Geburt zugewiesenen Geschlecht abweicht. Hellblau und Rosa sind die traditionellen Farben für Jungen- und Mädchenbabys; Weiß steht für intergeschlechtliche Menschen, Menschen in der Transition und Menschen mit neutralem oder unbestimmtem Geschlecht.',
    },
    type: 'stripes',
    colors: ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'],
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
      en: 'Represents people whose gender identity does not fit within the binary of male or female. Yellow stands for genders outside the binary, white for people with multiple genders, purple for mixed genders, and black for agender identity.',
      de: 'Repräsentiert Menschen, deren Geschlechtsidentität nicht in das Binärsystem von männlich oder weiblich passt. Gelb steht für Geschlechter jenseits des Binärsystems, Weiß für Menschen mit mehreren Geschlechtern, Lila für gemischte Geschlechter und Schwarz für Agender-Identität.',
    },
    type: 'stripes',
    colors: ['#FFF433', '#FFFFFF', '#9B59D0', '#2D2D2D'],
  },
  {
    id: 'asexual',
    name: { en: 'Asexual', de: 'Asexuell' },
    description: {
      en: 'Represents people who experience little or no sexual attraction to others. Black symbolizes asexuality, grey grey-asexuality, white allosexuality (people who are not asexual), and purple community.',
      de: 'Repräsentiert Menschen, die wenig oder keine sexuelle Anziehung erleben. Schwarz symbolisiert Asexualität, Grau Grau-Asexualität, Weiß Allosexualität (nicht-asexuelle Menschen) und Lila die Gemeinschaft.',
    },
    type: 'stripes',
    colors: ['#000000', '#A3A3A3', '#FFFFFF', '#800080'],
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
      en: 'Represents women and non-binary people primarily attracted to women. This orange-pink design is attributed to Emily Gwen (2018); its seven stripes stand for gender non-conformity, independence, community, unique relationships to womanhood, serenity and peace, love and sex, and femininity.',
      de: 'Repräsentiert Frauen und nicht-binäre Menschen, die hauptsächlich zu Frauen hingezogen sind. Das orange-rosa Design wird Emily Gwen (2018) zugeschrieben; die sieben Streifen stehen für Gender-Nonkonformität, Unabhängigkeit, Gemeinschaft, einzigartige Beziehungen zum Frausein, Gelassenheit und Frieden, Liebe und Sex sowie Weiblichkeit.',
    },
    type: 'stripes',
    colors: ['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B55690', '#A30262'],
  },
  {
    id: 'aromantic',
    name: { en: 'Aromantic', de: 'Aromantisch' },
    description: {
      en: 'Represents people who experience little or no romantic attraction, regardless of sexual orientation. Green tones symbolize the aromantic spectrum, white represents platonic connections, and grey and black represent the sexuality spectrum.',
      de: 'Repräsentiert Menschen, die wenig oder keine romantische Anziehung erleben, unabhängig von ihrer sexuellen Orientierung. Grüntöne symbolisieren das aromantische Spektrum, Weiß platonische Verbindungen, und Grau und Schwarz das Sexualitätsspektrum.',
    },
    type: 'stripes',
    colors: ['#3DA542', '#A7D379', '#FFFFFF', '#A9A9A9', '#000000'],
  },
  {
    id: 'genderfluid',
    name: { en: 'Genderfluid', de: 'Genderfluid' },
    description: {
      en: 'Represents people whose gender identity shifts or changes over time. Pink represents femininity, white lack of gender, purple androgyny, black all other genders, and blue masculinity.',
      de: 'Repräsentiert Menschen, deren Geschlechtsidentität sich im Laufe der Zeit verändert oder wechselt. Rosa steht für Weiblichkeit, Weiß für Geschlechtslosigkeit, Lila für Androgynität, Schwarz für alle anderen Geschlechter und Blau für Männlichkeit.',
    },
    type: 'stripes',
    colors: ['#FF75A2', '#F5F5F5', '#BE18D6', '#2C2C2C', '#333EBD'],
  },
  {
    id: 'genderqueer',
    name: { en: 'Genderqueer', de: 'Genderqueer' },
    description: {
      en: 'Represents people who identify outside the binary gender system. Designed by Marilyn Roxie in 2011: lavender represents androgyny and queerness, white agender identity, and green identities defined outside the binary.',
      de: 'Repräsentiert Menschen, die sich außerhalb des binären Geschlechtersystems identifizieren. 2011 von Marilyn Roxie entworfen: Lavendel steht für Androgynität und Queerness, Weiß für Agender-Identität und Grün für Identitäten außerhalb des Binärsystems.',
    },
    type: 'stripes',
    colors: ['#B57EDC', '#FFFFFF', '#4A8123'],
  },
  {
    id: 'intersex',
    name: { en: 'Intersex', de: 'Intersex' },
    description: {
      en: 'Represents people born with sex characteristics that do not fit typical binary definitions of male or female. Created by Morgan Carpenter of Intersex Human Rights Australia in 2013. Yellow and purple were chosen as colors free from gender associations; the unbroken circle symbolizes wholeness and completeness.',
      de: 'Repräsentiert Menschen, die mit Geschlechtsmerkmalen geboren wurden, die nicht in die typischen Binärdefinitionen von männlich oder weiblich passen. 2013 von Morgan Carpenter (Intersex Human Rights Australia) entworfen. Gelb und Lila wurden als Farben ohne geschlechtliche Zuordnung gewählt; der ungebrochene Kreis symbolisiert Ganzheit und Vollständigkeit.',
    },
    type: 'stripes-with-circle',
    background: '#FFD800',
    circleColor: '#7902AA',
  },
  {
    id: 'agender',
    name: { en: 'Agender', de: 'Agender' },
    description: {
      en: 'Represents people who identify with no gender at all. Black and white symbolize the complete absence of gender, grey partial absence, and green represents non-binary identity.',
      de: 'Repräsentiert Menschen, die sich mit keinem Geschlecht identifizieren. Schwarz und Weiß stehen für das vollständige Fehlen von Geschlecht, Grau für das teilweise Fehlen, und Grün für nicht-binäre Identität.',
    },
    type: 'stripes',
    colors: ['#000000', '#B9B9B9', '#FFFFFF', '#B8F483', '#FFFFFF', '#B9B9B9', '#000000'],
  },
  {
    id: 'progress',
    name: { en: 'Progress Pride', de: 'Progress Pride' },
    description: {
      en: 'Based on Daniel Quasar\'s 2018 Progress Pride flag, which added a chevron to the rainbow flag for transgender people (light blue, pink, white) and people of color (brown, black). In 2021 Valentino Vecchietti added a yellow triangle with a purple circle to include intersex people.',
      de: 'Basiert auf Daniel Quasars Progress-Pride-Flagge von 2018, die die Regenbogenfahne um einen Pfeil für Transgender-Menschen (Hellblau, Rosa, Weiß) und People of Color (Braun, Schwarz) ergänzte. 2021 fügte Valentino Vecchietti ein gelbes Dreieck mit lila Kreis hinzu, um intergeschlechtliche Menschen einzubeziehen.',
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
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480"><path fill="#D2D2D2" d="M0 0h800v480H0z"/><path fill="#6E0070" d="M0 0h800v280H0z"/><path fill="#FFFFFF" d="M0 0h800v200H0z"/><path fill="#000000" d="M0 0l306 240L0 480z"/></svg>',
  },
  {
    id: 'polysexual',
    name: { en: 'Polysexual', de: 'Polysexuell' },
    description: {
      en: 'Represents people attracted to multiple genders, but not necessarily all of them. Unlike pansexuality, polysexuality involves attraction to some genders but not others. Pink, green, and blue represent different gender attractions.',
      de: 'Repräsentiert Menschen, die zu mehreren, aber nicht unbedingt allen Geschlechtern hingezogen sind. Im Gegensatz zur Pansexualität beinhaltet Polysexualität die Anziehung zu einigen, aber nicht allen Geschlechtern. Rosa, Grün und Blau stehen für verschiedene Geschlechteranziehungen.',
    },
    type: 'stripes',
    colors: ['#F61CB9', '#07D569', '#1C92F6'],
  },
  {
    id: 'polyamory',
    name: { en: 'Polyamory (1995)', de: 'Polyamorie (1995)' },
    description: {
      en: 'Designed by Jim Evans in 1995. Represents ethical non-monogamy: maintaining multiple loving relationships with the full knowledge and consent of all involved. The Greek letter pi stands for the first letter of "polyamory", and its gold for the value of emotional attachment. Blue represents openness and honesty among all partners, red love and passion, and black solidarity with those who must hide their relationships.',
      de: 'Entworfen von Jim Evans im Jahr 1995. Repräsentiert ethische Nicht-Monogamie: mehrere Liebesbeziehungen mit vollem Wissen und Einverständnis aller Beteiligten zu führen. Der griechische Buchstabe Pi steht für den Anfangsbuchstaben von „Polyamorie", sein Gold für den Wert emotionaler Bindung. Blau steht für Offenheit und Ehrlichkeit unter allen Beteiligten, Rot für Liebe und Leidenschaft und Schwarz für Solidarität mit denen, die ihre Beziehungen verbergen müssen.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 192"><path fill="#0000FF" d="M0 0h288v64H0z"/><path fill="#FF0000" d="M0 64h288v64H0z"/><path fill="#000000" d="M0 128h288v64H0z"/><path fill="#FFFF00" d="M130.2 112.8c0-2.6.8-4.8 1.5-7.5l6-21c.5-1.8.3-2.7-1.9-2.7-6.6 0-9.9 1.8-12.3 9-.2.5-.2 1.4-1 1.4s-1.4-1.3-1.4-3.8c0-5.3 3.8-12.9 16.3-12.9 4.4 0 9.1.3 13.5.6 3.4.2 6.5.4 9.3.4 2.7 0 4.6-.9 6-1.6 1.1-.7 1.7-1.2 2.2-1.2 1 0 1.2.8 1.2 3 0 2.8-2.1 6.4-3.6 6.4-2.6 0-5.7-.4-7-.4-2.1 0-2.9.3-3.3 3-.4 2.8-2.3 14.5-2.3 18.4 0 2.4 1.7 3.4 3.6 3.5 1.1.1 2.3-.1 3.3-.5.8-.3 1.3-.6 1.5-.6.9 0 1 .5 1 1.5 0 3.3-2.2 8.3-7 8.3-3.3 0-6.2-3.2-6.2-9.6 0-4.8 2.5-18.6 2.5-21.7 0-1.2-.6-2.4-1.5-2.4l-7.5-.3c-1.3-.1-2 .5-2.4 2-3 11.3-3.8 18.5-4 23.2-.1 3.2.2 5.2.4 6.4.3 1.7.4 2.6-1 2.6-1.3 0-5.9-2-5.9-3.5z"/></svg>',
  },
  {
    id: 'polyamory-tricolor',
    name: { en: 'Polyamory (Tricolor, 2022)', de: 'Polyamorie (Tricolor, 2022)' },
    description: {
      en: 'Designed by Red Howell and chosen in 2022 from four candidates in an online vote by the blog PolyamProud with over 30,000 participants. Blue stands for openness and honesty, magenta for love and attraction, and purple for a united non-monogamous community. The white chevron represents possibility and growth. The heart stands for love at the core of non-monogamy, and its gold for the energy and perseverance of the community.',
      de: 'Von Red Howell entworfen und 2022 in einer Online-Abstimmung des Blogs PolyamProud mit über 30.000 Teilnehmenden aus vier Entwürfen gewählt. Blau steht für Offenheit und Ehrlichkeit, Magenta für Liebe und Anziehung und Lila für eine geeinte nicht-monogame Gemeinschaft. Der weiße Winkel symbolisiert Möglichkeiten und Wachstum. Das Herz steht für die Liebe als Kern der Nicht-Monogamie, sein Gold für die Energie und Ausdauer der Gemeinschaft.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 924.09 555.59"><rect x="0" y="0" width="924.09" height="185.2" fill="#009FE3"/><rect x="0" y="185.2" width="924.09" height="185.2" fill="#E50051"/><rect x="0" y="370.39" width="924.09" height="185.2" fill="#340C46"/><polygon points="0,0 185.2,0 370.39,185.2 0,555.59" fill="#FFFFFF"/><path d="M89.62,94.72h0c-23.89,23.89-23.89,62.64,0,86.53l3.82,3.82h0s-4.07,4.07-4.07,4.07c-23.89,23.89-23.89,62.64,0,86.53h0c23.89,23.89,62.64,23.89,86.53,0l4.07-4.07,86.53-86.53,.79-.79-87.09-85.52-.23-.23-3.82-3.82c-23.89-23.89-62.64-23.89-86.53,0Z" fill="#FCBF00"/></svg>',
  },
  {
    id: 'bear',
    name: { en: 'Bear Brotherhood', de: 'Bären' },
    description: {
      en: 'Represents the bear community within gay and bisexual culture, typically men with larger, hairier bodies. Designed by Craig Byrnes in 1995, its seven stripes stand for the fur colors of bear species around the world and were chosen with inclusion in mind.',
      de: 'Repräsentiert die Bären-Gemeinschaft innerhalb der schwulen und bisexuellen Kultur, typischerweise Männer mit größeren, behaarteren Körpern. 1995 von Craig Byrnes entworfen; die sieben Streifen stehen für die Fellfarben der Bärenarten weltweit und wurden mit Blick auf Inklusion gewählt.',
    },
    type: 'stripes',
    colors: ['#623804', '#D56300', '#FEDD63', '#FEE6B8', '#FFFFFF', '#555555', '#000000'],
  },
  {
    id: 'leather',
    name: { en: 'Leather Pride', de: 'Leder-Pride' },
    description: {
      en: 'Represents the leather and BDSM communities within LGBTQ+ culture. Designed by Tony DeBlase in 1989: nine stripes of alternating black and royal blue around a white center stripe, with a red heart in the upper left. DeBlase gave it no fixed meaning, leaving the colors and symbols to the viewer\'s interpretation.',
      de: 'Repräsentiert die Leder- und BDSM-Gemeinschaften innerhalb der LGBTQ+-Kultur. 1989 von Tony DeBlase entworfen: neun abwechselnd schwarze und königsblaue Streifen um einen weißen Mittelstreifen, mit einem roten Herz oben links. DeBlase legte keine feste Bedeutung fest und überließ die Deutung der Farben und Symbole den Betrachtenden.',
    },
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18"><rect width="27" height="18" fill="#000000"/><rect y="2" width="27" height="2" fill="#18186B"/><rect y="6" width="27" height="6" fill="#18186B"/><rect y="14" width="27" height="2" fill="#18186B"/><rect y="8" width="27" height="2" fill="#FFFFFF"/><path d="M58,17C52,7 42,0 30,0C13,0 0,13 0,30C0,63 18,68 58,106C98,68 116,63 116,30C116,13 103,0 86,0C74,0 64,7 58,17z" fill="#E70039" stroke="#000000" stroke-width=".25" transform="translate(1.3643,4.274) rotate(-38) scale(.0663,.0674)"/></svg>',
  },
  {
    id: 'gay',
    name: { en: 'Gay Men', de: 'Schwul' },
    description: {
      en: 'Represents gay men and others who identify with the gay male community. Designed by Tumblr user gayflagblog in 2019: the shades from green to turquoise represent community, healing, and joy; white includes trans, intersex, gender non-conforming, and non-binary people; and blue through purple represent pure love, strength, and diversity.',
      de: 'Repräsentiert schwule Männer und andere, die sich mit der schwulen Gemeinschaft identifizieren. 2019 von Tumblr-Nutzer gayflagblog entworfen: die Töne von Grün bis Türkis stehen für Gemeinschaft, Heilung und Freude; Weiß schließt trans, inter, gender-nonkonforme und nicht-binäre Menschen ein; Blau bis Lila stehen für reine Liebe, Stärke und Vielfalt.',
    },
    type: 'stripes',
    colors: ['#078D70', '#26CEAA', '#99E8C2', '#FFFFFF', '#7BADE3', '#5049CB', '#3E1A78'],
  },
  {
    id: 'aroace',
    name: { en: 'Aromantic Asexual (AroAce)', de: 'Aromantisch Asexuell (AroAce)' },
    description: {
      en: 'Represents people who identify as both aromantic (experiencing little or no romantic attraction) and asexual (experiencing little or no sexual attraction). This "sunset" design by Tumblr user aroaesflags (2018) uses orange for community, yellow for love and relationships beyond conventional romance and sex, white for wholeness, and two blues for the spectrum of aroace identities.',
      de: 'Repräsentiert Menschen, die sich sowohl als aromantisch (wenig oder keine romantische Anziehung) als auch als asexuell (wenig oder keine sexuelle Anziehung) identifizieren. Das „Sunset"-Design von Tumblr-Nutzer aroaesflags (2018) nutzt Orange für Gemeinschaft, Gelb für Liebe und Beziehungen jenseits herkömmlicher Vorstellungen von Romantik und Sexualität, Weiß für Ganzheit und zwei Blautöne für das Spektrum aroacer Identitäten.',
    },
    type: 'stripes',
    colors: ['#E28C00', '#ECCD00', '#FFFFFF', '#62AEDC', '#203856'],
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
