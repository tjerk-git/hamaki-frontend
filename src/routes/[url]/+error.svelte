<script>
	import { page } from '$app/stores';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
</script>

<main>
	<h1>{$page.status}</h1>

	{#if $page.error.message}
		<ErrorMessage message={$page.error.message} />
	{:else}
		<ErrorMessage message="Somewthing went wrong" />
	{/if}
</main>
