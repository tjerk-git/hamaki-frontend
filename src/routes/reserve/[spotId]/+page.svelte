<script>
	import { page } from '$app/stores';
	import { API_BASE_URL } from '$lib/variables';

	export let form;

	const { spotId } = $page.params;
</script>

<div class="reserve_container">
	{#if form?.success}
		<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

		<p>Thanks {form?.data.reservation?.visitor?.name} for reserving a spot!</p>

		{#if form?.data.reservation?.comment}
			A comment was included: {form?.data.reservation?.comment}
		{/if}

		<br />

		<a target="_blank" href="{API_BASE_URL}{form?.data.reservation?.icsURL}">Add to your calendar</a
		>
	{/if}

	{#if form?.success === false}
		<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->

		<p>Whoops, something went wrong</p>

		{#if form?.data.reason == 'IM Used'}
			<p>It looks like this spot has been claimed</p>
		{/if}

		<a href="/reserve/{spotId}">Try again</a>
	{/if}

	{#if !form?.success}
		<div class="spot__time">
			<a class="link" href="javascript:history.back()">
				<svg
					width="24px"
					height="16px"
					viewBox="0 0 24 16"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<g id="App" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Afspraak" transform="translate(-35.000000, -127.000000)" fill="#E7E4EE">
							<g
								id="assets/icons/arrow"
								transform="translate(46.600922, 135.000000) scale(-1, 1) translate(-46.600922, -135.000000) translate(35.000000, 127.000000)"
							>
								<polygon
									transform="translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) "
									points="8.00278293 0 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 0"
								/>
							</g>
						</g>
					</g>
				</svg>
			</a>
			<h2>
				<time
					datetime="2023-05-24T12:30:00Z"
					data-local="time"
					data-format="%e %B"
					title="May 24, 2023 at 2:30pm CEST"
					data-localized=""
					aria-label="24 May">24 May</time
				>
				at
				<time datetime="2023-05-24 12:30:00 UTC"
					><time
						datetime="2023-05-24T12:30:00Z"
						data-local="time"
						data-format="%H:%M"
						title="May 24, 2023 at 2:30pm CEST"
						data-localized=""
						aria-label="14:30">14:30</time
					></time
				>
				-
				<time datetime="2023-05-24 13:00:00 UTC"
					><time
						datetime="2023-05-24T13:00:00Z"
						data-local="time"
						data-format="%H:%M"
						title="May 24, 2023 at 3:00pm CEST"
						data-localized=""
						aria-label="15:00">15:00</time
					></time
				>
			</h2>
		</div>

		<form method="POST" action="/reserve/{spotId}">
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" required />

			<label for="name">Name:</label>
			<input type="text" name="name" id="name" required />

			<button type="submit">Claim that spot!</button>
		</form>
	{/if}
</div>

<style>
	.reserve_container {
		margin-bottom: 20px;
		padding: 20px;
	}
	.spot__time {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	label {
		margin-bottom: 10px;
	}

	input[type='text'],
	input[type='email'] {
		background: rgba(0, 0, 0, 30%);
		color: #ffffff;
		border: 1px solid #7958d6;
		border-radius: 5px;
		outline: none;
		padding: 1.2rem;
		font-size: 1.2rem;
		width: 100%;
		margin-bottom: 20px;
	}
	label {
		display: block;
	}
	button {
		background: #e7e4ee;
		color: #7958d6;
		text-decoration: none;
		text-align: left;
		border-radius: 15px;
		border: none;
		cursor: pointer;
		padding: 1rem;
		border-radius: 10px;
		outline: none;
		font-size: 1rem;
		line-height: 1.25;
		text-align: center;
		width: 100%;
	}
	.link {
		display: inline-block;
		padding-top: 10px;
	}
	.spot__time h2 {
		margin-left: 20px;
	}

	h2 {
		font-size: 1.75rem;
		font-family: Inter;
	}
</style>
