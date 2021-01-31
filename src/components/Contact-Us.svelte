<script>
    import IntersectionObserver from "svelte-intersection-observer";
    let element, intersecting, previous, logo;
    import { onMount } from 'svelte';
    onMount(() => {
        logo = document.getElementById("logo");
        previous = "About Us";
    });

    function inView() {
        if (intersecting)
            logo.innerHTML = "Contact Us";
        else {
            if (window.dirn === "down") {
                logo.innerHTML = previous
            }
        }
    }
</script>

<style>
    .contact-us {
        height: 100vh;
        width: 100%;
        background: #B4D1DE;
        flex-direction: column;
        justify-content: flex-start;
        overflow: hidden;
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="contact-us" id="contact-us" bind:this={element}>
    </div>
</IntersectionObserver>