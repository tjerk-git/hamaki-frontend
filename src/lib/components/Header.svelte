<script>
	import { calendarName } from '$lib/stores/stores';
	import HamakiLogo from './HamakiLogo.svelte';
</script>

<header>
	<div class="logo--box" id="logo" style="margin-top: 25px;">
		<a href="/">
			<HamakiLogo />
		</a>
		<h1 id="title" style="font-size: 40pt;">{$calendarName}</h1>
	</div>
</header>

<style>
	header {
		height: 250px;
		width: 100vw;
		box-shadow: inset 0 -10px 10px -10px #2f2f2f;
		padding: 20px;
		display: flex;
		justify-content: center;
	}
	.logo--box {
		text-align: center;
		margin-top: 25px;
	}
</style>
