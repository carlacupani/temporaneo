const addEventOnElements = function(elements, eventType, callback){
  for (const elem of elements) elem.addEventListener(eventType,callback);
}

const searchBox = document.querySelector("[search-btn]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
  searchBox.classList.toggle("active");
});
