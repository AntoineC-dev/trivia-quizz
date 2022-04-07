export const handleTriviaResponse = (code: number) => {
  if (code === 0) console.log("success");
  if (code === 1) console.log("Not enough questions");
  if (code === 2) console.log("Invalid parameters");
  if (code === 3) console.log("Invalid token");
  if (code === 4) console.log("Refresh token");
};

export const handleApiErrors = (error: any) => {
  if (error.response) {
    console.log("ApiError", error.response);
  } else if (error.request) {
    console.log("RequestError", error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
};
