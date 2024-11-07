import {typicalDescriptions, createDescription} from './description-creator.js'
import {openModal} from './popup-open.js'

let pictureSrc = document.querySelector('.pictures');
console.log(pictureSrc)
let fragment = document.createDocumentFragment();
let div = document.createElement('div');
div.classList.add('fragment-class');
let descriptionForPicture = createDescription();
    let srcRewrite = `
    <a href="#" class="picture">
    <img class="picture__img" src=${descriptionForPicture.url} width="182" height="182" alt=${descriptionForPicture.description}>
      <p class="picture__info">
        <span class="picture__comments">${descriptionForPicture.comments[0].message}</span>
        <span class="picture__likes">${descriptionForPicture.likes}</span>
      </p>
      </a>`

  div.innerHTML = srcRewrite;
  fragment.append(div);
  pictureSrc.appendChild(fragment)

let pic = document.querySelector('.picture')
console.log(pic)
pic.addEventListener('click', () => openModal(descriptionForPicture))


