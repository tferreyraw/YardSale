const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  const isProductDetailOpen = productDetail.classList.add("inactive");
  if (!isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailOpen = productDetail.classList.add("inactive");
  if (!isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }
  menuMobile.classList.toggle("inactive");
}

function toggleProductDetail() {
  const isMenuMobileOpen = menuMobile.classList.contains("inactive");
  const isMenuDesktopOpen = desktopMenu.classList.contains("inactive");

  if (!isMenuMobileOpen) {
    menuMobile.classList.add("inactive");
  }
  if (!isMenuDesktopOpen) {
    desktopMenu.classList.toggle("inactive");
  }
  productDetail.classList.toggle("inactive");
}

const producList = [];
producList.push({
  name: "Bicicleta",
  price: "$120",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_990986-MLA53586520581_022023-O.webp",
});
producList.push({
  name: "Motoneta",
  price: "$250",
  image:
    "https://media.istockphoto.com/id/1225448373/es/foto/kick-city-rider-bike-scooter-el%C3%A9ctrico-urbano-aislado-sobre-fondo-blanco-motocicleta-de-la.jpg?s=612x612&w=0&k=20&c=zcbplIeCpcNBYSr9xZj42Frvk4PB3enLv1VOHgmb238=",
});
producList.push({
  name: "Scooter electrico",
  price: "$200",
  image:
    "https://vendomarket.cl/wp-content/uploads/2021/08/108563-1-scaled-1.jpg",
});
producList.push({
  name: "Skate",
  price: "$200",
  image:
    "https://st4.depositphotos.com/3539679/23945/v/600/depositphotos_239454032-stock-illustration-skateboarding-vector-realistic-3d-black.jpg",
});
producList.push({
  name: "Rollers",
  price: "$350",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_816691-MLA46990826237_082021-O.jpg",
});
producList.push({
  name: "OneWheel",
  price: "$600",
  image:
    "https://static.fnac-static.com/multimedia/Images/ES/MC/2c/bd/80/8437036/1540-1/tsp20200703090731/Monociclo-Electrico-Kingsong-KS-16S-420-wh-blanco.jpg#e4db073f-0302-4eb4-aabf-817e45f10608",
});
producList.push({
  name: "Bicicleta",
  price: "$120",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_990986-MLA53586520581_022023-O.webp",
});
producList.push({
  name: "Motoneta",
  price: "$250",
  image:
    "https://media.istockphoto.com/id/1225448373/es/foto/kick-city-rider-bike-scooter-el%C3%A9ctrico-urbano-aislado-sobre-fondo-blanco-motocicleta-de-la.jpg?s=612x612&w=0&k=20&c=zcbplIeCpcNBYSr9xZj42Frvk4PB3enLv1VOHgmb238=",
});
producList.push({
  name: "Scooter electrico",
  price: "$200",
  image:
    "https://vendomarket.cl/wp-content/uploads/2021/08/108563-1-scaled-1.jpg",
});
producList.push({
  name: "Skate",
  price: "$200",
  image:
    "https://st4.depositphotos.com/3539679/23945/v/600/depositphotos_239454032-stock-illustration-skateboarding-vector-realistic-3d-black.jpg",
});
producList.push({
  name: "Rollers",
  price: "$350",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_816691-MLA46990826237_082021-O.jpg",
});
producList.push({
  name: "OneWheel",
  price: "$600",
  image:
    "https://static.fnac-static.com/multimedia/Images/ES/MC/2c/bd/80/8437036/1540-1/tsp20200703090731/Monociclo-Electrico-Kingsong-KS-16S-420-wh-blanco.jpg#e4db073f-0302-4eb4-aabf-817e45f10608",
});

/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");
    const infoFigureImg = document.createElement("img");
    infoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfoFigure.appendChild(infoFigureImg);
  }
}

renderProducts(producList);
