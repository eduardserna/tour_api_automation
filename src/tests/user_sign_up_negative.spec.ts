import { faker } from "@faker-js/faker";
import * as supertest from 'supertest';

const request = supertest('http://localhost:8001/api/v1/users');
describe ('User sign up negative tests', () => {

    it.only('should not create a new user if email is missing', async () => {
        const userData = {
            name: faker.name.fullName(),
            email: '', 
            password: "Pass1234",
            confirmPassword: "Pass1234"
        }
        console.log(userData, "userdata without email")
        try{
            const res = await request.post('/signup').send(userData);
            console.log(res.body,"response");
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('message');
        }catch(err){
            console.log("Error during user sign up without email:", err)
        }

    })

})