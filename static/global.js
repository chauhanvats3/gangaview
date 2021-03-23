document.addEventListener('touchstart', onTouchStart, { passive: true });
function vats_capitalize(str) {
    var result;

    if (!str.trim()) {
        return "";
    }

    var slcs = str.split(" ");
    var new_slcs = [];
    slcs.forEach(slc => {
        slc = slc[0].toUpperCase() + slc.slice(1);
        new_slcs.push(slc);
    });

    return new_slcs.join(" ");
}