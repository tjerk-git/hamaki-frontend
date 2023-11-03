<script>
	import SpotComponent from '$lib/components/Spot.svelte';
	import { getCorrectDate } from '$lib/helpers';
	import { onMount } from 'svelte';
	import { calendarName } from '$lib/stores/stores';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';

	export let data;

	const dateOptions = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	};

	onMount(() => {
		if (data.calendar && data.calendar.name) {
			calendarName.set(data.calendar.name);
		}
	});
</script>

<main>
	{#if data.calendar}
		{#if data.calendar.description}
			<a id="forgot" href="/forgot/{data.calendar.url}">Forgot my appointment</a>
			<p id="description">{data.calendar.description}</p>
		{/if}

		{#if data.groupedSpots.length === 0}
			<h1>Whoa there, no spots available</h1>
		{/if}

		{#each data.groupedSpots as group}
			<h2>{getCorrectDate(group.day, dateOptions)}</h2>

			{#each group.spots as spot}
				<div class="groupedSpots">
					<SpotComponent {spot} calendar={data.calendar} />
				</div>
			{/each}
		{/each}
	{:else}
		<ErrorMessage message="No calendar can be found..." />
	{/if}
</main>

<style>
	.groupedSpots {
		margin-bottom: 20px;
	}
	h2 {
		margin-bottom: 20px;
	}

	#description {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	#forgot {
		background-color: white;
		color: black;
		padding: 1rem;
		border-radius: 10px;
		text-decoration: none;
	}
</style>
