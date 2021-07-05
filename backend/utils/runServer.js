const runServer = (app) => {
  const PORT = process.env.PORT || 5000;
  const HOST = process.env.HOST || "localhost";

  app.listen(PORT, console.log(`Server running at ${HOST}:${PORT}`.yellow));

  // process.on("unhandledRejection", (err, promise) => {
  //   console.log(`Error: ${err.message}`.red);
  //   server.close(() => process.exit(1));
  // });
};

export default runServer;
