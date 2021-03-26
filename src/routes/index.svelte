<script>
	import Metadata from '../components/metadata.svelte';
	import Hero from '../components/index/Hero.svelte';
	import Features from '../components/index/features.svelte';
	import OurRooms from '../components/index/OurRooms.svelte';
	import Testimonials from '../components/index/Testimonials.svelte';
	import FAQ from '../components/index/faq.svelte';
	import ContactUs from '../components/index/ContactUs.svelte';

	const metadata = { title: "Shri Ganga View Guest House", description: "Best Budget Guest House with river view in Laxman Jhula, Rishikesh with rooms starting @ Rs 699", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }
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
	<Features />
	<OurRooms />
	<Testimonials />
	<FAQ />
	<ContactUs />
</div>