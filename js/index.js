// javascript for index.html
const container = document.querySelector('.blogs');
// const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  console.log(term);
  let uri = 'https://raw.githubusercontent.com/dennis0778/fakeServer/a5dcddf614c784bffa567e19dd7b01dce4f74547/db.json';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 50)}...</p>
        <a href="/details.html?id=${post.id}">Read more</a>
      </div>
    `
  });

  container.innerHTML = template;
}

// search
// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   renderPosts(searchForm.term.value.trim());
// })

window.addEventListener('DOMContentLoaded', () => renderPosts());