import { type RequestHandler, json } from '@sveltejs/kit';
import { cards } from '../../../../../static/data';
import type { Card } from '../../../../domains/card/models';

const categoryToDays = {
  'FIRST': 1,
  'SECOND': 2,
  'THIRD': 4,
  'FOURTH': 8,
  'FIFTH': 16,
  'SIXTH': 32,
  'SEVENTH': 64,
  'DONE': -1
}

const addDaysFromDate = (days: number, date: Date): Date => {
  const updatedDate = (new Date(date)).getDate() + days

  return new Date(updatedDate)
}

const isDateToday = (date: Date) => {
  const today = new Date()

  return today.toDateString() === date.toDateString()
}

const isDateCard = (card: Card, date: Date): boolean => {
  const cardDays: number = categoryToDays[card.category]
  
  return isDateToday(addDaysFromDate(cardDays, date))
}

const getCardsForDate = (date: Date) => {
  return cards.filter(card => isDateCard(card as Card, date))
}

export const GET: RequestHandler = ({ params }) => {
	if (!params.date) {
    const today = new Date()
		return json(getCardsForDate(today))
	}

  const date = new Date(params.date)

  return json(getCardsForDate(date))
};
