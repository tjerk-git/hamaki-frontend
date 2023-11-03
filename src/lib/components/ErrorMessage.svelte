<script>
	import HamakiLogo from './HamakiLogo.svelte';
	import { goBack } from '$lib/helpers';
	import { page } from '$app/stores';
	export let message;
</script>

<div class="error-container">
	<div class="logo"><HamakiLogo /></div>
	<h2>Something went wrong | {$page.status}</h2>
	<p>{message}</p>

	<button on:click={goBack}>Go back</button>
</div>

<style>
	.logo {
		display: flex;
		justify-content: flex-end;
	}

	.error-container {
		background-color: #ececec;
		border: 1px solid #a2a2a2;
		border-radius: 10px;
		padding: 16px;
		text-align: center;
		max-width: 640px;
		margin: 0 auto;
	}

	.error-container h2 {
		margin-top: 1rem;
		color: black;
		font-size: 24px;
		margin-bottom: 8px;
	}

	p {
		color: black;
		font-size: 16px;
		margin-bottom: 8px;
	}

	.error-container button {
		background-color: #a2a2a2;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 1rem;
	}
</style>
