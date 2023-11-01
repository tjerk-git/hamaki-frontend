<script>
	import '../app.css';
	import ThemeContext from '$lib/themeContext.svelte';
</script>

<ThemeContext>
	<slot />
</ThemeContext>

<style>
	:global(body) {
		background: linear-gradient(var(--theme-backgroundFrom), var(--theme-backgroundTo));
		color: var(--theme-text);
	}

	:global(header) {
		background: linear-gradient(var(--theme-headerFrom), var(--theme-headerTo));
		color: var(--theme-text);
	}

	/* color:white;
  background: linear-gradient(to bottom, #5228CD, #7856D5);	 */
</style>
