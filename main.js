const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const ProductDetailCloseIcon = document.querySelector(
  ".product-detail-close-secondary"
);
const productDetail = document.querySelector(".product-detail");
const productDetailContainer = document.querySelector(
  ".product-detail-secondary"
);
const cardsContainer = document.querySelector(".cards-container");

//variables para el cardsContainer
const productImg = document.querySelector("#productImg");
const productDetailPrice = document.querySelector("#productDetailPrice");
const productDetailName = document.querySelector("#productDetailName");
const productDetailDesc = document.querySelector("#productDetailDesc");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleProductDetail);
ProductDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isProductDetailOpen = productDetail.classList.add("inactive");
  if (!isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }

  const isProductDetailContainerOpen =
    productDetailContainer.classList.add("inactive");
  if (!isProductDetailContainerOpen) {
    productDetailContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailOpen = productDetail.classList.add("inactive");
  if (!isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }

  const isProductDetailContainerOpen =
    productDetailContainer.classList.add("inactive");
  if (!isProductDetailContainerOpen) {
    productDetailContainer.classList.add("inactive");
  }

  menuMobile.classList.toggle("inactive");
}

function toggleProductDetail() {
  const isMenuMobileOpen = menuMobile.classList.contains("inactive");
  if (!isMenuMobileOpen) {
    menuMobile.classList.add("inactive");
  }

  const isMenuDesktopOpen = desktopMenu.classList.contains("inactive");
  if (!isMenuDesktopOpen) {
    desktopMenu.classList.toggle("inactive");
  }

  const isProductDetailContainerOpen =
    productDetailContainer.classList.add("inactive");
  if (!isProductDetailContainerOpen) {
    productDetailContainer.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
}

function openProductDetailAside(prod) {
  productImg.setAttribute("src", prod.image);
  productDetailPrice.innerText = prod.price;
  productDetailName.innerText = prod.name;
  productDetailDesc.innerText = prod.description;

  desktopMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
  menuMobile.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const producList = [];
producList.push({
  name: "Bicicleta",
  price: "$120",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_990986-MLA53586520581_022023-O.webp",
  description:
    "Licorne Bike Bicicleta de trekking prémium de 28 pulgadas, para hombres, jóvenes, mujeres y hombres, 21 velocidades, bicicleta de ciudad para hombre, Life M-V-ATB",
});
producList.push({
  name: "Motoneta",
  price: "$250",
  image:
    "https://media.istockphoto.com/id/1225448373/es/foto/kick-city-rider-bike-scooter-el%C3%A9ctrico-urbano-aislado-sobre-fondo-blanco-motocicleta-de-la.jpg?s=612x612&w=0&k=20&c=zcbplIeCpcNBYSr9xZj42Frvk4PB3enLv1VOHgmb238=",
  description:
    "Better Angel HM Moto Eléctrica Infantil Scooter Eléctrico - Coche Triciclo Moto ​Eléctrica ​Infantil, Motocicleta Eléctrica para Niños, Moto Cross Scooter, Moto Eléctrica para Niños Motorbike",
});
producList.push({
  name: "Scooter electrico",
  price: "$200",
  image:
    "https://vendomarket.cl/wp-content/uploads/2021/08/108563-1-scaled-1.jpg",
  description:
    "Xiaomi Mi Electric Scooter Essential, 12 mph de Velocidad máxima, 12 Millas de Distancia de Viaje, 250 W de Potencia del Motor, versión Oficial del Reino Unido, Negro, Adulto",
});
producList.push({
  name: "Skate",
  price: "$200",
  image:
    "https://st4.depositphotos.com/3539679/23945/v/600/depositphotos_239454032-stock-illustration-skateboarding-vector-realistic-3d-black.jpg",
  description:
    "Skateboard para Principiantes niños y Adultos 79 X 20 cm diseño Tigre, monopatín Completo de 9 Capas de Madera de Arce para niños y niñas con rodamientos ABEC-7 y Herramienta en T Animal Skateboards",
});
producList.push({
  name: "Rollers",
  price: "$350",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_816691-MLA46990826237_082021-O.jpg",
  description:
    "Patines en línea y patín de Hielo, 2 en 1 Advance Ajustables y modificables RAVEN",
});
producList.push({
  name: "OneWheel",
  price: "$600",
  image:
    "https://static.fnac-static.com/multimedia/Images/ES/MC/2c/bd/80/8437036/1540-1/tsp20200703090731/Monociclo-Electrico-Kingsong-KS-16S-420-wh-blanco.jpg#e4db073f-0302-4eb4-aabf-817e45f10608",
  description:
    "El monociclo eléctrico KingSong 14D ha resistido la prueba del tiempo como una rueda de nivel confiable que aún se mantiene firme frente a la competencia en la actualidad. Con un motor de 800w, alojado en una rueda de 14″ que puede superar los 25 km/h, la KingSong 14D es perfecta para principiantes que quieren crecer o para cualquiera que quiera explorar el mundo de las ruedas más compactas como la Inmotion V5F.",
});
producList.push({
  name: "Bicicleta",
  price: "$120",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_990986-MLA53586520581_022023-O.webp",
  description:
    "Licorne Bike Bicicleta de trekking prémium de 28 pulgadas, para hombres, jóvenes, mujeres y hombres, 21 velocidades, bicicleta de ciudad para hombre, Life M-V-ATB",
});
producList.push({
  name: "Motoneta",
  price: "$250",
  image:
    "https://media.istockphoto.com/id/1225448373/es/foto/kick-city-rider-bike-scooter-el%C3%A9ctrico-urbano-aislado-sobre-fondo-blanco-motocicleta-de-la.jpg?s=612x612&w=0&k=20&c=zcbplIeCpcNBYSr9xZj42Frvk4PB3enLv1VOHgmb238=",
  description:
    "Better Angel HM Moto Eléctrica Infantil Scooter Eléctrico - Coche Triciclo Moto ​Eléctrica ​Infantil, Motocicleta Eléctrica para Niños, Moto Cross Scooter, Moto Eléctrica para Niños Motorbike",
});
producList.push({
  name: "Scooter electrico",
  price: "$200",
  image:
    "https://vendomarket.cl/wp-content/uploads/2021/08/108563-1-scaled-1.jpg",
  description:
    "Xiaomi Mi Electric Scooter Essential, 12 mph de Velocidad máxima, 12 Millas de Distancia de Viaje, 250 W de Potencia del Motor, versión Oficial del Reino Unido, Negro, Adulto",
});
producList.push({
  name: "Skate",
  price: "$200",
  image:
    "https://st4.depositphotos.com/3539679/23945/v/600/depositphotos_239454032-stock-illustration-skateboarding-vector-realistic-3d-black.jpg",
  description:
    "Skateboard para Principiantes niños y Adultos 79 X 20 cm diseño Tigre, monopatín Completo de 9 Capas de Madera de Arce para niños y niñas con rodamientos ABEC-7 y Herramienta en T Animal Skateboards",
});
producList.push({
  name: "Rollers",
  price: "$350",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_816691-MLA46990826237_082021-O.jpg",
  description:
    "Patines en línea y patín de Hielo, 2 en 1 Advance Ajustables y modificables RAVEN",
});
producList.push({
  name: "OneWheel",
  price: "$600",
  image:
    "https://static.fnac-static.com/multimedia/Images/ES/MC/2c/bd/80/8437036/1540-1/tsp20200703090731/Monociclo-Electrico-Kingsong-KS-16S-420-wh-blanco.jpg#e4db073f-0302-4eb4-aabf-817e45f10608",
  description:
    "El monociclo eléctrico KingSong 14D ha resistido la prueba del tiempo como una rueda de nivel confiable que aún se mantiene firme frente a la competencia en la actualidad. Con un motor de 800w, alojado en una rueda de 14″ que puede superar los 25 km/h, la KingSong 14D es perfecta para principiantes que quieren crecer o para cualquiera que quiera explorar el mundo de las ruedas más compactas como la Inmotion V5F.",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener(
      "click",
      (function (p) {
        return function () {
          openProductDetailAside(p);
        };
      })(product)
    );

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

////////////////////////////////////////////

{
  /* <aside class="product-detail-secondary inactive">       cardsContainer
      <div class="product-detail-close-secondary">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <img         image 
        src="https://http2.mlstatic.com/D_NQ_NP_990986-MLA53586520581_022023-O.webp"
        alt="Bicicleta"
      />
      <div class="product-info-secondary">    div
        <p>$120,00</p>    infoPrice
        <p>Bike</p>      infoName
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button class="primary-button-secondary add-to-cart-button-secondary">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
</aside> */
}
