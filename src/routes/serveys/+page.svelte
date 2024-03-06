<script>
	import Ai from './components/Ai.svelte';
	import Create from './components/Create.svelte';
	import History from './components/History.svelte';
</script>

<div class="flex gap-10 mt-10">
	<div class="flex-1">
		<History></History>
		<Ai></Ai>
	</div>
	<div class="h-[100%]">
		<Create></Create>
	</div>
</div>

<style>
</style>
