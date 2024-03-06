<script>
	import { messeges } from '$lib/stores/messeges.js';
	import { onMount } from 'svelte';
	let input;
	onMount(() => {
		input = document.querySelector('input');
	});
	const sendMessage = () => {
		if (input.value == '') return;
		let myArray = $messeges;
		myArray.push({
			owner: 'you',
			text: input.value
		});
		$messeges = myArray;
		input.value = '';
		myArray = [];
	};
	onMount(() => {
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Enter') {
				sendMessage();
			}
		});
	});
	console.log('lsdjklfkd');
</script>

<div
	class="sender bg-[#e4e2e230] ring-1 ring-gray-200 absolute bottom-5 w-full rounded-lg h-12 py-2 flex"
>
	<img class="mx-2" src="/mic.svg" alt="" />
	<img class="mr-2" src="/image.svg" alt="" />
	<input class="flex-1" type="text" placeholder="Type message" />
	<button on:click={() => sendMessage()}>
		<img class="mx-3" src="/arrow.svg" alt="" />
	</button>
</div>

<style>
	input {
		border: none;
		background-color: transparent;
	}
	input:focus-visible {
		outline: none;
	}
	.sender {
		width: calc(100% - 4rem);
	}
</style>
