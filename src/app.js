import Express from "express";
import cors from "cors";

const app = Express();

app.use(Express.json({ limit: "16kb" }));
app.use(Express.urlencoded({ extended: true, limit: "16kb" }));
app.use(Express.static("public"));

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:3278",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", (req, res) => {
    res.send("I am in now...")
});

app.get("/intro", (req, res) => {
    res.send("Kaushik this side")
});

export default app;