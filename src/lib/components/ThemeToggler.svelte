<script>
	import { getContext } from 'svelte';
	const { theme, toggle } = getContext('theme');
</script>

<a href="#theme-switch" on:click={toggle}>Current theme: {$theme.icon} {$theme.name}</a>

<style>
	a {
		color: black;
		text-decoration: none;
	}
</style>
