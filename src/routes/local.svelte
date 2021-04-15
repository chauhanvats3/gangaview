<script>
    import Hero from '../components/Hero.svelte'
    import LocalGuideLoader from '../components/LazyLoading/LocalGuideLoader.svelte'
    const path = [{ href: "./local", name: "Local Area" }]
    const heroImage = "images/local.jpg";
    import Metadata from '../components/metadata.svelte';

    const metadata = { url: "https://gangaview.com/local", title: "Local Area - Shri Ganga View Guest House", description: "Some of the best things to do around Rishikesh", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    let localGuides = [
        {
            title: "Get a Panoramic View Of Rishikesh",
            image: "images/local/panorama.jpg",
            link: "https://goo.gl/maps/6adXhMVheG4v2WrT7"
        },
        {
            title: "Go River Rafting",
            image: "images/local/rafting.jpg",
            link: "https://goo.gl/maps/9i6WW3JkmwfoVgLx9"
        },
        {
            title: "Participate in Ganga Ji Aarti",
            image: "images/local/aarti.jpg",
            link: "https://goo.gl/maps/yUDCiKA8UnChyHxs5"
        }
    ]
</script>
<Metadata {metadata} />

<div class="local">
    <Hero {path} {heroImage} />

    <p class="heading">Some Of the best things to do around Rishikesh</p>

    {#each localGuides as local}
    <LocalGuideLoader {local} />

    {/each}

</div>

<style>
    .local {
        width: 100%;
        flex-flow: column nowrap;
    }

    .heading {
        font-family: 'julius sans one';
        font-size: 2rem;
        padding: 20px;
        text-align: center;
    }
</style>