<script>
	import SpotComponent from '$lib/components/Spot.svelte';
	import { getCorrectDate } from '$lib/helpers';

	export let data;

	const { calendar } = data;

	const dateOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};
</script>

{#await calendar}
	Loading...
{:then calendar}
	{#if calendar.calendar.url}{/if}
	<main>
		<a id="forgot" href="/forgot/{calendar.calendar.url}">Forgot my appointment</a>

		{#if calendar.calendar.description}
			<br />
			<p id="description">{calendar.calendar.description}</p>
			<br /><br />
		{/if}

		{#if calendar.groupedSpots.length === 0}
			<h1>Whoa there, no spots available</h1>
		{/if}

		{#each calendar.groupedSpots as group}
			<h2>{getCorrectDate(group.day, dateOptions)}</h2>

			{#each group.spots as spot}
				<div class="groupedSpots">
					<SpotComponent {spot} {calendar} />
				</div>
			{/each}
		{/each}
	</main>
{:catch}
	<main>
		<h1>Whoa there, no spots available</h1>
	</main>
{/await}

<style>
	.groupedSpots {
		margin-bottom: 20px;
	}
	h2 {
		margin-bottom: 20px;
	}

	#forgot {
		background-color: white;
		color: black;
		padding: 1rem;
		border-radius: 10px;
		text-decoration: none;
	}
</style>
