<script>
	let features = [
		{ 
			emoji: '🚀', 
			title: 'What is Hamaki?', 
			content: 'Hamaki is a macOS app for scheduling appointments with a simple, intuitive interface.' 
		},
		{
			emoji: '📅',
			title: 'How do I use it?',
			content: 'Simply "draw" available time slots on your calendar and let people book those spots instantly.'
		},
		{
			emoji: '🦺',
			title: 'Is it safe?',
			content: "Yes, absolutely! We don't store your data or access your calendar - everything stays private."
		}
	];
</script>

<div class="hero-section">
	<div class="hero-content">
		<h1>Meet Hamaki</h1>
		<p class="hero-description">The simplest way to let people book time with you</p>
		
		<div class="download-section">
			<a href="https://apps.apple.com/nl/app/hamaki/id1627733431?l=en-GB&mt=12" 
			   target="_blank" 
			   rel="noopener noreferrer" 
			   class="download-button">
				<span class="app-store-icon">📱</span>
				Download on the Mac App Store
			</a>
		</div>
	</div>
</div>

<div class="features-grid">
	{#each features as feature}
		<div class="feature-card">
			<div class="feature-emoji">{feature.emoji}</div>
			<h3 class="feature-title">{feature.title}</h3>
			<p class="feature-content">{feature.content}</p>
		</div>
	{/each}
</div>

<style>
	.hero-section {
		text-align: center;
		padding: 3rem 0 2rem 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-radius: 12px;
		margin-bottom: 3rem;
	}

	.hero-content h1 {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.hero-description {
		font-size: 1.3rem;
		margin: 0 0 2rem 0;
		opacity: 0.95;
		font-weight: 300;
	}

	.download-section {
		margin-top: 2rem;
	}

	.download-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.download-button:hover {
		background: rgba(255, 255, 255, 0.25);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	.app-store-icon {
		font-size: 1.2rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.feature-card {
		background: white;
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		border: 1px solid rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
	}

	.feature-emoji {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature-title {
		font-size: 1.4rem;
		font-weight: 600;
		color: #333;
		margin: 0 0 1rem 0;
	}

	.feature-content {
		color: #666;
		line-height: 1.6;
		margin: 0;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 2.2rem;
		}
		
		.hero-description {
			font-size: 1.1rem;
		}
		
		.download-button {
			padding: 0.875rem 1.5rem;
			font-size: 1rem;
		}
		
		.features-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		
		.feature-card {
			padding: 1.5rem;
		}
	}
</style>
