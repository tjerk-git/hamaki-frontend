<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Spot from '$lib/components/Spot.svelte';

	const { calendar } = data;

	//console.log(calendar.groupedSpots[0].spots);
</script>

<h1>Hi {calendar.calendar.name}</h1>

{#each calendar.groupedSpots[0].spots as spot}
	<div>
		<Spot spotTime={spot.startDate} spotEndTime={spot.endDate} spotId={spot.id} />
	</div>
{/each}
