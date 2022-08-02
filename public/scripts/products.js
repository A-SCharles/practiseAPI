const url = "http://localhost:3000/products";
let products = [{}];

async function getproducts() {
 await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      products = data.results;
      console.log(products[0].prodName);
    });
    const display = document.getElementById("show");
     products.forEach((item) => {
            display.innerHTML += `
            <p>${item.prodName}</p>
                `
         });
    }

getproducts();
