<script>
    import { onMount } from 'svelte';

    let element, intersecting, previous, logo, dirn;

</script>
<div class="hero-section" id="hero" bind:this={element}>
    <div class="hero-image">
        <div class="tag-line">
            <h1>Heavenly View</h1>
            <p>Awaits You</p>
        </div>
    </div>
    <div class="cta">
        <a href="tel:+917579472022">
            <div class="call ">
                <p class="gradient-blue-pink gradient-text">Call Us</p>
            </div>
        </a>
        <a href="https://www.booking.com/hotel/in/shri-ganga-view-guest-house.en-gb.html" target="_blank"
            rel="noreferrer">
            <div class="book">
                <p class=" gradient-blue-green gradient-text">Book Now</p>
            </div>
        </a>
    </div>
</div>

<style>
    .hero-section {
        width: 100%;
        height: 100vh;
        justify-content: flex-start;
        flex-flow: column wrap;
        position: relative;

    }

    .hero-image {
        width: 100%;
        height: 92%;
        flex-flow: column nowrap;
        justify-content: flex-end;
        background-image: url("../images/sunset.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

    }

    .tag-line {
        width: 100%;
        flex-flow: column wrap;
        margin: 30px 10px;
    }

    .tag-line h1,
    .tag-line p {
        width: 100%;
        font-family: 'Julius Sans One';
    }

    .tag-line h1 {
        color: white;
        letter-spacing: 1.2rem;
        text-align: center;
    }

    .tag-line p {
        color: #BCBBBB;
        letter-spacing: 0.7rem;
        font-size: 1.3rem;
        text-align: center;
    }

    .cta {
        width: 100%;
        height: 8%;
    }

    .cta a {
        width: 100%;
        height: 100%;
        width: 50%;
        text-decoration: none;
    }

    .cta div {
        height: 100%;
        width: 100%;
        font-family: 'Julius Sans One';
        letter-spacing: 0.2rem;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }

    .cta div:hover {
        -moz-box-shadow: inset 0 8px 6px -6px black;
        -webkit-box-shadow: inset 0 8px 6px -6px black;
        box-shadow: inset 0 8px 6px -6px black;
    }

    .call {
        font-weight: bold;
    }

    .book {
        background: var(--dark-gray);
        font-weight: bold;
    }

    @media (min-width:950px) {

        .tag-line {
            background: rgba(59, 59, 59, 0.739);
            margin: 0;
            padding: 20px;
        }

        .tag-line h1 {
            font-size: 3rem;
        }

        .tag-line p {
            font-size: 2.5rem;
        }
    }
</style>