<script>
	import Card from '$lib/Card.svelte';
	import { getCards } from '../../domains/card/services';
</script>

{#await getCards()}
	<span>Chargement des cartes...</span>
{:then cards}
	{#each cards as card}
		<Card data={card} />
	{/each}
{/await}
