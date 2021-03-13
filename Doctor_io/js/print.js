var href = document.location.href;

var formData = href.split('?')[1].split('&');

for (let value of formData) {
	let values = value.split('=');

	if (values[1].startsWith('e')) {
		let item = values[1].replace('e', '');
		item = item.split('a');

		const Storage = window.localStorage.getItem('lists');

		var ListJson = JSON.parse(Storage);
		var items = ListJson.items;

		document.querySelector('#list').innerHTML += '<div contenteditable="true">' + items[item[0]][item[1]].replace( /\(.*?\)/, '' ); + '</div>';
	} else if (values[1].startsWith('o')) {
		let item = values[1].replace('o', '');
		item = item.split('a');

		const StorageSaved = window.localStorage.getItem('saved');

		var ListJsonSaved = JSON.parse(StorageSaved);
		var itemsSaved = ListJsonSaved.items;

		document.querySelector('#list').innerHTML += '<div contenteditable="true">' + itemsSaved[item[0]][item[1]].replace( /\(.*?\)/, '' ); + '</div>';
	}
}


print();