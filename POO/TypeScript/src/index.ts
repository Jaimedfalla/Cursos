import { ProductHttpService } from "./services/product-http.service";

(async()=>{
    const productService:ProductHttpService = new ProductHttpService();
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(p=>p.price));
})();