<script>
	import { getCorrectDate } from '$lib/helpers';
	import { selectedSpot } from '$lib/stores/stores';

	const dateOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	};

	export let spot;
	export let calendar;

	const getUrl = (spot) => {
		if (isReserved(spot)) {
			return '';
		} else {
			return `/reserve/${spot.spotId}`;
		}
	};

	const saveSpot = (spot) => {
		selectedSpot.set(spot);
	};

	const isReserved = (spot) => {
		// if the spot is already reserved, return false
		if (spot.isReserved) {
			return true;
		}

		// get the current date and time for the spot
		const spotDate = new Date(spot.startDate);

		// get the current date and time
		const currentDate = new Date();

		// get the difference between currentDate and spotDate in number of minutes
		const diff = (spotDate - currentDate) / 60000;

		// remove negative value and round the diff
		// create positive value from
		const roundedDiff = Math.round(diff);
		let minutes = 0;

		if (calendar.allowReservationUpUntilMinutesBefore > 0) {
			minutes = calendar.allowReservationUpUntilMinutesBefore;
		}

		if (roundedDiff <= minutes) {
			return true;
		} else {
			return false;
		}
	};
</script>

<a href={getUrl(spot)} on:click={saveSpot(spot)} class:reserved={isReserved(spot)}>
	{#if isReserved(spot)}
	{#if spot.visitorEmail} <span class="visitor">Email: {spot.visitorEmail}</span>{/if}
	{#if spot.visitorName} <span class="visitor">Name: {spot.visitorName}</span>{/if}
		
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path
				d="M14 9v2h-4v-2c0-1.104.897-2 2-2s2 .896 2 2zm10 3c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-8-1h-1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h-1v6h8v-6z"
			/></svg
		>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path
				d="M12 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v3h2v-3c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-4v14h18v-14h-12zm10 12h-14v-10h14v10z"
			/></svg
		>
	{/if}

	<time>{getCorrectDate(spot.startDate, dateOptions)}</time>
	-
	<time>{getCorrectDate(spot.endDate, dateOptions)}</time>

	{#if spot.location} <span class="location">{spot.location}</span>{/if}



	{#if !isReserved(spot)}
		<span class="take-spot">
			<!--?xml version="1.0" encoding="UTF-8"?-->
			<svg
				width="24px"
				height="16px"
				viewBox="0 0 24 16"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<title>assets/icons/arrow</title>
				<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="assets/icons/arrow" fill="grey">
						<polygon
							transform="translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) "
							points="8.00278293 3.55271368e-15 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 3.55271368e-15"
						/>
					</g>
				</g>
			</svg>
		</span>
	{/if}
</a>

<style>
	a {
		background: #e7e4ee;
		padding: 1rem;
		color: var(--theme-accent);
		text-decoration: none;
		border-radius: 15px;
		cursor: pointer;
		display: block;
		display: flex;
		align-items: center;
		font-size: 20pt;
		margin-bottom: 30px;
		font-family: Inter;
	}
	a span:last-child {
		margin-left: auto;
	}

	.location {
		color: grey;
		font-size: 1rem;
	}

	.visitor {
		color: grey;
		font-size: 1rem;
		margin-left: 1rem;
	}

	time:last-of-type {
		margin-right: 1rem;
	}

	svg {
		fill: var(--theme-accent);
		margin-right: 20px;
	}
	.reserved {
		opacity: 0.4;
	}
</style>
