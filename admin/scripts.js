/* Scripts file for admin/index */
function checkEnter(e) {
    e.preventDefault();
    if (e.keyCode != 13) return;
    if (!rate.value) return;
    btn.click();
}
rate.addEventListener('keyup', checkEnter);