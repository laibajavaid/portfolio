// script.js

// js function for navigation on the work screen
function navigate(direction) {
    // get the article element
    var article = document.getElementById("work");
  
    // get the current page element
    var currentPage = document.querySelector('.page[style="display: block;"]');
  
    // determine the index of the current page
    var pageIndex = Array.from(article.querySelectorAll('.page')).indexOf(currentPage);
  
    // calculate the index of the next page
    var nextPageIndex = direction === 'next' ? (pageIndex + 1) % 4 : (pageIndex - 1 + 4) % 4;
  
    // hide all pages
    article.querySelectorAll('.page').forEach(function(page) {
      page.style.display = 'none';
    });
  
    // display the next page
    article.querySelectorAll('.page')[nextPageIndex].style.display = 'block';
  }
  