<script>
	import Metadata from '../components/metadata.svelte';
	import Hero from '../components/home/hm_hero.svelte';
	import Features from '../components/home/hm_features.svelte';
	import OurRooms from '../components/home/hm_our_rooms.svelte';
	import Testimonials from '../components/home/hm_testimonials.svelte';
	import FAQ from '../components/home/hm_faq.svelte';
	import ContactUs from '../components/home/hm_contact_us.svelte';

	const metadata = { url: "https://gangaview.com", title: "Shri Ganga View Guest House", description: "Best Budget Guest House with river view in Laxman Jhula, Rishikesh with rooms starting @ Rs 699", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }
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
	<Testimonials />
	<OurRooms />
	<Features />
	<FAQ />
	<ContactUs />
</div>