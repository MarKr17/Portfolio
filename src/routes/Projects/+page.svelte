<script>
    import * as json from '$lib/data/projects.json'
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
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-10">
    <h2>Projects</h2>
    <div class="flex justify-center">
    <CategoriesButtons {options} legend='' bind:userSelected={Value}/>

    </div>
</div>

<p> {json.Project1.description} </p>
<img class="h-auto max-w-lg rounded-xl" src={json.Project1.image} alt = "Project 1"/>