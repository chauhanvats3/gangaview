<script>
    const year = new Date().getFullYear();
</script>

<style>
    .footer {
        width: 100%;
        min-height: 60px;
        justify-content: space-around;

        background: rgb(5, 102, 141);
        background: -moz-linear-gradient(90deg, rgba(5, 102, 141, 1) 0%, rgba(2, 128, 144, 1) 33%, rgba(0, 168, 150, 1) 66%, rgba(2, 195, 154, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(5, 102, 141, 1) 0%, rgba(2, 128, 144, 1) 33%, rgba(0, 168, 150, 1) 66%, rgba(2, 195, 154, 1) 100%);
        background: linear-gradient(90deg, rgba(5, 102, 141, 1) 0%, rgba(2, 128, 144, 1) 33%, rgba(0, 168, 150, 1) 66%, rgba(2, 195, 154, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#05668d", endColorstr="#02c39a", GradientType=1);
    }

    div {
        color: white;
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
    <div>Privacy Policy</div>
    <div>Copyright {year} by Sarvah Group</div>
    <div><a href="https://github.com/chauhanvats3" target="_blank" rel="noreferrer">Made by Vatsal</a></div>
</div>