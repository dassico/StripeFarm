import { loadSettings } from "../TestSettings";
import { getAccessToken } from "../../services/datalinking/Controllers/UserController";

/*
 * Loads all the test settings necessary for testing with a mock api.
 */
loadSettings();

/**
 * Tests the functionality of the getAccessToken function.
 */
describe("getAccessToken",
    () => {
        test("retrieve access token",
            async () => {
                var accessToken = await getAccessToken("test@test.nl", "testPassword");
                expect(accessToken)
                    .toBe(
                        "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0");
            });
    });