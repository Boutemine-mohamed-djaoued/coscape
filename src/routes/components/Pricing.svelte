<script>
	let time = 'monthly';
	const handleClick = (value) => {
		time = value;
	};
	let offers = [
		{
			amount: '$20',
			plan: 'Intro',
			description: 'For most businesses that want to otpimize web queries',
			options: ['All limited links', 'Chat support']
		},
		{
			amount: '$50',
			plan: 'Base',
			description: 'For most businesses that want to otpimize web queries',
			options: ['All limited links', 'Own analytics platform', 'Chat support']
		},
		{
			amount: '$100',
			plan: 'Pro',
			description: 'For most businesses that want to otpimize web queries',
			options: ['All limited links', 'Own analytics platform', 'Chat support', 'Unlimited users']
		},
		{
			amount: '$200',
			plan: 'Entreprise',
			description: 'For most businesses that want to otpimize web queries',
			options: [
				'All limited links',
				'Own analytics platform',
				'Chat support',
				'Optimize hashtags',
				'Unlimited users'
			]
		}
	];
</script>

<section id="pricing" class="wrapper text-white md:pt-72">
	<h2 class="text-center mx-auto max-md:text-main text-500 md:text-700 font-bold">
		Pricing Details
	</h2>
	<p class="text-center my-3 max-md:text-black mx-auto font-medium">No contacts.No surprise fees</p>
	<div class="choice mx-auto my-4">
		<button class:month={time == 'monthly'} on:click={() => handleClick('monthly')} class=""
			>Montly</button
		>
		<button class:year={time == 'yearly'} on:click={() => handleClick('yearly')} class=""
			>Yearly</button
		>
	</div>
	<div
		class="lg:flex lg:justify-between shadow-lg text-400 text-black bg-white rounded-2xl my-5 lg:my-24 p-5 lg:p-10"
	>
		{#each offers as offer}
			<div class:popular={offer.plan == 'Pro'} class="card max-lg:mb-10 lg:h-full flex flex-col">
				<div class="max-lg:flex justify-between flex-row-reverse">
					<div class="first"><span class="text-600 font-bold">{offer.amount}</span>/month</div>
					<div class="text-500 font-semibold">{offer.plan}</div>
				</div>
				<div class="my-3 lg:max-w-[22ch]">{offer.description}</div>
				<div>
					{#each offer.options as line}
						<div class="flex my-2 gap-2">
							{#if offer.plan == 'Pro'}
								<img src="/home/pricing/light.svg" alt="" />
							{:else}
								<img src="/home/pricing/dark.svg" alt="" />
							{/if}
							{line}
						</div>
					{/each}
				</div>
				<button class="lg:mt-auto px-10 py-2 rounded-full bg-[#2080E2] bg-opacity-15 text-[#2080E2]"
					>Choose Plan</button
				>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		background-image: url('home/pricing/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.choice button {
		@apply md:text-400 font-medium py-2 px-8 md:px-14 bg-off-white text-off-black rounded-lg;
	}
	.month,
	.year {
		@apply !bg-[#5243C2] !text-white;
	}
	.month {
		position: relative;
		left: 1rem;
	}
	.year {
		position: relative;
		right: 1rem;
	}

	.popular {
		@apply bg-[#5243C2] rounded-3xl shadow-2xl text-white px-8 py-5 relative lg:-translate-y-28 lg:h-[120%];
	}

	.popular > * {
		transform: translateY(2.5rem);
	}
	.popular button {
		transform: translateY(0rem);
		@apply bg-[#2080E2] text-white max-lg:mt-10;
	}
	.popular::after {
		content: 'most popular';
		position: absolute;
		background-color: #4031b3;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		text-align: center;
		top: 1rem;
		right: 1rem;
		font-size: 0.7em;
	}
</style>
