<script>
	import { FallingConfetti, ConfettiBurst, ConfettiCannon, random } from 'svelte-canvas-confetti';
	import { browser } from '$app/environment';
	import { tick } from 'svelte';

	let confettiQue = ['one'];

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
		confettiCannon = !confettiCannon;

		confettiQue.push('more');
	};

	let fallingConfetti = false;
	let confettiBurst = false;
	let confettiCannon = false;
</script>

<FallingConfetti />

{#if browser && confettiCannon}
	{#each confettiQue as que}
		<ConfettiCannon
			origin={[window.innerWidth / 2, window.innerHeight]}
			angle={Math.floor(Math.random() * (360 - 0 + 1) + 0)}
			spread={Math.floor(Math.random() * (0 - 100 + 1) + 0)}
			force={Math.floor(Math.random() * (0 - 100 + 1) + 0)}
		/>
	{/each}
{/if}

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

<div class="box" on:click={makeConfettiCannon}>
	<button>MORE CONFETTI</button>
</div>
