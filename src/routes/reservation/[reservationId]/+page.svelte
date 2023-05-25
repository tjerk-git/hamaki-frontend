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
		let res = cancelReservation(data.reservation.id);
		//console.log('yeah');
	};

	function cancelReservation(reservationId: string) {
		const response = fetch(`/api/cancel/${reservationId}`, {
			method: 'DELETE'
		});

		toast.success('Appointment has been cancelled');
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
