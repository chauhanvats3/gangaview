<script>
    export let path;
    let pathWhole = [{ name: 'Home', href: '.' }, ...path]
    var totalNodes = pathWhole.length - 1;
</script>

<style>
    .breadcrumb {
        margin: 10px;
    }

    p {
        align-items: baseline;
        color: rgb(255, 255, 255);
        font-family: 'Julius Sans One';
    }

    a {
        margin: 0 5px;
        color: rgb(255, 255, 255);
    }

    a:last-child {
        max-width: 30ch;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        color: #c7c7c7;
    }

    @media (max-width: 500px) {
        * {
            font-size: small;
        }
    }
</style>

<div class="breadcrumb">
    <p>
        {#each pathWhole as node,i}
        <a href="{node.href}">{node.name}</a>{#if i<totalNodes} / {/if} {/each} </p>
</div>