<script>
    export let local;

    import IntersectionObserver from '../IntersectionObserver.svelte'
    import LocalGuide from '../LazyLoading/LocalGuide.svelte'
    import { onMount } from 'svelte'

    let nativeLoading = false
    // Determine whether to bypass our intersecting check
    onMount(() => {
        if ('loading' in HTMLImageElement.prototype) {
            nativeLoading = true
        }
    })

</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
    <LocalGuide {local} />
    {/if}
</IntersectionObserver>