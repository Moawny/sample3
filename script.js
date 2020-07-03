/*global $*/

$(document).ready(function () {

    var tb1 = $(".container .tabs .pra .tbs-1");
        tb2 = $(".container .tabs .pra .tbs-2");
        tb3 = $(".container .tabs .pra .tbs-3");
        mg1 = $(".container .tabs .img img:nth-of-type(1)");
        mg2 = $(".container .tabs .img img:nth-of-type(2)");
        mg3 = $(".container .tabs .img img:nth-of-type(3)");
        sc1 = $(".container .tabs .menu ul li:first-of-type");
        sc2 = $(".container .tabs .menu ul li:nth-of-type(2)");
        sc3 = $(".container .tabs .menu ul li:last-of-type");
        scs = $(".container .tabs .menu ul li");
        tks = $(".slp .fanilah .colors > div");
        bod = $('body');
        brk = $('#bra');
        tpp = document.getElementById("top");
        trp = $('#top');

        brk.click(function (e) {
            e.preventDefault();
        });

// make tabs with soft fade-in/out

        sc1.on('click', function () {
            tb2.fadeOut(200, function () {
                tb1.delay(500).fadeIn(200);
            });
            tb3.fadeOut(200, function () {
                tb1.delay(500).fadeIn(200);
            });
            mg2.fadeOut(200,  function () {
                mg1.delay(500).fadeIn(200);
            });
            mg3.fadeOut(200,  function () {
                mg1.delay(500).fadeIn(200);
            });
            if (bod.hasClass('orange') ) {

                this.setAttribute('style', 'background:rgba(255, 89, 15, 1) ');

            } else if (bod.hasClass('red') ) {

                this.setAttribute('style', 'background:rgb(209, 8, 8) ');

            } else if (bod.hasClass('green') ) {

                this.setAttribute('style', 'background:#080 ');

            } else if (bod.hasClass('blue') ) {

                this.setAttribute('style', 'background:rgb(24, 24, 255) ');

            } else if (bod.hasClass('purple') ) {

                this.setAttribute('style', 'background:rgb(135, 0, 197) ');

            }
            sc2.css('background', '#333');
            sc3.css('background', '#333');
        });

        sc2.on ('click' , function () {
            tb1.fadeOut(200, function () {
                tb2.delay(500).fadeIn(200);
            });
            tb3.fadeOut(200, function () {
                tb2.delay(500).fadeIn(200);
            });
            mg1.fadeOut(200, function () {
                mg2.delay(500).fadeIn(200);
            });
            mg3.fadeOut(200, function () {
                mg2.delay(500).fadeIn(200);
            });
            if (bod.hasClass('orange') ) {

                this.setAttribute('style', 'background:rgba(255, 89, 15, 1) ');

            } else if (bod.hasClass('red') ) {

                this.setAttribute('style', 'background:rgb(209, 8, 8) ');

            } else if (bod.hasClass('green') ) {

                this.setAttribute('style', 'background:#080 ');

            } else if (bod.hasClass('blue') ) {

                this.setAttribute('style', 'background:rgb(24, 24, 255) ');

            } else if (bod.hasClass('purple') ) {

                this.setAttribute('style', 'background:rgb(135, 0, 197) ');

            }
            sc1.css('background', '#333');
            sc3.css('background', '#333');
        });

        sc3.on ('click', function () {
            tb1.fadeOut(200, function () {
                tb3.delay(500).fadeIn(200);
            });
            tb2.fadeOut(200, function () {
                tb3.delay(500).fadeIn(200);
            });
            mg1.fadeOut(200, function () {
                mg3.delay(500).fadeIn(200);
            });
            mg2.fadeOut(200, function () {
                mg3.delay(500).fadeIn(200);
            });
            if (bod.hasClass('orange') ) {

                this.setAttribute('style', 'background:rgba(255, 89, 15, 1) ');

            } else if (bod.hasClass('red') ) {

                this.setAttribute('style', 'background:rgb(209, 8, 8) ');

            } else if (bod.hasClass('green') ) {

                this.setAttribute('style', 'background:#080 ');

            } else if (bod.hasClass('blue') ) {

                this.setAttribute('style', 'background:rgb(24, 24, 255) ');

            } else if (bod.hasClass('purple') ) {

                this.setAttribute('style', 'background:rgb(135, 0, 197) ');

            }
            sc1.css('background', '#333');
            sc2.css('background', '#333');
            
        });

        $(window).on('load', function() {
            $('.loading > *').fadeOut(2000, function () {
                $('.loading').fadeOut(500, function () {
                    $('.loading').remove();
                });
            });
        });

// scroll to top button with soft animation

    window.onload = function() {

      if (window.innerWidth > 767) {

        if (window.pageYOffset >= 300) {

            tpp.style.display = "block";

        } else {

            tpp.style.display = 'none';

        };

    } else {

      if (window.pageYOffset >= 600) {

        tpp.style.display = "block";

      } else {

        tpp.style.display = "none";

      }
    }
  }
    window.onscroll = function() {

      if (window.innerWidth > 767) {

        if (window.pageYOffset >= 300) {

            tpp.style.display = "block";

        } else {

            tpp.style.display = 'none';

        };

    } else {

      if (window.pageYOffset >= 600) {

        tpp.style.display = "block";

      } else {

        tpp.style.display = "none";

      }
    }

    };
    window.onresize = function () {

      if (window.innerWidth > 767) {

        if (window.pageYOffset >= 300) {

            tpp.style.display = "block";

        } else {

            tpp.style.display = 'none';

        };

    } else {

      if (window.pageYOffset >= 600) {

        tpp.style.display = "block";

      } else {

        tpp.style.display = "none";

      }
    }
  }

    trp.on('click', function() {

        $('html, body').animate({
            scrollTop:0
        }, 400);
    });
});

// make default class for body

document.body.classList.add(localStorage.getItem('pagecolor') || 'orange');

var colrs = document.querySelectorAll(".colors > div"),

clicks = [],

open = document.getElementById('open'),

slp = document.getElementById('slp'),

slk1 = document.getElementById("skl1"),

slk2 = document.getElementById("skl2"),

slk3 = document.getElementById("skl3");

ctfr = document.getElementById("ctfr");

drop = document.getElementById('drop');

dlps = document.getElementById('dlps');

ul = document.getElementById('hashs');

kjh = document.querySelector("div.big");

nav = document.querySelector('div.nav');

rgrg = document.querySelectorAll('.plans .prcs > div');

npt = document.querySelectorAll('input.npt');

lko = document.querySelectorAll('.big form input');

okl = document.querySelectorAll(".contact form input");

hide = document.querySelector(".hidenn");

// start animate prices

window.addEventListener('scroll', function () {

    if (window.innerWidth >= 768 && window.innerWidth <= 992) {

        if (window.pageYOffset > 1900 && window.pageYOffset < 2100) {

            rgrg[0].lastElementChild.setAttribute('style', 'right:0 !important');

        } else if (window.pageYOffset > 2300 && window.pageYOffset < 2500) {

            rgrg[1].lastElementChild.setAttribute('style', 'left: 0 !important');

        } else if (window.pageYOffset > 2650 && window.pageYOffset < 2850) {

            rgrg[2].lastElementChild.setAttribute('style', 'right:0 !important');

        }
    }
});

// start nav animation

drop.addEventListener('click', function() {

    dlps.classList.toggle('open');

    if (dlps.classList.contains('open')) {

        ul.classList.add('blm');

        ctfr.style.display = 'block';

    } else {

        ul.classList.remove('blm');

        ctfr.style.display = 'none';
    }
});

for (var i = 0; i < colrs.length; i = i + 1) {

    // activate nav bar

      ul.children[i].onclick = function () {

          window.location.hash = '#' + this.textContent;

          if (window.innerWidth <= 767 ){

              setTimeout(function () {

                  drop.click();

              }, 100);
          }
      };

// open colors menu

    open.onclick = function () {

        if (slp.style.left === '0px') {

            slp.setAttribute('style', 'left:-196px');

            ctfr.style.display = 'none';

        } else if (slp.style.left === '-196px') {

            slp.setAttribute('style', 'left:0px');

            ctfr.style.display = 'block';

        }
    }

// classes on body

    clicks.push(colrs[i].getAttribute('data-color'));

    colrs[i].onclick = function() {

        slp.setAttribute('style', 'left:-196px');

        ctfr.style.display = 'none';

        document.body.classList.remove(...clicks);

        document.body.classList.add(this.getAttribute('data-color'));

        localStorage.setItem('pagecolor', this.getAttribute('data-color'));

        var ts1 = document.getElementsByClassName("tbs-1")[0];

        ts2 = document.getElementsByClassName("tbs-2")[0];

        ts3 = document.getElementsByClassName("tbs-3")[0];

        if (ts1.style.display === 'block') {

            slk1.click();

        } else if (ts2.style.display === 'block') {

            slk2.click();

        } else if (ts3.style.display === 'block') {

            slk3.click();

        }
    }
}

// input on:focus/blur

for (var d = 0; d < 6; d = d + 1) {

  npt[d].setAttribute('data-hold', npt[d].getAttribute('placeholder'))

  npt[d].onfocus = function () {

    this.setAttribute('placeholder', '');
  }

  npt[d].onblur = function () {

    this.setAttribute('placeholder', this.getAttribute('data-hold'));

  }
}

// input live privew

lko[0].oninput = function () {

  okl[0].value = lko[0].value;

}
lko[2].oninput = function () {

  okl[1].value = lko[2].value;

}
hide.children[1].onclick = function () {

  this.style.display = 'none';

  hide.children[0].setAttribute('type', 'text');

  hide.children[2].style.display = 'inline-block';
}
hide.children[2].onclick = function () {

  this.style.display = 'none';

  hide.children[0].setAttribute('type', 'password');

  hide.children[1].style.display = 'inline-block';

}
