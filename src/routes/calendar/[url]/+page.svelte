<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Spot from '$lib/components/Spot.svelte';

	const { calendar } = data;
</script>

{#each calendar.groupedSpots[0].spots as spot}
	<div>
		<Spot {spot} />
	</div>
{/each}
