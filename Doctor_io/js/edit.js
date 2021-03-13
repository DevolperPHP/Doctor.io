function openPage(num) {
	document.querySelector('#pages').querySelectorAll('div').forEach((el) => {
		el.style.display = 'none';
	});

	document.querySelector('#pages').querySelectorAll('div')[num].style.display = 'block';

	document.querySelector('.buttons').style.display = 'none';
	document.querySelector('.buttons2').style.transform = 'scale(1)';
}

function back() {
	document.querySelector('#pages').querySelectorAll('div').forEach((el) => {
		el.style.display = 'none';
	});

	document.querySelector('.buttons').style.display = 'flex';
	document.querySelector('.buttons2').style.transform = 'scale(0)';
}

function addList() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let listNameInput = document.querySelector('#listNameInput');
	items.push([listNameInput.value]);

	window.localStorage.setItem('lists', JSON.stringify(ListJson));

	listNameInput.value = '';
	listNameInput.innerText = '';
	listNameInput.innerHTML = '';

	displayLists();
}

// setLists
function displayLists() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	var select = '';
	var select2 = '';
	var select3 = '';


	for(let i = 0; i < items.length; i++){
		select += '<option value="' + i + '">' + items[i][0] + '</option>';
		select2 += '<option value="' + i + '">' + items[i][0] + '</option>';
		select3 += '<option value="' + i + '">' + items[i][0] + '</option>';
	}

	document.querySelector('#itemListSelect').innerHTML = select;
	document.querySelector('#itemListSelect2').innerHTML = select2;
	document.querySelector('#itemListSelect3').innerHTML = select3;
}

displayLists();

function addItem() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let selectedList = document.querySelector('#itemListSelect');
	let itemNameInput = document.querySelector('#itemNameInput');
	items[selectedList.value].push(itemNameInput.value);

	window.localStorage.setItem('lists', JSON.stringify(ListJson));

	itemNameInput.value = '';
	itemNameInput.innerText = '';
	itemNameInput.innerHTML = '';

	displayLists();
}

function deleteList() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let listId = document.querySelector('#itemListSelect2').value;
	items.splice(listId, 1);

	window.localStorage.setItem('lists', JSON.stringify(ListJson));

	displayLists();
}

function deleteItem() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let listId = document.querySelector('#itemListSelect3').value;
	let itemId = document.querySelector('#itemSelect').value;
	items[listId].splice(itemId, 1);

	window.localStorage.setItem('lists', JSON.stringify(ListJson));

	displayLists();
}

function showItems(list) {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	let listId = document.querySelector('#itemListSelect3').value;

	var itemsList = '';
	for(let i = 1; i < items[listId].length; i++){

		itemsList += '<option value="' + i + '">' + items[listId][i] + '</option>';
	}
	document.querySelector('#itemSelect').innerHTML = itemsList;
}