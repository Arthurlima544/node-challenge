## Project Goal

This project began as a personal challenge to deepen my knowledge of **Node.js** and **TypeScript**. The primary goal was to simulate a real-world scenario: building a **Proof of Concept (PoC)** backend server as quickly as possible and then evolving it into a scalable, production-ready application.

This exercise forced me to explore common libraries that boost productivity while upholding high standards of code quality and DevOps best practices.

## From PoC to Production

The initial objective was to build and deploy a functional backend server in just **four days**. The core [technologies](#technologies-used) were selected specifically for rapid development. This goal was successfully met, with the initial version completed between the [first commit](https://github.com/Arthurlima544/node-challenge/commit/1c43deb30c2f0b1b7ca6625e5dcba0cb19efcdc2) and the [final deployment commit](https://github.com/Arthurlima544/node-challenge/commit/e1181113442bcee38cb198893aa13437ba900016) in total 4 days.

However, the journey doesn't end with deployment. I believe true learning happens when you go beyond the basics and dive deep into documentation and continuous improvement. The initial PoC laid the foundation, and now the focus shifts to enhancing and scaling the application, as I detailed in the [Next Steps](#Next-Steps) section.


## Table of Contents
- [Technologies Used](#technologies-used)
- [What I Learned in the course](#what-i-learned-in-the-course)
- [What I Go by my self in the Docs and Searched for more information](#what-i-learned-through-self-study-and-documentation)
- [Next Steps](#next-steps)
- [Installation](docs/installation.md)
- [How to Use It](docs/usage-guide.md)
- [Features](docs/features.md)
- [Tests](docs/tests.md)


## Technologies Used

<p align="left">
  <strong>Core:</strong><br>
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white" alt="Fastify">
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

<p align="left">
  <strong>Authentication & Security:</strong><br>
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Argon2-000000?style=for-the-badge" alt="Argon2">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge" alt="Zod">
</p>

<p align="left">
  <strong>Testing & Quality:</strong><br>
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest">
  <img src="https://img.shields.io/badge/Supertest-373737?style=for-the-badge" alt="Supertest">
  <img src="https://img.shields.io/badge/Faker-E91E63?style=for-the-badge&logo=faker&logoColor=white" alt="Faker.js">
</p>

<p align="left">
  <strong>Documentation & API:</strong><br>
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger">
  <img src="https://img.shields.io/badge/Scalar-000000?style=for-the-badge&logo=scalar&logoColor=white" alt="Scalar">
</p>

<p align="left">
  <strong>Logging & Monitoring:</strong><br>
  <img src="https://img.shields.io/badge/Pino-000000?style=for-the-badge&logo=pino&logoColor=white" alt="Pino">
  <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" alt="Grafana">
</p>

<p align="left">
  <strong>DevOps & Deployment:</strong><br>
  <img src="https://img.shields.io/badge/Fly.io-000000?style=for-the-badge&logo=flydotio&logoColor=white" alt="Fly.io">
  <img src="https://img.shields.io/badge/Travis_CI-3EAAAF?style=for-the-badge&logo=travisci&logoColor=white" alt="Travis CI">
</p>

## What I Learned in the course

- Difference between Route Params vs. Query Params
- Difference between HTTP methods: GET, POST, PUT, DELETE, PATCH, HEAD
- Basic HTTP Status Codes: 2xx, 3xx, 4xx, 5xx
- Version control, usage of LTS versions, [nvm](https://github.com/nvm-sh/nvm), and [npm](https://www.npmjs.com/)
- What a Promise is
- Error logging using [Pino-Pretty](https://www.npmjs.com/package/pino-pretty)
- [Drizzle ORM](https://orm.drizzle.team/)
- Database migrations
- [Blue-Green Deployment](https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment)
- [Docker](https://www.docker.com/) basics (Docker image, docker-compose)
- [Zod](https://www.npmjs.com/package/zod) for data validation and serialization
- API documentation with [Swagger](https://swagger.io/) and [Scalar](https://github.com/scalar/scalar)
- Offset pagination
- Creating seeds easily using [Faker.js](https://fakerjs.dev/)
- E2E tests with [Vitest](https://vitest.dev/) and [Supertest](https://www.npmjs.com/package/supertest)
- Encrypting passwords and handling them securely
- Stateless approach to Authentication ([JWT](https://jwt.io/))
- What JWT is
- Deployment using [Fly.io](https://fly.io/)
- Integrated [Grafana](https://grafana.com/) panel (Automatic Instrumentation)

## What I Learned Through Self-Study and Documentation

- Difference between **Instrumentation vs. Observability**
- Researched Node.js experimental built-in support for TypeScript, including its **advantages and disadvantages**.
- Used **[Linear](https://linear.app/)** for project management and issue tracking.
- Used **[Travis CI](https://www.travis-ci.com/)** for continuous integration.
- Used **[GitHub Copilot](https://docs.github.com/en/copilot)** for faster code reviews.
- Adopted **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** and **[Atomic Commits](https://www.conventionalcommits.org/en/v1.0.0/#how-does-this-relate-to-atomic-commits)** for a clear and organized version history.


## Next Steps

This document outlines a roadmap for enhancing this project post-deployment. The primary goal is to refactor and implement features that align with industry best practices for building scalable, maintainable, and robust backend services.

To manage this process efficiently, I'm utilizing **Linear**. This tool helps me track tasks and visualize progress, allowing me to focus on development without getting bogged down in project management overhead.

Below are the key areas of improvement I will be focusing on, broken down by category.

####  DevOps & Automation

---

Automating the development lifecycle is my top priority. This ensures consistency, reduces manual errors, and speeds up the deployment process.

* **[Add CI/CD Pipeline (#20)](https://github.com/Arthurlima544/node-challenge/issues/20):** The immediate goal is to establish a Continuous Integration and Continuous Deployment pipeline. This will automate testing and deployments, ensuring that only quality code reaches production.
* **[Optimize Dockerfile (#17)](https://github.com/Arthurlima544/node-challenge/issues/17):** The current Docker image includes development dependencies. I will optimize the `Dockerfile` to create a smaller, more secure production image by excluding these unnecessary packages.


#### Core Architecture & Robustness

---

Improving the application's foundation will make it more resilient and easier to extend in the future.

* **[Centralized Error Handling (#15)](https://github.com/Arthurlima544/node-challenge/issues/15):** Implement a global error handling mechanism to standardize API error responses, making the API more predictable for clients and simplifying debugging.
* **[Environment Validation with Zod (#12)](https://github.com/Arthurlima544/node-challenge/issues/12):** To prevent runtime errors from invalid configurations, I will use Zod to validate all environment variables upon application startup.
* **[Logger Improvements (#14)](https://github.com/Arthurlima544/node-challenge/issues/14):** Enhance the existing logger to provide more structured and context-rich logs, which is crucial for effective monitoring and debugging in a production environment.
* **[Dependency Inversion (#16)](https://github.com/Arthurlima544/node-challenge/issues/16):** Apply the Dependency Inversion Principle to decouple modules. This will make the codebase more modular, testable, and maintainable.


#### Features & Security

---

These tasks focus on adding core functionality and strengthening the application's security posture.

* **[Implement /register Endpoint (#21)](https://github.com/Arthurlima544/node-challenge/issues/21):** Develop the user registration endpoint, a foundational feature for the application.
* **[Use fastify-jwt for Authentication (#11)](https://github.com/Arthurlima544/node-challenge/issues/11):** Replace the current implementation with one using Fastify.
* **[Initial Database Setup (#19)](https://github.com/Arthurlima544/node-challenge/issues/19):** Fix problems, Sometimes db was not created correctly, then we needed to insert manually a database.



#### Testing & Quality Assurance

---

A strong testing culture is essential for building reliable software.

* **[Add Unit Tests (#18)](https://github.com/Arthurlima544/node-challenge/issues/18):** Develop a suite of unit tests to verify the correctness of individual components, guarantee code reliability, and prevent future regressions.

#### Documentation & Developer Experience

---

Good documentation and clear conventions are vital for long-term project success and collaboration.

* **[Add README.md (#13)](https://github.com/Arthurlima544/node-challenge/issues/13):** Create a comprehensive `README.md` file with setup instructions, an API overview, and general project information.
* **[Research Grafana for Monitoring (#22)](https://github.com/Arthurlima544/node-challenge/issues/22):** Investigate how Grafana can be integrated to create dashboards for monitoring application performance, logs, and metrics.
* **[Research Formatted Commits (#23)](https://github.com/Arthurlima544/node-challenge/issues/23):** Explore How the usage of Convetional commits + Atomic Commits can help to identify problems and easily rollback them.
