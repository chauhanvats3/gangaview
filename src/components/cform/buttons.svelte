<script>
    import { createEventDispatcher } from 'svelte';


    export let showSubmit = false;
    export let currentPageIndex = 0;

    const dispatch = createEventDispatcher();

    function buttonClicked(name) {

        dispatch('buttonPressed', {
            text: name
        });
    }
</script>

<div class="buttons">
    <div class="prev button" on:click={()=>buttonClicked('prev')}>
        <p class="noselect {currentPageIndex==0?'disabled':'gradient-text gradient-blue-green'}">Prev</p>
    </div>
    {#if showSubmit}
    <div class="submit button gradient-blue-green" on:click={()=>buttonClicked('submit')}>
        <p class="noselect">Submit</p>
    </div>
    {:else}
    <div class="next button" on:click={()=>buttonClicked('next')}>
        <p class="noselect gradient-text gradient-blue-green">Next</p>
    </div>

    {/if}

</div>

<style>
    .buttons {
        width: 80%;
        max-width: 60ch;
        justify-content: space-between;
    }

    .button {
        width: 100%;
        max-width: 160px;
        height: 60px;
        background-color: var(--dark-gray);
        cursor: pointer;
    }

    .button.submit p {
        color: white;
    }

    .button p {
        font-family: 'julius sans one';
        font-size: 1.7rem;
        letter-spacing: 0.3rem;
    }

    .disabled {
        color: #aaa;
    }
</style>