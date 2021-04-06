<script>
    import Hero from '../components/Hero.svelte'
    import Metadata from '../components/metadata.svelte'
    const metadata = { url: "https://gangaview.com/contact", title: "Contact Us - Shri Ganga View Guest House", description: "We are very accessible. Here's how to reach us.", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }
    let heroImage = 'images/contact.jpg'
    const path = [{ name: "Contact Us", href: "./contact" }]
</script>

<div class="contact">
    <Hero {heroImage} {path} />
    <a href="https://wa.me/917579472022" class="cta whatsapp dark" rel="noreferrer" target="_blank">
        <p>Whatsapp</p>
    </a>
    <a href="tel:+917579472022" class="cta call" rel="noreferrer" target="_blank">
        <p class="gradient-text gradient-blue-pink">Call Us</p>
    </a>
    <a href="https://g.page/shri-ganga-view?share" class="cta directions dark" rel="noreferrer" target="_blank">
        <p class="gradient-text gradient-blue-green">Directions</p>
    </a>
    <a href="https://www.booking.com/hotel/in/shri-ganga-view-guest-house.en-gb.html" class="cta booking"
        rel="noreferrer" target="_blank">
        <p>Booking.com</p>
    </a>
    <a href="mailto:contact@gangaview.com" class="cta email dark" rel="noreferrer" target="_blank">
        <p class="gradient-text gradient-blue-green">E-mail</p>
    </a>
    <a href="https://www.instagram.com/shrigangaview/" class="cta instagram " rel="noreferrer" target="_blank">
        <p class="gradient-text gradient-instagram">Instagram</p>
    </a>

</div>

<style>
    .contact {
        flex-flow: column nowrap;
        width: 100%;
    }

    .cta {
        width: 100%;
        height: 72px;
        font-family: 'Julius Sans One';
        font-size: 1.6rem;
        text-decoration: none;
        padding: 0 40px;
    }

    .dark {
        background-color: var(--dark-gray);
    }

    .whatsapp p {
        color: #25D366;
    }

    .booking p {
        color: #003580;
    }
</style>