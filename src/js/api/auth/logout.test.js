import { logout } from "./logout";
import localStorageMock from "../../mock/localStorage.mock";

global.localStorage = localStorageMock;

describe("logout", () => {
  it("Should remove token from localStorage", () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledTimes(2);
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(localStorage.removeItem).toHaveBeenCalledWith("profile");
  });
});
