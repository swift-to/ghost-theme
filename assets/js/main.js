// var html = document.documentElement;
// var body = document.body;
// var timeout;
// var st = 0;

// cover();
// featured();
// pagination(false);

// window.addEventListener('scroll', function () {
//     'use strict';
//     if (body.classList.contains('home-template') && body.classList.contains('with-full-cover') && !document.querySelector('.cover').classList.contains('half')) {
//         if (timeout) {
//             window.cancelAnimationFrame(timeout);
//         }
//         timeout = window.requestAnimationFrame(portalButton);
//     }
// });

// if (document.querySelector('.cover') && document.querySelector('.cover').classList.contains('half')) {
//     body.classList.add('portal-visible');
// }

// function portalButton() {
//     'use strict';
//     st = window.scrollY;

//     if (st > 300) {
//         body.classList.add('portal-visible');
//     } else {
//         body.classList.remove('portal-visible');
//     }
// }

// function cover() {
//     'use strict';
//     var cover = document.querySelector('.cover');
//     if (!cover) return;

//     imagesLoaded(cover, function () {
//         cover.classList.remove('image-loading');
//     });

//     document.querySelector('.cover-arrow').addEventListener('click', function () {
//         var element = cover.nextElementSibling;
//         element.scrollIntoView({behavior: 'smooth', block: 'start'});
//     });
// }

// function featured() {
//     'use strict';
//     var feed = document.querySelector('.featured-feed');
//     if (!feed) return;

//     tns({
//         container: feed,
//         controlsText: [
//             '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
//             '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
//         ],
//         gutter: 30,
//         loop: false,
//         nav: false,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             768: {
//                 items: 2,
//             },
//             992: {
//                 items: 3,
//             },
//         },
//     });
// }

/* ChatGPT Timer */
// Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Aug 10, 2023 9:00:00").getTime();
// var countDownDate = new Date("Jun 7, 2023 9:00:00").getTime();

var countDownLeadingText = "Conference begins in" //"Early Bird sales end in"

//break the date down into parts
var days, hours, minutes, seconds;
// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    let remainingTimeText = countDownLeadingText + " " + days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    // If the count down is over, write some text
    // console.log("Time left: " +  remainingTimeText)
    if (distance < 0) {
        remainingTimeText = ""
        clearInterval(x);
    }
    document.getElementById("eb-countdown").innerHTML = remainingTimeText;
}, 1000);
