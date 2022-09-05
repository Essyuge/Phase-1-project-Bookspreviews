

document.addEventListener('DOMContentLoaded',getBooks())

  let listBooks=document.getElementById('results');
  let searchValue=document.getElementById('search');
  let form=document.getElementById('form');
  let handleDelete=document.getElementById('delete')
  

  form.addEventListener('submit', event => {
	event.preventDefault();
	postBook(event.target)
	// console.log(event.target)
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
		body: JSON.stringify({
		  "name": book.name.value,
		  "author": book.author.value,
		   "image":book.image.value,
		   "subtitle":book.subtitle.value
  
		})
	  })
	  .then(res => res.json())
	  .then((new_book) => {
		let listBooks = renderBook(new_book)
		listBooks.append(listBooks)
	  })
  }	 

  function removeBook(id) {
	return fetch(`https://silken-sky-comma.glitch.me/books/${id}`,{
		method: 'Delete',
		headers: {
		  'Content-Type': 'application/json',
		  Accept: "application/json"
		},

	}
	)
	
}
function renderBook(book){
	let div=document.createElement('div')
	div.setAttribute('class', 'card')
	let h1=document.createElement('h1')
	h1.setAttribute('class', 'title')
	h1.innerText =`Book:, ${book.name}`
	let img=document.createElement('img')
	img.setAttribute('src', book.image)
	img.setAttribute('alt', book.name)
	let p1=document.createElement('p')
	p1.setAttribute('class','spacing')
	p1.innerHTML=`Author:${book.author}`
	let p2=document.createElement('p')
	p2.setAttribute('class','spacing')
	p2.innerHTML=`Subtitle:${book.subtitle}`
	let button=document.createElement('button')
	button.setAttribute('id','btn')
	button.innerText='Remove'
 div.append(h1,img,p1,p2,button)
 listBooks.appendChild(div)
 button.addEventListener('click', (e) => {
	div.remove()
	removeBook(book.id)
	
    })
}	 