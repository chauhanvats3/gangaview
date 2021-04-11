<script>
    export let qna;
    export let index = 0;
    index = (index + 1) % 2;

</script>

<div class="faq {index === 1 ? 'bg1' :'bg2'}">
    <div class="qna">
        <div class="quewrapper">
            <p class="q">Q</p>
            <p class="que">{qna.que}</p>
        </div>
        <div class="answrapper">
            <p class="a">A</p>
            <p class="ans">{qna.ans}</p>
        </div>
    </div>
</div>

<style>
    .faq {
        width: 100%;
    }

    .bg1 {
        background-color: white;
    }

    .bg1 .q,
    .bg1 .a {
        color: #25252533;
    }

    .bg1 .ans {
        color: var(--dark-gray);
    }

    .bg2 {
        background-color: var(--dark-gray);
    }

    .bg2 .q,
    .bg2 .a {
        color: #ffffff33;
    }

    .bg2 .que {
        color: #fff;
    }

    .bg2 .ans {
        color: #d2d2d2;
    }

    .qna {
        max-width: 75ch;
        width: 100%;
        flex-flow: column nowrap;
    }

    .quewrapper,
    .answrapper {
        width: 100%;
        position: relative;
        min-height: 160px;
    }

    @media (max-width:850px) {

        .quewrapper,
        .answrapper {
            overflow: hidden;
        }
    }

    .quewrapper {
        justify-content: flex-end;
    }

    .answrapper {
        justify-content: flex-start;
    }

    .q,
    .a {
        font-family: 'julius sans one';
        font-size: 144px;
        position: absolute;
    }

    .q {
        left: -35px;
        top: -30px
    }

    .a {
        right: -35px;
        font-size: 165px;
    }

    .que,
    .ans {
        padding: 20px;
    }

    .que {
        font-size: 1.7rem;
        justify-content: flex-start;
        text-align: left;
        width: 80%;
    }

    .ans {
        font-size: 1.3rem;
        justify-content: flex-end;
        text-align: left;
        width: 92%;
        letter-spacing: .08rem;
        word-spacing: .1rem;
    }
</style>