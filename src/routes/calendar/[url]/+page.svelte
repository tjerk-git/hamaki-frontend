<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Spot from '$lib/components/Spot.svelte';
	import getCorrectDate from '$lib/helpers';

	const { calendar } = data;

	const dateOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};
</script>

<h2>{getCorrectDate(calendar.groupedSpots[0].day, dateOptions)}</h2>

{#each calendar.groupedSpots[0].spots as spot}
	<div class="groupedSpots">
		<Spot {spot} />
	</div>
{/each}

<style>
	.groupedSpots {
		margin-bottom: 20px;
	}
	h2 {
		margin-bottom: 20px;
	}
</style>
