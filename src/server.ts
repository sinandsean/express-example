import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/server", (req: Request, res: Response, next: NextFunction) => {
  res.send("server!");
  //   res.sendFile("./index.html");
});

app.listen(8080, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8080🛡️
  ################################################
`);
});
