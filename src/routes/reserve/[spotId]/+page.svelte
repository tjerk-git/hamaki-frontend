<script>
	import { page } from '$app/stores';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import toast, { Toaster } from 'svelte-french-toast';
	import { selectedSpot } from '$lib/stores/stores';
	import { getCorrectDate, getTimeZone, goBack } from '$lib/helpers';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { confetti } from '@neoconfetti/svelte';
	import { tick } from 'svelte';

	let x, y;
	let isVisible = false;

	const handleClick = async (e) => {
		x = e.clientX;
		y = e.clientY;

		isVisible = false;
		await tick();
		isVisible = true;
	};

	export let form;

	const dateOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	};

	const { spotId } = $page.params;

	$: {
		if (form?.success) {
			toast.success('Spot claimed!');
		}
		if (form?.success === false) {
			toast.error('Spot has been claimed!');
		}
	}

	onMount(() => {
		// sensible default
		let timezone = 'Europe/Amsterdam';
		timezone = getTimeZone();
	});

	const isObjectEmpty = (objectName) => {
		return Object.keys(objectName).length === 0;
	};
</script>

<Toaster />

<main>
	<div class="reserve_container">
		{#if isObjectEmpty($selectedSpot)}
			<h1>Spot has been reserved</h1>
		{/if}

		{#if form?.success}
			<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

			{#if $selectedSpot.startDate}
				claimed a spot for:
				<time>{getCorrectDate($selectedSpot.startDate, dateOptions)}</time> -
				<time>{getCorrectDate($selectedSpot.endDate, dateOptions)}</time>
			{/if}

			{#if $selectedSpot.location}
				at location: {$selectedSpot.location}
			{/if}

			{#if browser}
				<div use:confetti={{ particleCount: 200 }} />
			{/if}

			{#if isVisible}
				<ConfettiExplosion --x="{x}px" --y="{y}px" />
			{/if}

			<a
				class="outline"
				href="{PUBLIC_BASE_URL}{form?.data.reservation?.icsURL}"
				target="_blank"
				style="text-decoration: none;"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					style="vertical-align: middle;"
				>
					<path
						d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"
						fill="#FFFFFF"
					/>
				</svg>
				<span style="vertical-align: middle; margin-left: 4px;">add to your own calendar</span>
			</a>

			<span class="textInCenter">or.....</span>
			<div class="box" on:click={handleClick}>
				<button>MORE CONFETTI</button>
			</div>
		{/if}

		{#if form?.success === false}
			<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

			<p>Whoops, something went wrong</p>

			{#if form?.data.reason == 'IM Used'}
				<p>It looks like this spot has been claimed</p>
			{/if}

			<a href="/reserve/{spotId}">Try again</a>
		{/if}

		{#if !form?.success && $selectedSpot.startDate}
			<div class="spot__time">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="link" href={'#'} on:click={goBack}>
					<svg
						width="24px"
						height="16px"
						viewBox="0 0 24 16"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<g id="App" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="Afspraak" transform="translate(-35.000000, -127.000000)" fill="#E7E4EE">
								<g
									id="assets/icons/arrow"
									transform="translate(46.600922, 135.000000) scale(-1, 1) translate(-46.600922, -135.000000) translate(35.000000, 127.000000)"
								>
									<polygon
										transform="translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) "
										points="8.00278293 0 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 0"
									/>
								</g>
							</g>
						</g>
					</svg>
				</a>
				<h2>
					{#if $selectedSpot.startDate}
						Claiming a spot for:
						<time>{getCorrectDate($selectedSpot.startDate, dateOptions)}</time> -
						<time>{getCorrectDate($selectedSpot.endDate, dateOptions)}</time>
					{/if}

					{#if $selectedSpot.location}
						at location: {$selectedSpot.location}
					{/if}
				</h2>
			</div>

			<form method="POST" action="/reserve/{spotId}">
				<label for="email">Email:</label>
				<input type="email" name="email" id="email" required />

				<label for="name">Name:</label>
				<input type="text" name="name" id="name" required />

				<label for="name">Leave a comment (optional)</label>
				<textarea id="comment" name="comment" />

				<input type="hidden" name="timezone" id="timezone" value={getTimeZone()} />

				<button type="submit">Claim that spot!</button>
			</form>
		{/if}
	</div>
</main>

<style>
	.textInCenter {
		text-align: center;
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
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

	.spot__time {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
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
	.outline {
		background: #45219a;
		color: white;
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
		display: block;
	}
	.link {
		display: inline-block;
		padding-top: 10px;
	}
	.spot__time h2 {
		margin-left: 20px;
	}

	h2 {
		font-size: 1.75rem;
		font-family: Inter;
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
	}

	span {
		pointer-events: none;
	}
</style>
