//Create variables to slect DOM elements
const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.getElementById("changeButton");
const listUl = listDiv.querySelector("ul");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const lis = listUl.children;


//Function to create and attach item buttons
function attachListItemButtons (li) {
  let up = document.createElement("button");
    up.className = "up";
    up.textContent = "Up";
    li.appendChild(up);
  
  let down = document.createElement("button");
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);  
  
  let remove = document.createElement("button");
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);  
}

//Loop to iterate over list items
for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}


//Event listener to remove item list upon click of "remove" button
listUl.addEventListener("click", (event) => {
 if (event.target.tagName == "BUTTON") {
  if (event.target.className == "remove") {
   let li = event.target.parentNode;
   let ul = li.parentNode;
   ul.removeChild(li);
}

  //Event listener to move item up list upon click of "up" button
  if (event.target.className == "up") {
   let li = event.target.parentNode;
   let prevLi = li.previousElementSibling;
   let ul = li.parentNode;
   if (prevLi) {
      ul.insertBefore(li, prevLi);
     }
  }

  //Event listener to move item down list upon click of "down" button
  if (event.target.className == "down") {
   let li = event.target.parentNode;
   let nextLi = li.nextElementSibling;
   let ul = li.parentNode;
   if (nextLi) { 
      ul.insertBefore(nextLi, li); 
     }
    }
  }
});

//Event listener to hide/show list upon click of "hide/show list" button 
toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
  toggleList.textContent = "Hide list";
   listDiv.style.display = "block";
} else  {
  toggleList.textContent = "Show list";
  listDiv.style.display = "none";
}
});

//Event listener to change description of list from input value
descriptionButton.addEventListener("click", () => {
  descriptionP.innerHTML = descriptionInput.value + ":";
  descriptionInput.value = "";
});
  
  //Event listener to add item to list from input value
  addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
});

