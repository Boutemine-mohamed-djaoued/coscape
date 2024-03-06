<script>
	let services = [
		{
			logo: '/home/services/logo3.svg',
			idea: 'Insight Startup',
			content:
				'Empowering startups through targeted feedback, our Startup Insight services provide invaluable perspectives for strategic growth and success. Gain a competitive edge by leveraging actionable insights tailored to your business needs.'
		},
		{
			logo: '/home/services/logo1.svg',
			idea: 'Investor Connect',
			content:
				'Our Investor connect service streamlines the investment process by saving valuable time for investors. Leveraging survey data, we connect investors with the most promising startups, ensuring efficient and informed investment decisions.'
		},
		{
			logo: '/home/services/logo2.svg',
			idea: 'AI Enhancement',
			content:
				'Empower your startup with AI Enhancement, a service designed to refine ideas and streamline execution using advanced language models. Unlock innovation and elevate your strategies for a successful entrepreneurial journey.'
		}
	];
</script>

<div id="services" class="my-10">
	<h2 class="text-500 md:text-700 my-10 font-bold text-main text-center">Our Services</h2>
	<div class="lg:flex gap-5">
		{#each services as service}
			<div class="card max-lg:my-5">
				<img class="mx-auto max-md:w-28" src={service.logo} alt="" />
				<h3 class="text-400 md:text-600 my-5 font-semibold text-center">{service.idea}</h3>
				<p class="md:text-400 font-normal text-center mx-auto max-w-[50ch]">{service.content}</p>
			</div>
		{/each}
	</div>
</div>
