$(function () {
    $('#FOOTER').load('../layout/footer.html');
    $('#DATETIME').load('../layout/date-time.html');
    $('#TOAST').load('../layout/toast.html');
});

setTimeout(() => {
    $('#TOAST').hide();
}, 4000);

// paginate an unordered list
$('.xxxxxx .my_pagination ul').paginathing()
// paginate an html table
// $('table tbody').paginathing();
$('.xxxxxx .my_pagination .selector').paginathing({
    perPage: 20,
})
$('.xxxxxx .my_pagination .selector').paginathing({
    // Limites your pagination number
    // false or number
    limitPagination: false,
    // Pagination controls
    prevNext: true,
    firstLast: true,
    prevText: '&laquo;',
    nextText: '&raquo;',
    firstText: 'First',
    lastText: 'Last',
    containerClass: 'pagination-container',
    ulClass: 'pagination',
    liClass: 'page',
    activeClass: 'active',
    disabledClass: 'disabled',
})
$('.xxxxxx .my_pagination .selector').paginathing({
    insertAfter: null
})
$('.xxxxxx .my_pagination .selector').paginathing({
    pageNumbers: false
})

// Primary nav dropdown functionality
const menuButton = document.querySelector('.az_menu_button');
const mainMenu = document.querySelector('.az_layout_left');
const pageContainer = document.querySelector('.az_layout_right');
const dropdownContainers = document.querySelectorAll('.az_dropdown_container');
const fullscreenBtn = document.querySelector("#fullscreen");
const gotoTop = document.querySelector(".az_goto_top");
const enBtn = document.querySelector("#lang-en");
const arBtn = document.querySelector("#lang-ar");

// screen dimensions
var screenWidth = window.matchMedia("(min-width: 992px)");
const _classes = ['show_check', 'green_check', 'bg_active_light', 'fw_600']

// When the user clicks on the button, scroll to the top of the document 
gotoTop.addEventListener('click', () => {
    pageContainer.scrollTop = 0; // For Safari
});

// for bootstrap 5 tooltips
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
});

enBtn.addEventListener('click', () => {
    console.log(enBtn.classList);
    enBtn.classList.add(..._classes);
    arBtn.classList.remove(..._classes);
    document.querySelector('html').setAttribute('dir', 'ltr');
});

arBtn.addEventListener('click', () => {
    console.log(arBtn.classList);
    arBtn.classList.add(..._classes);
    enBtn.classList.remove(..._classes);
    document.querySelector('html').setAttribute('dir', 'rtl');
});

menuButton.addEventListener('click', () => {
    if (screenWidth.matches) {
        if (mainMenu.classList.contains('az_shrink_menu')) {
            mainMenu.classList.remove('az_shrink_menu');
            mainMenu.classList.remove('hovered');
            pageContainer.classList.remove('expanded');
            menuButton.classList.remove('shrink');
        } else {
            mainMenu.classList.add('az_shrink_menu');
            pageContainer.classList.add('expanded');
            menuButton.classList.add('shrink');
        }
    } else {
        if (mainMenu.classList.contains('mobile_menu_open')) {
            mainMenu.classList.remove('mobile_menu_open');
            menuButton.classList.remove('shrink');
        } else {
            mainMenu.classList.add('mobile_menu_open');
            menuButton.classList.add('shrink');
        }
    }
})

mainMenu.addEventListener('mouseover', () => {
    if (mainMenu.classList.contains('az_shrink_menu')) {
        mainMenu.classList.add('hovered');
    }
})

mainMenu.addEventListener('mouseout', () => {
    if (mainMenu.classList.contains('az_shrink_menu')) {
        mainMenu.classList.remove('hovered');
    }
})

dropdownContainers.forEach(item => {
    const btn = item.childNodes[1];
    const dropDownContainer = item.childNodes[3];
    btn.addEventListener('click', e => {
        if (btn.classList.contains('open')) {
            btn.classList.remove('open');
            dropDownContainer.classList.remove('show');
        } else {
            btn.classList.add('open');
            dropDownContainer.classList.add('show');
        }
    })
});

window.addEventListener('click', function (e) {
    if (!mainMenu.contains(e.target) && !screenWidth.matches && !menuButton.contains(e.target)) {
        // Clicked in box
        if (mainMenu.classList.contains('mobile_menu_open')) {
            mainMenu.classList.remove('mobile_menu_open');
        }
    }
    dropdownContainers.forEach(x => {
        if (!x.contains(e.target)) {
            x.childNodes[1].classList.remove('open');
            x.childNodes[3].classList.remove('show');
        }
    });
});


fullscreenBtn.addEventListener('click', () => {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        fullscreenBtn.classList.add('maximize');
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        fullscreenBtn.classList.remove('maximize');
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
})
