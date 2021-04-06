<script>
    import Hero from '../components/Hero.svelte'
    import LocalGuideLoader from '../components/LazyLoading/LocalGuideLoader.svelte'
    const path = [{ href: "./local", name: "Local Area" }]
    const heroImage = "images/local.jpg"

    let localGuides = [
        {
            title: "Get a Panoramic View Of Rishikesh",
            image: "images/local/panorama.jpg",
            link: "https://goo.gl/maps/z7jAAebRgpQWBAB4A"
        },
        {
            title: "Go River Rafting. . . Again",
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

<div class="local">
    <Hero {path} {heroImage} />

    <p class="heading">Here's Some Of the best things to do around Laxman Jhula</p>

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