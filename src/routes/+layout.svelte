<script>
	// global styles
	import '../app.css';
	import Footer from '../lib/layout/Footer.svelte';
</script>

<div class="grid-system overflow-clip">
	<slot />
	<Footer></Footer>
</div>

<style>
</style>
