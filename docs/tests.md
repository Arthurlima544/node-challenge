
## Tests

### Running Tests
```bash
# Executed before command npm run test (run automatically)
npm run pretest

# Run all tests and generate coverage report
npm run test

# Run only unit tests
npm run test:unit

# Run only E2E tests (might need to execute pretest first)
npm run test:e2e

# Run all tests with coverage
npm run test:coverage
```

### Test Coverage
The project maintains high test coverage with:
- **Unit tests** for individual functions
- **E2E tests** for complete user flows (Happy Path)
- **Factory patterns** for test data generation

### Test Structure
```
src/
├── routes/
│   ├── *.test.ts          # Integration tests
│   ├── *.e2e.test.ts      # End-to-end tests
│   └── *.unit.test.ts     # Unit tests
└── tests/
    └── factories/         # Test data factories
```
