<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';
	export let segment;

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

<svelte:head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-V6XBJJX4RX"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'G-V6XBJJX4RX');
	</script>
</svelte:head>

<Nav {segment} />

<main>
	<slot></slot>
</main>