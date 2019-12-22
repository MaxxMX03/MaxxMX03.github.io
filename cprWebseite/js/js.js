function right() {


    var x = document.images[0].src;

    for (var i = 0; i < document.images.length - 1; i++) {

        document.images[i].src = document.images[i + 1].src;


    }
    document.images[4].src = x;


}




function left() {
    let y = document.images[4].src;

    for (let i = document.images.length - 1; i > 0; i--) {
        document.images[i].src = document.images[i - 1].src;
    }

    document.images[0].src = y;

}
