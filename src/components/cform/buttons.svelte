<script>
    import { createEventDispatcher } from 'svelte';
    import { dataset, datavalid, defaults } from '../../stores/store.js'
    export let showSubmit = false;
    export let currentPageIndex = 0;

    const dispatch = createEventDispatcher();


    function buttonClicked(name) {

        dispatch('buttonPressed', {
            text: name
        });
    }
    function resetDataset() {
        let res = confirm("This would clear ALL the fields in C-Form. Continue?")
        if (res) {
            dataset.set(defaults.defaultData);
            datavalid.set(defaults.defaultValid);
            window.location.reload();
        }
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
    <div class="reset button" on:click={()=>resetDataset()}>
        <p class="noselect">Reset</p>
    </div>

</div>

<style>
    .buttons {
        width: 80%;
        max-width: 60ch;
        justify-content: space-between;
        flex-flow: row wrap;
    }

    .button {
        width: 160px;
        height: 60px;
        background-color: var(--dark-gray);
        cursor: pointer;
        flex-grow: 1;
        margin: 10px;
    }

    .button.submit p {
        color: var(--dark-gray);
    }

    .button p {
        font-family: 'julius sans one';
        font-size: 1.7rem;
        letter-spacing: 0.3rem;
    }

    .disabled {
        color: #aaa;
    }

    .reset {
        background: var(--back-white);
    }

    .reset p {
        color: red;
    }

    @media (min-width:675px) {
        .prev {
            order: 1;
        }

        .next,
        .submit {
            order: 3
        }

        .reset {
            order: 2;
        }
    }
</style>