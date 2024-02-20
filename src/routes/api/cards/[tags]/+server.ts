import { type RequestHandler, json } from "@sveltejs/kit";
import { cards } from "../../../../../static/data"

const getCardsWithTag = (tags: string) => {
	return cards.filter(card => tags.includes(card.tag))
}

export const GET: RequestHandler = ({ params }) => {
	if (!params.tags) {
		return json(cards)
	}

	return json(getCardsWithTag(params.tags))
};