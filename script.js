let addBTN = document.querySelector("#button-addon2");
let removeBTN = document.querySelector("#removebtn");
let parentList = document.querySelector(".list-group");

addBTN.addEventListener("click", addChapters);

function addChapters(e) {
  if (
    parentList.children[0].className == "emptyMsg d-flex justify-content-center"
  ) {
    parentList.children[0].remove();
  }
  let inputText = e.currentTarget.previousElementSibling.value;

  let newList = document.createElement("li");
  //newList.classList.add("list-group-item");
  newList.className = "list-group-item d-flex justify-content-between";
  newList.innerHTML = `<h3 class="flex-grow-1">${inputText}</h3>
            <button class="btn btn-warning mx-2" onclick="editChapter(this)">Edit</button>
            <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;

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
    let currHeading = document.createElement('h3');
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

    currElement.parentElement.replaceChild(
      currInput,
      currElement.previousElementSibling
    );
  }
}
