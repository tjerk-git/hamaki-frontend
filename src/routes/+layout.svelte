<script>
	import '../app.css';
	import ThemeContext from '$lib/themeContext.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Header from '$lib/components/Header.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<svelte:head>
	<SvelteSeo
		title="Hamaki, booking made easy"
		description="Pretty good booking on macOs"
		canonical="https://www.hamaki.pro"
		keywords="macOs, m1, apple, silicon, booking, easy, private, secure"
		openGraph={{
			title: 'Hamaki, personal appointments',
			description: 'Pretty good booking on macOs',
			image: 'hamaki.png',
			url: 'https://www.hamaki.pro/',
			type: 'website',
			images: [
				{
					url: 'hamaki.png',
					width: 800,
					height: 600,
					alt: 'Hamaki'
				}
			],
			site_name: 'Hamaki'
		}}
	/>
</svelte:head>

<ThemeContext>
	<Header />
	<Menu />

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

	:global(h1) {
		--font-size: 40pt;
		--typography-spacing-vertical: 3rem;
		color: var(--theme-text);
		font-family: ThunderBold;
	}

	:global(h2) {
		--font-size: 1.75rem;
		--typography-spacing-vertical: 2.625rem;
		color: var(--theme-text);
		font-family: Inter;
	}

	:global(svg) {
		fill: var(--theme-accent);
	}

	/* color:white;
  background: linear-gradient(to bottom, #5228CD, #7856D5);	 */
</style>
