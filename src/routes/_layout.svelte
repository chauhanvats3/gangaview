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

<Nav {segment} />

<main>
	<slot></slot>
</main>