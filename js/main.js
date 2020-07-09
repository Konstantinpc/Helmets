function AddToCart(name, price, country){
    var new_t = localStorage.getItem("products");
    var array_of_products;
    array_of_products.push(new_t);
    array_of_products.push(name);
    
    localStorage.setItem("products", JSON.stringify(array_of_products));
    
    console.log(localStorage.getItem("products"));
}