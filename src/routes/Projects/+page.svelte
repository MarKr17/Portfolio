<script>
    import projects from '$lib/data/projects.json';
    import CategoriesButtons from './Categories_buttons.svelte';
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
            return project;
        }
       return project.categories.includes(Value);
    }));
    
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-2 pb-10">
    <h2>Projects</h2>
</div>
<div class="flex justify-center pb-10">
    <CategoriesButtons {options} legend='' bind:userSelected={Value}/>
</div>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-4/5 mx-auto">
    {#each Object.entries(filtered_Projects) as [id, project]}
    <div class="card">
        <img class="h-40 max-w-xs rounded-xl" src={project.image} alt="Project image"/>
        <div>
            <h3>{project.name}</h3>
            <p class="pb-5">{project.description}</p>
            <a on:click={() => Project.set(project)} href="{base}/Project_page">Read more</a>
        </div>
</div>
    {/each}
</div>