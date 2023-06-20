<script lang="ts">
	export let data;
	import Popup from '$lib/components/Popup.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import Menu from '$lib/components/Menu.svelte';

	let popupVisible = false;
	let message = 'Are you sure you want to cancel the appointment?';

	const dismiss = () => {
		popupVisible = false;
	};

	const cancel = () => {
		cancelReservation(data.reservationId);
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

<Menu />

<main>
	<h2>Hey there!</h2>
	<br /><br />
	<p>You can download your appointment here below, in case you forgot.</p>
	<p>Or you could cancel your appointment.</p>
	<br /><br />

	<a
		href="{PUBLIC_BASE_URL}{data.reservation.icsURL}"
		target="_blank"
		style="text-decoration: none;"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			style="vertical-align: middle;"
		>
			<path
				d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"
				fill="#FFFFFF"
			/>
		</svg>
		<span style="vertical-align: middle; margin-left: 4px;">add to calendar</span>
	</a>

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
