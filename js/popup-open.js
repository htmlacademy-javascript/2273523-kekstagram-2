let bigPopup = document.querySelector('.big-picture');
let body = document.querySelector('body');
let socialComments = document.querySelector('.social__comment-count');
let commentLoader = document.querySelector('.comments-loader');
let smallPopup = document.querySelector('.picture__img');
let likes = document.querySelector('.likes-count');
let bigPic = document.querySelector('.big-picture__social');
let socialHeader = document.querySelector('.social__header');
let bigPicture = document.querySelector('.big-picture')

function openModal(data) {
    bigPicture.classList.remove('hidden');
    let frag = document.createDocumentFragment();
    let string = '';
    let commentariesNumber = 5;
    let commentShow;
    commentShow = commentariesNumber;
    console.log(commentShow)
    function updateCommentCount() {
      let shown = document.querySelector('.social__comment-shown-count')
      let total = document.querySelector('.social__comment-total-count')
      shown.textContent = commentShow;
      total.textContent = data.comments.length;
    }


    function moreCommentDownload () {
      commentShow = commentShow + commentariesNumber;
      console.log(commentShow)
      if(commentShow > data.comments.length) {
        commentShow = data.comments.length;
        document.querySelector('.social__comments-loader').classLisrt.add('hidden')
      }
      let commentList = document.querySelector('.social__comments')
      let commentsHTML = data.comments
      .slice(commentShow - commentariesNumber, commentShow)
      .map(comment => `
      <li class="social__comment">
            <img class="social__picture" src=${comment.avatar} alt=${comment.message} width="35" height="35">
            <p class="social__text">${comment.message}</p>
          </li>
      `)
      .join('')
      commentList.innerHTML += commentsHTML
      console.log(commentList)
      updateCommentCount()
    }
    let template = `<h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
    <div class="big-picture__preview">

      <!-- Просмотр изображения -->
      <div class="big-picture__img">
        <img src=${data.url} alt=${data.description} width="600" height="600">
      </div>

      <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
      <div class="big-picture__social  social">
        <div class="social__header">
          <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
          <p class="social__caption">Тестим новую камеру! =)</p>
          <p class="social__likes">Нравится <span class="likes-count">${data.likes}</span></p>
        </div>

        <!-- Комментарии к изображению -->
        <div class="social__comment-count"><span class="social__comment-shown-count"></span> из <span class="social__comment-total-count"></span> комментариев</div>
        <ul class="social__comments">
          ${data.comments
          .slice(0, commentariesNumber)
          .map(comment => `
      <li class="social__comment">
            <img class="social__picture" src=${comment.avatar} alt=${comment.message} width="35" height="35">
            <p class="social__text">${comment.message}</p>
          </li>
      `)
      .join('')
        }

        </ul>

        <!-- Кнопка для загрузки новой порции комментариев -->
        <button type="button" class="social__comments-loader  comments-loader">Загрузить еще</button>

        <!-- Форма для отправки комментария -->
        <div class="social__footer">
          <img class="social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35">
          <input type="text" class="social__footer-text" placeholder="Ваш комментарий...">
          <button type="button" class="social__footer-btn" name="button">Отправить</button>
        </div>
      </div>

      <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
      <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
    </div>`
    string = string + template;
    let diV = document.createElement('div')
    diV.innerHTML = string;
    frag.append(diV);
    bigPicture.append(frag);
    let cross = diV.querySelector('.big-picture__cancel');
    cross.addEventListener('click', () => {
        bigPicture.classList.add('hidden');
        diV.remove()
    })
    document.addEventListener('keydown', (evt) => {
        if(evt.key === 'Escape') {
            bigPicture.classList.add('hidden');
        }
    })

    let commentsLoader = document.querySelector('.social__comments-loader')
    commentsLoader.addEventListener('click', moreCommentDownload())
    console.log(commentsLoader)
    updateCommentCount()

}


export {openModal}

