<script>
    export let inputName;
    export let id;
    export let val;
    export let placeholder = "";
</script>

<div class="input-container">
    <input id="{id}" class="input" type="text" {placeholder} bind:value={val} spellcheck="false" />
    <div class="cut"></div>
    <label for="{id}" class="placeholder">{inputName}</label>
</div>

<style>
    .input-container {
        position: relative;
        width: 100%;
        margin: 15px;
        max-width: 500px;
        height: 50px;
    }


    .input {
        background-color: #303245;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: #eee;
        font-size: 18px;
        height: 100%;
        outline: 0;
        padding: 4px 20px 0;
        width: 100%;
        transition: box-shadow .2s ease-in-out;
        box-shadow: inset 0px 0px 0px 0px transparent;
    }

    .input:focus {
        box-shadow: inset 0px 0px 0px 2px #9e69db;
    }

    .cut {
        background-color: white;
        border-radius: 10px;
        height: 20px;
        left: 20px;
        position: absolute;
        top: -30px;
        transform: translateY(0);
        transition: transform 200ms;
        width: 76px;
    }

    .input:focus~.cut,
    .input:not(:placeholder-shown)~.cut {
        transform: translateY(18px);
    }

    .placeholder {
        color: #65657b;
        font-family: sans-serif;
        left: 20px;
        line-height: 14px;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 50%;
        transition: transform 200ms, color 200ms;
        top: 15px;
    }

    .input:focus~.placeholder,
    .input:not(:placeholder-shown)~.placeholder {
        transform: translateY(-25px) translateX(10px) scale(0.75);
    }

    .input:not(:placeholder-shown)~.placeholder {
        color: #808097;
    }

    .input:focus~.placeholder {
        color: #8e2fdc;
    }


    ::-webkit-input-placeholder {
        /* Edge */
        color: #65657b;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #65657b;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }

    ::placeholder {
        color: #65657b;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }


    input:focus::-webkit-input-placeholder {
        /* Edge */
        opacity: 1;
    }

    input:focus:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        opacity: 1;
    }

    input:focus::placeholder {
        opacity: 1;
    }
</style>