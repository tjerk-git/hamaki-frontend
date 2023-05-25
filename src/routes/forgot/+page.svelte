<script lang="ts">
	export let form;

	import toast, { Toaster } from 'svelte-french-toast';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';

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

	<h1>Forgot my appointment</h1>
	<p>No worries, that can happen just enter your e-mail and we will send your appointments</p>
	<br /><br />
	<form method="POST">
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
</style>
