<script lang="ts">
	export let data;
	import Popup from '$lib/components/Popup.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let popupVisible = false;
	let message = 'Are you sure you want to cancel the appointment?';

	const dismiss = () => {
		popupVisible = false;
	};

	const cancel = () => {
		cancelReservation(data.reservation.id);
		//console.log('yeah');
	};

	async function cancelReservation(reservationId) {
		try {
			const response = await fetch(`/api/cancel/${reservationId}`, {
				method: 'DELETE'
			});

			if (response.ok) {
				toast.success('Appointment has been cancelled');
				// Additional logic after successful cancellation
			} else {
				throw new Error('Failed to cancel appointment');
			}
		} catch (error) {
			toast.error('An error occurred while cancelling the appointment');
			console.error(error);
			// Additional error handling
		}

		// Update popup visibility
		popupVisible = false;
	}

	const showPopup = () => {
		popupVisible = true;
	};
</script>

<Toaster />

<main>
	<h2>Hey there!</h2>
	<br /><br />
	<p>You can download your appointment here below, in case you forgot.</p>
	<p>Or you could cancel your appointment.</p>
	<br /><br />

	<a target="_blank" class="outline" href="{PUBLIC_BASE_URL}{data.reservation.icsURL}"
		>Add to your calendar</a
	>

	<button class="outline" on:click={showPopup}> Cancel this appointment </button>

	<Popup {message} onDismiss={dismiss} onAccept={cancel} visible={popupVisible} />
</main>

<style>
	.outline {
		border: 2px solid #7958d6;
		color: white;
		background-color: transparent;
		padding: 1.2rem;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-right: 10px;
		margin-top: 10px;
		text-decoration: none;
		font-size: 1.2rem;
	}

	.outline:hover {
		background-color: #b49bf9;
		color: #fff;
	}
</style>
