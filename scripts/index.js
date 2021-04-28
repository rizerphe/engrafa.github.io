// Grab MD info Json from => https://api.github.com/repos/engrafa/markdown/contents/
// console.log("built by ACuteWoof lol 🤣");

let temp = null;

let articleJson = null;

/*
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const article = urlParams.get('article')

if (String(article) != ''){
    const mdUrl = `https://raw.githubusercontent.com/engrafa/markdown/main/${article}`

}

function viewArticle(){
    
}
*/

function requestMarkdownArticles(username = "", repo = ""){

    const xhr = new XMLHttpRequest();
    
    const url = `https://api.github.com/repos/${username}/${repo}/contents/`

    xhr.open('GET', url, true);

    xhr.onload = function() {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response)
        
        // Log the response
        console.log(data)

        a = 1;

        for (let i in data){
            console.log("name:", data[i].name)
            console.log("url:", data[i].download_url)
            let articleGrid = document.getElementById("articleGrid")
            if (a >= 4){
            articleGrid.innerHTML = articleGrid.innerHTML + `<div class="article_box" onclick='window.open("./Articles/index.html?article=${data[i].name}", "_blank");'><h4>${data[i].name}</h4><img src="https://picsum.photos/200"></div>`;
            }
            a = a + 1;
        }
    }

    xhr.send();

}

requestMarkdownArticles("engrafa", "markdown");

// fetch("https://api.github.com/repos/engrafa/markdown/contents/").then(jsonRaw=>{
//     // articleJson = JSON.parse(JSON.stringify(jsonRaw.json()));
//     console.log(JSON.stringify(jsonRaw.json()))
// })

// articleGrid = document.getElementById("articleGrid");
// articleGrid.innerHTML = '<div class="article_box"><h4>' + '</h4></div>';
