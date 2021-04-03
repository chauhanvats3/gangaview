<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function crossClicked() {

        dispatch('crossClicked', {
            text: 'Clicked!'
        });
    }
    export let showImageOverlay = false;
    export let category;
</script>

<div class="imageOverlay" class:showImageOverlay>
    <div class="header">
        <p class="gradient-text gradient-blue-green">{category.name}</p>
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" on:click={crossClicked}>
            <path d="M39.1666 7.83334L7.83325 39.1667M39.1666 39.1667L7.83325 7.83334L39.1666 39.1667Z" stroke="white"
                stroke-width="2" stroke-linecap="round" />
        </svg>

    </div>
    <div class="content">
        <div class="scroll">
            {#each category.images as image}
            <img src={image.src} alt="">
            {/each}
        </div>
    </div>

    <a href="google.com">
        <div class="book">
            <p class="bookp gradient-text gradient-blue-green">Book Now</p>
        </div>
    </a>
</div>

<style>
    .imageOverlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0%;
        top: 100%;
        flex-flow: column nowrap;
        transition: top 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        background-color: white;
        z-index: 100;
    }

    :global(.imageOverlay.showImageOverlay) {
        top: 0%;
    }

    .header {
        width: 100%;
        height: 90px;
        justify-content: space-between;
        padding: 0 20px;
        background-color: var(--dark-gray);
    }


    p {
        font-family: 'Julius Sans One';
        font-size: 2rem;
    }

    svg {
        cursor: pointer;
    }

    .content {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .scroll {
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        flex-direction: column;
        overflow-y: scroll;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }

    img {
        margin: 10px;
    }

    img:last-child {
        margin-bottom: 0;
    }

    a {
        width: 100%;
        text-decoration: none;
    }

    .book {
        height: 60px;
        width: 100%;
        background-color: var(--dark-gray);
    }

    .bookp {
        font-size: 1.5rem;
    }
</style>