<script>
    import IntersectionObserver from "svelte-intersection-observer";
    let element, intersecting, previous, logo;
    import { onMount } from 'svelte';
    onMount(() => {
        logo = document.getElementById("logo");
        previous = logo.innerHTML;
    });

    function inView() {
        if (intersecting)
            logo.innerHTML = "Testimonials"
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

    h1 {
        width: 100%;
        justify-content: flex-start;
        padding: 70px 0 40px 40px;
        margin: 0;
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.5 on:observe={inView}>

    <div class="reviews" bind:this={element}>
    </div>
</IntersectionObserver>