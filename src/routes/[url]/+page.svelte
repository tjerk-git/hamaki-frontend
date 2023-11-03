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
			<p id="description">
				This is the calendar for: {data.calendar.name}

				<span class="callout">
					{data.calendar.description}
				</span>
				<a id="forgot" href="/forgot/{data.calendar.url}">😅 Forgot my appointment</a>
			</p>
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
		background-color: white;
		color: black;
		padding: 1rem;
		border-radius: 10px;
	}

	.callout {
		background-color: rgb(234, 234, 234);
		color: black;
		padding: 1rem;
		border-radius: 5px;
		display: block;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#forgot {
		background-color: var(--theme-accent);
		color: var(--theme-text);
		padding: 1rem;
		border-radius: 10px;
		text-decoration: none;
		display: inline-block;
	}
</style>
