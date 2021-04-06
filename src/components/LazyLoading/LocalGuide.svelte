<script>
    export let local

    import { onMount } from 'svelte'

    let loaded = false
    let thisImage

    onMount(() => {
        thisImage.onload = () => {
            loaded = true

        }
    })

</script>

<style>
    .localGuide {
        position: relative;
    }

    img {
        height: 100%;
        object-fit: cover;

        opacity: 0;
        transition: opacity 1200ms ease-out;
    }

    img.loaded {
        opacity: 1;
    }

    .info {
        position: absolute;
        bottom: 0;
        width: 100%;
        align-items: stretch;
        height: 75px;
    }

    .title {
        width: 75%;
        background-color: #25252580;
    }

    .cta {
        width: 25%;
        background-color: #252525cc;
        height: 100%;
    }

    a {
        width: 100%;
        text-decoration: none;

    }

    p {
        font-family: 'julius sans one';
        font-size: 1.3rem;
        color: white;
        text-align: center;
        height: 100%;
    }
</style>

<div class="localGuide">
    <img src={local.image} alt={local.title} class:loaded bind:this={thisImage} loading="lazy" />
    <div class="info">
        <div class="title">
            <p>{local.title}</p>
        </div>
        <a class="cta" href="{local.link}" rel="noreferrer" target="_blank">
            <p class="gradient-text gradient-blue-green">How?</p>
        </a>
    </div>
</div>