<script>
	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import * as json from '$lib/data/about.json';
	import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center justify-between max-h-screen min-h-[90vh] py-2 px-4 relative overflow-hidden">
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
	<div class="flex flex-col items-center  mt-10 md:mt-24 2xl:mt-24">
		<!-- Name Section -->
		<div>
			<h1 class="2xl:2xl">{json.name}</h1>
		</div>

		<!-- Bio/Description Section -->
		<div class="w-full sm:w-3/4 lg:w-2/3 text-center mt-5">
			<p1 class="sm:text-base ">{json.text}</p1>
		</div>

		<!-- Social Links Section -->
		<div class="flex gap-4 mt-10">
			<a href={json.github} target="_blank" class="text-base md:text-lg primary flex items-center gap-1">
				<i class="fab fa-github"></i> GitHub
			</a>
			<a href={json.linked_in} target="_blank" class="text-base md:text-lg primary flex items-center gap-1">
				<i class="fab fa-linkedin"></i> LinkedIn
			</a>
		</div>
	</div>

	<!-- Bottom Navigation - Projects link aligned right -->
	<div class="w-full flex justify-end   px-2 ">
		<a href={base + "/Projects"} class="text-base md:text-lg accent flex items-center gap-1">
			See My Projects
			<i class="fas fa-arrow-right"></i>
		</a>
	</div>

	<!-- More About Me - Properly centered at bottom -->
	<div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 ">
		<a href={base + "/About"} class="text-base md:text-lg accent flex items-center gap-1">
			<i class="fas fa-arrow-down"></i>
			More About Me
		</a>
	</div>

</div>
