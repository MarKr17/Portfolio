<script>
    import * as json from '$lib/data/about.json'
</script>
<div class="flex flex-col min-w-screen justify-center items-center content-between gap-10">
    <div>
        <h1>Name Surname</h1>
    </div>
    <div class=" w-50 sm:w-xs">
        <img class="rounded-full w-2% h-2%" src="/assets/Avatar.png" alt="My avatar"/>
    </div>
    <div class="w-xs sm:w-lg text-center">
        <p>{json.text}</p>
    </div>
    
</div>