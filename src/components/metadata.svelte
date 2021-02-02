<script>
    export let metadata;
</script>


<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content="{metadata.description}" />
    <meta name="keywords" content="{metadata.keywords}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://hotel-ganga-view.netlify.app/">
    <meta property="og:title" content="{metadata.title}">
    <meta property="og:description" content="{metadata.description}">
    {#if metadata.thumb}
    <meta property="og:image" content="{metadata.thumb}">
    {/if}

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://hotel-ganga-view.netlify.app/">
    <meta property="twitter:title" content="{metadata.title}">
    <meta property="twitter:description" content="{metadata.description}">
    {#if metadata.thumb}
    <meta property="twitter:image" content="{metadata.thumb}">
    {/if}
</svelte:head>