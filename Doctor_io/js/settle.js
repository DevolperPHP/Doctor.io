if (!window.localStorage.getItem('lists')) {
	window.localStorage.setItem('lists', JSON.stringify({items: []}));
}

if (!window.localStorage.getItem('saved')) {
	window.localStorage.setItem('saved', JSON.stringify({items: []}));
}