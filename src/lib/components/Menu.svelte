<script lang="ts">
	export let calendarUrl = '';
</script>

<nav>
	<ul>
		<li><a href="/about">About</a></li>
		{#if calendarUrl}
			<li><a href="/forgot/{calendarUrl}">Forgot my appointment</a></li>
		{/if}
		<li><a href="#appstore">Download Hamaki for macOs</a></li>
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
		justify-content: center;
	}

	nav li {
		display: inline;
		margin-right: 20px;
	}

	nav a {
		color: white;
		text-decoration: none;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>
