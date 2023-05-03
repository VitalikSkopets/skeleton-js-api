import axios from "axios";
import expect from "jest-matchers";
import pet from "../data/pet.js";

describe('PetStore test', () => {

    const url = "https://petstore.swagger.io/v2";

    it('Create pet', async () => {
        const response = await axios.post(`${url}/pet`, pet);

        await expect(response.status).toBe(200);
    });

    it('Get pet', async () => {
        const response = await axios.get(`${url}/pet/${pet.id}`);

        await expect(response.status).toBe(200);
        await expect(response.data).toMatchObject(pet);
    });

    it('Update pet', async () => {
        pet.name = "PET NEW NAME";
        const response = await axios.put(`${url}/pet`, pet);

        await expect(response.status).toBe(200);
        await expect(response.data).toMatchObject(pet);
    });

    it('Delete pet', async () => {
        await axios.delete(`${url}/pet/${pet.id}`);

        const response = await axios.get(`${url}/pet/${pet.id}`, { validateStatus: false });

        await expect(response.status).toBe(404);
    });

});