<script>
    import projects from '$lib/data/projects.json'
    import CategoriesButtons from './Categories_buttons.svelte';
    let Value;
	
		const options = [{
		value: 'green',
		label: 'Data Analytics',
	}, {
		value: 'red',
		label: 'Machine Learning',
	}, {
		value: 'blue',
		label: 'Bioinformatics',
	}]
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-2 pb-10">
    <h2>Projects</h2>
    <div class="flex justify-center">
    <CategoriesButtons {options} legend='' bind:userSelected={Value}/>
    </div>
</div>
<div class="flex flex-col min-w-screen items-center  h-150">
    <div class="overflow-auto border-2 rounded-xl pr-20 pl-10 ">
    {#each Object.values(projects) as project}
    <div class="pt-5 pb-5">
        <div class="flex flex-cols-2 gap-5">
            <img class="h-40 max-w-xs rounded-xl" src={project.image} alt="Project image"/>
            <div>
                <strong>{project.name}</strong>
                <p>{project.description}</p>
            </div>
        </div>
    </div>
    {/each}
    <!-- ... -->
    </div>
</div>