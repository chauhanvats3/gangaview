<script>
    import Metadata from '../components/metadata.svelte';

    const metadata = { url: "https://gangaview.com/sitemap", title: "Sitemap - Shri Ganga View Guest House", description: "Sitemap", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }
    let routes = [
        { href: ".", name: "Home" },
        { href: "./rooms", name: "Rooms & Amenities" },
        { href: "./gallery", name: "Gallery" },
        { href: "./testimonials", name: "Testimonials" },
        { href: "./faqs", name: "FAQs" },
        { href: "./local", name: "Local Area" },
        { href: "./contact", name: "Contact Us" },
        { href: "./cform", name: "CForm" }
    ];
</script>
<Metadata {metadata} />
<div class="sitemap">
    <p class="heading">Sitemap </p>
    {#each routes as route,index}

    {#if index%2==0}
    <a href={route.href} class="route bg1">
        <p class="gradient-text gradient-blue-pink">{route.name}</p>
    </a>
    {:else}
    <a href={route.href} class="route bg2">
        <p class="gradient-text gradient-blue-green">{route.name}</p>
    </a>
    {/if}
    {/each}

</div>

<style>
    .sitemap {
        margin-top: 70px;
        width: 100%;
        flex-flow: column nowrap;
        background: var(--back-white);
        justify-content: space-between;
        align-self: stretch;
    }

    .heading {
        font-size: 3rem;
        font-family: 'julius sans one';
        color: #7c7c7c;
    }

    .route {
        width: 100%;
        max-width: 75ch;
        height: 100px;
        text-decoration: none;
    }

    .bg1 {
        background-color: white;
    }

    .bg2 {
        background-color: var(--dark-gray);
    }

    .route p {
        font-family: 'julius sans one';
        font-size: 2rem;
        transition: all .2s ease-in-out;
    }

    .route:hover p {
        letter-spacing: .1rem;
    }
</style>