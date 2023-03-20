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
        
        console.log()
    })