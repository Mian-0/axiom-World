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
const cardtitle = document.getElementsByClassName('custom-class-for-card-title');
const cardtext = document.getElementsByClassName('card-text-hide');
const cardtextonhover = document.getElementsByClassName('card-text');
const cardicon = document.getElementsByClassName('fa-cloud');
const cardbtn = document.getElementsByClassName('hide-card-btn');

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  const cardtexthide = cardtext[i];
  const titles = cardtitle[i];
  const color = cardtextonhover[i];
  const icon = cardicon[i];
  const btn = cardbtn[i];

  box.addEventListener('mouseover', function() {
    titles.classList.add('show-on-hover-services-section');
    cardtexthide.classList.add('hide-on-hover-services-section');
    color.classList.add('card-text-on-hover');
    icon.classList.add('fa-cloud-on-hover');
    btn.classList.add('d-block');
  });

  box.addEventListener('mouseout', function() {
    titles.classList.remove('show-on-hover-services-section');
    cardtexthide.classList.remove('hide-on-hover-services-section');
    color.classList.remove('card-text-on-hover');
    icon.classList.remove('fa-cloud-on-hover');
    btn.classList.remove('d-none');

  });
};