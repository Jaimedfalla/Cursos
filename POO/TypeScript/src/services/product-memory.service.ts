import faker from '@faker-js/faker';
import { Product } from '../models/product.model';
import { CreateProductDto,UpdateProductDto} from '../dtos/product.dto';
import { ProductService } from './product.service';

export class ProductMemoryService implements ProductService{
    private products: Product[] = [];

    create(data: CreateProductDto): Product {
        const newProduct = {
          ...data,
          id: faker.datatype.number(),
          category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            image:faker.image.imageUrl()
          }
        }
    
        return this.add(newProduct );
    }

    private add(product:Product):Product{
        this.products.push(product);
        return product;
    }

    update(id: Product['id'], changes: UpdateProductDto ): Product{
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index];
        this.products[index] = {
          ...prevData,
          ...changes
        }
        return this.products[index];
    }

    findOne(id:Product['id']):Product|undefined{//Product['id'] indica que el parámetro id sea del mismo tipo del id de Product
        return this.products.find(p=> p.id===id);
    }

    getAll(): Product[] {
        return this.products;
    }
}