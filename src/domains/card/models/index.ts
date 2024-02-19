export enum CardCategory {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  FIFTH = 'FIFTH',
  SIXTH = 'SIXTH',
  SEVENTH = 'SEVENTH',
  DONE = 'DONE',
}

export interface Card {
  id: string
  category: CardCategory
  question: string
  answer: string
  tag?: string
}