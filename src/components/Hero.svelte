<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from 'svelte';

    let element, intersecting, previous, logo, dirn;
    onMount(() => {
        logo = document.getElementById("logo");
        logo.innerHTML = "<a href='.' style='text-decoration:none'>Ganga View<a>";
        previous = logo.innerHTML;
    });


    function inView() {
        logo.innerHTML = "<a href='.' style='text-decoration:none'>Ganga View</a>"
    }
</script>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="hero-section" id="hero" bind:this={element}>
        <div class="banner">
            <div class="info">
                Rooms Starting @ Rs. 699 <br />Open 24 X 7
            </div>
            <div class="cta">
                <a href="https://www.booking.com/hotel/in/shri-ganga-view-guest-house.en-gb.html" target="_blank">
                    <div class="btn btn-book">Book Now</div>

                </a>
                <a class="call-btn" href="#contact-us">
                    <div class="btn btn-call"> Call Now </div>
                </a>
            </div>
        </div>
        <div class="scroll-hint">Scroll Down To See More</div>

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
        font-size: 1.2rem;
    }


    .banner a {
        color: white;
    }


    .btn {
        border-radius: 10px;
        color: white;
        width: 130px;
        height: 70px;
        cursor: pointer;
        font-weight: normal;
        transition: all 0.4s ease;
        margin: 0 10px;
    }

    .cta {
        height: 100%;
    }

    .btn-book {
        background: #00171f;
    }

    .btn-book:hover {
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.794);
    }


    .scroll-hint {
        position: absolute;
        bottom: 10vh;
        color: white;
        justify-self: flex-end;
        text-shadow: 0 0 5px black, 0 0 3px black;
        font-size: 1.5rem;
    }

    .btn-call {
        background: #00171fbe;
        color: azure;
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .banner {
            background: rgba(255, 255, 255, 0.158);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }

        .btn-call {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }

    }

    @media(max-width: 600px) {

        .info {
            display: none;
        }

        .cta {
            width: 100%;
            justify-content: space-around;
        }

        .btn {
            width: 100px;
            height: 60px;
        }

        .scroll-hint {
            font-size: large;
        }

        .banner {
            font-size: medium;
        }
    }
</style>