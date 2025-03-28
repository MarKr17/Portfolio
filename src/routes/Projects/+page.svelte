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
        Object.entries(projects).filter(([id, project]) =>{
        if (Value === undefined || Value.length === 0) {
            return true;
        }
        return Value.every(val => project.categories.includes(val));
    }));
    
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-2 pb-10">
    <h2>Projects</h2>
</div>
<div class="flex justify-center pb-20">
    <CategoriesButtons {options} legend='' bind:userSelected={Value}/>
</div>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-4/5 mx-auto">
    {#each Object.entries(filtered_Projects) as [id, project]}
        <div class="card border rounded-lg shadow-md overflow-hidden relative flex flex-col p-4">
            <!-- Project Image -->
            <img class="h-40 max-w-full rounded-xl object-cover mb-4" src="{base}{project.images[0]}" alt="{project.name}"/>

            <!-- Project Title -->
            <h3 class="text-lg font-semibold mb-2">{project.name}</h3>

            <!-- Short Description -->
            <p class="text-gray-700 mb-4">{project.short_description}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>

            <!-- Read More Button -->
            <a class="absolute link left-4 bottom-4 text-blue-600 hover:underline" on:click={() => Project.set(project)} href="{base}/Project_page">Read more</a>
        </div>
    {/each}
</div>