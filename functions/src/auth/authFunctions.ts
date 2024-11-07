import {onRequest} from "firebase-functions/v2/https";

export const registerUser = onRequest((request, response) => {
  response.send("Here's the register response");
});
