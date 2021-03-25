<script>
	import Nav from '../components/navigation/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade } from "svelte/transition"
	import { stores } from '@sapper/app';
	import GoogleAnalytics from '../components/GoogleAnalytics.svelte';
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
		min-height: 70vh;
		align-self: flex-start;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>

<GoogleAnalytics />

<Nav {segment} />

<PageLoadingBar {preloading} height="3px" color1="white" color2="#00171f" />

{#if !$preloading}
<main transition:fade>
	<slot></slot>
</main>
{/if}

<Footer />