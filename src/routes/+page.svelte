<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';

	let name = 'Hamaki';
</script>

<Header {name} />

<Menu />
<main />

<!-- 
	<section>
		<p>
			Hamaki is a versatile tool designed to simplify the process of scheduling and booking
			appointments without the complexities of deep calendar integration.
		</p>
		<p>
			With Hamaki, you can effortlessly generate spots in your calendar that are available for
			others to book. It provides a seamless and user-friendly interface where you can define your
			availability, set time slots, and customize various booking parameters.
		</p>
		<p>
			By eliminating the need for deep calendar integration, Hamaki streamlines the scheduling
			experience, making it accessible for both individuals and businesses.
		</p>
		<p>
			Whether you're a professional offering services or simply managing your personal calendar,
			Hamaki empowers you to effortlessly share your availability and allow others to book
			appointments with ease. With its intuitive features and hassle-free setup, Hamaki
			revolutionizes the way you manage and coordinate your schedule, saving you valuable time and
			effort.
		</p>
	</section> -->
