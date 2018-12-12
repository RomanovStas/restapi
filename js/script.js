
fetch('http://jsonplaceholder.typicode.com/albums/1/photos').then(function(response) {

  response.json().then(function(albums){

    albums.forEach(function(album) {
	  var renderedRow = render('album-tpl', album);
	  document.getElementById('almums-list').appendChild( renderedRow );
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



