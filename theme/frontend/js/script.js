var GUI = (function () {
    var showMenu = () => {
        var showMenu = document.querySelector('.show-menu-mobile');
        var menu = document.querySelector('.menu');
        var overLay = document.querySelector('.over-lay');
        if (typeof showMenu != "undefined") {
            showMenu.addEventListener('click', () => {
                menu.classList.toggle('active');
                overLay.classList.toggle('active');
            })
        }
        if (typeof overLay != "undefined") {
            overLay.addEventListener('click', () => {
                menu.classList.remove('active');
                overLay.classList.remove('active');
            })
        }
    }
    var loadmap = () => {
        var maps = document.querySelector('#map');
        if (typeof maps === "object" && maps === null) return;
        var src = maps.getAttribute('data-map');
        var frame = document.createElement('iframe');
        frame.src = src;
        var action = setTimeout(function () {
            maps.append(frame);
        }, 1000);

    }
    var iconMenu = function () {
        var width_ = window.innerWidth;
        if (width_ < 1024) {
            var listItemLi = document.querySelectorAll('.menu li');
            listItemLi.forEach(function (element) {
                var ulChild = element.querySelector(':scope > ul');
                if (ulChild) {
                    var btnDropdown = document.createElement('span');
                    btnDropdown.className = 'btn-dropdown-menu';
                    btnDropdown.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
                    element.appendChild(btnDropdown);
                    var timeSlide = 300;
                    btnDropdown.addEventListener('click', function (event) {
                        var _this = this;
                        _this.style.pointerEvents = 'none';

                        setTimeout(function () {
                            _this.style.pointerEvents = 'auto';
                        }, timeSlide);

                        var listUlChild = _this.previousElementSibling;
                        _this.classList.toggle('open');

                        if (listUlChild) {
                            if (listUlChild.style.display === 'none' || listUlChild.style.display === '') {
                                listUlChild.style.display = 'block';
                            } else {
                                listUlChild.style.display = 'none';
                            }
                        }
                    });
                }
            });
        }
    };

    var showModalRegister = function () {
        const openModalRegister = document.querySelectorAll(".btn-register");
        const closeModalRegister = document.querySelector(".box-close-modal");
        const modalRegister = document.querySelector(".popup-contact-quote");
        openModalRegister.forEach((itemOpen) => {
            if (modalRegister != undefined) {
                itemOpen.addEventListener("click", function () {
                    if (window.getComputedStyle(modalRegister).display === "none") {
                        modalRegister.classList.add("active");
                    }
                });
                closeModalRegister.addEventListener("click", function () {
                    if (window.getComputedStyle(modalRegister).display === "block") {
                        modalRegister.classList.remove("active");
                    }
                });
            } else {
                return;
            }
        })

    };
    var moduleTabContent = function () {
        var modules = document.querySelectorAll(".module-tab-content");
        modules.forEach((element) => {
            var tabLinks = element.querySelectorAll(".tab-links");
            var tabContents = element.querySelectorAll(".tab-content");
            if (tabLinks.length === 0 && tabContents.length === 0) return;
            tabLinks[0].classList.add("active");
            tabContents[0].classList.add("active");
            tabLinks.forEach(el => {
                el.addEventListener("click", openTabs)
            })

            function openTabs(el) {
                var btn = el.currentTarget;
                var electronic = btn.dataset.electronic;
                var data = btn.dataset.target;
                tabLinks.forEach((link) => {
                    if (link.dataset.target === data) {
                        link.classList.remove("active");
                    }
                });
                tabContents.forEach((content) => {
                    if (content.id === electronic) {
                        content.classList.add("active");
                    } else {
                        content.classList.remove("active");
                    }
                });
                document.querySelector("#" + electronic).classList.add("active")
                btn.classList.add("active");
            }
        });
    }
    var moduleSearch = () => {
        var btnShowSearch = document.querySelectorAll('.btn-show-modal');
        var btnCloseSearch = document.querySelector(".close-form-search");
        // var search = document.querySelector('.search-mobile');
        if (btnShowSearch.length > 0) {
            btnShowSearch.forEach((btn) => {
                btn.addEventListener('click', function () {
                    document.querySelector(".form-search").classList.add("active");
                })
            })
        }
        if (btnCloseSearch) {
            btnCloseSearch.addEventListener('click', function () {
                document.querySelector(".form-search").classList.remove("active");
            })
        }
        // if (search) {
        //     var width_ = window.innerWidth;
        //     if (width_ < 1024) {
        //         var headerHeight = document.querySelector('.header').offsetHeight;
        //         search.style.top = "calc(" + headerHeight + "px + 1rem)";
        //     }
        // }
    }
    var backToTop = function () {
        var backToTopButton = document.querySelector('.btn-to-top');
        if (backToTopButton) {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 600) {
                    backToTopButton.style.display = 'flex';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });
            backToTopButton.addEventListener('click', function () {
                var scrollOptions = {
                    top: 0,
                    behavior: 'smooth'
                };
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo(scrollOptions);
                } else {
                    var scrollInterval = setInterval(function () {
                        if (window.scrollY <= 0) {
                            clearInterval(scrollInterval);
                        } else {
                            window.scrollBy(0, -20);
                        }
                    }, 16);
                }
                return false;
            });
        }
    };
    return {
        _: function () {
            showMenu();
            loadmap();
            iconMenu();
            moduleTabContent();
            moduleSearch();
            backToTop();
        },
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    GUI._();
})
// var CHEAT_TIMER = {
//     init: () => {
//         var times = jQuery('.cmsmasters_counters.counters_type_horizontal .cmsmasters_counter_wrap');
//         var tmps = {};
//         for (var i = 0; i < times.length; i++) {
//             var t = jQuery(times[i]);
//             var value = t.find('.cmsmasters_counter').attr('data-percent').toLowerCase();
//             var title = t.find('.cmsmasters_counter_title').text().toLowerCase();
//             tmps[title] = value;
//         }

//         var year = tmps['year'] ?? 2023;
//         var month = tmps['month'] - 1 ?? 0;
//         var day = tmps['day'] ?? 0;
//         var hour = tmps['hour'] ?? 0;
//         var minute = tmps['minute'] ?? 0;
//         var second = tmps['second'] ?? 0;
//         var d = new Date(year, month, day, hour, minute, second);
//         setInterval(() => {
//             var dif = (d.getTime() - (new Date()).getTime()) / 1000;
//             var dx = CHEAT_TIMER.secondsToDhms(dif);
//             var roundSecond = Math.round(dx.seconds).toString();
//             if (roundSecond.length < 2) {
//                 roundSecond = "0" + Math.round(dx.seconds);
//             }
//             var roundDay = Math.round(dx.days).toString();
//             if (roundDay.length < 2) {
//                 roundDay = "0" + Math.round(dx.days);
//             }
//             var roundHours = Math.round(dx.hours).toString();
//             if (roundHours.length < 2) {
//                 roundHours = "0" + Math.round(dx.hours);
//             }
//             var roundMinute = Math.round(dx.minutes).toString();
//             if (roundMinute.length < 2) {
//                 roundMinute = "0" + Math.round(dx.minutes);
//             }
//             var str = `<div class="cmsmasters_counter_wrap one_fifth">
//                 <div id="cmsmasters_counter_day" class="cmsmasters_counter" data-percent="${Math.round(dx.days)}">
//                     <div class="cmsmasters_counter_inner">
//                         <span class="cmsmasters_counter_counter_wrap">
//                             <span class="cmsmasters_counter_prefix"></span><span class="cmsmasters_counter_counter">${Math.round(dx.days)}</span><span class="cmsmasters_counter_suffix"></span>
//                         </span>
//                         <span class="cmsmasters_counter_title">DAY</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="cmsmasters_counter_wrap one_fifth">
//                 <div id="cmsmasters_counter_hour" class="cmsmasters_counter" data-percent="${Math.round(dx.hours)}">
//                     <div class="cmsmasters_counter_inner">
//                         <span class="cmsmasters_counter_counter_wrap">
//                         <span class="cmsmasters_counter_prefix"></span><span class="cmsmasters_counter_counter">${Math.round(dx.hours)}</span><span class="cmsmasters_counter_suffix"></span>
//                         </span>
//                         <span class="cmsmasters_counter_title">HOUR</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="cmsmasters_counter_wrap one_fifth">
//                 <div id="cmsmasters_counter_minute" class="cmsmasters_counter" data-percent="${Math.round(dx.minutes)}">
//                     <div class="cmsmasters_counter_inner">
//                         <span class="cmsmasters_counter_counter_wrap">
//                         <span class="cmsmasters_counter_prefix"></span><span class="cmsmasters_counter_counter">${Math.round(dx.minutes)}</span><span class="cmsmasters_counter_suffix"></span>
//                         </span>
//                         <span class="cmsmasters_counter_title">MINUTE</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="cmsmasters_counter_wrap one_fifth">
//                 <div id="cmsmasters_counter_second" class="cmsmasters_counter" data-percent="${Math.round(dx.seconds)}">
//                     <div class="cmsmasters_counter_inner">
//                         <span class="cmsmasters_counter_counter_wrap">
//                         <span class="cmsmasters_counter_prefix"></span><span class="cmsmasters_counter_counter">${roundSecond}</span><span class="cmsmasters_counter_suffix"></span>
//                         </span>
//                         <span class="cmsmasters_counter_title">SECOND</span>
//                     </div>
//                 </div>
//             </div>`
//             jQuery('.cmsmasters_counters.counters_type_horizontal').html(str);
//         }, 1000)

//     },
//     secondsToDhms: (seconds) => {
//         const days = Math.floor(seconds / (3600 * 24));
//         const hours = Math.floor((seconds % (3600 * 24)) / 3600);
//         const minutes = Math.floor((seconds % 3600) / 60);
//         const remainingSeconds = seconds % 60;

//         return {
//             days: days,
//             hours: hours,
//             minutes: minutes,
//             seconds: remainingSeconds
//         };
//     }


// };
// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         CHEAT_TIMER.init();
//     }, 1000)
// })