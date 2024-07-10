const galeri = document.querySelector('#galeri');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');

galeri.addEventListener('click', (e) => {
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.alt = e.target.alt;
        
        jumbo.classList.add('fade');
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 1000);

        thumb.forEach((ev) => {
            ev.className = 'thumb';
        });

        e.target.classList.add('blue-shadow');
    }
});