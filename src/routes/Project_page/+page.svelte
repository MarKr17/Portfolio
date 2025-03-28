<script>
    import { get } from 'svelte/store';
    import {Project} from '../../store.js';
</script>
<p>{get(Project).name}</p>