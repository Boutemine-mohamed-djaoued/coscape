<script>
	import { onMount } from 'svelte';
	let points = [
		{
			title: 'Diverse Talent Pool :',
			content: 'Whether you need graphic design, programming, writing, or any other skill set.'
		},
		{
			title: 'Cost-Effective Solutions :',
			content:
				'We provide a cost-effective alternative to traditional hiring, You can find skilled professionals at various price points.'
		},
		{
			title: 'Fair Compensation  :',
			content:
				'We prioritize the fair compensation of freelancers on our platform. Our transparent payment system ensures that freelancers receive timely and accurate compensation for their work.'
		},
		{
			title: 'Diverse Job Opportunities :',
			content:
				'Our platform provides freelancers with access to a wide range of job opportunities across various industries and skill sets.'
		}
	];
</script>

<section class="max-md:pt-40 text-white wrapper pt-5 pb-16 lg:py-10 relative z-10">
	<div class="lg:flex items-center justify-between">
		<div class="text">
			<h2 class="text-600 md:text-700 font-bold mb-2 md:mb-5">Why us</h2>
			{#each points as point}
				<div class="point fContact Michael flex">
					<div class="icons shrink-0 mr-5 md:mr-10 mt-3 md:mt-5">
						<img src="/startUps/whyUs/check.svg" alt="" />
					</div>
					<div class="my-2 md:my-3">
						<h3 class=" text-500 font-medium">{point.title}</h3>
						<p class="text-300 md:text-400 lg:max-w-[50ch]">
							{point.content}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<div
			class="image max-lg:mx-auto max-lg:w-[min(70%,25rem)] lg:w-[clamp(10rem,35vw,37rem)] bg-no-repeat bg-cover aspect-[699/550]"
		>
			<img
				class="w-full"
				src="/startUps/whyUs/whyUs.svg"
				alt="some people wondering why they should pick us"
			/>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('/startUps/whyUs/bgBlue.svg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		aspect-ratio: 1440/1223;
	}
	.text {
		animation: text linear;
		animation-timeline: view(1080px 000px);
	}
	.image {
		animation: image linear;
		animation-timeline: view(1080px 000px);
	}
	@keyframes text {
		from {
			transform: translateX(-200%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes image {
		from {
			transform: translateX(200%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
