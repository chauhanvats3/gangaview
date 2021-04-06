<script>
    export let metadata;
</script>


<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content="{metadata.description}" />
    <meta name="keywords" content="{metadata.keywords}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{metadata.url}">
    <meta property="og:title" content="{metadata.title}">
    <meta property="og:description" content="{metadata.description}">
    {#if metadata.thumb}
    <meta property="og:image" content="{metadata.thumb}">
    {/if}
    <meta property="og:site_name" content="Shri Ganga View Guest House" key="ogsitename" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" key="twcard" />
    <meta property="twitter:url" content="{metadata.url}">
    <meta property="twitter:title" content="{metadata.title}">
    <meta property="twitter:description" content="{metadata.description}">
    {#if metadata.thumb}
    <meta property="twitter:image" content="{metadata.thumb}">
    {/if}

</svelte:head>