<script>
	export let data;
	import Popup from '$lib/components/Popup.svelte';
	import { API_BASE_URL } from '$lib/variables';

	let popupVisible = false;
	let message = 'Are you sure you want to cancel the appointment?';

	const dismiss = () => {
		popupVisible = false;
	};

	const cancel = () => {
		let res = cancelReservation(data.reservation.id);
		console.log(res);
		//console.log('yeah');
	};

	function cancelReservation(reservationId) {
		const response = fetch(`/api/cancel/${reservationId}`, {
			method: 'DELETE'
		});

		console.log(response);
	}

	const showPopup = () => {
		popupVisible = true;
	};
</script>

<main>
	<h2>Hey there, {data.reservation.visitor.name}</h2>

	<button on:click={showPopup}> Cancel this appointment </button>

	<Popup {message} onDismiss={dismiss} onAccept={cancel} visible={popupVisible} />
</main>

<style>
</style>
