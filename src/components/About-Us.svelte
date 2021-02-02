<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from 'svelte';

    let element, intersecting, previous, logo;
    onMount(() => {
        logo = document.getElementById("logo");
        previous = "Testimonials";
    });

    function inView() {
        if (intersecting)
            logo.innerHTML = "About Us";
        else {
            if (window.dirn === "down") {
                logo.innerHTML = previous
            }
        }
    }
</script>

<style>
    .about-us {
        height: 100vh;
        width: 100%;
        background: #CAE1E9;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    p {
        width: 100%;
        justify-content: flex-start;
        font-size: 2rem;
        padding: 5px 10%;
        text-transform: capitalize;
    }

    @media (max-width: 860px) {
        p {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 470px) {
        p {
            font-size: 1.2rem;
        }
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="about-us" id="about-us" bind:this={element}>
        <p> 🏞️ Located just besides the ganga river </p>
        <p> 🌅 The sunset view from the sitting area is beautiful </p>
        <p> 🧑‍🎤 The ghat below the guest house enjoys music jamming session by talented indie singers very often </p>
        <p> ☮️ All the famous cafes will be a minute walk away from your room</p>
        <p> 🛀 The Rooms Are Cool, Peaceful And Clean With 24 Hours Hot Water Supply </p>
        <p> 🌉 We are Located At The Heart Of Laxman Jhula </p>
        <p> 💆 Very Close To Riverside, Laundry Services, Spa Center, Yoga Schools </p>
        <p> 🏕️ We have a Small Garden For Relaxation </p>
        <p> 📶 And, Free Wi-Fi that is Fast as well </p>
    </div>
</IntersectionObserver>