document.getElementById("getPosts").addEventListener("click", getPosts);
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 class= 'postTitle'> Posts </h2>";
      data.forEach(function (post, index) {
        output += `
       
        <div class = "postStyle" id = ${index}> 

        <h3 > ${post.title}</h3>
        <p> ${post.body}</p>
        </div>
        
        `;
      });
      document.getElementById("output").innerHTML = output;
      const childCount = document.getElementById("output").childElementCount;

      for (let i = 0; i < childCount - 1; i++) {
        document
          .getElementById(`${i}`)
          .addEventListener("click", (e) => EditPost(e));
      }
    });
}
document.getElementById("addpost").addEventListener("submit", addPost);
async function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    body: JSON.stringify({ title: title, body: body }),
  });
  const newpost = await res.json();
  //console.log(newpost);
}
let targetDivID = null;

function EditPost(e) {
  let targetDiv = null;
  if (e.target.nodeName !== "DIV") {
    targetDiv = e.target.parentNode;
  } else {
    targetDiv = e.target;
  }
  const title = targetDiv.firstElementChild.innerHTML;
  const body = targetDiv.lastElementChild.innerHTML;
  const form = document.getElementById("addpost");
  document.getElementById("title").value = title;
  document.getElementById("body").value = body;
  targetDivID = targetDiv.id;

  form.scrollIntoView();
}

function submitCall() {
  const editedTitle = document.getElementById("title").value;
  const editedBody = document.getElementById("body").value;
  document.getElementById(targetDivID).firstElementChild.innerHTML =
    editedTitle;
  document.getElementById(targetDivID).lastElementChild.innerHTML = editedBody;
}
