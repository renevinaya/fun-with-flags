export type FlagType = 'stripes' | 'stripes-proportional' | 'stripes-with-circle' | 'svg'

interface FlagBase {
  id: string
  name: string
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
    type: 'stripes',
    colors: ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'],
  },
  {
    id: 'transgender',
    name: 'Transgender',
    type: 'stripes',
    colors: ['#55CDFC', '#F7A8B8', '#FFFFFF', '#F7A8B8', '#55CDFC'],
  },
  {
    id: 'bisexual',
    name: 'Bisexual',
    type: 'stripes-proportional',
    colors: ['#D60270', '#9B4F96', '#0038A8'],
    proportions: [2, 1, 2],
  },
  {
    id: 'nonbinary',
    name: 'Non-Binary',
    type: 'stripes',
    colors: ['#FCF434', '#FFFFFF', '#9C59D1', '#2D2D2D'],
  },
  {
    id: 'asexual',
    name: 'Asexual',
    type: 'stripes',
    colors: ['#000000', '#A4A4A4', '#FFFFFF', '#810081'],
  },
  {
    id: 'pansexual',
    name: 'Pansexual',
    type: 'stripes',
    colors: ['#FF218C', '#FFD800', '#21B1FF'],
  },
  {
    id: 'lesbian',
    name: 'Lesbian',
    type: 'stripes',
    colors: ['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B55690', '#A50062'],
  },
  {
    id: 'aromantic',
    name: 'Aromantic',
    type: 'stripes',
    colors: ['#3DA542', '#A8D379', '#FFFFFF', '#A9A9A9', '#000000'],
  },
  {
    id: 'genderfluid',
    name: 'Genderfluid',
    type: 'stripes',
    colors: ['#FF76A4', '#FFFFFF', '#C011D7', '#000000', '#2C3E80'],
  },
  {
    id: 'genderqueer',
    name: 'Genderqueer',
    type: 'stripes',
    colors: ['#B899DF', '#FFFFFF', '#498022'],
  },
  {
    id: 'intersex',
    name: 'Intersex',
    type: 'stripes-with-circle',
    background: '#FFD800',
    circleColor: '#7A00AC',
  },
  {
    id: 'agender',
    name: 'Agender',
    type: 'stripes',
    colors: ['#000000', '#BABABA', '#FFFFFF', '#B8F483', '#FFFFFF', '#BABABA', '#000000'],
  },
  {
    id: 'progress',
    name: 'Progress Pride',
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="10" fill="#E40303"/><rect x="0" y="10" width="100" height="10" fill="#FF8C00"/><rect x="0" y="20" width="100" height="10" fill="#FFED00"/><rect x="0" y="30" width="100" height="10" fill="#008026"/><rect x="0" y="40" width="100" height="10" fill="#004DFF"/><rect x="0" y="50" width="100" height="10" fill="#750787"/><polygon points="0,0 35,30 0,60" fill="#FFFFFF"/><polygon points="0,0 29,30 0,60" fill="#FFAFC8"/><polygon points="0,0 23,30 0,60" fill="#74D7EE"/><polygon points="0,0 17,30 0,60" fill="#784F17"/><polygon points="0,0 11,30 0,60" fill="#000000"/></svg>',
  },
  {
    id: 'demisexual',
    name: 'Demisexual',
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#FFFFFF"/><rect x="0" y="20" width="100" height="20" fill="#7B7B7B"/><rect x="0" y="40" width="100" height="20" fill="#810081"/><polygon points="0,0 30,30 0,60" fill="#000000"/></svg>',
  },
  {
    id: 'polysexual',
    name: 'Polysexual',
    type: 'stripes',
    colors: ['#F61CB9', '#07D569', '#2C04F6'],
  },
  {
    id: 'polyamory',
    name: 'Polyamory',
    type: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect x="0" y="0" width="100" height="20" fill="#0000FF"/><rect x="0" y="20" width="100" height="20" fill="#FF0000"/><rect x="0" y="40" width="100" height="20" fill="#000000"/><text x="50" y="38" text-anchor="middle" font-size="28" fill="#FFD700" font-family="serif">π</text></svg>',
  },
  {
    id: 'bear',
    name: 'Bear Brotherhood',
    type: 'stripes',
    colors: ['#623804', '#D36400', '#FDD700', '#FFF5BE', '#FFFFFF', '#999999', '#000000'],
  },
  {
    id: 'leather',
    name: 'Leather Pride',
    type: 'stripes',
    colors: ['#000000', '#0038A8', '#000000', '#0038A8', '#FFFFFF', '#0038A8', '#000000', '#0038A8', '#000000'],
  },
  {
    id: 'two-spirit',
    name: 'Two-Spirit',
    type: 'stripes',
    colors: ['#E40303', '#FF8C00', '#FFED00', '#FFFFFF', '#008026', '#004DFF', '#750787'],
  },
  {
    id: 'aroace',
    name: 'Aromantic Asexual (AroAce)',
    type: 'stripes',
    colors: ['#E28C00', '#ECCD00', '#FFFFFF', '#62AEDC', '#203D72'],
  },
]

export const FLAG_MAP: Record<string, Flag> = Object.fromEntries(
  FLAGS.map(f => [f.id, f])
)