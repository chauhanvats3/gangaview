<script>
    import Hero from '../components/Hero.svelte';
    import ImageOverlay from '../components/ImageOverlay.svelte';
    import Metadata from '../components/metadata.svelte';

    const metadata = { url: "https://gangaview.com/gallery", title: "Gallery - Shri Ganga View Guest House", description: "Photos of our Rooms and View", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    let heroImage = "images/Rooms/view/4.jpg"
    let path = [{ name: "Gallery", href: "./gallery" }]
    let pageURL = "";
    let pageTitle = ""

    let categories = [{
        id: "1", name: "Room With View", images: [
            { src: "images/Rooms/view/1.jpg" },
            { src: "images/Rooms/view/2.jpg" },
            { src: "images/Rooms/view/3.jpg" },
            { src: "images/Rooms/view/4.jpg" }
        ]
    },
    {
        id: "2", name: "Double Room", images: [
            { src: "images/Rooms/double/1.jpg" },
            { src: "images/Rooms/double/2.jpg" },
            { src: "images/Rooms/double/3.jpg" },
            { src: "images/Rooms/double/4.jpg" },
            { src: "images/Rooms/double/5.jpg" },
            { src: "images/Rooms/double/6.jpg" },
            { src: "images/Rooms/double/7.jpg" },
            { src: "images/Rooms/double/8.jpg" },
            { src: "images/Rooms/double/9.jpg" },
            { src: "images/Rooms/double/10.jpg" }
        ]
    },
    {
        id: "3", name: "Budget Room", images: [
            { src: "images/Rooms/budget/1.jpg" },
            { src: "images/Rooms/budget/2.jpg" },
            { src: "images/Rooms/budget/3.jpg" },
            { src: "images/Rooms/budget/4.jpg" }
        ]
    },
    {
        id: "4", name: "Patio", images: [
            { src: "images/Rooms/patio/1.jpg" },
            { src: "images/Rooms/patio/2.jpg" },
            { src: "images/Rooms/patio/3.jpg" }
        ]
    }]

    let category = categories[0];
    let showImageOverlay = false;
    let handlePopImageOverlay = (event) => { categoryClicked(-1); };


    let categoryClicked = (id) => {
        showImageOverlay = !showImageOverlay;

        if (pageURL === "") {
            pageURL = window.location.href;
            pageTitle = document.title;
        }
        if (id > 0) {
            //Category Clicked
            category = categories.find(o => o.id === id);

            const nextURL = pageURL + '?imageOverlay=true';
            const nextTitle = pageTitle + " - Overlay";
            const nextState = { additionalInformation: 'Opened Image Overlay' };
            window.history.pushState(nextState, nextTitle, nextURL);
            window.onpopstate = function (event) {
                handlePopImageOverlay();
            };
        } else if (id === 0) {
            //Cross Clicked
            window.history.back();
        }
        else if (id === -1) {
            //back pressed
            showImageOverlay = false;
        }
    }
</script>
<Metadata {metadata} />

<div class="gallery">
    <Hero {heroImage} {path} />
    <div class="categories">
        {#each categories as category}
        <div class="category" on:click={()=>categoryClicked(category.id)}>
            <p class="gradient-blue-pink gradient-text">{category.name}</p>
        </div>
        {/each}
    </div>

    <ImageOverlay {showImageOverlay} {category} on:crossClicked={()=>categoryClicked(0)}/>
</div>

<style>
    .gallery {
        width: 100%;
        background-color: var(--dark-gray);
        min-height: 100vh;
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

    .categories {
        width: 100%;
        min-height: 360px;
        flex-grow: 1;
        flex-flow: column nowrap;
        justify-content: space-evenly;
    }

    .category {
        width: 100%;
        height: 80px;
        background-color: white;
        justify-content: flex-start;
        cursor: pointer;
    }

    .category p {
        text-justify: "left";
        font-family: 'Julius Sans One';
        font-size: 2rem;
        margin: auto 20px;
    }
</style>