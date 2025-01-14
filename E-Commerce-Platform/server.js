import jsonServer from "json-server";
import cors from "cors";

// Setup the server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware to parse JSON bodies
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser); // Add this line to parse JSON bodies

// Custom login route
server.post("/login", (req, res) => {
  const db = router.db;
  const { email, password } = req.body; // req.body is now parsed and accessible

  const user = db.get("login").find({ email, password }).value();

  if (user) {
    res.status(200).json({
      token: user.token,
      refresh: user.refresh,
      authUserState: user.authUserState,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

// Block unwanted POST requests
server.use((req, res, next) => {
  if (req.method === "POST" && req.originalUrl !== "/login") {
    return res
      .status(403)
      .json({ message: "Database modification is disabled" });
  }
  next();
});

// Attach JSON Server router
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
