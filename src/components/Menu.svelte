<script>

    export let showMenu;

</script>

<style>
    h1 {
        margin: 0;
        width: 100%;
    }

    a {
        text-decoration: none;
        width: 100%;
    }

    .menu {
        z-index: 1;
        position: fixed;
        top: -100%;
        height: 100vh;
        width: 100%;
        transition: top 0.4s ease-in-out;
        background: #adeaffde;
        flex-direction: column;
    }

    :global(.menu.showMenu) {
        top: 0%;
    }

    .menu-items {
        flex-direction: column;
        height: 80%;
        width: 100%;
    }

    .item {
        width: 100%;
        margin: 20px auto;
    }


    .lower {
        flex-direction: column;
    }

    .contact {
        font-size: larger;
        margin: 20px auto;
        flex-direction: column;
    }

    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .menu {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            background: #adeaff5d;
        }

    }
</style>

<div class="menu" class:showMenu>
    <div class="menu-items">
        <div class="item">
            <h1><a href="#rooms">Our Rooms</a></h1>
        </div>
        <div class="item">
            <h1><a href="#testimonials">Testimonials</a></h1>
        </div>
        <div class="item">
            <h1><a href="#about-us">About Us</a></h1>
        </div>
        <div class="item">
            <h1><a href="#contact-us">Contact Us</a></h1>
        </div>
    </div>
    <div class="lower">
        <p class="contact">

            <a href="tel:=919148220111">+91-9148220111</a>
            <a href="tel:=917500497481">+91-7500497481</a>
        </p>
        <p style="font-family: 'Julius Sans One' ">Ganga View</p>
    </div>
</div>