const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { user1, user1Id, setupDB } = require("./fixtures/db");

beforeEach(setupDB);

// afterEach(() => {
//   console.log("afterEach");
// });

/*
test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "test",
      email: "test@me.io",
      password: "test1234",
    })
    .expect(201);

  // database change correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // response body
  expect(response.body).toMatchObject({
    user: {
      name: "test",
      email: "test@me.io",
    },
    token: user.tokens[0].token,
  });
});
*/

/*
test("Should login an existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: user1.email,
      password: user1.password,
    })
    .expect(200);

  const user = await User.findById(user1Id);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Shouldn't login nonexisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: user1.email,
      password: "notMyPassword",
    })
    .expect(400);
});
*/

/*
test("Should get profile of user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Shouldn't get profile of unauthenticated user", async () => {
  await request(app)
    .get("/users/me")
    .send()
    .expect(401);
});
*/

/*
test("Should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(user1Id);
  expect(user).toBeNull();
});

test("Shouldn't delete account for unauthenticated user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});
*/

/*
test("Should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);
  const user = await User.findById(user1Id);
  expect(user.avatar).toEqual(expect.any(Buffer));
});
*/

// test("Should update valid user fields", async () => {
//   await request(app)
//     .patch("/users/me")
//     .set("Authorization", `Bearer ${user1.tokens[0].token}`)
//     .send({
//       name: "test2",
//     })
//     .expect(200);
//   const user = await User.findById(user1Id);
//   expect(user.name).toEqual("test2");
// });

test("Should not update invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .send({
      location: "Philadelphia",
    })
    .expect(400);
});
