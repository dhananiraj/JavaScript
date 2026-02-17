// How to change TagName Using JavaScript
let body = document.querySelector("body");
function changeTagName(oldNode, newTagName) {
  if (oldNode instanceof Element) {
    let newTag = document.createElement(newTagName);
    newTag.innerText = oldNode.innerText;
    for (let value of oldNode.attributes) {
      newTag.setAttribute(value.name, value.value);
    }
    oldNode.replaceWith(newTag);
  } else {
    console.log("Invalid Node hai ye");
    return null;
  }
  console.log(oldNode, newTagName);
}

let div = document.querySelector("#Thank");

changeTagName(div, "p");
