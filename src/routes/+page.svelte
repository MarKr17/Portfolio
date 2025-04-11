<script>
    import { fade } from 'svelte/transition';
    import { slide } from 'svelte/transition';
    import * as json from '$lib/data/about.json';
    import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center justify-between min-h-screen py-2 px-4 relative overflow-hidden">
    <!-- Avatar Section -->
    <div class="w-24 sm:w-28 md:w-32 xl:w-34 2xl:w-38 mt-4">
        <img class="rounded-full w-full h-full object-cover shadow-lg" src="{base}/assets/Avatar.png" alt="My avatar"/>
    </div>
    
    <!-- Decorative Wider Wiggle Shape -->
    <div class="absolute inset-0 pointer-events-none -z-10 opacity-15">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
            <path
                d="M1000,0
                   C850,62 1050,94 800,125
                   C550,156 750,187 500,219
                   C250,250 450,281 200,312
                   C-50,344 150,375 -100,437
                   C-200,469 -100,500 0,500"
                fill="none"
                stroke="url(#wiggleGradient)"
                stroke-width="30"
                stroke-linecap="round" />
           
            <defs>
                <linearGradient id="wiggleGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#8b5cf6" />
                    <stop offset="50%" stop-color="#6366f1" />
                    <stop offset="100%" stop-color="#3b82f6" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    
    <!-- Middle Content Section -->
    <div class="flex flex-col items-center max-h-[50vh] overflow-y-auto no-scrollbar">
        <!-- Name Section -->
        <div>
            <h1 class="2xl:2xl">{json.name}</h1>
        </div>
        
        <!-- Bio/Description Section -->
        <div class="w-full sm:w-3/4 lg:w-2/3 text-center mt-2">
            <p class="text-sm sm:text-base leading-snug">{json.text}</p>
        </div>
        
        <!-- Social Links Section -->
        <div class="flex 2xl:gap-4 mt-3">
            <a href="{json.github}" target="_blank" class="text-base md:text-lg primary transition-all duration-300">
                <i class="primary fab fa-github"></i> GitHub
            </a>
            <a href="{json.linked_in}" target="_blank" class="primary text-base md:text-lg transition-all duration-300">
                <i class="primary fab fa-linkedin"></i> LinkedIn
            </a>
        </div>
    </div>
   
    <!-- Bottom Navigation - Projects link aligned right -->
    <div class="w-full flex justify-end mb-2 md:mb-6 px-2 2xl:mb-4">
        <a class="text-base md:text-lg secondary transition-all duration-300 flex items-center" href="{base}/Projects">
            See My Projects
            <i class="secondary fas fa-arrow-right ml-1"></i>
        </a>
    </div>
    
    <!-- More About Me - Properly centered at bottom -->
    <div class="absolute bottom-2 md:bottom-7 left-1/2 transform -translate-x-1/2 2xl:bottom-4">
        <a href="{base}/About" class="text-base md:text-lg secondary flex items-center">
            <i class="secondary fas fa-arrow-down mr-1"></i>
            More About Me
        </a>
    </div>
    
    <!-- Add a custom style for no scrollbar visibility but maintaining functionality -->
    <style>
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
        }
    </style>
</div>