import { objectApi } from "./conexaoApi.js";

export async function deleteProduct(idIcon) {
    try {
        console.log(`Esse é o id igual: ${idIcon}`);
        await objectApi.deleteProducts(idIcon);
    } catch (error) {
        console.log(error);
    }
};
