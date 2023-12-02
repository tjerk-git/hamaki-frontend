<script>
	import { onMount } from 'svelte';
	import { getTimeZone } from '$lib/helpers';
	import { page } from '$app/stores';
	import toast, { Toaster } from 'svelte-french-toast';
	import { selectedWaitingListDay } from '$lib/stores/stores';

	export let form;

	const { slug } = $page.params;

	onMount(() => {
		let timezone = 'Europe/Amsterdam';
		timezone = getTimeZone();
	});

	$: {
		if (form?.success) {
			toast.success(' You are on the waitinglist!');
		}
		if (form?.success === false) {
			toast.error('Whoops something went wrong');
		}
	}
</script>

<main>
	<Toaster />

	{#if form?.success === false}
		<p>Whoops, something went wrong</p>
	{/if}

	{#if form?.success === true}
		<div class="box">Fingers crossed, you are on the waitinglist! 📋</div>
	{/if}
	<div class="reserve_container">
		<form method="POST" action="/waitinglist/{slug}">
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" required />

			<label for="name">Name:</label>
			<input type="text" name="name" id="name" required />

			<label for="name">Leave a comment (optional)</label>
			<textarea id="comment" name="comment" />

			<input type="hidden" name="date" id="date" value={$selectedWaitingListDay} />
			<input type="hidden" name="timezone" id="timezone" value={getTimeZone()} />

			<button type="submit">Grab a spot on the waitinglist!</button>
		</form>
	</div>
</main>

<style>
	textarea {
		background: rgba(0, 0, 0, 30%);
		color: #ffffff;
		border: 1px solid -var(--theme-accent);
		border-radius: 5px;
		outline: none;
		padding: 1.2rem;
		font-size: 1.2rem;
		width: 100%;
		margin-bottom: 20px;
		font-family: Inter;
	}
	.reserve_container {
		margin-bottom: 20px;
		padding: 20px;
	}

	label {
		margin-bottom: 10px;
	}

	input[type='email'],
	input[type='text'] {
		background: rgba(0, 0, 0, 30%);
		color: #ffffff;
		border: 1px solid var(--theme-accent);
		border-radius: 5px;
		outline: none;
		padding: 1.2rem;
		font-size: 1.2rem;
		width: 100%;
		margin-bottom: 20px;
	}
	label {
		display: block;
	}
	button {
		background: white;
		color: var(--theme-accent);
		text-decoration: none;
		text-align: left;
		border-radius: 15px;
		border: none;
		cursor: pointer;
		padding: 1rem;
		border-radius: 10px;
		outline: none;
		font-size: 1rem;
		line-height: 1.25;
		text-align: center;
		width: 100%;
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 10rem;
		width: 100%;
		border-radius: 0.5rem;
		user-select: none;
		color: black;
		background: white;
	}

	span {
		pointer-events: none;
	}
</style>
