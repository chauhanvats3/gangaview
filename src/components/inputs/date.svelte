<script>
    /* Blatantly Copied from https://codepen.io/lucasyem/pen/ZEEYKdj */
    export let inputName;
    export let id;
    export let val;
    export let valid = true;
    export let placeholder = "";
    export let minDate = "1900-01-01";
    export let maxDate = "2100-01-01";
    export let hint = ""

    import { onMount } from 'svelte'

    let type = "date";
    let input, warning, formGroup;

    let getDateStr = (date => {
        return `${date.getFullYear()}-${parseInt(date.getMonth() + 1)}-${date.getDate()}`
    })

    let today = new Date();
    let todayStr = getDateStr(today);
    let tomorrow = new Date(new Date().setDate(today.getDate() + 1));
    let tomorrowStr = getDateStr(tomorrow);

    maxDate = maxDate === "today" ? todayStr : maxDate;
    minDate = minDate === "today" ? todayStr : minDate;
    maxDate = maxDate === "tomorrow" ? tomorrowStr : maxDate;
    minDate = minDate === "tomorrow" ? tomorrowStr : minDate;
    let validateMe = () => {
        let inputDate = new Date(input.value);

        if (inputDate > new Date(maxDate)) {
            formGroup.classList.add("invalid");
            warning.innerHTML = `Only A Date Before ${maxDate} Is Allowed!`;
            valid = false;
        } else if (inputDate.getDate() <= new Date(minDate).getDate() && inputDate.getMonth() <= new Date(minDate).getMonth() && inputDate.getFullYear() <= new Date(minDate).getFullYear()) {
            formGroup.classList.add("invalid");
            warning.innerHTML = `Only a Date After ${minDate} Is Allowed!`
            valid = false;
        }
        else {
            formGroup.classList.remove("invalid");
            warning.innerHTML = ""
            valid = true;
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
        transition: border-color 0.5s ease-in;
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

    .form__field:focus~.form__label .hint {
        display: block;
    }
</style>

<div class="form__group field" bind:this={formGroup}>
    <input type="date" class="form__field noselect" {placeholder} name="{inputName}" {id} required bind:value={val}
        min={minDate} max={maxDate} bind:this={input} on:input={validateMe} />
    <label for={id} class="form__label noselect">{inputName}<span class="hint">{hint}</span> </label>

    <p class="warning" bind:this={warning}></p>
</div>