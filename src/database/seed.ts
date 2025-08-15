import { randomInt } from "crypto";
import { db } from "./client.ts";
import { courses, enrollments, users } from "./schema.ts";
import { fakerPT_BR as faker } from '@faker-js/faker'
import { hash } from "argon2";


async function seed() {
    const passwordHash = await hash('123456')

    const usersInserted = await db.insert(users).values([
        {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: passwordHash,
            role: 'student',
        },
        {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: passwordHash,
            role: 'student',
        },
        {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: passwordHash,
            role: 'student',
        },
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

seed().catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
});