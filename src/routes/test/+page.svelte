<script lang="ts">
	import { FallingConfetti, ConfettiBurst, ConfettiCannon, random } from 'svelte-canvas-confetti';
	import { browser } from '$app/environment';
	import { tick } from 'svelte';

	const makeFallingConfetti = async () => {
		fallingConfetti = false;
		await tick();
		fallingConfetti = true;
	};

	const makeConfettiBurst = async () => {
		confettiBurst = false;
		await tick();
		confettiBurst = true;
	};

	const makeConfettiCannon = async () => {
		confettiCannon = false;
		await tick();
		confettiCannon = true;
	};

	let fallingConfetti = false;
	let confettiBurst = false;
	let confettiCannon = false;
</script>

<FallingConfetti />

{#if browser}
	<ConfettiBurst
		origin={[
			random((window.innerWidth / 4) * 3, window.innerWidth / 4),
			random((window.innerHeight / 4) * 3, window.innerHeight / 4)
		]}
	/>

	<ConfettiCannon
		origin={[window.innerWidth / 2, window.innerHeight]}
		angle={-90}
		spread={35}
		force={35}
	/>
{/if}
