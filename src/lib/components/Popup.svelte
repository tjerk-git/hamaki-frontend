<script>
	export let visible = false;
	export let message;
	export let onDismiss;
	export let onAccept;

	function dismiss() {
		onDismiss();
	}

	function accept() {
		onAccept();
	}
</script>

{#if visible}
	<div class="popup">
		<p>{message}</p>
		<button on:click={dismiss}>Dismiss</button>
		<button on:click={accept}>Accept</button>
	</div>
{/if}

<style>
	.popup {
		background-color: #fff;
		border: 1px solid #ccc;
		color: black;
		padding: 20px;
		max-width: 300px;
		margin: 0 auto;
		text-align: center;
	}
</style>
