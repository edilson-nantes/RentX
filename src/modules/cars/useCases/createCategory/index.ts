import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./createCategoryUseCase";
import { CreateCategoryController } from "./createCategoryController";


const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController (createCategoryUseCase);

export { createCategoryController }