<script>
	import Hero from '../components/Hero.svelte';
	import Rooms from '../components/Rooms.svelte';
	import Reviews from '../components/Reviews.svelte';
	import AboutUs from '../components/About-Us.svelte';
	import ContactUs from '../components/Contact-Us.svelte';
	import Footer from '../components/Footer.svelte';
</script>
<style>
	.index {
		flex-direction: column;
		width: 100%;
	}
</style>

<div class="index">
	<Hero />
	<Rooms />
	<Reviews />
	<AboutUs />
	<ContactUs />
	<Footer />
</div>