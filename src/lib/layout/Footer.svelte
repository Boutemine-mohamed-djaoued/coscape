<footer class="full-width relative bg-main block md:mt-72 p-5 md:py-10 text-400">
	<div class="lg:flex mx-auto max-w-[110rem] justify-evenly text-white">
		<div class="logo max-md:mb-5 max-md:pb-5 max-lg:border-b-2">
			<h2 class="text-500 font-bold mb-5">Our Brand</h2>
			<p class="max-w-[30ch]">
				Clarity gives you the blocks and components you need to create a truly professional website.
			</p>
		</div>
		<div class="first">
			<a href="/">Company</a>
			<a href="/">About</a>
			<a href="/">Features</a>
			<a href="/">Works</a>
			<a href="/">Career</a>
		</div>
		<div class="second">
			<a href="/">Help</a>
			<a href="/">Customer Support</a>
			<a href="/">Delivery Details</a>
			<a href="/">Terms & Conditions</a>
			<a href="/">Privacy Policy</a>
		</div>
		<div>
			<h3 class="text-center">Download Our App</h3>
			<a class="w-52 block" href="/">
				<img src="/home/feedBack/playStore.png" alt="" />
			</a>
			<a class="w-52 block -mt-5" href="/">
				<img src="/home/feedBack/appStore.png" alt="" />
			</a>
		</div>
	</div>
</footer>

<style>
	.first a,
	.second a {
		display: block;
		margin-block: 0.8rem;
	}
	.first a:hover,
	.second a:hover {
		font-weight: bold;
	}
	form > * {
		background-color: white;
		padding: 0.8rem 1rem;
		width: 100%;
		border-radius: 0.5rem;
		margin-block: 0.5rem;
	}
	@media (width > 768px) {
		footer::after {
			content: '';
			position: absolute;
			top: -16rem;
			left: 0;
			width: 100%;
			height: 16rem;
			background-image: url('/home/footer/bg.png');
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
</style>
