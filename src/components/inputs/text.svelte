<script>
    /* Blatantly Copied from https://codepen.io/lucasyem/pen/ZEEYKdj */
    export let inputName;
    export let id;
    export let val;
    export let placeholder = "";
</script>

<style>
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 80%;
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
        border-image: linear-gradient(to right, #11998e, #38ef7d);
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
</style>

<div class="form__group field">
    <input type="input" class="form__field noselect" {placeholder} name="{inputName}" {id} required bind:value={val} />
    <label for={id} class="form__label noselect">{inputName}</label>
</div>