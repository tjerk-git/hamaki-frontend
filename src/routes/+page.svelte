<script>
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<main>
	<div class="container">
		<article>
			<Accordion />
		</article>
	</div>
</main>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
	article {
		width: 80%;
		max-width: 560px;
	}
</style>
