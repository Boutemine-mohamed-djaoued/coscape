<div class="logo text-700 text-main font-bold mt-5">Sayerly</div>
<div class="min-h-[100vh] gap-20 md:flex">
	<img class="min-w-0 place-self-center lg:max-w-[50rem]" src="home/landingPage/main.png" alt="" />
	<div class="shrink-0 flex-1 min-w-[20rem]">
		<h3 class="text-600 font-semibold">Welcome Founder !</h3>
		<p class="text-400">lets get you logged in</p>
		<form class="shrink-0 flex-1">
			<div class="flex gap-2">
				<input class="block" type="text" required placeholder="First name" />
				<input class="block" type="text" required placeholder="Last name " />
			</div>
			<input class="block" type="text" required placeholder="Company name" />
			<input class="block" type="text" placeholder="Date of Creation" />
			<input class="block" type="text" required placeholder="Adress" />
			<input class="block" type="text" required placeholder="Email" />
			<input class="block" type="text" placeholder="Phone" />
			<input class="block" type="text" placeholder="Website" />
			<input class="block" type="password" required placeholder="password" />
			<input class="block" type="password" required placeholder="confirm password" />
			<div class="flex justify-between my-3">
				<!-- <input class="w-2 inline-block" type="checkbox" id="checkbox1" name="checkbox1" /> -->
				remember me
				<a class="underline" href="/">Forget Password</a>
			</div>
			<a class="bg-main w-full block p-3 text-white text-center rounded-lg" href="/serveys"
				>Sign up</a
			>
			<a class="my-3 bg-[#D7503F] w-full block p-3 text-white text-center rounded-lg" href="/"
				>Sign up With Google</a
			>
			<div class="text-center">
				Already a member ?
				<a class="underline" href="/login">Sign in</a>
			</div>
		</form>
	</div>
</div>

<style>
	input {
		@apply block p-3 border-2 w-full my-3 rounded-lg;
	}
</style>
