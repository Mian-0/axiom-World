
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
}