<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from 'svelte';

    let element, intersecting, previous, logo, dirn;
    onMount(() => {
        logo = document.getElementById("logo");
        previous = logo.innerHTML;
    });


    function inView() {
        if (intersecting)
            logo.innerHTML = "Ganga View"

    }
</script>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="hero-section" bind:this={element}>
        <div class="banner">
            <div>
                Rooms Starting @ Rs. 699 <br />Open 24 X 7
            </div>
            <div class="btn-book">
                <a href="https://www.booking.com/hotel/in/shri-ganga-view-guest-house.en-gb.html" target="_blank">Book
                    Now</a>
            </div>
        </div>
        <div class="info">Scroll Down To See More</div>
    </div>
</IntersectionObserver>
<style>
    .hero-section {
        width: 100%;
        height: 100vh;
        flex-flow: column wrap;
        justify-items: flex-end;
        position: relative;
        background-image: url("../images/sunset.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .banner {
        position: absolute;
        bottom: 20vh;
        width: 100%;
        padding: 10px;
        justify-content: space-around;
        background: rgba(255, 255, 255, 0.336);
        color: black;
        font-weight: bold;
    }

    .info {
        position: absolute;
        bottom: 10vh;
        color: white;
        justify-self: flex-end;
        text-shadow: 0 0 5px black, 0 0 3px black;
        font-size: large;
    }

    .btn-book {
        border-radius: 10px;
        background: #00171f;
        color: white;
        width: 100px;
        height: 50px;
        cursor: pointer;
        font-weight: normal;
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {
        .banner {
            background: rgba(255, 255, 255, 0.158);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }
    }
</style>