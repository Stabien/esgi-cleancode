<script lang="ts">
	import type { Card } from '../domains/card/models';

	export let data: Card;
</script>

<div>
	<h1>Question : {data.question}</h1>
	<span>Reponse : {data.answer}</span>
	<span>Categorie : {data.category}</span>
	<span>Tag : {data.tag}</span>
</div>
