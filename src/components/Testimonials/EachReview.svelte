<script>
    export let review;
    export let index;
    index = (index + 1) % 3;
</script>

<div class="review {index === 1 ? 'bg1' : index === 2 ? 'bg2' : 'bg3'}">
    <div class="wrapper">
        <div class="content">
            <p>{@html review.content}</p>
        </div>
        <div class="author">
            <p>{review.author}</p>
        </div>
    </div>
</div>

<style>
    .review {
        width: 100vw;
        min-height: 350px;
        flex-flow: column nowrap;
        padding: 40px 10px;
    }

    .bg1 {
        background-color: #F5F5F5;
    }

    .bg2 {
        background-color: #ececec;
    }

    .bg3 {
        background-color: #e2e2e2;
    }

    .wrapper {
        flex-flow: column nowrap;
        max-width: 70ch;
    }

    .content {
        width: 100%;
        padding: 20px;
    }

    .content p {
        font-family: 'Quicksand';
        font-size: 1.4rem;
        line-height: 2.3rem;
        letter-spacing: .07rem;
        word-spacing: .27rem;
    }

    .author {
        width: 100%;
        font-family: 'Julius Sans One';
        font-size: 1.7rem;
        justify-content: flex-end;
        padding: 20px;
    }

    .author p {
        color: #797979;
    }
</style>