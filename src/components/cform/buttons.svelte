<script>
    import { createEventDispatcher } from 'svelte';
    import { dataset } from '../../stores/store.js'



    export let showSubmit = false;
    export let currentPageIndex = 0;

    const dispatch = createEventDispatcher();

    const defaultData = {
        basic: {
            photo: "",
            f_name: "",
            l_name: "",
            sex: "",
            dob: "",
            sp_cat: "",
            nationality: "",
            address: "",
            city: "",
            country: ""
        },
        passport: {
            number: "",
            city: "",
            country: "",
            issue: "",
            expiry: "",
        },
        visa: {
            number: "",
            city: "",
            country: "",
            issue: "",
            expiry: "",
            type: "",
            sub_type: "",
        },
        misc: {
            arrival: {
                date: "",
                country: "",
                city: "",
                place: ""
            },
            intended_stay: "",
            employed: "",
            purpose: "",
            next_destination: {
                india: "",
                country: "",
                state: "",
                city: "",
                district: "",
                place: ""
            },
            contact_info: {
                email: "",
                indian_number: "",
                permanent_number: ""
            }
        }
    };

    function buttonClicked(name) {

        dispatch('buttonPressed', {
            text: name
        });
    }
    function resetDataset() {
        let res = confirm("This would Clear ALL the fields in C-Form. Continue?")
        if (res)
            $dataset.set(defaultData);
    }
</script>

<div class="buttons">
    <div class="prev button" on:click={()=>buttonClicked('prev')}>
        <p class="noselect {currentPageIndex==0?'disabled':'gradient-text gradient-blue-green'}">Prev</p>
    </div>
    <div class="reset button" on:click={()=>resetDataset()}>
        <p class="noselect">Reset</p>
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
</style>