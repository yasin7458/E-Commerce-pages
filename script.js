
const sampleProducts = {

    Mobiles: [
        {
            company: "Apple",
            model: "iPhone 15",
            price: 65000,
            description: "Apple iPhone with powerful performance and premium camera.",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSifu5dZ0viLYey8ad51dZ5rnFEwTVA1zqeirediTNUchcP74zeBtRJvnZ8IXIT2Nx9h-bIgVeSJMCHgg0TIfRhHnfHAsfr3iP1DwIF3nJu6dqh78uJ0AdipA"
        },
        {
            company: "Samsung",
            model: "Galaxy S24",
            price: 55000,
            description: "Samsung smartphone with stunning display and camera.",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsuKuy_lzFEoMQyExeenLYUSHJiSkkdKaFH8J7j858ZOCsxaGN8ylZSDJfOHxkuzrmL1xDHgBkqwSU-8heGfSv4Zj9vEqS7MHhYbVxDNJ-pq-lWh5qOVlk"
        },
        {
            company: "OnePlus",
            model: "OnePlus 12",
            price: 58000,
            description: "Fast performance with premium smartphone experience.",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-Yt_xEI3gfshen_Umgo5e39azJrzl1TbRvPV6L0briyMC_FJrqEwfe-zJQMSc1fwfaZ1oxYqRthK8Nq79ih-RcXdzwg9PAz7WqiQFeNLvvCkugavP2jw-"
        },
        {
            company: "Xiaomi",
            model: "Redmi Note 13",
            price: 18000,
            description: "Powerful smartphone with stylish design and great battery.",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQG11h14xqBhzVnD_gTa8PQqnNKd2DBmMQnugTosUviLPFst2c7TPA-9vw67MDKzshlgfwkphLvCRS_k5ucEvKbyU7V9gMUORC1HONgasMISjBPVHzaJmYNUg"
        },
        {
            company: "Vivo",
            model: "Vivo V30",
            price: 30000,
            description: "Beautiful smartphone with advanced camera features.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCfFeXMcBbNdRbEkbHBlWMLONU5mETeXG57Hk5Jnh5Q&s=10"
        }
    ],

    Laptops: [
        {
            company: "HP",
            model: "HP Pavilion",
            price: 55000,
            description: "Powerful laptop for everyday work and productivity.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        },
        {
            company: "Dell",
            model: "Dell Inspiron",
            price: 62000,
            description: "Dell laptop with excellent performance and design.",
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
        },
        {
            company: "Apple",
            model: "MacBook Air M2",
            price: 85000,
            description: "Apple laptop with powerful M2 chip and premium design.",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
        },
        {
            company: "Lenovo",
            model: "Lenovo IdeaPad",
            price: 48000,
            description: "Reliable laptop for work, study and entertainment.",
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
        },
        {
            company: "Asus",
            model: "Asus VivoBook",
            price: 52000,
            description: "Stylish laptop with smooth performance.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        }
    ],

    Fashion: [
        {
            company: "Nike",
            model: "Nike T-Shirt",
            price: 1200,
            description: "Comfortable and stylish casual wear.",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
        },
        {
            company: "Adidas",
            model: "Adidas Hoodie",
            price: 2200,
            description: "Premium quality hoodie for everyday use.",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
        },
        {
            company: "Puma",
            model: "Puma Sneakers",
            price: 3500,
            description: "Comfortable sneakers with modern sporty design.",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        },
        {
            company: "Zara",
            model: "Casual Shirt",
            price: 1800,
            description: "Trendy casual shirt for everyday fashion.",
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
        },
        {
            company: "Levis",
            model: "Denim Jeans",
            price: 2500,
            description: "Classic denim jeans with comfortable fitting.",
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
        }
    ],

    Accessories: [
        {
            company: "Sony",
            model: "Wireless Headphones",
            price: 3500,
            description: "Enjoy high quality sound with wireless headphones.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            company: "Boat",
            model: "Smart Watch",
            price: 2500,
            description: "Smart watch with modern features and stylish design.",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        },
        {
            company: "JBL",
            model: "Bluetooth Speaker",
            price: 3000,
            description: "Portable speaker with powerful sound quality.",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
        },
        {
            company: "Logitech",
            model: "Wireless Mouse",
            price: 1200,
            description: "Comfortable wireless mouse for everyday use.",
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
        },
        {
            company: "Apple",
            model: "AirPods",
            price: 12000,
            description: "Premium wireless earbuds with clear sound.",
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500"
        }
    ],

    Home: [
        {
            company: "IKEA",
            model: "Table Lamp",
            price: 1800,
            description: "Modern table lamp for your beautiful home.",
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
        },
        {
            company: "HomeStyle",
            model: "Chair",
            price: 4500,
            description: "Comfortable and modern furniture for your home.",
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500"
        },
        {
            company: "IKEA",
            model: "Wooden Table",
            price: 6500,
            description: "Elegant wooden table for your living space.",
            image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500"
        },
        {
            company: "HomeDecor",
            model: "Wall Clock",
            price: 900,
            description: "Beautiful wall clock for modern interiors.",
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500"
        },
        {
            company: "DecorHouse",
            model: "Sofa",
            price: 18000,
            description: "Comfortable sofa with elegant modern design.",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
        }
    ]

};


// Store Products

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(sampleProducts));
}


// Get Products

function getProducts(parameter = localStorage.getItem("para") || "") {

    let cartData = JSON.parse(localStorage.getItem("cartitems")) || [];

    document.querySelector('.cart-count').innerText = cartData.length;

    document.querySelector(".dropdown").value = parameter;


    const products = JSON.parse(localStorage.getItem("products"));


    if (parameter == "Price : Low to High") {

        for (const key in products) {

            products[key].sort((a, b) => {
                return a.price - b.price;
            });

        }

        localStorage.setItem("filterData", JSON.stringify(products));

    }

    else if (parameter == "Price : High to Low") {

        for (const key in products) {

            products[key].sort((a, b) => {
                return b.price - a.price;
            });

        }

        localStorage.setItem("filterData", JSON.stringify(products));

    }

    else {

        localStorage.setItem("filterData", localStorage.getItem("products"));

    }


    const filterProducts = JSON.parse(localStorage.getItem("filterData"));


    for (const key in filterProducts) {

        let section = document.createElement('section');

        let h2 = document.createElement('h2');

        h2.append(key);

        section.appendChild(h2);

        let main = document.createElement('main');


        for (const element of filterProducts[key]) {

            let div = document.createElement('div');

            let h3 = document.createElement('h3');

            let img = document.createElement('img');

            let h4 = document.createElement('h4');

            let h5 = document.createElement('h5');

            let p = document.createElement('p');

            let button = document.createElement('button');


            h3.append(element.company);

            img.src = element.image;

            h4.append(element.model);

            h5.append("₹ " + element.price);

            p.append(element.description);

            button.append("Add To Cart");


            div.appendChild(h3);

            div.appendChild(img);

            div.appendChild(h4);

            div.appendChild(h5);

            div.appendChild(p);

            div.appendChild(button);


            main.appendChild(div);

        }


        section.appendChild(main);

        document.querySelector(".wrapper").appendChild(section);

    }

}


getProducts();


// Sorting

document.querySelector("#sort").addEventListener("input", function (e) {

    localStorage.setItem("para", e.target.value);

    location.href = "index.html";

});


// Cart Page

document.querySelector(".cart-box").onclick = function () {

    location.href = "cart.html";

    return;

};


// Search Products

document.querySelector("#search").addEventListener("input", function () {

    const value = document.querySelector("#search").value.toLowerCase();

    const cards = document.querySelectorAll(".wrapper main div");


    cards.forEach(function (card) {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "flex";

        }

        else {

            card.style.display = "none";

        }

    });

});


// Add To Cart

document.body.addEventListener("click", function (e) {

    if (e.target.innerText == "Add To Cart") {

        var cartData = JSON.parse(localStorage.getItem("cartitems")) || [];

        cartData.push(e.target.parentElement.children[2].innerText);

        localStorage.setItem("cartitems", JSON.stringify(cartData));

        document.querySelector(".cart-count").innerText = cartData.length;

        location.href = "index.html";

    }

});
