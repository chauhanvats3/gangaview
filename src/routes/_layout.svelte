<script>
	import Nav from '../components/Nav.svelte';
	import { fade } from "svelte/transition"
	import { stores } from "@sapper/app"
	import PageLoadingBar from "sapper-page-loading-bar/PageLoadingBar.svelte"
	import { onMount } from 'svelte';

	export let segment;

	const { preloading } = stores()


	onMount(() => {
		window.onscroll = function (e) {
			// print "false" if direction is down and "true" if up
			window["dirn"] = this.oldScroll > this.scrollY ? "down" : "up";
			this.oldScroll = this.scrollY;
		}
	})
</script>



<style>
	main {
		width: 100%;
	}
</style>


<Nav {segment} />

<PageLoadingBar {preloading} height="3px" color1="white" color2="#00171f" />

{#if !$preloading}
<main transition:fade>
	<slot></slot>
</main>
{/if}