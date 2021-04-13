<script>
    /* Blatantly Copied from https://codepen.io/lucasyem/pen/ZEEYKdj */
    export let inputName = "whatsherface";
    export let id = "dfault";
    export let val = "";
    export let placeholder = "Fame";
    export let options;
    export let hint = ""
    export let height = "150px";

    import VirtualList from '@sveltejs/svelte-virtual-list';

    let input, warning, formGroup;


    function optionClicked(index) {
        console.log("Clicked")
        let found = options.find(element => element.index == index);
        //val = capitalize(found.text)
        val = found.text;
        searchTerm = val;
        validateMe();
    }

    let searchTerm = val;
    let filteredOptions = options;
    $: {
        filteredOptions = options.filter(option => option.text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

    let validateMe = () => {
        const found = options.find(element => element.text.toLowerCase() === searchTerm.toLowerCase());
        if (!found) {
            formGroup.classList.add("invalid");
            warning.innerHTML = "Please select an Option from the list"
        } else {
            formGroup.classList.remove("invalid");
            warning.innerHTML = " "
            val = searchTerm;
        }
    }
</script>

<style>
    .warning {
        color: #d10404 !important;
        width: 100% !important;
        justify-content: flex-start !important;
    }

    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 30px;
        width: 80%;
        flex-flow: column nowrap;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: rgb(0, 0, 0);
        padding: 7px 0;
        background: transparent;
        transition: border-color .5s ease-in;
    }

    .form__field::placeholder {
        transition: all 0.3s ease-in-out;
        color: transparent;
        left: 35px;
    }

    .form__field:placeholder-shown~.form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    .form__label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        transition: 0.3s ease-in-out;
        font-size: 1rem;
        color: #9b9b9b;
        text-align: left;
    }

    .hint {
        display: none;
        color: #094944;
        font-size: 0.9rem;
    }

    .form__field:focus {
        padding-bottom: 6px;
        border-width: 2px;
        border-image: linear-gradient(90deg, #24b7db, #b7db24);
        border-image-slice: 1;
    }

    .form__field:focus::placeholder {
        color: #bbbbbb;
    }

    .form__field:focus~.form__label {
        position: absolute;
        top: -25px;
        left: 0px;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #11998e;
    }

    /* reset input */
    .form__field:required,
    .form__field:invalid {
        box-shadow: none;
    }

    :global(svelte-virtual-list-viewport) {
        flex-flow: column nowrap;
        width: 100%;
        max-height: 0;
        transition: max-height 0.4s ease-out;
        overflow: hidden;
        background: #252525;
        border-radius: 0px;
    }

    :global(.form__field:focus~svelte-virtual-list-viewport) {
        max-height: 300px;
        transition: max-height 0.5s ease-in-out;
        justify-content: flex-start;
    }

    .eachOption {
        width: 100%;
        justify-content: flex-start;
        font-size: 1.3rem;
        cursor: pointer;
        margin: 5px 10px;
        transition: all 0.3s ease-in-out;
        color: #d1d1d1
    }

    .eachOption:hover {
        color: #fff;
    }

    .form__field:focus~.form__label .hint {
        display: block;
    }

    :global(svelte-virtual-list-viewport) {
        width: 100%;
    }
</style>

<div class="form__group field" bind:this={formGroup}>
    <input type="input" class="form__field noselect" {placeholder} name="{inputName}" {id} required
        bind:value={searchTerm} bind:this={input} on:input={validateMe} autocomplete="new-password" />
    <label for={id} class="form__label noselect">{inputName}<span class="hint">{hint}</span></label>



    <VirtualList items={filteredOptions} let:item {height}>
        <p class="eachOption" on:click={()=>
            optionClicked(item.index)}>{item.text}</p>
    </VirtualList>
    <p class="warning" bind:this={warning}> </p>

</div>