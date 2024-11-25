let taskList = [];

const inputElement = document.getElementById('value')
const addButtonElement = document.getElementById('addValue')
const listElement = document.querySelector('.list')
const itemElement = document.querySelector('.item')

let count = 0;

console.log(inputElement, addButtonElement, listElement, itemElement);

const addTask = (e) => {

    taskList.push({
        id: count,
        value: inputElement.value
    })

    inputElement.value = '';
    console.log(taskList)

    count += 1;

    update();
}

const update = () => {
    listElement.textContent = "";
    taskList.forEach(({id, value}) => {
        const newItemElement = itemElement.cloneNode(true);
        newItemElement.style.display = 'flex';
        newItemElement.firstElementChild.textContent = value;

        const deleteButton = newItemElement.lastElementChild;
        deleteButton.addEventListener('click', () => deleteItem(id))
        console.log(deleteButton);

        listElement.append(newItemElement);
    })
} 

const deleteItem = (elementId) => {
    taskList = taskList.filter(({id}) => (elementId != id))
    update()
}

addButtonElement.addEventListener('click', addTask)

