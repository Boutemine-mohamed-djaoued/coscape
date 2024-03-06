<script>
	let wageDown = false;
	let wage = '50 Da';
	const handleClick = () => {
		wageDown = !wageDown;
	};
	const pickWage = (value) => {
		wage = value;
		wageDown = false;
	};
</script>

<aside class="shadow-md ring-1 ring-gray-200 rounded-xl p-10 bg-white h-full">
	<h2 class="text-500 font-semibold text-main">Create Survey</h2>
	<p class="text-[0.9em] text-[#8b8b8b]">create a survey and collet data from users</p>
	<div class="h-40 flex flex-col items-center justify-center gap-3 border-2 border-dashed p-3 my-5">
		<img class="w-5" src="/cloud.svg" alt="" />
		<p class="text-[#838282]">Click or drag a video to this area ro upload</p>
	</div>
	<label
		for="file"
		class="flex justify-center py-2 mx-10 text-main border-main border-2 rounded-xl"
	>
		<img src="/upload.svg" alt="" />
		Upload Your video
	</label>
	<input class="hidden" type="file" id="file" />
	<div class="flex justify-between my-5">
		<span class="text-400 font-meduim">Wage:</span>
		<div>
			<button
				on:click={() => handleClick()}
				class="rounded-lg text-main border-main border-2 py-1 px-3"
			>
				<span>{wage}</span>
				<img class:rotate-180={wageDown} class="inline-block" src="/down.svg" alt="" />
			</button>
			<div class:up={!wageDown} class:down={wageDown} class="more">
				<div
					class:border-2={wageDown}
					class="mt-1 rounded-lg px-2 flex-col flex items-start border-gray-200"
				>
					<button on:click={() => pickWage('10 DA')} class="hover:text-main">10 DA</button>
					<button on:click={() => pickWage('50 DA')} class="hover:text-main">50 DA</button>
					<button on:click={() => pickWage('100 DA')} class="hover:text-main">100 DA</button>
				</div>
			</div>
		</div>
	</div>
</aside>

<style>
	.more {
		display: grid;
		transition: grid-template-rows 0.3s ease;
	}
	.up {
		grid-template-rows: 0fr;
	}
	.down {
		grid-template-rows: 1fr;
	}
	.more > div {
		overflow: hidden;
	}
</style>
