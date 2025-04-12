<script>
    import * as json from '$lib/data/about.json';
    import { base } from '$app/paths';
</script>
<!-- "Scroll Up" Link Section (Centered at the Top) -->
<div class="absolute top-4 left-1/2 transform -translate-x-1/2">
    <a href="{base}/" class="text-xl accent flex items-center">
        <i class=" fas fa-arrow-up mr-2"></i> <!-- Down Arrow Icon -->
        Back
    </a>
</div>
<main class="bg-gray-50 p-2 md:pt-2 2xl:p-8 font-sans leading-relaxed">

    <!-- Skills & Interests Section -->
    <section class="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 2xl:gap-10">
        <!-- Skills Section -->
        <div>
            <h2 class="text-center mb-6">Skills</h2>
            <div class="flex flex-wrap justify-center gap-3 2xl:gap-6">
                {#each Object.entries(json.programming_skills) as [id, skill]}
                    <div class="tag bigger">
                        {skill}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Interests Section -->
        <div>
            <h2 class="text-center mb-6">Interests</h2>
            <div class="flex flex-wrap justify-center gap-3 2xl:gap-6">
                {#each Object.entries(json.interests) as [id, interest]}
                    <div class="tag bigger2">
                        {interest}
                    </div>
                {/each}
            </div>
        </div>

    </section>

    <!-- Certifications & Education Section -->
    <section class="mt-16 max-w-5xl mx-auto">
        <h2 class="text-center mb-6">Certifications & Education</h2>

        <!-- Flex container for Certifications and Education -->
        <div class="flex flex-wrap gap-12 justify-between">
            <!-- Certifications List -->
            <div class="w-full sm:w-1/2">
                <h3 class="">Certifications</h3>
                <div class="mt-4 space-y-6">
                    {#each Object.entries(json.certifications) as [id, cert]}
                        <div class="">
                            <h5 class="">{cert.name}</h5>
                            <p class="">{cert.institution} - {cert.year}</p>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Education List -->
            <div class="w-full sm:w-1/2">
                <h3 class="text-2xl font-semibold text-gray-800">Education</h3>
                <div class="mt-4 space-y-6">
                    {#each Object.entries(json.education) as [id, edu]}
                        <div class="">
                            <h5 class="text-xl font-medium">{edu.name}</h5>
                            <p class="">{edu.institution} - Graduated: {edu.year}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Recent Activities Section -->
    <section class="mt-16 max-w-5xl mx-auto">
        <h2 class="text-center mb-6">Recent Activities</h2>
        <div class="space-y-8">
            {#each Object.entries(json.recent_activities) as [id, activity]}
                <div class="">
                    <h3 class="">{activity.name}</h3>
                    <p class="">{activity.date}</p>
                    <p class="">{activity.description}</p>
                    <a href="{activity.link}" target="_blank" class="link">Learn More</a>
                </div>
            {/each}
        </div>
    </section>

    <!-- Contact Section -->
    <section class="mt-16 text-center">
        <h2 class="">Contact</h2>
        <p class="text-lg  mt-4">Feel free to reach out to me at <a href="mailto:{json.contactEmail}" class="link">{json.contactEmail}</a></p>
    </section>

</main>

<style>
    
</style>
