import express, { Request, Response } from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express';

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import commentsRoutes from "./routes/commentRoutes";  


// import {User} from "./db/schema";
const app = express();

// this "credentials: true" allows the frontend to send cookies to the backend so that we can authenticate the user.
app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
//auth obj will be attach to the request
app.use(clerkMiddleware());
//parase jSON request bodies
app.use(express.json());
//parase from data (link HTML form)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request , res: Response) => {
  res.json({
    message: "welcome to productivity API - powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments"
    }
  });
});
app.use("/api/users",userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/comments", commentsRoutes)

app.listen(ENV.PORT, () => {
  console.log("Server is up and running on PORT:", ENV.PORT);
});
