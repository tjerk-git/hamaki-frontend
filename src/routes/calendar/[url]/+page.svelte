<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Spot from '$lib/components/Spot.svelte';
	import getCorrectDate from '$lib/helpers';
	import Header from '$lib/components/Header.svelte';

	const { calendar } = data;

	const dateOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};
</script>

{#if calendar}
	<Header name={calendar.calendar.name} />

	<main>
		{#each calendar.groupedSpots as group}
			<h2>{getCorrectDate(group.day, dateOptions)}</h2>
			{#each group.spots as spot}
				<div class="groupedSpots">
					<Spot {spot} />
				</div>
			{/each}
		{/each}
	</main>
{:else}
	<main>
		<h1>Whoa there, no spots available</h1>
	</main>
{/if}

<style>
	.groupedSpots {
		margin-bottom: 20px;
	}
	h2 {
		margin-bottom: 20px;
	}
</style>
