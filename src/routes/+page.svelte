<script>
	import Header from '$lib/components/Header.svelte';
	let name = 'Hamaki';
</script>

<Header {name} />
<nav>
	<ul>
		<li><a href="/about">About</a></li>
		<li><a href="/forgot">Forgot my appointment</a></li>
		<li><a href="#appstore">Download Hamaki for macOs</a></li>
	</ul>
</nav>

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

<style>
	nav {
		padding: 1.2rem;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	nav li {
		display: inline;
		margin-right: 20px;
	}

	nav a {
		color: white;
		text-decoration: none;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>
