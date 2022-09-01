document.addEventListener('DOMContentLoaded',getBooks())

  let listBooks=document.getElementById('results');
  let searchValue=document.getElementById('search');
  let form=document.getElementById('form');
  let handleDelete=document.getElementById('delete')

  form.addEventListener('submit', event => {
	event.preventDefault();
	postBook(event.target)
	console.log(event.target)
	