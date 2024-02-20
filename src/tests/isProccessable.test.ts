import { describe, it, expect } from 'vitest';
import { isProcessableCard } from '../routes/api/cards/+server';
import { CardCategory, type Card } from '../domains/card/models';

describe('isProcessable', () => {
	it('isProcessable true', () => {
		const card: Card = {
			id: 'string',
			category: CardCategory.FIRST,
			question: 'string',
			answer: 'string',
			tag: 'tag 1'
		};

		expect(isProcessableCard(card)).toBe(true);
	});
	it('isProcessable false by question', () => {
		const card = {
			id: 'string',
			category: CardCategory.FIRST,
			answer: 'string',
			tag: 'tag 1'
		};

		expect(isProcessableCard(card as Card)).toBe(false);
	});
	it('isProcessable false by answer', () => {
		const card = {
			id: 'string',
			question: 'string',

			category: CardCategory.FIRST,
			tag: 'tag 1'
		};

		expect(isProcessableCard(card as Card)).toBe(false);
	});
});
