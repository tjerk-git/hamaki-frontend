<script>
	import { getContext } from 'svelte';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
	let theme = getContext('theme');
</script>

<nav>
	<ul>
		<li><a href="/about">What is Hamaki?</a></li>
		<li><ThemeToggler {theme} /></li>
	</ul>
</nav>

<style>
	nav {
		padding: 1.2rem;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	nav li {
		margin-right: 20px;
		border-radius: 10px;
		background-color: white;
		color: black;
		padding: 1rem;
	}

	nav a {
		color: black;
		text-decoration: none;
	}
</style>
