<script>
	import toast, { Toaster } from 'svelte-french-toast';
	import Header from '$lib/components/Header.svelte';
</script>

<Toaster />

<Header name="Hamaki" />
<main>
	<h1>Forgot my appointment</h1>
	<p>No worries, that can happen just enter your e-mail and we will send your appointments</p>

	<form method="POST">
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" required />
		<button type="submit">Send me an email!</button>
	</form>
</main>
