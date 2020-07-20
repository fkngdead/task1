

 const stars = document.querySelectorAll('.rating-icon')
 console.log(stars)

for (let i = 0; i<stars.length; i++) {
    stars[i].addEventListener('click', function() {
        if (stars[i].textContent === 'star_border') {
            this.textContent = 'star'
        } else { 
            this.textContent = 'star_border'
        }
        
    });
}
