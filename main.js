
let resultsDiv = document.querySelector("#results")
console.log('results div', resultsDiv) 

let searchBaseUrl = "https://itunes.apple.com/search?term="

//let songArray = getSearchResults(url);

let searchForm = document.querySelector("#search-form")

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchBox = document.querySelector('#search-box')
    let searchUrl = `${searchBaseUrl}${searchBox.value}`
    console.log('search url', searchUrl)
    getSearchResults(searchUrl)
})

function getSearchResults(url) { 
    fetch (url, {
        //showSearchResults(searchUrl) {
         method: 'GET', 
         headers: {'Content.type': 'application/json'}

  })                    
    .then (function (response) {
        return response.json()
    })
.then (function (data) {
    console.log (data.results)
showSearchResults(data.results);   
})
}


function showSearchResults(songsArray) {  
    resultsDiv.innerHTML = ('')
    console.log(songsArray);
 
for (let song of songsArray) {
    let recordDiv = document.createElement('div');
    recordDiv.classList.add('record');

    let imageDiv = document.createElement('img');
    imageDiv.classList.add('image');
    imageDiv.src = song.artworkUrl100;

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('div');
    titleDiv.innerText = `${song.trackName}`;

    let artistDiv = document.createElement('div');
    artistDiv.classList.add('div')
    artistDiv.innerText = `${song.artistName}`;
    
    resultsDiv.appendChild(recordDiv);
    recordDiv.appendChild(imageDiv);
    recordDiv.appendChild(artistDiv);
    recordDiv.appendChild(titleDiv);

    let audio = document.querySelector('#audio-preview')
    let currentSong = document.querySelector('.current-song')

    recordDiv.addEventListener('click', playAudio);
    function playAudio() {
        audio.src = song.previewUrl
        currentSong.innerText = `Currently playing: ${song.trackName}`
    }
}


}







