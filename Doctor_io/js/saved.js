function ShowLists() {
	document.querySelectorAll('#ListForm > div').forEach((el) => {
		let childNode = el.querySelector('h4');

		childNode.addEventListener('click', () => {
			document.querySelectorAll('#ListForm > div').forEach((divs) => {
				divs.classList.remove('activeList');
			});

			childNode.parentNode.classList.toggle('activeList');

			showOnPreview(childNode.parentNode.getAttribute('list-id'));
		});
	});
}

function showOnPreview(id) {
	const Storage = window.localStorage.getItem('saved');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	var html = '';
	for (let i = 1; i < items[id].length; i++) {
		html += '<div id="o' + id + 'a' + i + '" ondblclick="this.remove();">' + items[id][i] + '</div>';

	}
	document.querySelector('#list').innerHTML = html;

}

function displayLists() {
	const Storage = window.localStorage.getItem('saved');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	var listForm = '';

	for(let i = 0; i < items.length; i++){
		listForm += '<div list-id="' + i + '">';
		listForm += '<h4>' + items[i][0] + '<button class="btn" onclick="deleteThat(this);">Delete</button></h4>';
		listForm += '</div>';
	}

	document.querySelector('#ListForm').innerHTML = listForm;
}

function displayListsFromList() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	var listSelect = '<option selected>Select a List...</option>';

	for(let i = 0; i < items.length; i++){
		listSelect += '<option value="' + i + '">' + items[i][0] + '</option>';
	}

	document.querySelector('#itemListSelect').innerHTML = listSelect;
}

displayLists();

ShowLists();

displayListsFromList();

function showItems(list) {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let listId = list.value;

	var itemsList = '<option selected>Select an Item...</option>';
	for(let i = 1; i < items[listId].length; i++){
		itemsList += '<option value="' + i + '">' + items[listId][i] + '</option>';
	}
	document.querySelector('#itemSelect').innerHTML = itemsList;
}

function addItem() {
	var listId = document.querySelector('#itemListSelect').value;
	var itemId = document.querySelector('#itemSelect');

	document.querySelector('#list').innerHTML += '<div id="e' + listId + 'a' + itemId.value + '" ondblclick="this.remove();">' + itemId.options[itemId.selectedIndex].text + '</div>';
}

function printItAfter() {
	var items = document.querySelector('#list').querySelectorAll('div');

	var href = '';

	for(let i = 0; i < items.length; i++){
		href += i +'='+ items[i].id;

		if (i !== items.length - 1) {
			href += '&';
		}
	}

	window.open('print.html?' + href, '_blank');
}

function deleteThat(child) {
	const Storage = window.localStorage.getItem('saved');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let listId = child.parentNode.parentNode.getAttribute('list-id');
	items.splice(listId, 1);

	window.localStorage.setItem('saved', JSON.stringify(ListJson));

	displayLists();
}