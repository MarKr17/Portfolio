<script>
    import { get } from 'svelte/store';
    import {base} from '$app/paths';
    import {Project} from '../../store.js';
</script>
<div class="flex flex-col items-center gap-5 pb-2 2xl:pb-15">
    <!-- Project Title -->
    <div>
        <h2 class="text-3xl font-semibold">{get(Project).name}</h2>
    </div>

    <!-- Tags Section -->
    <div class="flex flex-wrap gap-2 px-6 md:px-20 2xl:mt-4">
        {#each get(Project).tags as tag}
            <span class="tag 2xl:tag bigger">
                {tag}
            </span>
        {/each}
    </div>
</div>
<!-- Top Links Section -->
<div class="flex justify-between items-center w-full px-4 md:px-20 mt-4 2xl:mt-6">
    <!-- "Back" Link Section -->
    <a class="text-xl accent transition-all duration-300 flex items-center gap-2" href="{base}/Projects">
        <i class="fas fa-arrow-left ml-2"></i>
        Back to Projects
    </a>

    <!-- GitHub Link Section -->
    <a href="{get(Project).repo}" target="_blank" class="bg-[var(--lm_secondary)] text-white py-2 px-6 rounded-lg text-xl transition-all duration-200">
        View on
        <i class="fab fa-github"></i>
    </a>
</div>

<!-- Responsive Flex Layout for Images, Description, and Key Takeaways -->
<div class="flex flex-col gap-2 px-2 md:flex-row  md:gap-4 2xl:px-20 2xl:gap-10">
    <!-- Images Section -->
    <div class="flex-1">
        <div class="w-2/3 md:w-3/4 lg:w-full">
        {#each get(Project).images as image}
            <img class="w-full rounded-xl mb-10 object-cover center" src="{base}{image}" alt="Project Image"/>
        {/each}
        </div>
    </div>

    <!-- Description Section -->
    <div class="flex-1">
        <h3 class="mb-4">Description</h3>
        <p class="">{get(Project).description}</p>
    </div>

    <!-- Key Takeaways Section -->
    <div class="flex-1">
        <h3 class="mb-4">Key Takeaways</h3>
        <ul class="list-disc">
            {#each get(Project).takeaways as takeaway}
            <li>{takeaway}</li>
            {/each}
        </ul>
    </div>
</div>

