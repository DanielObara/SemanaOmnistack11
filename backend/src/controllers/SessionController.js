const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;
    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "No ONG found with this ID" });
    }

    return res.json(ong);
  }
};
