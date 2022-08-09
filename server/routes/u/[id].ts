import { defineEventHandler, sendRedirect } from "h3";

export default defineEventHandler(async (event) => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
  sendRedirect(event, 'https://google.com');
});
