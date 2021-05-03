<script>
    export let show = false;
    export let status = 'Starting!'
    export let progress = 5
    export let mailError = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function closeMe() {
        dispatch('closeMe', {
            text: 'Please Close Me'
        });
    }
</script>

<div class="mailProgress" class:show={show===true}>
    <div class="dialog">
        <div class="close">
            <svg width="30" height="30" viewBox="0 0 47 47" fill="none" on:click={closeMe}>
                <path d="M39.1666 7.83334L7.83325 39.1667M39.1666 39.1667L7.83325 7.83334L39.1666 39.1667Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
        <div style="flex-direction: column;">
            <div class="heading">
                Submitting
            </div>
            <div class="heading" style="color: #898989;">CForm</div>
        </div>
        <div class="status">
            {status}
        </div>

        <div class="progress">
            <div class="progress-bg"></div>
            <div class="progress-fg" class:error={mailError===true} style="--progress:{progress}%"></div>
        </div>
    </div>
</div>

<style>
    .mailProgress {
        position: fixed;
        width: 100vw;
        height: 100vh;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        background: rgba(37, 37, 37, 0.75);
        z-index: 2;
        transition: all 0.3s ease-out;
        overflow: hidden;
    }

    :global(.mailProgress.show) {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }



    .dialog {
        width: 300px;
        height: 265px;
        background: white;
        border-radius: 10px;
        flex-flow: column nowrap;
        justify-content: flex-start;
        transform: translateY(300%);
        transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: 0.25s;
    }

    :global(.mailProgress.show .dialog) {
        transform: translateY(0%);
    }

    .close {
        width: 100%;
        flex-flow: row nowrap;
        justify-content: flex-end;
    }

    svg {
        cursor: pointer;
        margin: 5px;
    }

    .heading {
        font-family: Julius Sans One;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 135.4%;
        text-align: center;
        letter-spacing: 0.045em;
    }

    .status {
        width: 100%;
        font-size: 24px;
        margin-top: 40px;
    }

    .progress {
        width: 270px;
        height: 4px;
        position: relative;
        justify-self: flex-end;
        margin-top: 30px;
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-bg,
    .progress-fg {
        height: 4px;
        width: 270px;
        background: #252525;
        position: absolute;
        border-radius: 4px;
        left: 0;
    }

    .progress-fg {
        width: var(--progress);
        background: linear-gradient(90deg, #24B7DB 0%, #B7DB24 99.99%);
        transition: all .4s ease;
    }

    :global(.progress-fg.error) {
        background: red;
    }
</style>