<script lang="ts">
	import '../app.css';
	let { children } = $props();
	function toggle() {
    	window.document.body.classList.toggle('dark-mode')
	}
</script>
<ul id="menu">
	<li><a href="/">Home</a>|
	<li><a href="/Projects">Projects</a>|
	<li><button on:click={toggle}>Toggle mode</button></li>
</ul>


{@render children()}