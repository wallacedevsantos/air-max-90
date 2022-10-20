function open_menu() {
    let menu_open = document.getElementById ('barra-menu');
    if (menu_open.style.width == '0px') {
        menu_open.style.width = '200px';
    } else {
        menu_open.style.width = '0px';
    }
}