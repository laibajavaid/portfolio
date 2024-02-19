// script.js

// JavaScript function for navigation
function navigate(direction) {
    // Get the article element
    var article = document.getElementById("work");
  
    // Get the current page element
    var currentPage = document.querySelector('.page[style="display: block;"]');
  
    // Determine the index of the current page
    var pageIndex = Array.from(article.querySelectorAll('.page')).indexOf(currentPage);
  
    // Calculate the index of the next page
    var nextPageIndex = direction === 'next' ? (pageIndex + 1) % 3 : (pageIndex - 1 + 3) % 3;
  
    // Hide all pages
    article.querySelectorAll('.page').forEach(function(page) {
      page.style.display = 'none';
    });
  
    // Display the next page
    article.querySelectorAll('.page')[nextPageIndex].style.display = 'block';
  }
  