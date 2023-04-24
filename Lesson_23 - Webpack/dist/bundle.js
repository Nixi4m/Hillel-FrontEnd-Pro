/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/js/main.js":()=>{eval("const apiUrl = 'https://jsonplaceholder.typicode.com';\nfunction getPostById(postId) {\n  return fetch(`${apiUrl}/posts/${postId}`).then(response => {\n    if (!response.ok) {\n      throw new Error('Не удалось получить пост');\n    }\n    return response.json();\n  });\n}\nfunction getCommentsByPostId(postId) {\n  return fetch(`${apiUrl}/posts/${postId}/comments`).then(response => {\n    if (!response.ok) {\n      throw new Error('Не удалось получить комментарии');\n    }\n    return response.json();\n  });\n}\nconst searchButton = document.querySelector('#searchButton');\nconst postContainer = document.querySelector('#postContainer');\nsearchButton.addEventListener('click', () => {\n  const postId = document.querySelector('#postId').value;\n  getPostById(postId).then(post => {\n    postContainer.innerHTML = `\n        <h2>${post.title}</h2>\n        <p>${post.body}</p>\n        <button id=\"commentsButton\">Показать комментарии</button>\n      `;\n    const commentsButton = document.querySelector('#commentsButton');\n    commentsButton.addEventListener('click', () => {\n      getCommentsByPostId(postId).then(comments => {\n        const commentsList = document.createElement('ul');\n        comments.forEach(comment => {\n          const commentItem = document.createElement('li');\n          commentItem.textContent = comment.body;\n          commentsList.appendChild(commentItem);\n        });\n        postContainer.appendChild(commentsList);\n      }).catch(error => {\n        console.error(error);\n      });\n    });\n  }).catch(error => {\n    console.error(error);\n    postContainer.innerHTML = '<p>Пост не найден</p>';\n  });\n});\n\n//# sourceURL=webpack://webpack-test/./src/js/main.js?")},"./src/scss/main.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-test/./src/scss/main.scss?")}},__webpack_require__={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};__webpack_modules__["./src/js/main.js"](0,{},__webpack_require__);var __webpack_exports__={};__webpack_modules__["./src/scss/main.scss"](0,__webpack_exports__,__webpack_require__)})();