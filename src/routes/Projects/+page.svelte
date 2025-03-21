<script>
    import * as json from '$lib/data/projects.json'
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-10">
    <h1>This is a project page</h1>
</div>

<p> {json.Project1.description} </p>
<img class="h-auto max-w-lg rounded-xl" src={json.Project1.image} alt = "Project 1"/>