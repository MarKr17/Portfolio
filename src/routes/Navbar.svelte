<script>
    let showMenu = false;
    function toggleNavbar() {
      showMenu = !showMenu;
    }
    
    import { base } from '$app/paths';
  </script>
  
  <div>
    <div>
      <nav
        class="container px-6 py-0 pt-0 pb-0 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button on:click={toggleNavbar} 
              type="button"
              aria-label="Tururu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="link" href="{base}/">Home</a>
          <a class="link" href="{base}/About">About</a>
          <a class="link" href="{base}/Projects">Projects</a>
        </div>
      </nav>
    </div>
  </div>
  