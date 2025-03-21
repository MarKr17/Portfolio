<script>
    // based on suggestions from:
    // Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
    // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
    import '../../app.css'
    export let options;
    export let legend;
    export let userSelected = options[0].value;
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
	<div class='options'>
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
		:root {
		--lm-accent-color: #70a47f;
        --dm-accent-color: #5b8f6a;
		--gray: #ccc;
    }
    .group-container {
      border-radius: 2px;
      border: 1px solid var(--gray-darker);
      display: flex;
      flex-direction: row;
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
    }
		
		.options {
			display: flex;
		}
		
    

    .option + .option > label {
        border-left-width: 0;
    }
    .option:first-of-type > label {
        border-radius: 6px 0 0 6px;
    }
    .option:last-of-type > label {
        border-radius: 0 6px 6px 0;
    }
    .option > label{
    padding: 0.6em 1em;
    line-height: 1.3em;
    appearance: none;
    background: none;
    font-weight: 600;
    font-size: 0.9em;
    color: var(--lm-accent-color);
    border: 1px solid var(--lm-accent-color);
    border-radius: 0;
    outline: none;
    cursor: pointer;
}
.option > label.dark-mode{
    color: var(--dm_accent);
    border: 1px solid var(--dm_accent);
}
input[type="checkbox"]:checked + label {
    background: var(--lm_accent);
    color: var(--lm_background)
}
input.dark-mode[type="checkbox"]:checked + label {
    background: var(--dm_accent);
    color: var(--dm_background)
}


input[type="checkbox"]:focus + label {
    box-shadow: 0 0px 8px var(--lm_accent);
}
input.dark-mode[type="checkbox"]:focus + label {
    box-shadow: 0 0px 8px var(--dm_accent);
}

input[type="checkbox"]:disabled + label {
  color: darken(var(--gray), 10);
}

input[type="checkbox"]:disabled + label {
  background: var(--gray);
}
label {
    user-select: none;
    line-height: 1.2em;
    font-weight: 400;
    color: var(--gray);
    min-width: 100px;
          max-width: 150px;
    text-align: center;
  }
    
    </style>