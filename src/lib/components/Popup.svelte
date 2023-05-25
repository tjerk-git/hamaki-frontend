<script lang="ts">
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
		<div class="button_container">
			<button class="outline" on:click={dismiss}>Nah</button>
			<button class="outline" on:click={accept}>Yes please</button>
		</div>
	</div>
{/if}

<style>
	.popup {
		background-color: #fff;
		max-width: 500px;
		margin: 0 auto;
		text-align: center;
		color: #363636;
		line-height: 1.3;
		will-change: transform;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
		pointer-events: auto;
		padding: 8px 10px;
		border-radius: 8px;
	}

	.button_container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
	}

	.outline {
		border: 2px solid #7958d6;
		color: #7958d6;
		background-color: transparent;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-right: 10px;
	}

	.outline:hover {
		background-color: #7958d6;
		color: #fff;
	}
</style>
