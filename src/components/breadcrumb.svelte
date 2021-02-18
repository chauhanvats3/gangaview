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
        color: rgb(90, 90, 90);

    }

    a {
        margin: 0 5px;
        color: rgb(90, 90, 90);
    }

    a:last-child {
        max-width: 30ch;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        color: black;
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
        <a href="{node.href}">{node.name.toUpperCase()}</a>{#if i<totalNodes} / {/if} {/each} </p>
</div>