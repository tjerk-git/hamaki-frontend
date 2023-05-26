<script lang="ts">
	import SpotComponent from '$lib/components/Spot.svelte';
	import { getCorrectDate } from '$lib/helpers';
	import Header from '$lib/components/Header.svelte';
	import { calendarName } from '$lib/stores/stores';
	import { onMount } from 'svelte';

	export let data;

	const { calendar } = data;

	const dateOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};

	onMount(() => {
		calendarName.set(calendar.calendar.name);
	});
</script>

{#await calendar}
	Loading...
{:then calendar}
	<Header name={calendar.calendar.name} />

	<main>
		{#each calendar.groupedSpots as group}
			<h2>{getCorrectDate(group.day, dateOptions)}</h2>

			{#each group.spots as spot}
				<div class="groupedSpots">
					<SpotComponent {spot} />
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
</style>
