// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

const accordionEl = document.getElementById("accordion");

async function getPosts(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((posts) => {
    const postsEl = document.createElement("div");
    postsEl.innerHTML = `${posts.title}`;

    if (posts.id % 2 == 0) {
      postsEl.className = "title even";
    } else {
      postsEl.className = "title odd";
    }

    accordionEl.appendChild(postsEl);
    
    const descriptionEl = document.createElement("div");
    descriptionEl.className = "description";
    descriptionEl.innerHTML = `<p>${posts.body}</p>`;

    accordionEl.appendChild(descriptionEl);

    postsEl.addEventListener("click", toggle);
  });
  
  console.log(data);
}

getPosts();