<script>
    import { get } from 'svelte/store';
    import {Project} from '../../store.js';
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-10">
    <div>
        <h2>{get(Project).name}</h2>
    </div>
</div>
<div class="flex gap-10 p-20">
    <div class="">
        <img class="h-40 rounded-xl" src="{get(Project).image}" alt="My avatar"/>
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