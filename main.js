const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
 

const menuShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppinCartContainer = document.querySelector('#shoppinCartContainer');

const productDetailContainer = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click',  toggleMobileMenu);
menuShoppingCar.addEventListener('click',  toggleAside);
productDetailClose.addEventListener('click', closeProductDetailIside);


function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');

    shoppinCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

   function toggleMobileMenu(){   
    
    
    mobileMenu.classList.toggle('inactive');
    shoppinCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive');

/*const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed){
        aside.classList.add('inactive');
    }
     mobileMenu.classList.toggle('inactive');

     La misma funcion con condicionales para vericar si esta abierto o cerrado.
    */
    

}

function toggleAside(){

    shoppinCartContainer.classList.toggle('inactive')

    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    

   /* const isMobileClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')*/
}

function openProductDetail(){
    productDetailContainer.classList.remove('inactive');
    
}

function closeProductDetailIside(){
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppinCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    
}


           const productList = [];
           productList.push({
            name: 'Bike',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
           });
           productList.push({
            name: 'Pantalla',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
           });
           productList.push({
            name: 'Compu',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
           });
           productList.push({
            name: 'Compu',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
           });
           productList.push({
            name: 'Compu',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
           });
           productList.push({
            name: 'Compu',
            price: 120,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
           });


  
        function renderProducts(arr){ 
      for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        //product = {name, price, image} --> product.image
        const productImg = document.createElement('img'); 
        productImg.setAttribute('src', product.image); //modificar su propiedad src, por el objeto 
        productImg.addEventListener('click', openProductDetail);
         
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');

        const productDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);

        const productFigure = document.createElement('figure'); 
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );

        productFigure.appendChild(productImgCart);

        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

      }
    };

    renderProducts(productList);