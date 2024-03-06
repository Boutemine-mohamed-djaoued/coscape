<script>
	const handleSubmit = () => {
		let SubscribetionButton = document.querySelector('button');
	};
</script>

<div
	class="subsucribetion relative text-white bg-accent mb-48 p-5 md:p-10 rounded-3xl overflow-clip isolate"
>
	<h1 class="text-center text-500 lg:text-600 font-bold lg:mb-10">Subscribe to our newsletter</h1>
	<form class="flex-col lg:flex-row flex items-center justify-center gap-5 text-400 my-5">
		<input type="text" placeholder="First name" required />
		<input type="text" placeholder="Email address" required />
		<button
			on:click={() => handleSubmit()}
			class="bg-black rounded-[0.5rem] p-4 lg:p-5"
			type="subscribe">Subscribe Now</button
		>
	</form>
</div>

<style>
	input {
		background-color: inherit;
		border: 2px solid white;
		padding: 1.2rem;
		border-radius: 0.5rem;
	}
	input::placeholder {
		color: white;
	}
	input:focus {
		outline: 0;
	}
	form > * {
		width: min(20rem, 100%);
	}
	.subsucribetion::before {
		content: '';
		border-radius: 50%;
		position: absolute;
		border: 5px white solid;
		top: calc(-2.5vw - 3.5rem);
		left: calc(-2.5vw - 3.5rem);
		width: calc(5vw + 7rem);
		aspect-ratio: 1;
		opacity: 0.5;
		z-index: -1;
	}
	.subsucribetion::after {
		content: '';
		border-radius: 50%;
		position: absolute;
		border: 5px white solid;
		top: calc(100% - 2.5vw - 3.5rem);
		left: calc(100% - 2.5vw - 3.5rem);
		width: calc(5vw + 7rem);
		aspect-ratio: 1;
		z-index: -1;
	}
</style>
