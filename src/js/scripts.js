// Add your scripts here
const $ = require('jquery');

function myFunction() {
  document.getElementById('demo').innerHTML = '$9.95';
  document.getElementById('myBtn').classList.add('active');
  document.getElementById('myBtn1').classList.remove('active');
  document.getElementById('myBtn2').classList.remove('active');
}
document.getElementById('myBtn').addEventListener('click', myFunction);

function myFunction1() {
  document.getElementById('demo').innerHTML = '$14.95';
  document.getElementById('myBtn').classList.remove('active');
  document.getElementById('myBtn1').classList.add('active');
  document.getElementById('myBtn2').classList.remove('active');
}
document.getElementById('myBtn1').addEventListener('click', myFunction1);

function myFunction2() {
  document.getElementById('demo').innerHTML = '$19.95';

  document.getElementById('myBtn').classList.remove('active');
  document.getElementById('myBtn1').classList.remove('active');
  document.getElementById('myBtn2').classList.add('active');
}
document.getElementById('myBtn2').addEventListener('click', myFunction2);
function openNav() {
  document.getElementById('mySidepanel').style.width = '250px';
}
document.getElementById('openbtn').addEventListener('click', openNav);

$('.closebtn').click(() => {
  if (document.getElementById('mySidepanel') !== null) {
    document.getElementById('mySidepanel').style.width = '0';
  }
});

document.getElementById('myFinish').onclick = function () {
  window.location.href = './shoppingcart.html';
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

$('.clickDouth').click(function () {
  console.log('run');
  console.log($(this).data('image'));
  const isActive = $(this).hasClass('individual-item-orange');
  $('#dough-list li').each(function () {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive === true) {
    $('#Dough').attr('src', '');
    $(this).addClass('individual-item');
    $(this).removeClass('individual-item-orange');
  }
  if (isActive === false) {
    $('#Dough').attr('src', $(this).data('image'));
    $(this).addClass('individual-item-orange');
    $(this).removeClass('individual-item');
  }
});

$('.clickSauce').click(function () {
  const isActive = $(this).hasClass('individual-item-orange');
  $('#sauce-list li').each(function () {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive === true) {
    $('#Sauce').attr('src', '');
    $(this).addClass('individual-item');
    $(this).removeClass('individual-item-orange');
  }
  if (isActive === false) {
    $('#Sauce').attr('src', $(this).data('image'));
    $(this).addClass('individual-item-orange');
    $(this).removeClass('individual-item');
  }
});

$('.clickCheese').click(function () {
  console.log('work');
  const isActive = $(this).hasClass('individual-item-orange');
  $('#cheese-list li').each(function () {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive === true) {
    $('#Cheese').attr('src', '');
    $(this).addClass('individual-item');
    $(this).removeClass('individual-item-orange');
  }
  if (isActive === false) {
    $('#Cheese').attr('src', $(this).data('image'));
    $(this).addClass('individual-item-orange');
    $(this).removeClass('individual-item');
  }
});

$('.clickMeats').click(function () {
  console.log('work');
  const isActive = $(this).hasClass('individual-item-orange');
  $('#meats-list li').each(function () {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive === true) {
    $('#Meats').attr('src', '');
    $(this).addClass('individual-item');
    $(this).removeClass('individual-item-orange');
  }
  if (isActive === false) {
    $('#Meats').attr('src', $(this).data('image'));
    $(this).addClass('individual-item-orange');
    $(this).removeClass('individual-item');
  }
});

$('.clickVeggies').click(function () {
  console.log('work');
  const isActive = $(this).hasClass('individual-item-orange');
  $('#veggies-list li').each(function () {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive === true) {
    $('#Veggies').attr('src', '');
    $(this).addClass('individual-item');
    $(this).removeClass('individual-item-orange');
  }
  if (isActive === false) {
    $('#Veggies').attr('src', $(this).data('image'));
    $(this).addClass('individual-item-orange');
    $(this).removeClass('individual-item');
  }
});

$('.clickFinishes').click(function () {
  console.log('work');
  const isActive = $(this).hasClass('individual-item-orange');
  $('#finishes-list li').each(function () {
    $(this).removeClass('individual-item-orange');
    $(this).removeClass('individual-item-orange');
    $(this).addClass('individual-item');
  });
  if (isActive === true) {
    $('#Finishes').attr('src', '');
    $(this).addClass('individual-item');
    $(this).removeClass('individual-item-orange');
  }
  if (isActive === false) {
    $('#Finishes').attr('src', $(this).data('image'));
    $(this).addClass('individual-item-orange');
    $(this).removeClass('individual-item');
  }
});/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
