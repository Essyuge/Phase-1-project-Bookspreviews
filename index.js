document.addEventListener('DOMContentLoaded',getBooks())

  let listBooks=document.getElementById('results');
  let searchValue=document.getElementById('search');
  let form=document.getElementById('form');
  let handleDelete=document.getElementById('delete')

  form.addEventListener('submit', event => {
	event.preventDefault();
	postBook(event.target)
	console.log(event.target)
        event.target.name.value=""
        event.target.author.value=""
        event.target.image.value=""
        event.target.subtitle.value=""
        
      })
      function getBooks(){
        fetch("https://silken-sky-comma.glitch.me/books")
        .then(response => response.json())
        .then(books => {books.map(book => {
              renderBook(book)
            })
          })
    }
    function postBook(book) {
        fetch('https://silken-sky-comma.glitch.me/books', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: "application/json"
            },
        
    
	