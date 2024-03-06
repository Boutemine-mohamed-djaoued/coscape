<script>
	import { onMount } from 'svelte';
	import { messeges } from './../../../lib/stores/messeges.js';
	import Send from './send.svelte';
	let container;
	onMount(() => {
		container = document.querySelector('.messeges');
		messeges.subscribe(() => {
			setTimeout(() => {
				// container.scrollTop = container.scrollHeight + 1000;
			}, 0);
		});
	});
</script>

<section
	class="bg-white relative h-[25rem] flex flex-col mt-10 px-8 pb-20 pt-3 rounded-xl shadow-md ring-1 ring-gray-200"
>
	<h2 class="text-600 font-semibold text-main">Ask Ai</h2>
	<p class="text-[#7b7979]">
		AI models designed to assist you in diagnosing Pain Points of your Start Up .
	</p>
	<div class="messeges flex flex-col py-3 mt-3 h-full overflow-y-scroll">
		{#each $messeges as messege}
			{#if messege.owner == 'you'}
				<p class="ml-auto bg-[#f0f0f0] p-2 my-2 rounded-xl rounded-se-none">{messege.text}</p>
			{:else}
				<p class="bg-[#f0f0f0] w-fit p-2 my-2 rounded-xl rounded-ss-none">{messege.text}</p>
			{/if}
		{/each}
	</div>
	<div class="bottom-0">
		<Send></Send>
	</div>
</section>

<style>
	/* your styles go here */
	::-webkit-scrollbar {
		width: 0px;
	}
</style>
