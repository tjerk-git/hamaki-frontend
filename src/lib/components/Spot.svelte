<script>
	import Time from 'svelte-time';
	export let spotTime;
	export let spotId;
	export let spotEndTime;
</script>

<a href="/reserve/{spotId}">
	<Time timestamp={spotTime} format="HH:MM" />
	-
	<Time timestamp={spotEndTime} format="HH:MM" />
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
				<g id="assets/icons/arrow" fill="#7958D6">
					<polygon
						transform="translate(11.600922, 8.000000) rotate(-180.000000) translate(-11.600922, -8.000000) "
						points="8.00278293 3.55271368e-15 1.5235185 6.47975554 1.52046273 6.4766452 0 7.99710793 0.00311033504 8.00021827 0 8.00327404 1.52046273 9.52373677 1.5235185 9.520681 8.00294663 16 9.52340936 14.4795373 4.11933864 9.07546655 23.2018444 9.07546655 23.2018444 6.92486085 4.11933864 6.92486085 9.52340936 1.52029903 8.00305577 3.55271368e-15"
					/>
				</g>
			</g>
		</svg>
	</span>
</a>

<style>
	a {
		background: #e7e4ee;
		padding: 1rem;
		color: #7958d6;
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
</style>
