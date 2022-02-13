

window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    
    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        
        mobile_menu.classList.toggle('is-active');


    });


}



const btnWinter = document.getElementById('winter');
const btnSpring= document.getElementById('spring');
const btnSummer = document.getElementById('summer');
const btnAutumn = document.getElementById('autumn');
const portfolioImages = document.querySelectorAll('.item-portfolio-container');




const allBtns = [btnWinter,btnAutumn,btnSpring,btnSummer];





function changeImage(event) {


 
           if (event.target.id === 'winter') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.id}/${index + 1}.jpg`);
                }
          else if((event.target.id === 'summer')){
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.id}/${index + 1}.jpg`);
        }
        else if((event.target.id === 'spring')){
            portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.id}/${index + 1}.jpg`);
            }
        else if((event.target.id === 'autumn')){
                portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.id}/${index + 1}.jpg`);
                }
    
}





allBtns.forEach(item => {
    
    item.addEventListener('click', changeImage);
}

)




  