function addItem() {

    let text = document.getElementById('newText').value;
    let itemsListElement = document.getElementById('items');

    let listItemElement = document.createElement('li');
    let deleteItem = document.createElement('a');
    deleteItem.href = "";
    deleteItem.textContent = '[Delete]';
    listItemElement.textContent = text + ' ';
    itemsListElement.appendChild(listItemElement);
    listItemElement.appendChild(deleteItem); 
}