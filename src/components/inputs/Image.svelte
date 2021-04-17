<script>
    export let val;
    let avatar, fileinput;

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result
        };

    }

</script>
<div class="imageInput">
    {#if avatar}
    <img class="avatar" src="{avatar}" alt="d" />
    {:else}
    <img class="avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
    {/if}
    <img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt=""
        on:click={()=>{fileinput.click();}} />
    <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
    <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)}
    bind:this={fileinput} >

</div>
<style>
    .imageInput {

        flex-flow: column nowrap;
        margin: 20px;
    }

    .upload {
        height: 50px;
        width: 50px;
        cursor: pointer;
    }

    .avatar {
        height: 200px;
        width: 200px;
    }
</style>