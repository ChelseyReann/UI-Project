const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd1fa12b49msh6da84797acf39b6p153d6djsn24ee2287ea04',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

let url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes"

// fetch(url, options)
// 	.then(res => res.json())
// 	.then((res) => {
//         let recipe1name = res.results[0].name
//         let recipe2name = res.results[9].name
//         let recipe3name = res.results[2].name
//         let recipe4name = res.results[5].name
//         let recipe5name = res.results[10].name
//         let recipe1 = document.querySelector('#recipe1')
//         recipe1.innerText = recipe1name
//         let recipe2 = document.querySelector("#recipe2")
//         recipe2.innerText = recipe2name
//         let recipe3 = document.querySelector("#recipe3")
//         recipe3.innerText = recipe3name
//         let recipe4 = document.querySelector("#recipe4")
//         recipe4.innerText = recipe4name
//         let recipe5 = document.querySelector("#recipe5")
//         recipe5.innerText = recipe5name
        
//         recipe1.addEventListener("click", ()=>{
//             let h2 = document.querySelector(".recipeName")
//             h2.innerText = recipe1name
//             h2.style.textAlign = "center"
//             h2.style.textDecoration = "underline"
//             let img = document.querySelector(".recipeImg")
//             let recipe1image = res.results[0].thumbnail_url
//             img.src = recipe1image
//             let description = document.querySelector(".recipeDescription")
//             let description1 = res.results[0].description
//             description.innerText = description1
//             description.style.textAlign = "center"
//             description.style.marginTop = "10px"
//             let instructions = document.querySelector(".recipeInstruct")
//             let recipe1Instructions = res.results[0].instructions
//             let ul = document.createElement("ul")
//             instructions.appendChild(ul)

//             for (let i = 0; i < recipe1Instructions.length; i++) {
//                 let li = document.createElement("li")
//                 li.innerText = recipe1Instructions[i].display_text
//                 ul.appendChild(li)
//                 }
//             // let instructions = document.querySelector(".recipeInstruct")
//             // let recipe1Instruct = []
//             // console.log(res.results[0].instructions[0].display_text)
//             // console.log(res.results[0].instructions[1].display_text)
//             // console.log(res.results[0].instructions[2].display_text)
//             // console.log(res.results[0].instructions[3].display_text)

//         })

//         recipe2.addEventListener("click", ()=>{
//             let h2 = document.querySelector(".recipeName")
//             h2.innerText = recipe2name
//             h2.style.textAlign = "center"
//             h2.style.textDecoration = "underline"
//             let img = document.querySelector(".recipeImg")
//             let recipe1image = res.results[9].thumbnail_url
//             img.src = recipe1image
//             let description = document.querySelector(".recipeDescription")
//             let description1 = res.results[9].description
//             description.innerText = description1
//             description.style.textAlign = "center"
//             description.style.marginTop = "10px"
//             let instructions = document.querySelector(".recipeInstruct")
//             let recipe1Instructions = res.results[9].instructions
//             let ul = document.createElement("ul")
//             instructions.appendChild(ul)

//             for (let i = 0; i < recipe1Instructions.length; i++) {
//                 let li = document.createElement("li")
//                 li.innerText = recipe1Instructions[i].display_text
//                 ul.appendChild(li)
//                 }
//         })

//         recipe3.addEventListener("click", ()=>{
//             let h2 = document.querySelector(".recipeName")
//             h2.innerText = recipe3name
//             h2.style.textAlign = "center"
//             h2.style.textDecoration = "underline"
//             let img = document.querySelector(".recipeImg")
//             let recipe1image = res.results[2].thumbnail_url
//             img.src = recipe1image
//             let description = document.querySelector(".recipeDescription")
//             let description1 = res.results[2].description
//             description.innerText = description1
//             description.style.textAlign = "center"
//             description.style.marginTop = "10px"
//             let instructions = document.querySelector(".recipeInstruct")
//             let recipe1Instructions = res.results[2].instructions
//             let ul = document.createElement("ul")
//             instructions.appendChild(ul)

//             for (let i = 0; i < recipe1Instructions.length; i++) {
//                 let li = document.createElement("li")
//                 li.innerText = recipe1Instructions[i].display_text
//                 ul.appendChild(li)
//                 }
//         })

//         recipe4.addEventListener("click", ()=>{
//             let h2 = document.querySelector(".recipeName")
//             h2.innerText = recipe4name
//             h2.style.textAlign = "center"
//             h2.style.textDecoration = "underline"
//             let img = document.querySelector(".recipeImg")
//             let recipe1image = res.results[5].thumbnail_url
//             img.src = recipe1image
//             let description = document.querySelector(".recipeDescription")
//             let description1 = res.results[5].description
//             description.innerText = description1
//             description.style.textAlign = "center"
//             description.style.marginTop = "10px"
//             let instructions = document.querySelector(".recipeInstruct")
//             let recipe1Instructions = res.results[5].instructions
//             let ul = document.createElement("ul")
//             ul = ""
//             instructions.appendChild(ul)

//             for (let i = 0; i < recipe1Instructions.length; i++) {
//                 let li = document.createElement("li")
//                 li.innerText = recipe1Instructions[i].display_text
//                 ul.appendChild(li)
//                 }
//         })

//         recipe5.addEventListener("click", ()=>{
//             let h2 = document.querySelector(".recipeName")
//             h2.innerText = recipe5name
//             h2.style.textAlign = "center"
//             h2.style.textDecoration = "underline"
//             let img = document.querySelector(".recipeImg")
//             let recipe1image = res.results[10].thumbnail_url
//             img.src = recipe1image
//             let description = document.querySelector(".recipeDescription")
//             let description1 = res.results[10].description
//             description.innerText = description1
//             description.style.textAlign = "center"
//             description.style.marginTop = "10px"
//             let instructions = document.querySelector(".recipeInstruct")
//             let recipe1Instructions = res.results[10].instructions
//             let ul = document.createElement("ul")
//             ul = ""
//             instructions.appendChild(ul)

//             for (let i = 0; i < recipe1Instructions.length; i++) {
//                 let li = document.createElement("li")
//                 li.innerText = recipe1Instructions[i].display_text
//                 ul.appendChild(li)
//                 }
//         })
        
//         console.log(res)
//     })


fetch(url, options)
  .then(res => res.json())
  .then((res) => {
    let recipe1name = res.results[0].name;
    let recipe2name = res.results[9].name;
    let recipe3name = res.results[2].name;
    let recipe4name = res.results[5].name;
    let recipe5name = res.results[10].name;
    let recipe1 = document.querySelector('#recipe1');
    recipe1.innerText = recipe1name;
    let recipe2 = document.querySelector("#recipe2");
    recipe2.innerText = recipe2name;
    let recipe3 = document.querySelector("#recipe3");
    recipe3.innerText = recipe3name;
    let recipe4 = document.querySelector("#recipe4");
    recipe4.innerText = recipe4name;
    let recipe5 = document.querySelector("#recipe5");
    recipe5.innerText = recipe5name;

    function showRecipe(index) {
      let h2 = document.querySelector(".recipeName");
      h2.innerText = res.results[index].name;
      h2.style.textAlign = "center";
      h2.style.textDecoration = "underline";
      let img = document.querySelector(".recipeImg");
      let recipeImage = res.results[index].thumbnail_url;
      img.src = recipeImage;
      let description = document.querySelector(".recipeDescription");
      let descriptionText = res.results[index].description;
      description.innerText = descriptionText;
      description.style.textAlign = "center";
      description.style.marginTop = "10px";
      let instructions = document.querySelector(".recipeInstruct");
      instructions.innerHTML = "";
      let recipeInstructions = res.results[index].instructions;
      let ul = document.createElement("ul");
      instructions.appendChild(ul);

      for (let i = 0; i < recipeInstructions.length; i++) {
        let li = document.createElement("li");
        li.innerText = recipeInstructions[i].display_text;
        ul.appendChild(li);
      }
    }

    recipe1.addEventListener("click", () => {
      showRecipe(0);
    });

    recipe2.addEventListener("click", () => {
      showRecipe(9);
    });

    recipe3.addEventListener("click", () => {
      showRecipe(2);
    });

    recipe4.addEventListener("click", () => {
      showRecipe(5);
    });

    recipe5.addEventListener("click", () => {
      showRecipe(10);
    });

  });