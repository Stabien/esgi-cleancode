import { type RequestHandler, error } from "@sveltejs/kit";
import { cards } from "../../../../../../static/data"

const doesCardExist = (cardId: string) => {
  const filteredCards = cards.filter(card => card.id === cardId)

  return filteredCards.length !== 0
}

const updateCardCategory = (isAnswerValid: boolean) => {
  if (isAnswerValid) {
    console.log("Bonne réponse ! Cette carte passe dans la catégorie suivante.")
  } else {
    console.log("Mauvaise réponse, cette carte retourne dans la première catégorie.")
  }
}

export const PUT: RequestHandler = async ({ request, params }) => {
  const { isValid } = await request.json()
  const { cardId } = params 

  if (typeof isValid !== 'boolean') {
    return error(400)
  }

  if (!doesCardExist(cardId as string)) {
    return error(404)
  }

  updateCardCategory(isValid)

  return new Response(null, { status: 204 })
}