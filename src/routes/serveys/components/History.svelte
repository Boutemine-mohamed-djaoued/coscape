<script>
	import { hisotry } from './../../../lib/stores/history.js';
</script>

<section class="shadow-md ring-1 ring-gray-200 rounded-xl p-5">
	<h2 class="text-500 mx-2 mb-1 text-main font-semibold">Surveys history</h2>
	<div class="max-h-[20rem] overflow-y-scroll">
		{#each $hisotry as survey}
			<div class="flex ms-2 me-4 justify-between my-3 rounded-lg ring-1 ring-gray-200 p-3">
				<div class="flex">
					<img class="mr-3" src="/home/comments/icon.png" alt="" />
					<div>
						<h3 class="font-semibold">{survey.name}</h3>
						<p class="text-[0.9em] text-[#6c6c6c]">{survey.tag}</p>
						<p class="mt-4">{survey.description}</p>
					</div>
				</div>
				<div class="flex items-center">
					<div class="flex items-center mx-4">
						<img class="w-4 mx-1" src="/time.svg" alt="" />
						<div class="text-main shrink-0">
							{survey.time}
						</div>
					</div>
					<div class="flex bg-main items-center text-white p-2 rounded-sm">
						<img class="w-6" src="/cash.svg" alt="" />
						<p class="shrink-0">
							{survey.price}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* your styles go here */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
		margin-top: 0.75rem;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-main;
		border-radius: 20px;
	}
</style>
