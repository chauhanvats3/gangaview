<script>
    import Breadcrumb from '../components/breadcrumb.svelte';
    export let heroImage;
    export let path;
    let heroSection;
</script>

<div class="hero-section" bind:this={heroSection} style="background-image: url('{heroImage}');">
    <div class="overlay">
        <Breadcrumb {path} />
    </div>
</div>

<style>
    .hero-section {
        margin-top: 70px;
        width: 100%;
        height: 450px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .overlay {
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.62) 100%);
        align-items: flex-end;
        justify-content: flex-end;
    }
</style>