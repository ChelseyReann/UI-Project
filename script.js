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
        console.log(res.results[0].instructions[2].display_text)
    })