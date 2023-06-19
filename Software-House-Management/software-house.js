// For First Switcher
const switchers = document.querySelectorAll('.switcher');
const contents = document.querySelectorAll('.content');

switchers.forEach(function(switcher) {
  switcher.addEventListener('click', function() {
    const selectedContentIds = switcher.dataset.content.split(' ');

    // Show selected contents and hide other contents
    contents.forEach(function(content) {
      if (selectedContentIds.includes(content.id)) {
        content.classList.remove('d-none');
      } else {
        content.classList.add('d-none');
      }
    });

    // Update switcher classes
    switchers.forEach(function(s) {
      s.classList.remove('main-content-selected');
    });
    switcher.classList.add('main-content-selected');
  });
});

// For Second Switcher
const secondaryswitchers = document.querySelectorAll('.secondaryswitcher');
const secondarycontents = document.querySelectorAll('.content');
const icons = document.querySelectorAll('.icon-in-secondary-selector');

secondaryswitchers.forEach(function(secondaryswitcher) {
    secondaryswitcher.addEventListener('click', function() {
    const selectedContentIds = secondaryswitcher.dataset.content.split(' ');

    // Show selected contents and hide other contents
    contents.forEach(function(content) {
      if (selectedContentIds.includes(content.id)) {
        content.classList.remove('d-none');
      } else {
        content.classList.add('d-none');
      }
    });

    // // Update switcher classes
    // icons.forEach(function(icons) {
    //   icons.classList.remove('invisible');
    // });
    // icons.classList.add('invisible');
  });
});

function removeInvisibleClass() {
    // Get all the parent elements
    var parentElements = document.querySelectorAll(".show-icon-in-secondary-selector");
  
    // Loop through the parent elements
    parentElements.forEach(function(parentElement) {
      // Get the child icon elements of each parent
      var childElements = parentElement.querySelectorAll(".icon-in-secondary-selector");
  
      // Remove the "invisible" class from the child icon elements of the clicked parent
      if (parentElement === this) {
        childElements.forEach(function(childElement) {
          childElement.classList.remove("invisible");
        });
      }
      // Add the "invisible" class to the child icon elements of other parents
      else {
        childElements.forEach(function(childElement) {
          childElement.classList.add("invisible");
        });
      }
    }, this);
  }
  
  // Find all the parent elements
  var parentElements = document.querySelectorAll(".show-icon-in-secondary-selector");
  
  // Loop through the parent elements and attach the click event listener
  parentElements.forEach(function(element) {
    element.addEventListener("click", removeInvisibleClass);
  });
  