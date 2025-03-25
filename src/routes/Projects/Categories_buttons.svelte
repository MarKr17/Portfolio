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
      color: var(--lm-color);
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
      color: var(--lm-color);
      font-weight: normal;
      font-size: 1.5rem;
		}
		
    

    .option + .option > label {
        color: var(--lm_color)
    }
    .option > label{
    padding: 0.6em 1em;
    line-height: 1.3em;
    font-family: "Ultra", serif;
    font-size: 1.5rem;
    appearance: none;
    background: none;
    color: var(--lm_color);
    border-radius: 6px;
    outline: none;
    cursor: pointer;
}
.option > label.dark-mode{
    color: var(--dm_color);
    border: 1px solid var(--dm_secondary);
}
.option:hover>label{
    background: linear-gradient(120deg, rgba(171, 159, 214, 0.5) 0%, rgba(219, 119, 112, 0.5) 100%);
    background-repeat: no-repeat;
    background-size: 80% 40%;
    background-position: 25% 90%;
    background-blend-mode: lighten;
}
input[type="checkbox"]:checked + label {
  background: linear-gradient(120deg, rgba(171, 159, 214, 0.5) 0%, rgba(219, 119, 112, 0.5) 100%);
    background-repeat: no-repeat;
    background-size: 80% 40%;
    background-position: 25% 90%;
    background-blend-mode: lighten;
}
input.dark-mode[type="checkbox"]:checked + label {
  background: linear-gradient(120deg, rgba(171, 159, 214, 0.5) 0%, rgba(219, 119, 112, 0.5) 100%);
    background-repeat: no-repeat;
    background-size: 80% 40%;
    background-position: 25% 90%;
    background-blend-mode: lighten;
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