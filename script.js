const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd1fa12b49msh6da84797acf39b6p153d6djsn24ee2287ea04',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

let url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes"

fetch(url, options)
	.then(res => res.json())
	.then((res) => {
        let recipe1name = res.results[0].name
        let recipe2name = res.results[1].name
        let recipe3name = res.results[2].name
        let recipe4name = res.results[3].name
        let recipe5name = res.results[4].name
        let recipe1 = document.querySelector('#recipe1')
        recipe1.innerText = recipe1name
        let recipe2 = document.querySelector("#recipe2")
        recipe2.innerText = recipe2name
        let recipe3 = document.querySelector("#recipe3")
        recipe3.innerText = recipe3name
        let recipe4 = document.querySelector("#recipe4")
        recipe4.innerText = recipe4name
        let recipe5 = document.querySelector("#recipe5")
        recipe5.innerText = recipe5name
        
        recipe1.addEventListener("click", ()=>{
            let h1 = document.querySelector("h1")
            h1.remove()
            let h2 = document.querySelector(".recipeName")
            h2.innerText = recipe1name
            h2.style.textAlign = "center"
            h2.style.textDecoration = "underline"
            let img = document.querySelector(".recipeImg")
            let recipe1image = res.results[0].thumbnail_url
            img.src = recipe1image
            let description = document.querySelector(".recipeDescription")
            let description1 = res.results[0].description
            description.innerText = description1
            description.style.textAlign = "center"
            description.style.marginTop = "10px"
            let instructions = document.querySelector(".recipeInstruct")
            let instructions1 = []
            console.log(res.results[0].instructions[0].display_text)
            // let p = document.createElement("p")
            // p.innerText = recipe1name
            // console.log(recipe1name)
            // p.style.textAlign = "center"
            // p.style.marginTop = "30%"
            // p.style.textDecoration = "underline"
            // p.style.color = "#1a1818"

        })

        recipe2.addEventListener("click", ()=>{
            let h1 = document.querySelector("h1")
            h1.remove()
            let h2 = document.querySelector(".recipeName")
            h2.innerText = recipe2name
            h2.style.textAlign = "center"
            h2.style.textDecoration = "underline"
            let img = document.querySelector(".recipeImg")
            let recipe1image = res.results[1].thumbnail_url
            img.src = recipe1image
            let description = document.querySelector(".recipeDescription")
            let description1 = res.results[1].description
            description.innerText = description1
            description.style.textAlign = "center"
            description.style.marginTop = "10px"
        })

        recipe3.addEventListener("click", ()=>{
            let h1 = document.querySelector("h1")
            h1.remove()
            let h2 = document.querySelector(".recipeName")
            h2.innerText = recipe3name
            h2.style.textAlign = "center"
            h2.style.textDecoration = "underline"
            let img = document.querySelector(".recipeImg")
            let recipe1image = res.results[2].thumbnail_url
            img.src = recipe1image
            let description = document.querySelector(".recipeDescription")
            let description1 = res.results[2].description
            description.innerText = description1
            description.style.textAlign = "center"
            description.style.marginTop = "10px"
        })

        recipe4.addEventListener("click", ()=>{
            let h1 = document.querySelector("h1")
            h1.remove()
            let h2 = document.querySelector(".recipeName")
            h2.innerText = recipe4name
            h2.style.textAlign = "center"
            h2.style.textDecoration = "underline"
            let img = document.querySelector(".recipeImg")
            let recipe1image = res.results[3].thumbnail_url
            img.src = recipe1image
            let description = document.querySelector(".recipeDescription")
            let description1 = res.results[3].description
            description.innerText = description1
            description.style.textAlign = "center"
            description.style.marginTop = "10px"
        })

        recipe5.addEventListener("click", ()=>{
            let h1 = document.querySelector("h1")
            h1.remove()
            let h2 = document.querySelector(".recipeName")
            h2.innerText = recipe5name
            h2.style.textAlign = "center"
            h2.style.textDecoration = "underline"
            let img = document.querySelector(".recipeImg")
            let recipe1image = res.results[4].thumbnail_url
            img.src = recipe1image
            let description = document.querySelector(".recipeDescription")
            let description1 = res.results[4].description
            description.innerText = description1
            description.style.textAlign = "center"
            description.style.marginTop = "10px"
        })
        
        console.log(res)
    })