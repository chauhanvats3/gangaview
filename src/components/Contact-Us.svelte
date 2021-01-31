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
            logo.innerHTML = "Contact Us"
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

    h1 {
        width: 100%;
        justify-content: flex-start;
        padding: 70px 0 40px 40px;
        margin: 0;
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.5 on:observe={inView}>

    <div class="contact-us" bind:this={element}>
    </div>
</IntersectionObserver>