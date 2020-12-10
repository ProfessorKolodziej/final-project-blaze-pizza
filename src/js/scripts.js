// Add your scripts here
const $ = require('jquery');

document.getElementById('myBtn').addEventListener('click', myFunction);
function myFunction() {
  document.getElementById('demo').innerHTML = '$9.95';
  document.getElementById('myBtn').classList.add('active');
  document.getElementById('myBtn1').classList.remove('active');
  document.getElementById('myBtn2').classList.remove('active');
}

document.getElementById('myBtn1').addEventListener('click', myFunction1);
function myFunction1() {
  document.getElementById('demo').innerHTML = '$14.95';
  document.getElementById('myBtn').classList.remove('active');
  document.getElementById('myBtn1').classList.add('active');
  document.getElementById('myBtn2').classList.remove('active');
}

document.getElementById('myBtn2').addEventListener('click', myFunction2);
function myFunction2() {
  document.getElementById('demo').innerHTML = '$19.95';

  document.getElementById('myBtn').classList.remove('active');
  document.getElementById('myBtn1').classList.remove('active');
  document.getElementById('myBtn2').classList.add('active');
}

function openNav() {
  document.getElementById('mySidepanel').style.width = '250px';
}
document.querySelector('openBtn').addEventListener('click',openNav);

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0';
}

document.getElementById('myFinish').onclick = function () {
  location.href = 'shoppingcart.html';
};

document.querySelector('body').onscroll = function () {
  if (window.scrollY > 150) {
    document.querySelector('.blue-background').classList.add('scroll_fixed');
  } else {
    document
      .querySelector('.blue-background')
      .classList.remove('scroll_fixed');
  }
};

function selectDouth(id, image) {
  const isActive = $(id).hasClass('individual-item-orange');
  $('#dough-list li').each(function (i) {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive == true) {
    $('#Dough').attr('src', '');
    $(id).addClass('individual-item');
    $(id).removeClass('individual-item-orange');
  }
  if (isActive == false) {
    $('#Dough').attr('src', image);
    $(id).addClass('individual-item-orange');
    $(id).removeClass('individual-item');
  }
}

function selectSauce(id, image) {
  const isActive = $(id).hasClass('individual-item-orange');
  $('#sauce-list li').each(function (i) {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive == true) {
    $('#Sauce').attr('src', '');
    $(id).addClass('individual-item');
    $(id).removeClass('individual-item-orange');
  }
  if (isActive == false) {
    $('#Sauce').attr('src', image);
    $(id).addClass('individual-item-orange');
    $(id).removeClass('individual-item');
  }
}

function selectCheese(id, image) {
  const isActive = $(id).hasClass('individual-item-orange');
  $('#cheese-list li').each(function (i) {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive == true) {
    $('#Cheese').attr('src', '');
    $(id).addClass('individual-item');
    $(id).removeClass('individual-item-orange');
  }
  if (isActive == false) {
    $('#Cheese').attr('src', image);
    $(id).addClass('individual-item-orange');
    $(id).removeClass('individual-item');
  }
}

function selectMeats(id, image) {
  const isActive = $(id).hasClass('individual-item-orange');
  $('#meats-list li').each(function (i) {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive == true) {
    $('#Meats').attr('src', '');
    $(id).addClass('individual-item');
    $(id).removeClass('individual-item-orange');
  }
  if (isActive == false) {
    $('#Meats').attr('src', image);
    $(id).addClass('individual-item-orange');
    $(id).removeClass('individual-item');
  }
}

function selectVeggies(id, image) {
  const isActive = $(id).hasClass('individual-item-orange');
  $('#veggies-list li').each(function (i) {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive == true) {
    $('#Veggies').attr('src', '');
    $(id).addClass('individual-item');
    $(id).removeClass('individual-item-orange');
  }
  if (isActive == false) {
    $('#Veggies').attr('src', image);
    $(id).addClass('individual-item-orange');
    $(id).removeClass('individual-item');
  }
}

function selectFinishes(id, image) {
  const isActive = $(id).hasClass('individual-item-orange');
  $('#finishes-list li').each(function (i) {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive == true) {
    $('#Finishes').attr('src', '');
    $(id).addClass('individual-item');
    $(id).removeClass('individual-item-orange');
  }
  if (isActive == false) {
    $('#Finishes').attr('src', image);
    $(id).addClass('individual-item-orange');
    $(id).removeClass('individual-item');
  }
}/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
