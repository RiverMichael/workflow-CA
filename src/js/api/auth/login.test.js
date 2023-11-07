import { login } from "./login";
import localStorageMock from "../../mock/localStorage.mock";

global.localStorage = localStorageMock;

describe("login", () => {
  beforeEach(() => {
    localStorage.clear.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should fetch and store token if response is OK", async () => {
    const email = "mock@email.com";
    const password = "mockPassword";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "mockToken" }),
      }),
    );

    await login(email, password);

    expect(fetch).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("mockToken"),
    );
  });

  it("Should throw error and not store token if response is not OK", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ ok: false, statusText: "Unauthorized" }),
    );

    const email = "wrong@email.com";
    const password = "wrongPassword";

    await expect(login(email, password)).rejects.toThrow("Unauthorized");
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});
