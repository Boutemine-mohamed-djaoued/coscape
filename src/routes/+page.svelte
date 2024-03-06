<script>
	import Comments from './components/Comments.svelte';
	import NewsLetters from './components/NewsLetters.svelte';
	import Service from './components/Service.svelte';
	import MainHeader from '$lib/layout/MainHeader.svelte';
	import LandingPage from './components/LandingPage.svelte';
	import FeedBack from './components/FeedBack.svelte';
	import Pricing from './components/Pricing.svelte';
	import SignUp from './components/signUp.svelte';
</script>

<MainHeader></MainHeader>
<LandingPage></LandingPage>
<FeedBack></FeedBack>
<Service></Service>
<Pricing></Pricing>
<NewsLetters></NewsLetters>
<Comments></Comments>
<SignUp></SignUp>
