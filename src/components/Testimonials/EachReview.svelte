<script>
    export let review;
    export let index;
    export let width = '100vw';
    index = (index + 1) % 4;
</script>

<div class="review {index === 1 ? 'bg1' : index === 2 ? 'bg2' : index === 3 ? 'bg3' : 'bg2'}" style="--width:{width}">
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
        width: var(--width);
        min-height: 350px;
        flex-flow: column nowrap;
        padding: 40px 10px;
        min-width: 300px;
        flex-grow: 1;
    }

    .bg1 {
        background-color: #f5f5f5;
    }

    .bg2 {
        background-color: #ECECEC;
    }

    .bg3 {
        background-color: #E2E2E2;
    }

    .wrapper {
        flex-flow: column nowrap;
        max-width: 70ch;
    }

    .content {
        width: 100%;
        padding: 20px;
        flex-flow: column nowrap;
    }

    .content p {
        font-family: 'Quicksand';
        font-size: 1.3rem;
        line-height: 2.3rem;
        letter-spacing: .07rem;
        word-spacing: .27rem;
        text-align: left;
    }

    .author {
        width: 100%;
        font-family: 'Julius Sans One';
        font-size: 1.2rem;
        justify-content: flex-end;
        padding: 20px;
    }

    .author p {
        color: #4b4b4b;
    }
</style>