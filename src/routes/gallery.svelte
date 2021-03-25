<script>
    import Hero from '../components/Hero.svelte'
    let heroImage = "images/Rooms/view/4.jpg"
    let path = [{ name: "Gallery", href: "./gallery" }]
</script>

<div class="gallery">
    <Hero {heroImage} {path} />
</div>

<style>
    .gallery {
        width: 100%;
    }
</style>