var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("album");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("vision"); 
  }
  slides[slideIndex-1].classList.add("vision"); 

}


fetch('https://jsonplaceholder.typicode.com/albums/1')
  .then(response => response.json())
  .then(json => console.log(json))






var btn = document.getElementById("btn")
if(btn){
  btn.addEventListener("click", getPost, false);
}

var con = 0;
var div = document.getElementById("cardDiv");

function getPost() {
	fetch('https://jsonplaceholder.typicode.com/photos')
		.then((res) => {
			return res.json();
		})
		.then((post) => {
			for (let index = 0; index < 8; index++) {
				div.innerHTML+=`
					<div class="album_photo">
						<a href="${post[con].url}">
							<img src="${post[con].thumbnailUrl}" alt="${post[con].title}">
						</a>
						<p>${post[con].id}</p>
					</div>
				`
				con=con+1;
			}
		})
		.catch((error)=>{
			console.log(error);
		})

}
