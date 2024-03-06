<div>
	<h1 class="text-center mx-auto text-500 md:text-700 my-5 font-bold">
		Trust Pilot to Analyze Your Start Up
	</h1>
	<p class="text-center mx-auto md:text-400 font-meduim max-w-[80ch]">
		Boost startup credibility with 'Your Trust Pilot.' Our project analyzes and enhances trust,
		fostering positive reviews and building lasting customer relationships for your success.
	</p>
	<div class="img relative">
		<img class="mt-10 -mb-10 mx-auto" src="/home/landingPage/main.png" alt="" />
		<div class="lens"></div>
	</div>
</div>

<style>
	.img::after,
	.img::before {
		content: '';
		position: absolute;
		width: 20%;
		height: 100%;
		top: 25%;
		background-repeat: no-repeat;
		z-index: -1;
	}
	.img::after {
		background-image: url('home/landingPage/left.png');
		left: 0;
	}
	.img::before {
		background-image: url('home/landingPage/right.png');
		right: 0;
	}
	.lens {
		position: absolute;
		aspect-ratio: 27/15;
		width: min(27vw, 25rem);
		bottom: -3vw;
		right: 25%;
		background-size: cover;
		background-image: url('home/landingPage/lens.png');
		background-repeat: no-repeat;
	}
</style>
