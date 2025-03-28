<script>
    import * as json from '$lib/data/about.json'
    import { base } from '$app/paths';
</script>
<div class="flex flex-col items-center justify-center gap-10 py-10">
    <!-- Name Section -->
    <div>
        <h1>{json.name}</h1>
    </div>

    <!-- Avatar Section -->
    <div class="w-40 sm:w-48 md:w-56">
        <img class="rounded-full w-full h-full object-cover shadow-lg" src="{base}/assets/Avatar.png" alt="My avatar"/>
    </div>

    <!-- Bio/Description Section -->
    <div class="w-full sm:w-3/4 lg:w-2/3 text-center px-4">
        <p class="text-lg sm:text-xl leading-relaxed">{json.text}</p>
    </div>

    <!-- Additional Optional Information Section (e.g., Social Links, Contact Info) -->
    <div class="flex gap-6 mt-6">
        <!-- Example of a GitHub Link -->
        <a href="{json.github}" target="_blank" class="text-xl link transition-all duration-300">
            <i class="fab fa-github"></i> GitHub
        </a>
        <!-- Example of a LinkedIn Link -->
        <a href="{json.linkedin}" target="_blank" class="text-xl link transition-all duration-300">
            <i class="fab fa-linkedin"></i> LinkedIn
        </a>
    </div>
    
    <!-- "See My Projects" Link Section (aligned to the far right) -->
    <div class="flex w-full justify-end mt-6 px-6 md:px-20">
        <a class="text-xl link transition-all duration-300 flex items-center" href="{base}/Projects">
            See My Projects
            <i class="fas fa-arrow-right ml-2"></i> <!-- Right Arrow Icon -->
        </a>
    </div>

    <!-- "Scroll Down" Link Section (Centered at the Bottom) -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="#scroll-section" class="text-xl link flex items-center">
            <i class="fas fa-arrow-down mr-2"></i> <!-- Down Arrow Icon -->
            Scroll Down
        </a>
    </div>
</div>