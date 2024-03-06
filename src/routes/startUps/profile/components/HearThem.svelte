<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation } from 'swiper/modules';
	import 'swiper/css/navigation';
	import 'swiper/css';
	let ratings = [
		{
			name: 'Michael Angelo | Marketing Director',
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: '/startUps/hearThem/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: '/startUps/hearThem/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: '/startUps/hearThem/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: '/startUps/hearThem/profileImg.png'
		}
	];
	onMount(() => {
		let swiper8 = new Swiper('.swiper-container-rating', {
			modules: [Navigation],
			direction: 'horizontal',
			slidesPerView: 1,
			spaceBetween: 40,
			breakpoints: {
				767: {
					speed: 1000
				}
			},
			speed: 500,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next-rating',
				prevEl: '.swiper-button-prev-rating'
			}
		});

		// Handle keyboard events for the next and pre button

		var prevButton = document.querySelector('.swiper-button-prev-rating');
		var nextButton = document.querySelector('.swiper-button-next-rating');

		prevButton.addEventListener('keydown', function (event) {
			if (event.key === 'Enter') {
				swiper8.slidePrev();
			}
		});

		nextButton.addEventListener('keydown', function (event) {
			if (event.key === 'Enter') {
				swiper8.slideNext();
			}
		});
	});
</script>

<section class="pt-5 md:pt-10 pb-10 md:pb-20 relative">
	<h2 class="text-600 md:text-700 relative z-10 font-bold mb-5 md:mb-10 w-fit">
		Hear it from them!
	</h2>
	<div class="swiper swiper-container-rating md:px-10 shadow-sm rounded-xl">
		<div class="swiper-wrapper">
			{#if ratings}
				{#each ratings as rating}
					<div class="swiper-slide">
						<div class="bg-white grid gap-x-3 md:gap-x-6 max-lg:gap-y-2 p-5 rounded-lg">
							<div
								class="profile-img overflow-clip xl:mx-5 rounded-full aspect-square min-w-[4rem] lg:row-start-1 lg:row-end-3"
							>
								<img
									class="w-full h-full"
									src={rating.profileImg}
									alt="profile img"
									loading="lazy"
								/>
							</div>
							<div>
								<div
									class="name font-bold max-md:max-w-[20ch] sm:text-600 text-gray-400 text-opacity-40"
								>
									{rating.name}
								</div>
							</div>
							<div
								class="comment truncate-text h-[6em] text-[0.7em] sm:text-400 max-lg:col-start-1 max-lg:col-end-3"
							>
								{rating.comment}
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div
		class="swiper-button-next-rating max-lg:w-[1.2rem] absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-10 z-20 cursor-pointer"
	>
		<img src="/startUps/hearThem/nextPage.svg" alt="next card" />
	</div>
	<div
		class="swiper-button-prev-rating max-lg:w-[1.2rem] rotate-180 absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-10 z-20 cursor-pointer"
	>
		<img src="/startUps/hearThem/nextPage.svg" alt="previous card" />
	</div>
</section>

<style>
	.swiper-slide > div {
		grid-template-columns: 1fr 4fr;
	}
	@media (max-width: 767px) {
		.swiper-slide > div {
			grid-template-columns: 1fr 4fr;
			grid-template-rows: auto;
		}
	}
	.truncate-text {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
