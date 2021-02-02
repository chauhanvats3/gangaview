<script>
    import Ham from '../components/Hamburger.svelte';
    import Menu from '../components/Menu.svelte';

    let showMenu = false;

    function hamClicked(event) {
        showMenu = !showMenu;
        console.log(showMenu)
    }
</script>

<div class="navbar">
    <div id="logo" class="logo"><a href="." style='text-decoration:none'>Ganga View</a></div>
    <div class="hamburger">
        <Ham on:hamClick={hamClicked} />
    </div>
</div>
<Menu {showMenu} />



<style>
    .navbar {
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 50px;
        background: rgba(255, 255, 255, 0);
        justify-content: space-between;
    }

    .logo {
        font-family: "Julius Sans One";
        margin: 0 2vw;
        font-size: 2rem;
    }

    .hamburger {
        margin: 0 2vw;
    }
</style>