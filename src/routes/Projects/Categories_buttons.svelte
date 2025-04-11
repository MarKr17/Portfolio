<script>
    // based on suggestions from:
    // Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
    // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
    import '../../app.css'
    export let options;
    export let legend;
    export let userSelected = [];
		export let fontSize = 16;
		export let flexDirection = 'column'

    const uniqueID = `legend-${Math.floor(Math.random() * 100)}`
  
    const slugify = (str = "") =>
      str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  </script>
  

<div role="radiogroup" 
				 class="group-container"
				 aria-labelledby={`label-${uniqueID}`}
				 style="font-size:{fontSize}px; flex-direction:{flexDirection}" 
				 id={`group-${uniqueID}`}>
        <div class="legend" 
						 id={`label-${uniqueID}`}>{legend}
				</div>
	<div class='options gap-10'>
		 {#each options as { value, label } (value)}
	<div class='option'>
		      <input
        class="sr-only"
        type="checkbox"
        id={`${uniqueID}-${slugify(value)}`}
        bind:group={userSelected}
        value={slugify(value)} />
      <label class='option' for={`${uniqueID}-${slugify(value)}`}> {label} </label>
	</div>

    {/each}
   
	</div>
      
  </div>

  
<style>
  @import "../../app.css";
  
  .group-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .legend {
    margin-right: 0.5rem;
    font-weight: bold;
  }

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  input[type="checkbox"] {
    position: absolute;
  }

  input[type="checkbox"] + label {
    position: relative;
    padding: 0.6em 1em;
    line-height: 1.3em;
    color: var(--lm_link);
    font-weight: normal;
    font-size: 1.1rem;
    background: var(--lm_bg); 
    border-radius: 6px;
    border: 2px solid transparent; 
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s, font-weight 0.3s;
  }
  /* Hover effect to add some interactivity */
  .option:hover > label {
    background-color: var(--lm_primary); 
    color: white; /* White text on hover */
  }

  /* Style for selected (checked) options */
  input[type="checkbox"]:checked + label {
    background-color: var(--lm_primary); /* Green background for selected option */
    color: white; /* White text when selected */
    border-color:rgb(78, 156, 126); /* Darker green border */
    transform: scale(1.05); /* Slightly enlarge the selected label */
  }

  /* Disabled options */
  input[type="checkbox"]:disabled + label {
    background-color: var(--lm_primary); /* Light gray background for disabled options */
    color: var(--lm_color); /* Gray text */
    border-color: var(--lm_link); /* Gray border */
    cursor: not-allowed;
  }

  .options {
    display: flex;
    font-weight: normal;
    font-size: 1.5rem;
  }

  label {
    user-select: none;
    line-height: 1.2em;
    font-weight: 400;
    min-width: 100px;
    max-width: 150px;
    text-align: center;
    background-color: #4caf50;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
  }
</style>