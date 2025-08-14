import { randomInt } from "crypto";
import { db } from "./client.ts";
import { courses, enrollments, users } from "./schema.ts";
import { fakerPT_BR as faker } from '@faker-js/faker'


async function seed() {
    const usersInserted = await db.insert(users).values([
        { name: faker.person.fullName(), email: faker.internet.email() },
        { name: faker.person.fullName(), email: faker.internet.email() },
        { name: faker.person.fullName(), email: faker.internet.email() },
    ]).returning()


    const coursesInserted = await db.insert(courses).values([
        { title: `${faker.commerce.department()} ${randomInt(20)}` },
        { title: `${faker.commerce.department()} ${randomInt(20)}` }
    ]).returning()

    await db.insert(enrollments).values([
        { courseId: coursesInserted[0].id, userId: usersInserted[0].id },
        { courseId: coursesInserted[0].id, userId: usersInserted[1].id },
        { courseId: coursesInserted[1].id, userId: usersInserted[2].id },
    ])

}
seed()