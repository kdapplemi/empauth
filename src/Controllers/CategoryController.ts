import {JsonController, Get, Post, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {CategoryRepository} from "../Repository/CategoryRepository";
import {Category} from "../Model/Category";
import { parse } from "path";

@Service()
@JsonController()
export class CategoryController {

    constructor(private categoryRepository: CategoryRepository) {
        categoryRepository = new CategoryRepository();
        this.categoryRepository = categoryRepository;
       // console.log(categoryRepository);
    }

    @Get("/categories")
    all(): Promise<Category[]> {
        
        return this.categoryRepository.findAll();
    }

    @Get("/categories/:id")
    one(@Param("id") id: number): Category {
        console.log('id :'+ id);
        return this.categoryRepository.findOne(id);
    }

    @Post("/categories")
    category(@Body() category: Category): Category {
        return this.categoryRepository.save(category);
    }

    @Delete("/categories/:id")
    delete(@Param("id") id: number): Category {
        return this.categoryRepository.remove(id);
    }

}