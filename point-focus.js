document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("mousedown", function (evt) {
        if (!evt.target.setSelectionRange || evt.target.role === 'textbox' || evt.target.hasAttribute("disable-point-focus")) {
            document.body.setAttribute("point-focused", "");
        }
    });
    document.body.addEventListener("blur", function (evt) {
        document.body.removeAttribute("point-focused");
    }, true);
});
