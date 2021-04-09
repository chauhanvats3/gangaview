<script>
    /* Blatantly Copied from https://codepen.io/lucasyem/pen/ZEEYKdj */
    export let inputName = "whatsherface";
    export let id = "dfault";
    export let val = "Valueable Value";
    export let placeholder = "Fame";
    export let options = [{ name: "default", index: 0 }];

    function capitalize(str) {
        var result;

        if (!str.trim()) {
            return "";
        }

        var slcs = str.split(" ");
        var new_slcs = [];
        slcs.forEach(slc => {
            slc = slc[0].toUpperCase() + slc.slice(1);
            new_slcs.push(slc);
        });

        return new_slcs.join(" ");
    }

    function optionClicked(index) {
        let found = options.find(element => element.index == index);
        val = capitalize(found.text)
        searchTerm = val;
    }

    let searchTerm = "";
    $: filteredOptions = options.filter(option => option.text.indexOf(searchTerm) !== -1);
</script>

<style>
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
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
        transition: border-color 5s ease-in;
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
    }

    .form__field:focus {
        padding-bottom: 6px;
        border-width: 3px;
        border-image: linear-gradient(90deg, #24b7db, #b7db24);
        border-image-slice: 1;
    }

    .form__field:focus::placeholder {
        color: #bbbbbb;
    }

    .form__field:focus~.form__label {
        position: absolute;
        top: 0;
        left: 20px;
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

    .options {
        flex-flow: column nowrap;
        width: 100%;
        max-height: 0;
        transition: max-height 0.4s ease-out;
        overflow: hidden;
        background: linear-gradient(45deg, #24b6dbce, #b7db24ce);
        border-radius: 10px;
        padding: 0 10px;
    }

    .form__field:focus~.options {

        max-height: 500px;
        transition: max-height 0.5s ease-in-out;
    }

    .options p {
        width: 100%;
        justify-content: flex-start;
        font-size: 1.3rem;
        cursor: pointer;
        margin: 5px 10px;
        transition: all 0.3s ease-in-out;
        color: black;
    }

    .options p:hover {
        letter-spacing: 0.1rem;
    }
</style>

<div class="form__group field">
    <input type="input" class="form__field noselect" {placeholder} name="{inputName}" {id} required
        bind:value={searchTerm} />
    <label for={id} class="form__label noselect">{inputName}</label>

    <div class="options">
        {#each filteredOptions as option}
        <p on:click={()=>optionClicked(option.index)}>{capitalize(option.text)}</p>
        {/each}
    </div>
</div>