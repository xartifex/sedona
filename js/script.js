var searchForm = document.querySelector('.search-form');
var openCloseButton = document.querySelector('.hotel-search-open-form-btn');
openCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-form-show');
});
var htmlElement = document.querySelector('html');
htmlElement.classList.remove('no-js');
htmlElement.classList.add('js-on');
