<script>
	import { page } from '$app/stores';

	export let data;
	export let form;

	console.log(data);

	const { spotId } = $page.params;
</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

	<p>Thanks for reserving a spot!</p>
{/if}

<form method="POST" action="/reserve/{spotId}">
	<label for="email">Email:</label>
	<input type="email" name="email" id="email" required />

	<label for="name">Name:</label>
	<input type="text" name="name" id="name" required />

	<button type="submit">Submit</button>
</form>
