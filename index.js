var cursor,
    typer = function (id) {
        return document.getElementById(id);
    },
    nl2br = function (txt) {
        return txt.replace(/\n/g, "<br />");
    },
    writeit = function (from, e) {
        e = e || window.event;
        var w = typer("writer");
        var tw = from.value;
        w.innerHTML = nl2br(tw);
    },
    moveIt = function (count, e) {
        e = e || window.event;
        var keycode = e.keyCode || e.which;
        if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
            cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
        } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
            cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
        }

    };

window.onload = function () {
    cursor = typer("cursor");
    cursor.style.left = "0px";
};
