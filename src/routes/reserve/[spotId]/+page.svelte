<script>
	import { page } from '$app/stores';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import toast, { Toaster } from 'svelte-french-toast';
	import { selectedSpot } from '$lib/stores/stores';
	import { getCorrectDate, getTimeZone, goBack } from '$lib/helpers';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let confetti;

	let possibleEmail = '';
	let possibleName = '';

	export let form;

	onMount(async () => {
		if (browser) {
			const module = await import('canvas-confetti');
			confetti = module.default;
		}
	});

	const dateOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	};

	function fireConfetti() {
		if (confetti) {
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { x: Math.random(), y: Math.random() }
			});
		}
	}

	const saveEmailInput = (e) => {
		possibleEmail = e.target.value;
		if (browser) {
			localStorage.setItem(
				'formData',
				JSON.stringify({ email: possibleEmail, name: possibleName })
			);
		}
	};

	const saveNameInput = (e) => {
		possibleName = e.target.value;
		if (browser) {
			localStorage.setItem(
				'formData',
				JSON.stringify({ email: possibleEmail, name: possibleName })
			);
		}
	};

	const { spotId } = $page.params;

	$: {
		if (form?.success) {
			toast.success('Spot claimed!');

			fireConfetti();
		}
		if (form?.success === false) {
			toast.error('Spot has been claimed!');
		}
	}

	onMount(() => {
		let timezone = 'Europe/Amsterdam';
		timezone = getTimeZone();

		// check if there is localstorage for formData
		if (browser) {
			const formData = localStorage.getItem('formData');
			if (formData) {
				const parsedFormData = JSON.parse(formData);
				if (parsedFormData.email) {
					// set the email value
					possibleEmail = parsedFormData.email;
				}
				if (parsedFormData.name) {
					// set the name value
					possibleName = parsedFormData.name;
				}
			}
		}
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

			<a href="{PUBLIC_BASE_URL}{form?.data.reservation?.icsURL}" target="_blank" class="outline">
				<span style="vertical-align: middle; margin-left: 4px;">Add to your own calendar</span>
			</a>

			<button on:click={fireConfetti}> 🎉 CONFETTI! </button>
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
				<input
					type="email"
					name="email"
					id="email"
					value={possibleEmail}
					required
					on:keydown={saveEmailInput}
				/>

				<label for="name">Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					value={possibleName}
					on:keydown={saveNameInput}
					required
				/>

				<label for="name">Leave a comment (optional)</label>
				<textarea id="comment" name="comment" />

				<input type="hidden" name="timezone" id="timezone" value={getTimeZone()} />

				<button type="submit">Claim that spot!</button>
			</form>
		{/if}
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
