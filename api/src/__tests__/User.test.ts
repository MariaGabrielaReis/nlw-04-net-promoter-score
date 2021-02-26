import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Shloud be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "user@exemple.com",
      name: "User Exemple",
    });
    expect(response.status).toBe(201);
  });

  it("Should not be able to create a user with exits email", async () => {
    const response = await request(app).post("/users").send({
      email: "user@exemple.com",
      name: "User Exemple",
    });
    expect(response.status).toBe(400);
  });
});
