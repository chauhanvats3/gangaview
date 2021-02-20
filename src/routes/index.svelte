<script>
	import Metadata from '../components/metadata.svelte';
	import Hero from '../components/Hero.svelte';
	import Gallery from '../components/Gallery.svelte';
	import Reviews from '../components/Reviews.svelte';
	import AboutUs from '../components/About-Us.svelte';
	import ContactUs from '../components/Contact-Us.svelte';

	const metadata = { title: "Shri Ganga View Guest House", description: "Best budget Guest House with river view in Laxman Jhula, Rishikesh with rooms starting @ Rs 699", keywords: "", thumbnail: "" }
</script>
<style>
	.index {
		flex-direction: column;
		width: 100%;
	}
</style>

<Metadata {metadata} />

<div class="index">
	<Hero />
	<Gallery />
	<Reviews />
	<AboutUs />
	<ContactUs />
</div>