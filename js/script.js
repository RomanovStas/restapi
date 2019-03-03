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




fetch('http://jsonplaceholder.typicode.com/albums/1/photos').then(function(response) {

  response.json().then(function(albums){

    albums.forEach(function(album) {
	  var renderedRow = render('album-tpl', album);
    var photoList = document.getElementsByClassName('photos')[0];
	  photoList.appendChild( renderedRow );
	});

	// render template
	function render(id, data) {
	  var tpl = document.getElementById(id);
	  var tplHtml = tpl.innerHTML;
	  for(var i in data) {
	    var repl = new RegExp('{'+i+'}', 'g');
	    tplHtml = tplHtml.replace(repl, data[i]);
	  }
	  return parseHTML(tplHtml);
	}
	// creat dom-elements from html-string
	function parseHTML(html) {
	    var t = document.createElement('template');
	        t.innerHTML = html;
	    return t.content.cloneNode(true);
	}

  });
}).catch(err => console.log('Error: ${err}'));


