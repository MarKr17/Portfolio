<script>
    import projects from '$lib/data/projects.json';
    import CategoriesButtons from './Categories_buttons.svelte';
    import "../../app.css";
    import { base } from '$app/paths';
    import { Project } from '../../store';
    
    let Value;
   
    const options = [{
        value: 'data-analytics',
        label: 'Data Analytics',
    }, {
        value: 'machine-learning',
        label: 'Machine Learning',
    }, {
        value: 'bioinformatics',
        label: 'Bioinformatics',
    }]
    
    $: filtered_Projects = Object.fromEntries(
        Object.entries(projects).filter(([id, project]) => {
        if (Value === undefined || Value.length === 0) {
            return true;
        }
        return Value.every(val => project.categories.includes(val));
    }));
</script>

<!-- Page Header -->
<div class="flex flex-col items-center py-1 2xl:py-6 bg-gray-50">
    <h2 class="mb-4">Projects</h2>
    <!-- Categories Section -->
    <div class="w-full max-w-3xl px-4 items-center">
        <CategoriesButtons {options}  bind:userSelected={Value}/>
    </div>
</div>

<!-- Back Button -->
<div class="container mx-auto px-4 my-1 2xl:my-6">
    <a class="inline-flex items-center text-lg font-medium transition-colors duration-300 accent" href="{base}/">
        <i class="fas fa-arrow-left mr-2"></i>
        <span>Back to Home</span>
    </a>
</div>

<!-- Projects Grid -->
<div class="container mx-auto px-4 mb-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
        {#each Object.entries(filtered_Projects) as [id, project]}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <!-- Project Image -->
                <div class="h-28 2xl:h-52 overflow-hidden">
                    <img class="w-full h-full object-cover" src="{base}{project.title_image}" alt="{project.name}"/>
                </div>
                
                <!-- Content -->
                <div class="p-4 2xl:p-6 flex flex-col flex-grow">
                    <h3 class="mb-3">{project.name}</h3>
                    <p class=" mb-4 flex-grow">{project.short_description}</p>
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 mb-4">
                        {#each project.tags as tag}
                            <span class="tag secondary">{tag}</span>
                        {/each}
                    </div>
                    
                    <!-- Read More Button -->
                    <a 
                        class="smaller mt-2 inline-flex items-center justify-center py-2 px-4 rounded-lg bg-[var(--lm_primary)] text-white" 
                        on:click={() => Project.set(project)} 
                        href="{base}/Project_page"
                    >
                        Read more
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>