<script lang="ts">
	export let data;
	import Popup from '$lib/components/Popup.svelte';
	import toast, { Toaster } from 'svelte-french-toast';

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
	<h2>Hey there, {data.reservation.visitor.name}</h2>

	<button on:click={showPopup}> Cancel this appointment </button>

	<Popup {message} onDismiss={dismiss} onAccept={cancel} visible={popupVisible} />
</main>

<style>
</style>
