<script>
	import { onMount } from 'svelte';
	import StatisticsGraph from './StatisticsGraph.svelte';
	let state = 'none';
	const handleClick = (value) => {
		state = value;
	};
	let debounceTimer;
	let show = false;
	onMount(() => {
		window.addEventListener(
			'resize',
			() => {
				clearTimeout(debounceTimer);
				// location.reload();
			},
			1000
		);
		let element = document.querySelector('.graph');
		let rect = element.getBoundingClientRect();
		window.addEventListener('scroll', () => {
			if (window.scrollY + 500 > rect.y - rect.height && state == 'none') {
				console.log(rect.y);
				state = 'production';
			}
		});
	});
</script>

<div class="wrapper bg-img">
	<section class="md:p-10 my-10 md:my-20 z-10">
		<h2 class="font-bold text-center text-700">Statistics</h2>
		<div class="p-5 rounded-2xl border-2 border-gray-200">
			<div class="md:flex md:my-10">
				<span class="text-500 font-semibold mr-auto block max-md:ml-2">Yearly Overview</span>
				<div class="max-md:my-3 flex gap-3 w-[19rem]">
					<button
						class:text-white={state == 'production'}
						class:bg-main={state == 'production'}
						class="border-main border-2"
						on:click={() => handleClick('productions')}>Production</button
					>
					<button
						class:text-white={state == 'sales'}
						class:bg-[#90BE6D]={state == 'sales'}
						class="border-[#90BE6D] border-2"
						on:click={() => handleClick('sales')}>Sells</button
					>
					<button
						class:text-white={state == 'opinions'}
						class:bg-black={state == 'opinions'}
						class="border-black border-2"
						on:click={() => handleClick('opinions')}>opintions</button
					>
				</div>
			</div>
			{#key state}
				<div class="graph">
					<StatisticsGraph {state}></StatisticsGraph>
				</div>
			{/key}
		</div>
	</section>
</div>

<style>
	.bg-img {
		background-image: url('startUps/bgWhite.png');
		/* height: 100%; */
		background-repeat: no-repeat;
		background-size: cover;
		/* background-position: end; */
		aspect-ratio: 1040/400;
	}
	button {
		border-radius: 0.5rem;
		font-weight: 500;
		min-width: 0;
		flex: 1;
	}
</style>
