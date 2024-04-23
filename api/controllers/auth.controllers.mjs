import bcrypt from "bcrypt";
import { generateJwtToken } from "../utils/jwtToken.mjs";
import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user.model.mjs";

const saltRounds = 10;

export const login = async (req, res) => {
  console.log(req.originalUrl, req.method);
  const {
    body: { username, password },
    userId,
  } = req;
  if (!username || !password)
    return res
      .status(400)
      .send({ error: "Username and Password must not be Empty !" }); // bad request
  try {
    const findUser = await User.findOne({ username }).populate("entries");
    if (!findUser)
      return res
        .status(400)
        .send({ error: "No such User is present in the database !" }); // bad request
    const passwordMatched = await bcrypt.compare(password, findUser.password);
    if (!passwordMatched)
      return res.status(401).send({ error: "Invalid Credentials !" });
    // unauthorized
    else {
      generateJwtToken(findUser._id, res);
      return res.status(200).send({
        username: findUser.username,
        displayName: findUser.displayName,
        entries: findUser.entries,
        _id: findUser._id,
      }); // ok
    }
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // internal server error
  }
};

export const signup = async (req, res) => {
  console.log(req.originalUrl, req.method);
  if (req.userId) {
    return res.status(403).send({ error: "User is already logged in !" }); // forbidden
  }
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result); // bad request
  const data = matchedData(req);
  const findUser = await User.findOne({ username: data.username });
  if (findUser) return res.status(400).send({ error: "User already Exist!" });
  const newUser = new User(data);
  newUser.password = await bcrypt.hash(newUser.password, saltRounds);
  try {
    await newUser.save();
    generateJwtToken(newUser._id, res);
    return res.status(201).send({
      username: newUser.username,
      displayName: newUser.displayName,
      _id: newUser._id,
    }); // created
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // internal server error
  }
};

export const logout = (req, res) => {
  console.log(req.originalUrl, req.method);
  if (!req.userId)
    return res.status(403).send({ error: "User is already logged out !" });
  res.clearCookie("token");
  return res.status(200).send({ message: "User is logged out Successfully !" });
};

export const status = (req, res) => {
  console.log(req.originalUrl, req.method);
  if (req.userId)
    return res.status(200).send({ message: "User is Logged In !" });
  else return res.status(200).send({ message: "User is NOT logged In !" });
  return res.status(200).send("status");
};
