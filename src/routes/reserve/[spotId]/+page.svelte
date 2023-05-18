<script>
	import { page } from '$app/stores';

	export let form;

	const { spotId } = $page.params;
</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

	<p>Thanks {form?.data.reservation?.visitor?.name} for reserving a spot!</p>

	{#if form?.data.reservation?.comment}
		A comment was included: {form?.data.reservation?.comment}
	{/if}

	<a target="_blank" href={form?.data.reservation?.icsURL}>Add to your calendar</a>
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

<form method="POST" action="/reserve/{spotId}">
	<label for="email">Email:</label>
	<input type="email" name="email" id="email" required />

	<label for="name">Name:</label>
	<input type="text" name="name" id="name" required />

	<button type="submit">Submit</button>
</form>
