<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<Toaster />

<Header name="Hamaki" />
<Menu />
<main>
	<h1>Forgot my appointment</h1>
	<p>No worries, that can happen just enter your e-mail and we will send your appointments</p>
	<br /><br />
	<form method="POST">
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" required />
		<button type="submit">Send me an email!</button>
	</form>
</main>
