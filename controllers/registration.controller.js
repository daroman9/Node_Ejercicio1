const { Registrations } = require("../models/registrations");

const get = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({ registrations });
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Registrations.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: `Registration not found for the id ${id}`,
      });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const post = async (req, res) => {
  try {
    const { entranceTime, exitTime, status } = req.body;
    const newResgister = await Registrations.create({
      entranceTime,
      exitTime,
      status,
    });

    res.status(201).json({ newResgister });
  } catch (error) {
    console.log(error);
  }
};

const patch = async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await Registrations.findOne({ where: { id } });
    const { entranceTime, exitTime, status } = req.body;

    if (!registrations) {
      return res.status(404).json({
        status: "Error",
        message: `Registration not found for the id ${id}`,
      });
    }

    await registrations.update({ entranceTime, exitTime, status });
    res.status(200).json({ status: "Success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await Registrations.findOne({ where: { id } });

    if (!registrations) {
      return res.status(200).json({
        status: "Error",
        message: `Registration not found for the id ${id}`,
      });
    }

    res.status(200).json({ status: "Success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get, getById, post, patch, deleteRegistration };
