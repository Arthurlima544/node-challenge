import { faker } from "@faker-js/faker";
import { db } from "../../database/client.ts";
import { users } from "../../database/schema.ts";
import { randomUUID } from "crypto";
import { hash } from "argon2";

export async function makeUser(role?: 'manager' | 'student') {
    const passwordBeforeHash = randomUUID()

    const result = await db.insert(users).values({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: await hash(passwordBeforeHash),
        role: role
    }).returning()

    return { user: result[0], passwordBeforeHash }
}
