<script>
    export let ham;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function hamClicked() {

        dispatch('hamClick', {
            text: 'Clicked!'
        });
    }
</script>
<style>
    .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    :global(.hamRotate.active) {
        transform: rotate(45deg);
    }

    .line {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: rgb(255, 255, 255);
        stroke-width: 3.5;
        stroke-linecap: round;
    }

    .ham4 .top {
        stroke-dasharray: 40 121;
    }

    .ham4 .bottom {
        stroke-dasharray: 40 121;
    }

    :global(.ham4.active .top) {
        stroke-dashoffset: -68px;
    }

    :global(.ham4.active .bottom) {
        stroke-dashoffset: -68px;
    }
</style>
<svg class="ham hamRotate ham4" viewBox="0 0 100 100" width="84" on:click={hamClicked} bind:this={ham}>
    <path class="line top" d="m70 33h-40c0 0-8.5-0.1-8.5 8.5 0 8.6 8.5 8.5 8.5 8.5h20v-20" />
    <path class="line middle" d="m70 50h-40" />
    <path class="line bottom" d="m30 67h40c0 0 8.5 0.1 8.5-8.5 0-8.6-8.5-8.5-8.5-8.5h-20v20" />
</svg>