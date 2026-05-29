export type FlagType = 'stripes' | 'stripes-proportional' | 'stripes-with-circle' | 'svg'

interface FlagBase {
  id: string
  name: string
  description: string
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
    name: 'Rainbow (LGBT+)',
    description: 'Designed by Gilbert Baker in 1978, the rainbow flag is the most recognized symbol of LGBTQ+ pride. The six stripes originally represented life, healing, sunlight, nature, harmony, and spirit.',
    type: 'stripes',
    colors: ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'],
  },
  {
    id: 'transgender',
    name: 'Transgender',
    description: 'Represents people whose gender identity differs from the sex they were assigned at birth. Light blue and pink reflect traditional gender colors; white represents those who are transitioning, non-binary, or intersex.',
    type: 'stripes',
    colors: ['#55CDFC', '#F7A8B8', '#FFFFFF', '#F7A8B8', '#55CDFC'],
  },
  {
    id: 'bisexual',
    name: 'Bisexual',
    description: 'Represents people who experience attraction to more than one gender. Pink symbolizes same-gender attraction, blue represents attraction to different genders, and the lavender overlap blends both.',
    type: 'stripes-proportional',
    colors: ['#D60270', '#9B4F96', '#0038A8'],
    proportions: [2, 1, 2],
  },
  {
    id: 'nonbinary',
    name: 'Non-Binary',
    description: 'Represents people whose gender identity does not fit within the binary of male or female. Yellow stands for genders outside the binary, white for all genders, purple for mixed genders, and black for agender identity.',
    type: 'stripes',
    colors: ['#FCF434', '#FFFFFF', '#9C59D1', '#2D2D2D'],
  },
  {
    id: 'asexual',
    name: 'Asexual',
    description: 'Represents people who experience little or no sexual attraction to others. Black symbolizes asexuality, grey the asexual spectrum, white non-asexual partners and allies, and purple community unity.',
    type: 'stripes',
    colors: ['#000000', '#A4A4A4', '#FFFFFF', '#810081'],
  },
  {
    id: 'pansexual',
    name: 'Pansexual',
    description: 'Represents people who experience attraction regardless of gender — sometimes described as attraction to people of all genders. Pink symbolizes women, yellow non-binary people, and blue men.',
    type: 'stripes',
    colors: ['#FF218C', '#FFD800', '#21B1FF'],
  },
  {
    id: 'lesbian',
    name: 'Lesbian',
    description: 'Represents women and non-binary people primarily attracted to women. The shades of orange, pink, red, and white reflect community, independence, love, and womanhood.',
    type: 'stripes',
    colors: ['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B55690', '#A50062'],
  },
  {
    id: 'aromantic',
    name: 'Aromantic',
    description: 'Represents people who experience little or no romantic attraction, regardless of sexual orientation. Green tones symbolize the aromantic spectrum, white represents platonic connections, and grey and black represent the sexuality spectrum.',
    type: 'stripes',
    colors: ['#3DA542', '#A8D379', '#FFFFFF', '#A9A9A9', '#000000'],
  },
  {
    id: 'genderfluid',
    name: 'Genderfluid',
    description: 'Represents people whose gender identity shifts or changes over time. Pink represents femininity, white all genders, purple a mix of genders, black all other genders, and blue masculinity.',
    type: 'stripes',
    colors: ['#FF76A4', '#FFFFFF', '#C011D7', '#000000', '#2C3E80'],
  },
  {
    id: 'genderqueer',
    name: 'Genderqueer',
    description: 'Represents people who identify outside the binary gender system. Lavender blends traditional male and female colors, white symbolizes agender identity, and green (the inverse of purple) represents non-binary genders.',
    type: 'stripes',
    colors: ['#B899DF', '#FFFFFF', '#498022'],
  },
  {
    id: 'intersex',
    name: 'Intersex',
    description: 'Represents people born with sex characteristics that do not fit typical binary definitions of male or female. The yellow background and purple circle symbolize completeness and wholeness, free from gendered associations.',
    type: 'stripes-with-circle',
    background: '#FFD800',
    circleColor: '#7A00AC',
  },
  {
    id: 'agender',
    name: 'Agender',
    description: 'Represents people who identify with no gender at all. Black and white symbolize the complete absence of gender, grey partial absence, and green represents non-binary identity.',
    type: 'stripes',
    colors: ['#000000', '#BABABA', '#FFFFFF', '#B8F483', '#FFFFFF', '#BABABA', '#000000'],
  },
  {
    id: 'progress',
    name: 'Progress Pride',
    description: 'An evolution of the rainbow flag created by Daniel Quasar in 2018. The chevron adds light blue, pink, and white for transgender people, and brown and black for LGBTQ+ people of color and those lost to HIV/AIDS.',
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="10" fill="#E40303"/><rect x="0" y="10" width="100" height="10" fill="#FF8C00"/><rect x="0" y="20" width="100" height="10" fill="#FFED00"/><rect x="0" y="30" width="100" height="10" fill="#008026"/><rect x="0" y="40" width="100" height="10" fill="#004DFF"/><rect x="0" y="50" width="100" height="10" fill="#750787"/><polygon points="0,15 15,30 0,45" fill="#FFFFFF"/><polygon points="0,10 20,30 0,50 0,45 15,30 0,15" fill="#FFAFC8"/><polygon points="0,5 25,30 0,55 0,50 20,30 0,10" fill="#74D7EE"/><polygon points="0,0 30,30 0,60 0,55 25,30 0,5" fill="#613915"/><polygon points="5,0 35,30 5,60 0,60 30,30 0,0" fill="#000000"/></svg>',
  },
  {
    id: 'demisexual',
    name: 'Demisexual',
    description: 'Represents demisexual people, who only experience sexual attraction after forming a strong emotional connection with someone. Part of the asexual spectrum — the black triangle and grey stripe link it to the asexual flag.',
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#FFFFFF"/><rect x="0" y="20" width="100" height="20" fill="#7B7B7B"/><rect x="0" y="40" width="100" height="20" fill="#810081"/><polygon points="0,0 30,30 0,60" fill="#000000"/></svg>',
  },
  {
    id: 'polysexual',
    name: 'Polysexual',
    description: 'Represents people attracted to multiple genders, but not necessarily all of them. Unlike pansexuality, polysexuality involves attraction to some genders but not others. Pink, green, and blue represent different gender attractions.',
    type: 'stripes',
    colors: ['#F61CB9', '#07D569', '#2C04F6'],
  },
  {
    id: 'polyamory',
    name: 'Polyamory',
    description: 'Represents ethical non-monogamy: maintaining multiple loving relationships with the full knowledge and consent of all involved. The gold pi symbol represents infinite love; blue represents openness, red passion, and black solidarity.',
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#0000FF"/><rect x="0" y="20" width="100" height="20" fill="#FF0000"/><rect x="0" y="40" width="100" height="20" fill="#000000"/><text x="50" y="38" text-anchor="middle" font-size="28" fill="#FFD700" font-family="serif">π</text></svg>',
  },
  {
    id: 'bear',
    name: 'Bear Brotherhood',
    description: 'Represents the bear community within gay and bisexual culture, typically men with larger, hairier bodies. The stripe colors reflect natural fur tones and celebrate body diversity within the LGBTQ+ community.',
    type: 'stripes',
    colors: ['#623804', '#D36400', '#FDD700', '#FFF5BE', '#FFFFFF', '#999999', '#000000'],
  },
  {
    id: 'leather',
    name: 'Leather Pride',
    description: 'Represents the leather and BDSM communities within LGBTQ+ culture. Designed by Tony DeBlase in 1989, the blue and black stripes symbolize leather culture, and white represents purity of purpose.',
    type: 'stripes',
    colors: ['#000000', '#0038A8', '#000000', '#0038A8', '#FFFFFF', '#0038A8', '#000000', '#0038A8', '#000000'],
  },
  {
    id: 'two-spirit',
    name: 'Two-Spirit',
    description: 'A term used by some Indigenous North American peoples for a person who holds both a masculine and feminine spirit, fulfilling a traditional third-gender or gender-variant role. The flag combines rainbow colors with white to honor this identity.',
    type: 'stripes',
    colors: ['#E40303', '#FF8C00', '#FFED00', '#FFFFFF', '#008026', '#004DFF', '#750787'],
  },
  {
    id: 'aroace',
    name: 'Aromantic Asexual (AroAce)',
    description: 'Represents people who identify as both aromantic (experiencing little or no romantic attraction) and asexual (experiencing little or no sexual attraction). The warm orange and yellow tones blend both identities on the spectrum.',
    type: 'stripes',
    colors: ['#E28C00', '#ECCD00', '#FFFFFF', '#62AEDC', '#203D72'],
  },
]

export const FLAG_MAP: Record<string, Flag> = Object.fromEntries(
  FLAGS.map(f => [f.id, f])
)
