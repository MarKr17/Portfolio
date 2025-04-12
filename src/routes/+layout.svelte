<script lang="ts">
  import '../app.css';
  import { crossfade } from 'svelte/transition';
  import { page } from '$app/stores';
 
  let { children } = $props();
  import Navbar from './Navbar.svelte';
 
  const currentPath = $derived($page.url.pathname);
  
  const [send, receive] = crossfade({
      duration: 500,
      fallback(node, params) {
          return {
              duration: 500,
              easing: t => t
          };
      }
  });
</script>

<main>
  <div>
      <Navbar />
      <div style="position: relative; min-height: 20vh; 2xl:min-height: 50vh;">
          {#key currentPath}
              <div 
                  in:receive={{key: currentPath}} 
                  out:send={{key: currentPath}} 
                  style="position: absolute; width: 100%;">
                  {@render children()}
              </div>
          {/key}
      </div>
  </div>
</main>
