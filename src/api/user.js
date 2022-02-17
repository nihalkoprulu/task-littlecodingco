import { fetch } from "./fetch";

export const getRandomUser = ({ page, results }) =>
  fetch({ method: "GET", path: "", params: { page, results } });
