function addItem() {

    let text = document.getElementById('newItemText').value;
    let itemsListElement = document.getElementById('items');

    let listItemElement = document.createElement('li');
    listItemElement.textContent = text;
    itemsListElement.appendChild(listItemElement);
}