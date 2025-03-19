<script lang="ts">
	import '../app.css';
	let { children } = $props();
	function toggle() {
    	window.document.body.classList.toggle('dark-mode')
	}
	import { base } from '$app/paths';
</script>
<ul id="menu">
	<li><a href="{base}/">Home</a>|
	<li><a href="{base}/Projects">Projects</a>|
	<li><button on:click={toggle}>Toggle mode</button></li>
</ul>


{@render children()}