import type { Card } from "../models"

export const getCards = async (): Promise<Card[]> => {
  const response = await fetch('/api/cards')
  const data = await response.json()

  return data
}