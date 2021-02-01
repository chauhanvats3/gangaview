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
        justify-content: flex-start;
        overflow: hidden;
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="about-us" id="about-us" bind:this={element}>
    </div>
</IntersectionObserver>