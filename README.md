# Dynamic Chapter Manager

Dynamic Chapter Manager is a responsive web application that allows users to dynamically manage a list of chapters. It includes features to add, edit, and remove chapters, making it a practical demonstration of basic CRUD (Create, Read, Update, Delete) operations using HTML, CSS, JavaScript, and Bootstrap.

## Features

- **Add Chapters**: Dynamically add chapters to the list using an input field and an "Add" button.
- **Edit Chapters**: Modify the chapter name directly from the list.
- **Remove Chapters**: Delete chapters from the list with a single click.
- **Empty State Message**: Displays a message when the list is empty.
- **Responsive Design**: Designed with Bootstrap for a clean and responsive interface.

## Technologies Used

- **HTML5**: For structuring the web application.
- **CSS (Bootstrap)**: For styling and responsive design.
- **JavaScript**: For interactivity and dynamic behavior.

## Project Structure

```
Dynamic-Chapter-Manager/
├── index.html       # Main HTML file
├── script.js        # JavaScript file for functionality
└── style.css        # Custom styles (optional)
```

## How to Run

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Use the input field to add new chapters, and manage the list using edit and remove features.

## Code Highlights

### HTML Structure
The main structure includes a navigation bar, an input field for adding chapters, and a list to display the chapters. Buttons for editing and removing chapters are dynamically added.

```html
<div class="container mt-5 col-6">
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Chapter Name" />
    <button class="btn btn-outline-success" type="button" id="button-addon2">
      Add
    </button>
  </div>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
      <h3 class="flex-grow-1">Chapter 1</h3>
      <button class="btn btn-warning mx-2" onclick="editChapter(this)">Edit</button>
      <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>
    </li>
  </ul>
</div>
```

### JavaScript Functionality
Key functions for adding, editing, and removing chapters:

```javascript
function addChapters(e) {
  if (parentList.children[0].className == "emptyMsg d-flex justify-content-center") {
    parentList.children[0].remove();
  }
  let inputText = e.currentTarget.previousElementSibling.value;

  let newList = document.createElement("li");
  newList.className = "list-group-item d-flex justify-content-between";
  newList.innerHTML = `
    <h3 class="flex-grow-1">${inputText}</h3>
    <button class="btn btn-warning mx-2" onclick="editChapter(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>
  `;
  parentList.appendChild(newList);
}

function removeChapter(currElement) {
  currElement.parentElement.remove();
  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement("h3");
    newEmptyMsg.className = "emptyMsg d-flex justify-content-center";
    newEmptyMsg.innerText = "List is Empty. Please Add Chapter";
    parentList.appendChild(newEmptyMsg);
  }
}

function editChapter(currElement) {
  if (currElement.innerText == "DONE") {
    currElement.innerText = "Edit";
    let text = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h3");
    currHeading.className = "flex-grow-1";
    currHeading.innerText = text;
    currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling);
  } else {
    currElement.innerText = "DONE";
    let text = currElement.previousElementSibling.innerText;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.className = "form-control";
    currInput.placeholder = "Chapter Name";
    currInput.value = text;
    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
  }
}
```

## Future Enhancements

- **Persistent Storage**: Save chapters to local storage or a database for persistence.
- **Drag and Drop**: Add the ability to reorder chapters.
- **Search Functionality**: Implement a search feature to filter chapters.
- **Enhanced Styling**: Improve the UI/UX with additional Bootstrap components.

## License

This project is licensed under the MIT License.

---

Enjoy managing your chapters dynamically with the **Dynamic Chapter Manager**! 🚀
