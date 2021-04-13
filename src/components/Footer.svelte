<script>
    const year = new Date().getFullYear();
</script>

<style>
    .footer {
        height: 60px;
        position: absolute;
        bottom: -60px;
        justify-self: flex-end;
        width: 100vw;
        justify-content: space-around;

        background: #24B7DB;

        background: -moz-linear-gradient(90deg, #24B7DB, #B7DB24);
        background: -webkit-linear-gradient(90deg, #24B7DB, #B7DB24);
        background: linear-gradient(90deg, #24B7DB, #B7DB24);
    }

    div {
        color: var(--dark-gray);
        font-weight: bold;
        letter-spacing: 0.1rem;
        word-spacing: 0.2rem;
    }

    @media(max-width: 750px) {

        div {
            font-weight: normal;
            word-spacing: 0.2rem;
            font-size: small;
            padding: 10px;
            text-align: center;
        }
    }
</style>

<div class="footer">
    <div><a href="./sitemap">Sitemap</a></div>
    <div><a href="https://github.com/chauhanvats3" target="_blank" rel="noreferrer">Made by Vatsal</a></div>
</div>