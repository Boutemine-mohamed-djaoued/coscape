<script>
	import { onMount } from 'svelte';
	import HearThem from './components/HearThem.svelte';
	import Statistics from './components/Statistics.svelte';
	import Subscribe from './components/Subscribe.svelte';
	import WhyUs from './components/WhyUs.svelte';
	import Founder from './components/Founder.svelte';
	import LandingPage from './components/LandingPage.svelte';
	// import { page } from '$app/stores';
</script>


<div>
	<LandingPage></LandingPage>
</div>
<Founder></Founder>
<WhyUs></WhyUs>
<Statistics></Statistics>
<HearThem></HearThem>
<Subscribe></Subscribe>

<style>
	@media (width > 1024px) {
		div::after {
			z-index: -1;
			content: '';
			position: absolute;
			right: min(-10rem, -25vw);
			top: 0;
			width: 100vw;
			height: 100rem;
			background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
				url('/startUps/landingPage/bgShape.svg');

			background-repeat: no-repeat;
		}
	}
</style>
