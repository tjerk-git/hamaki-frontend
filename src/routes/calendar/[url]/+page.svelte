<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Time from 'svelte-time';

	const { calendar } = data;

	console.log(calendar.groupedSpots[0].spots);
</script>

<h1>Hi {calendar.calendar.name}</h1>

{#each calendar.groupedSpots[0].spots as spot}
	<div>
		<Time timestamp={spot.startDate} format="DD-MM HH:MM" />,
		<Time relative timestamp={spot.startDate} />
	</div>
{/each}
