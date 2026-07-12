
const movies = document.querySelectorAll(".movie-card");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalInfo = document.getElementById("modal-info");


movies.forEach(movie => {

    movie.addEventListener("click", function(e){

        e.preventDefault();

        modal.style.display="flex";

        modalImg.src=this.querySelector("img").src;

        modalTitle.textContent=this.dataset.title;

        modalSummary.textContent=this.dataset.summary;

        modalInfo.innerHTML=`
            <li><strong>Year:</strong> ${this.dataset.year}</li>
            <li><strong>Director:</strong> ${this.dataset.director}</li>
            <li><strong>Duration:</strong> ${this.dataset.duration}</li>
        `;

    });

});


const fechar = document.getElementById("fechar");


if(fechar){

    fechar.onclick=function(){

        modal.style.display="none";

    }

}


window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

};



// ---------- SEARCH BAR ----------

// ---------- SEARCH BAR ----------

const searchInput = document.getElementById("searchInput");


if(searchInput){

    searchInput.addEventListener("input", function(){

        let searchValue = this.value.toLowerCase();


        // MOVIES
        const movies = document.querySelectorAll(".movie-card");

        movies.forEach(movie => {

            let title = movie.querySelector("h3").textContent.toLowerCase();

            if(title.includes(searchValue)){
                movie.style.display = "";
            } 
            else{
                movie.style.display = "none";
            }

        });



        // DIRECTORS
        const directors = document.querySelectorAll(".director-card");

        directors.forEach(director => {

            let name = director.querySelector("h3").textContent.toLowerCase();

            if(name.includes(searchValue)){
                director.style.display = "";
            }
            else{
                director.style.display = "none";
            }

        });



        // ACTORS
        const actors = document.querySelectorAll(".actor-card");

        actors.forEach(actor => {

            let name = actor.querySelector("h3").textContent.toLowerCase();

            if(name.includes(searchValue)){
                actor.style.display = "";
            }
            else{
                actor.style.display = "none";
            }

        });


    });

}

// ---------- DIRECTORS MODAL ----------

const directorCards = document.querySelectorAll(".director-card");

const directorModal = document.getElementById("director-modal");

const directorModalImg = document.getElementById("director-modal-img");

const directorModalName = document.getElementById("director-modal-name");

const directorModalBio = document.getElementById("director-modal-bio");

const directorModalInfo = document.getElementById("director-modal-info");

const closeDirector = document.getElementById("close-director");



if(directorModal){


    directorCards.forEach(director => {


        director.addEventListener("click", function(e){


            e.preventDefault();


            directorModal.style.display="flex";


            directorModalImg.src = this.querySelector("img").src;


            directorModalName.textContent = this.dataset.name;


            directorModalBio.textContent = this.dataset.bio;


            directorModalInfo.innerHTML = `

                <li><strong>Born:</strong> ${this.dataset.born}</li>

                <li><strong>Country:</strong> ${this.dataset.country}</li>

                <li><strong>Style:</strong> ${this.dataset.style}</li>

            `;


        });


    });



    closeDirector.onclick = function(){


        directorModal.style.display="none";


    }



    window.onclick=function(e){


        if(e.target == directorModal){


            directorModal.style.display="none";


        }


    }


}

const actorCards = document.querySelectorAll(".actor-card");


const actorModal = document.getElementById("actor-modal");

const actorImg = document.getElementById("actor-modal-img");

const actorName = document.getElementById("actor-modal-name");

const actorInfo = document.getElementById("actor-modal-info");

const actorSummary = document.getElementById("actor-modal-summary");


actorCards.forEach(actor => {


actor.addEventListener("click", function(e){


e.preventDefault();


actorModal.style.display="flex";


actorImg.src=this.querySelector(".actor-photo").src;


actorName.textContent=this.dataset.name;


actorInfo.innerHTML=`

<li><strong>Born:</strong> ${this.dataset.born}</li>

<li><strong>Nationality:</strong> ${this.dataset.nationality}</li>

`;


actorSummary.textContent=this.dataset.known;


});


});



document.getElementById("actor-close").onclick=function(){

actorModal.style.display="none";

}



window.addEventListener("click", function(e){

if(e.target==actorModal){

actorModal.style.display="none";

}

});