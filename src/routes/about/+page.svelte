<script>
	import Menu from '$lib/components/Menu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<Header name="Hamaki" />
<Menu />

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
