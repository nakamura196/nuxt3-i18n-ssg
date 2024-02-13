import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  return {
    statusCode: 200,
    body: {
      message: "Hello, world!",
      query,
    },
  };
});
