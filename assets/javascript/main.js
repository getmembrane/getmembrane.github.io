document.addEventListener("DOMContentLoaded", function(event) {
    var cube = document.querySelector('.cube');
    var offset = 0;
    var width = cube.offsetWidth;

    cube.addEventListener('animationiteration',function() {
        cube.style.left = parseInt(offset + width) + 'px';
        offset = parseInt(offset + width);
    });
});
