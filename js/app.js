//1. Llamamos a todos los elementos que tengan la clase “animal”:
//2. Para luego agregarles la clase que añadirá los estilos del filtro.

var image = document.getElementsByClassName('animal');

var select = document.getElementById('select');

    select.onchange = function() {
        //original - no filter
        if (select.value == 'original') {
            for (var i=0; i<image.length; i++) {
                image[i].classList.add('original');
                image[i].classList.remove('white-black');
                image[i].classList.remove('negative-colors');
                image[i].classList.remove('sepia');
            }
        }
        // white-black filter
        else if (select.value == 'white-black') {
            for (var i=0; i<image.length; i++) {
                image[i].classList.add('white-black');
                image[i].classList.remove('original');
                image[i].classList.remove('negative-colors');
                image[i].classList.remove('sepia');
            }
        } 
        // negative-colors filter
        else if (select.value == 'negative-colors') {
            for (var i=0; i<image.length; i++) {
                image[i].classList.add('negative-colors');
                image[i].classList.remove('original');
                image[i].classList.remove('white-black');
                image[i].classList.remove('sepia');
            }
        } 
        // sepia filter
        else  (select.value == 'sepia') {
            for (var i=0; i<image.length; i++) {
                image[i].classList.add('sepia');
                image[i].classList.remove('original');
                image[i].classList.remove('negative-colors');
                image[i].classList.remove('white-black');
            }
        } 
    }

// function myFunction() {
//     document.getElementById("image").classList.add("select");
// }    