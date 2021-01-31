<script>

</script>

<style>
    .rooms {
        height: 100vh;
        width: 100%;
        background: #F2FCFF;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;

        border-radius: 10px;
        border: 10px solid transparent;
    }

    /*  h1 {
        width: 100%;
        justify-content: flex-start;
        padding: 70px 0 40px 40px;
        margin: 0;
    } */

    .slider {
        width: 300%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    img {
        width: 100%;
    }

    @media(max-width: 1024px) {
        img {
            height: 100vw;
            object-fit: cover;
        }
    }
</style>

<div class="rooms">

    <div class="slider">
        <img src="images/room1.jpg" alt="">
        <img src="images/room2.jpg" alt="">
        <img src="images/room3.jpg" alt="">
    </div>
</div>