import { matchedData, validationResult } from "express-validator";
import { Entry } from "../models/entry.model.mjs";
import { User } from "../models/user.model.mjs";

export const createEntry = async (req, res) => {
  console.log(req.originalUrl, req.method);
  const { userId } = req;
  if (!userId)
    return res.status(401).send({ error: "User is not logged In !" }); // unauthorized
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result); // bad request
  const data = matchedData(req);
  const newEntry = new Entry(data);
  try {
    const findUser = await User.findById(userId.userId);
    if (!findUser)
      return res.status(404).send({ error: "User does not exist !" }); // Not Found
    findUser.entries.push(newEntry._id);
    await Promise.all([findUser.save(), newEntry.save()]);
    return res.status(201).send(newEntry); // created
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // internal server error
  }
};

export const getEntries = async (req, res) => {
  console.log(req.originalUrl, req.method);
  const { userId } = req;
  if (!userId)
    return res.status(401).send({ error: "User is NOT logged In !" }); // unauthorized
  try {
    const findUser = await User.findById(userId.userId).populate("entries");
    if (!findUser)
      return res.status(404).send({ error: "User does not exist !" });
    // not found
    else {
      return res.status(200).send(findUser.entries); // ok
    }
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // Internal server Error
  }
};

export const getPublicEntries = async (req, res) => {
  console.log(req.originalUrl, req.method);
  try {
    const findEntries = await Entry.find({ visibility: true });
    return res.status(200).send(findEntries); // ok
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // internal server error
  }
};

export const updateEntry = async (req, res) => {
  console.log(req.originalUrl, req.method);
  const {
    params: { id },
    userId,
  } = req;
  if (!userId)
    return res.status(401).send({ error: "User is NOT logged In !" }); // Unauthorized
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result); // bad request
  const data = matchedData(req);
  try {
    const findUser = await User.findById(userId.userId);
    if (!findUser) {
      res.clearCookie("token");
      return res.status(404).send({ error: "Invalid User" }); // not found
    }
    const entryFound = findUser.entries.includes(id);
    if (!entryFound)
      return res
        .status(400)
        .send({ error: "User does not have any such entry !" }); // bad request
    const findEntry = await Entry.findByIdAndUpdate(id, data, { new: true });
    if (!findEntry)
      return res
        .status(404)
        .send({ error: "No such entry is present in the database" }); // not found
    return res.status(200).send(findEntry); // ok
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // internal server error
  }
};

export const deleteEntry = async (req, res) => {
  console.log(req.originalUrl, req.method);
  const {
    params: { id },
    userId,
  } = req;
  if (!userId)
    return res.status(401).send({ error: "User is NOT logged In !" }); // unauthorized
  try {
    const findUser = await User.findById(userId.userId);
    if (!findUser) {
      res.clearCookie("token");
      return res
        .status(404)
        .send({ error: "No such user is present in the database !" }); // not found
    }
    const entryFound = findUser.entries.includes(id);
    if (!entryFound)
      return res
        .status(400)
        .send({ error: "User does not have any such entry !" }); // bad request
    const deletedEntry = await Entry.findByIdAndDelete(id);
    if (!deletedEntry)
      return res
        .status(404)
        .send({ error: "No such entry is present in the database !" }); // not found
    return res.status(200).send(deletedEntry); // ok
  } catch (error) {
    console.error(error);
    return res.status(501).send(error); // internal server error
  }
};
