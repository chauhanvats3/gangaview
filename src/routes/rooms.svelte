<script>
    import Hero from '../components/Hero.svelte';
    import Category from '../components/Rooms/Category.svelte'
    import Metadata from '../components/metadata.svelte';

    const metadata = { url: "https://gangaview.com/rooms", title: "Rooms - Shri Ganga View Guest House", description: "Our Portfolio of rooms", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    let heroImage = "images/Rooms/view/3.jpg";
    let path = [{ name: "Our Rooms", href: "./rooms" }];
    let categories = [{
        name: "Room With View",
        image: "images/Rooms/view/2.jpg",
        features: {
            pro: ["Rs. 999", "River View", "Patio", "Terrace"],
            con: ["Television", "Balcony", "Air Conditioning"]
        }
    },
    {
        name: "Double Room",
        image: "images/Rooms/double/3.jpg",
        features: {
            pro: ["Rs. 849", "Patio", "Terrace"],
            con: ["Television", "Balcony", "Air Conditioning", "River View"]
        }
    },
    {
        name: "Budget Room",
        image: "images/Rooms/budget/1.jpg",
        features: {
            pro: ["Rs. 699", "Terrace"],
            con: ["River View", "Patio", "Television", "Balcony", "Air Conditioning"]
        }
    },
    {
        name: "Patio",
        image: "images/Rooms/patio/2.jpg",
        features: {
            pro: ["Common", "River View", "Sunset View", "Huge Space"],
            con: []
        }
    }];
</script>

<Metadata {metadata} />


<div class="rooms">
    <Hero {heroImage} {path} />
    {#each categories as category,i}
    <Category {category} index={i} />
    {/each}
</div>

<style>
    .rooms {
        width: 100%;
        height: 100%;
        flex-flow: column nowrap;
    }
</style>