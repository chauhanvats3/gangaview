<script>
    import Ham from './Hamburger.svelte';
    import Menu from './Menu.svelte';

    let showMenu = false;
    let ham;
    const body = document.body;

    function hamClicked(event) {
        body.classList.toggle("noscroll");
        ham.classList.toggle('active');
        showMenu = !showMenu;
    }
</script>

<div class="navbar">
    <div id="logo" class="logo">
        <a href="." style='text-decoration:none'> <img src="images/Logo/Logo-Full.png" alt="Logo"> </a>
    </div>
    <div class="hamburger">
        <Ham on:hamClick={hamClicked} bind:ham />
    </div>
</div>
<Menu {showMenu} on:itemClick={hamClicked} />



<style>
    .navbar {
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 70px;
        background: #252525;
        justify-content: space-between;
        padding: 5px 0;
    }


    .logo,
    .logo>a {
        height: 100%;
    }

    img {
        z-index: -1;
        height: 70px;
        width: 123px;
    }

    .logo {
        margin: 0 15px;
    }

    .hamburger {
        margin: 0;
    }
</style>