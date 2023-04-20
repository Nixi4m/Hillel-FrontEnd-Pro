const apiUrl = 'https://jsonplaceholder.typicode.com';

function getPostById(postId) {
  return fetch(`${apiUrl}/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не удалось получить пост');
      }
      return response.json();
    });
}

function getCommentsByPostId(postId) {
  return fetch(`${apiUrl}/posts/${postId}/comments`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не удалось получить комментарии');
      }
      return response.json();
    });
}

const searchButton = document.querySelector('#searchButton');
const postContainer = document.querySelector('#postContainer');

searchButton.addEventListener('click', () => {
  const postId = document.querySelector('#postId').value;

  getPostById(postId)
    .then(post => {
      postContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="commentsButton">Показать комментарии</button>
      `;

      const commentsButton = document.querySelector('#commentsButton');
      commentsButton.addEventListener('click', () => {
        getCommentsByPostId(postId)
          .then(comments => {
            const commentsList = document.createElement('ul');
            comments.forEach(comment => {
              const commentItem = document.createElement('li');
              commentItem.textContent = comment.body;
              commentsList.appendChild(commentItem);
            });
            postContainer.appendChild(commentsList);
          })
          .catch(error => {
            console.error(error);
          });
      });
    })
    .catch(error => {
      console.error(error);
      postContainer.innerHTML = '<p>Пост не найден</p>';
    });
});
