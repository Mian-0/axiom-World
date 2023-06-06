// For Drop Downs
var containerElements = document.querySelectorAll('.dropdown-custom-toggler-container');
var togglerElements = document.querySelectorAll('.dropdown-custom-toggler');

containerElements.forEach(function(container) {
  var toggler = container.querySelector('.dropdown-custom-toggler');

  container.addEventListener('mouseenter', function() {
    toggler.classList.add('show');
  });

  container.addEventListener('mouseleave', function() {
    setTimeout(function() {
      if (!container.matches(':hover')) {
        toggler.classList.remove('show');
      }
    }, 20);
  });
});

containerElements.forEach(function(container) {
  container.addEventListener('mouseleave', function() {
    setTimeout(function() {
      if (!container.matches(':hover')) {
        container.querySelector('.dropdown-custom-toggler').classList.remove('show');
      }
    }, 20);
  });
});

window.addEventListener('mouseleave', function() {
  togglerElements.forEach(function(toggler) {
    toggler.classList.remove('show');
  });
});

// mobile icon change
var iconElement = document.querySelector('.for-cahnging-icon-in-header');

iconElement.addEventListener('click', function() {
  if (iconElement.classList.contains('fa-bars')) {
    iconElement.classList.remove('fa-bars');
    iconElement.classList.add('fa-xmark');
  } else {
    iconElement.classList.remove('fa-xmark');
    iconElement.classList.add('fa-bars');
  }
});

// SLider

// CArds for services
const boxes = document.getElementsByClassName('card');
let title = document.getElementsByClassName('Spann')

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];

  // Add a 'mouseover' event listener to each box
  box.addEventListener('mouseover', function() {
    // Add the 'highlight' class when the box is hovered
    title.classList.add('hide-on-hover-services-section');
  });

  // Add a 'mouseout' event listener to each box
  box.addEventListener('mouseout', function() {
    // Remove the 'highlight' class when the mouse moves out of the box
    title.classList.remove('highlight');
  });
}

// // Get the card and title elements
// var card = document.getElementById('card');
// var title = document.getElementById('spann');

// // Add event listener to the card element
// card.addEventListener('mouseenter', function() {
//   // Add the class to the title element
//   title.classList.add('hide-on-hover-services-section');
// });

// card.addEventListener('mouseleave', function() {
//   // Remove the class from the title element
//   title.classList.remove('hide-on-hover-services-section');
// });
