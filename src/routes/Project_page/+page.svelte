<script>
    import { get } from 'svelte/store';
    import {base} from '$app/paths';
    import {Project} from '../../store.js';
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-10">
    <div>
        <h2>{get(Project).name}</h2>
    </div>
</div>
<div class="flex gap-10 p-20">
    <div class="">
        {#each get(Project).images as image}
        <img class="w-150 rounded-xl pb-10" src="{base}{image}" alt="My avatar"/>
        {/each}
    </div>
    <div class="">
        <h3>Description</h3>
        <p>{get(Project).description}</p>
    </div>
    <div class="">
        <h3>Key takeways</h3>
        <ul>
            <li>hhhhhh</li>
        </ul>

    </div>
</div>