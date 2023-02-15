const request = require("supertest");
const Task = require("../src/models/task");
const app = require("../src/app");
const { user1, user1Id, setupDB } = require("./fixtures/db");

beforeEach(setupDB);

test("Should create task for user", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .send({
      description: "Go Go Go",
      completed: true,
    })
    .expect(201);

  const task = Task.findById(response.body._id);
  expect(task).not.toBeNull();
});
