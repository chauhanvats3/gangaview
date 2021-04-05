<script>

</script>

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
        font-family: 'Julius Sans One';
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
        flex-flow: column nowrap;
        justify-content: flex-start;

    }

    .content>img {
        width: 100%;
        height: auto;
    }
</style>

<div class="rooms">
    <a href="./rooms">
        <div class="title">

            <p class=" gradient-text gradient-blue-green">Our Rooms</p>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35Z"
                    stroke="url(#paint0_linear)" stroke-width="" />
                <path d="M15.45 11.2L22.25 18L15.45 24.8" stroke="url(#paint1_linear)" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="18.3617" x2="35" y2="18.3617"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#24B7DB" />
                        <stop offset="0.9999" stop-color="#B7DB24" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="15.45" y1="18.1446" x2="22.25" y2="18.1446"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#24B7DB" />
                        <stop offset="0.9999" stop-color="#B7DB24" />
                    </linearGradient>
                </defs>
            </svg>

        </div>

        <div class="content">
            <img src="images/Rooms/view/3.jpg" alt="" width="519" height="519">
        </div>
    </a>
</div>