<script>
	import { page } from '$app/stores';
</script>

<main>
	<div class="error-container">
		<h2>{$page.error.message}</h2>
	</div>
</main>

<style>
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
</style>
