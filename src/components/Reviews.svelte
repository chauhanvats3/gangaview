<script>
    import IntersectionObserver from "svelte-intersection-observer";
    let element, intersecting, previous, logo;
    import { onMount } from 'svelte';
    onMount(() => {
        logo = document.getElementById("logo");
        previous = "Our Rooms";
    });

    function inView() {
        if (intersecting)
            logo.innerHTML = "Testimonials"
        else {
            if (window.dirn === "down") {
                logo.innerHTML = previous
            }
        }
    }
</script>

<style>
    .reviews {
        width: 100%;
        height: 100vh;
        background: #E1F3FA;
        flex-direction: column;
        justify-content: flex-start;
        overflow: hidden;
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="reviews" bind:this={element}>
    </div>
</IntersectionObserver>