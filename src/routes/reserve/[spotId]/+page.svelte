<script>
	import { page } from '$app/stores';
	import { API_BASE_URL } from '$lib/variables';

	const { spotId } = $page.params;

	console.log(spotId);

	let email = '';
	let name = '';

	function handleSubmit() {
		const formData = {
			email,
			name,
			spotId
		};

		fetch(`${API_BASE_URL}/api/v1/spots/reserve`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Response:', data);
				// Handle the response from the server if needed
			})
			.catch((error) => {
				console.error('Error:', error);
				// Handle any errors that occurred during the request
			});
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="email">Email:</label>
	<input type="email" id="email" bind:value={email} required />

	<label for="name">Name:</label>
	<input type="text" id="name" bind:value={name} required />

	<button type="submit">Submit</button>
</form>
