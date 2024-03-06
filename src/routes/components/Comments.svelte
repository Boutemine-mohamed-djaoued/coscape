<script>
	import { onMount } from 'svelte';
	import { Navigation } from 'swiper/modules';
	import 'swiper/css/navigation';
	import 'swiper/css';
	import Swiper from 'swiper/bundle';

	// import styles bundle
	import 'swiper/css/bundle';
	let comments = [
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		},
		{
			name: 'Delivery Express',
			img: '/home/comments/icon.png',
			tag: '@Delivery Company',
			content:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether its packages, documents, or special deliveries, trust us to bring efficiency'
		}
	];
	onMount(() => {
		let swiper8 = new Swiper('.swiper-container-comment', {
			effect: 'coverflow',
			modules: [Navigation],
			coverflowEffect: {
				rotate: 0,
				slideShadows: false
			},
			direction: 'horizontal',
			slidesPerView: 1,
			spaceBetween: 120,
			breakpoints: {
				1280: {
					slidesPerView: 3
				}
			},
			loop: true
		});
	});
</script>

<section class="full-width 2xl:pt-72 xl:pt-20">
	<h2 class="text-700 font-bold text-center text-white my-10">Discover Start Ups</h2>
	<div class="swiper swiper-container-comment w-full my-10">
		<div class="swiper-wrapper">
			{#each comments as comment}
				<div class="swiper-slide text-500">
					<div class="bg-white px-5 w-fit mx-auto rounded-xl shadow-lg">
						<div class="flex mx-auto w-fit py-5 gap-5">
							<img src={comment.img} alt="" />
							<div>
								<h3 class="text-500 font-semibold">{comment.name}</h3>
								<p class="text-300">{comment.tag}</p>
							</div>
						</div>
						<p class="max-w-[35ch] pb-5 mx-auto">{comment.content}</p>
						<div class="flex items-center py-5">
							<button class="w-fit mx-auto rounded-lg p-2 border-accent border-4 bg-white">
								Go To Profile
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('/home/comments/background.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-y: -20rem;
		/* background-color: red; */
	}
	@media (768px < width < 1024px) {
		section {
			background-position-y: -15rem;
		}
	}
</style>
