import { describe, it, expect } from 'vitest';
import { getCardsWithTag } from '../routes/api/cards/[tags]/+server';

describe('get Card', () => {
	it('Retourne les cartes avec le tag "tag 1"', () => {
		const result = getCardsWithTag('tag 1');
		expect(result).toEqual([
			{
				id: 'f2e03396-5d2a-4de2-9630-0e24ddb76369',
				question: 'question 1',
				answer: 'answer 1',
				category: '1',
				tag: 'tag 1'
			}
		]);
	});
	it('Retourne les cartes avec le tag "tag 5"', () => {
		const result = getCardsWithTag('tag 5');
		expect(result).toEqual([
			{
				id: '426a23b4-7d7e-4e34-b78a-a783574974bd',
				question: 'question 5',
				answer: 'answer 5',
				category: '5',
				tag: 'tag 5'
			},
			{
				id: '426a23b4-7d7e-4e34-b78a-a783574974bb',
				question: 'question 5',
				answer: 'answer 5',
				category: '5',
				tag: 'tag 5'
			}
		]);
	});
	it('Retourne les cartes avec le tag "tag 6"', () => {
		const result = getCardsWithTag('tag 6');
		expect(result).toEqual([]);
	});
});

// test('Retourne les cartes avec le tag "tag 1"', () => {
// 	const result = getCardsWithTag('tag 1');
// 	expect(result).toEqual([
// 		{
// 			id: 'f2e03396-5d2a-4de2-9630-0e24ddb76369',
// 			question: 'question 1',
// 			answer: 'answer 1',
// 			category: '1',
// 			tag: 'tag 1'
// 		}
// 	]);
// });

// test("Retourne un tableau vide lorsque le tag n'est pas trouvé", () => {
// 	const result = getCardsWithTag('tag 6');
// 	expect(result).toEqual([]);
// });
