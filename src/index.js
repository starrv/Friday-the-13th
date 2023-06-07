const URL="http://localhost:3000/movies"
fetch(URL)
.then(response=>response.json())
.then(movies=>{
    movies.forEach(movie=>renderMovie(movie))
    displayMovieDetails(movies[0])
})
let selectedMovie
document.querySelector("#watched").addEventListener("click",()=>toggleWatched(selectedMovie))
const bloodForm=document.querySelector("#blood-form")
bloodForm.addEventListener("submit",updateBloodCount)


function renderMovie(movie){
    const movieList=document.querySelector("#movie-list")
    const movieImage=document.createElement("img")
    movieImage.src=movie.image
    movieImage.addEventListener("click",()=>displayMovieDetails(movie))
    movieList.append(movieImage)
}

function displayMovieDetails(movie){
    const movieTitle=document.querySelector("#title")
    movieTitle.textContent=movie.title
    const movieYearReleased=document.querySelector("#year-released")
    movieYearReleased.textContent=movie.release_year
    const description=document.querySelector("#description")
    description.textContent=movie.description
    const movieImage=document.querySelector("#detail-image")
    movieImage.src=movie.image
    const movieWatched=document.querySelector("#watched")
    movieWatched.textContent=movie.watched ? "watched" : "unwatched"
    const bloodAmount=document.querySelector("#amount")
    bloodAmount.textContent=movie.blood_amount
    selectedMovie=movie
}

function watched(movie){
    if(movie==true){
        return "watched"
    }
    else{
        return "unwatched"
    }
}

function toggleWatched(movie){
    movie.watched=!movie.watched
    const watched=document.querySelector("#watched")
    if(movie.watched===false){
        watched.textContent="unwatched"
    }
    else{
        watched.textContent="watched"
    }
}

function updateBloodCount(event){
    event.preventDefault()
    let bloodAmount=document.querySelector("input#blood-amount").value
    bloodAmount=parseInt(bloodAmount)
    let displayedBloodAmount=document.querySelector("#amount").textContent
    displayedBloodAmount=parseInt(displayedBloodAmount)
    bloodAmount=bloodAmount+displayedBloodAmount
    selectedMovie.blood_amount=bloodAmount
    document.querySelector("#amount").textContent=selectedMovie.blood_amount
    document.querySelector("input#blood-amount").value=""
}