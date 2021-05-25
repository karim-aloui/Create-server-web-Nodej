
const productList = document.getElementById('productList');
const searchBar = document.getElementById('searchBar');

let hpProduct = [];
console.log(searchBar);
searchBar.addEventListener('Keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = hpProduct.filter( product => {
      return product.Title.toLowerCase().includes(searchString) || product.Manufacturer.toLowerCase().includes(searchString);
    });
    displayProduct(filteredProducts);
});


const loadProduct = async () => {
    try {
        const res = await fetch('v1/products.json');
        hpProduct = await res.json();
        displayProduct(hpProduct);
        console.log(hpProduct)
    } catch (err) {
        console.error(err);
    }
};

const displayProduct = (products) => {
    const htmlString = products
        .map((product) => {
            return `
            <li class="product">
                <h5>${product.Title}</h5>
                <h6>${product.Manufacturer}</h6>
                <p>Price: ${product.Price}</p>
                <img src="${product.ImageName}"></img>
            </li>
        `;
        })
        .join('');
    productList.innerHTML = htmlString;
};

loadProduct();