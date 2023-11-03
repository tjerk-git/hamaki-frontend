<script>
	let items = [
		{ title: '🚀 What is Hamaki?', content: 'Hamaki is MacOs app for scheduling appointments' },
		{
			title: '📅 How do I use it?',
			content: 'You "draw" spots on your calendar and people can sign up for those spots.'
		},
		{
			title: '🖥️ Where do I download Hamaki?',
			content: 'Hamaki will be availabe in the Mac app store in 2024'
		},
		{ title: '🦺 Is it safe?', content: "Yes, we don't store your data or your calendar" }
	];
</script>

<div>
	{#each items as item, index}
		<div class="accordion">
			<div class="item">
				{item.title}
			</div>
			<div class="content">
				{item.content}
			</div>
		</div>
	{/each}
</div>

<style>
	.accordion {
		border: 1px solid #ddd;
		border-radius: 4px;
		margin-bottom: 1.5rem;
		color: rgb(69, 69, 69);
	}

	.item {
		border-bottom: 1px solid #ddd;
		cursor: pointer;
		padding: 10px;
		background: rgb(229, 229, 229);
	}

	.content {
		padding: 1.5rem;
		background: white;
	}
</style>
