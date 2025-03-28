<script>
    import { get } from 'svelte/store';
    import {base} from '$app/paths';
    import {Project} from '../../store.js';
</script>
<div class="flex flex-col items-center gap-10 py-10 md:py-20">
    <!-- Project Title -->
    <div>
        <h2 class="text-3xl font-semibold">{get(Project).name}</h2>
    </div>

    <!-- Tags Section -->
    <div class="flex flex-wrap gap-2 px-6 md:px-20 mt-4">
        {#each get(Project).tags as tag}
            <span class="tag bigger">
                {tag}
            </span>
        {/each}
    </div>
</div>

<!-- Responsive Flex Layout for Images, Description, and Key Takeaways -->
<div class="flex flex-col gap-10 px-6 md:flex-row md:px-20">
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
        <h3 class="text-2xl font-semibold mb-4">Description</h3>
        <p class="text-gray-700">{get(Project).description}</p>
    </div>

    <!-- Key Takeaways Section -->
    <div class="flex-1">
        <h3 class="text-2xl font-semibold mb-4">Key Takeaways</h3>
        <ul class="list-disc pl-6">
            {#each get(Project).takeaways as takeaway}
            <li>{takeaway}</li>
            {/each}
        </ul>
    </div>
</div>

<!-- GitHub Link Section (aligned right) -->
<div class="flex justify-end mt-6 px-6 md:px-20">
    <a href="{get(Project).repo}" target="_blank" class="bg-[var(--lm_accent)] text-white py-2 px-6 rounded-lg text-xl transition-all duration-200">
        View on GitHub
    </a>
</div>