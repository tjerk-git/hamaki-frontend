<script>
	export let form;

	import toast, { Toaster } from 'svelte-french-toast';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { page } from '$app/stores';
	import { goBack } from '$lib/helpers';

	const { slug } = $page.params;

	$: {
		if (form?.success) {
			toast.success('Email sent!');
		}
		if (form?.success === false) {
			toast.error('Uuuuuuh...');
		}
	}
</script>

<Toaster />

<Header name="Hamaki" />
<Menu />
<main>
	{#if form?.success}
		<div class="notifications">
			<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

			<p>🐌 We send an e-mail, if your e-mail is real (probably is, but still).</p>
		</div>
	{/if}

	{#if form?.success === false}
		<div class="notifications">
			<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

			<p>🚨 Whoops, something went wrong there..</p>
		</div>
	{/if}
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
	<h2>Forgot my appointment</h2>
	<p>No worries, that can happen just enter your e-mail and we will send your appointments</p>
	<br /><br />
	<form method="POST" action="/forgot/{slug}">
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" required />
		<button type="submit">Send me an email!</button>
	</form>
</main>

<style>
	.notifications {
		border: 1px solid white;
		padding: 1.2rem;
		width: 100%;
		border-radius: 10px;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	input[type='text'],
	input[type='email'] {
		background: rgba(0, 0, 0, 30%);
		color: #ffffff;
		border: 1px solid #7958d6;
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
		background: #e7e4ee;
		color: #7958d6;
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
</style>
