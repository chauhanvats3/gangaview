<script>
</script>

<div class="rooms">
    <a href="./rooms">
        <div class="title">
            <p class=" gradient-text gradient-blue-green">Our Rooms</p>
        </div>

        <div class="content">
            <img src="images/Rooms/view/1.jpg" alt="" />
            <img src="images/Rooms/double/3.jpg" alt="" />
        </div>
    </a>
</div>

<style>
    .rooms {
        width: 100%;
        flex-flow: column nowrap;
        justify-content: flex-start;
        background-color: #f1f1f1;
    }

    a {
        text-decoration: none;
        width: 100%;
        flex-flow: column nowrap;
    }

    .title {
        font-family: "Julius Sans One";
        width: 100%;
        height: 65.5px;
        background-color: var(--dark-gray);
        justify-content: space-between;
        padding: 0 20px;
        cursor: pointer;
    }

    .title p {
        font-size: 1.5rem;
    }

    .content {
        border: 6px solid var(--dark-gray);
        border-top: 0px;
        width: 100%;
        flex-grow: 1;
        flex-flow: row wrap;
        justify-content: flex-start;
    }

    .content > img {
        width: 50%;
        height: auto;
        max-height: 49vw;
        object-fit: cover;
        min-width: 450px;
        flex-grow: 1;
    }

    @media (max-width: 450px) {
        .content > img {
            min-width: 100%;
        }
    }
</style>
