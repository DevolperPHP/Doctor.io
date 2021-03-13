function ShowLists() {
	document.querySelectorAll('#ListForm > div').forEach((el) => {
		let childNode = el.querySelector('h4');

		childNode.addEventListener('click', () => {
			childNode.parentNode.classList.toggle('activeList');
		});
	});
}


function previewElement() {
	document.querySelectorAll('#ListForm > div').forEach((el) => {
		el.querySelectorAll('input[type="checkbox"]').forEach((childNode) => {
			childNode.addEventListener('change', () => {
				if (childNode.checked) {
					document.querySelector('#list').innerHTML += '<div id="' + childNode.value + '">' + childNode.parentNode.innerText + '</div>';
				} else {
					document.querySelector('#list').querySelector('#' + childNode.value).remove();
				}
			});
		});
	});
}


function displayLists() {
	const Storage = window.localStorage.getItem('lists');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	var listForm = '';

	for(let i = 0; i < items.length; i++){
		listForm += '<div>';
		listForm += '<h4>' + items[i][0] + '</h4>';

		for(let j = 1; j < items[i].length; j++){
			listForm += '<label>' + items[i][j] + ` <input type="checkbox" value="e${i}a${j}"> </label>`
		}
		listForm += '</div>';
	}

	document.querySelector('#ListForm').innerHTML = listForm;
}

displayLists();

ShowLists();

previewElement();


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

	location.reload();
}

function printItBefore() {
	var name = prompt('Write a name or ignore It...');

	if (name) {
		addToSaved(name);
		printItAfter();
	} else {
		printItAfter();
	}
}

function addToSaved(name) {
	const Storage = window.localStorage.getItem('saved');

	var ListJson = JSON.parse(Storage);
	var items = ListJson.items;

	// add list
	var itemsDiv = document.querySelector('#list').querySelectorAll('div');

	var list = [];
	list.push(name);

	for (let i = 0; i < itemsDiv.length; i++) {
		list.push(itemsDiv[i].innerText);
	}

	items.push(list);

	window.localStorage.setItem('saved', JSON.stringify(ListJson));
}