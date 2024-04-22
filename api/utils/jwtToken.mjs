import jwt from "jsonwebtoken";
export const generateJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 3,
    httpOnly: true,
    sameSite: true,
    secure: process.env.NODE_ENV == "Production",
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        console.error(error);
        return res.status(403).send(error); // Forbidden
      }
      req.userId = decoded;
    });
  }
  next();
};
