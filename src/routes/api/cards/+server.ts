import { type RequestHandler, json, error } from "@sveltejs/kit";
import { cards } from "../../../../static/data"
import type { Card } from "../../../domains/card/models";

const isProcessableCard = (card: Card) => {
  if (!card.hasOwnProperty("question") || card.question.length === 0) {
    return false
  }

  if (!card.hasOwnProperty("answer") || card.question.length === 0) {
    return false
  }

  return true
}

export const GET: RequestHandler = () => {
	return json(cards)
}

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json()

  if (!isProcessableCard(body)) {
    return error(400)
  }

  const response = { ...body, id: crypto.randomUUID(), category: "FIRST" }
  return json(response)

}