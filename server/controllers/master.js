const { Op } = require("sequelize")
const { master_barang } = require("../models")

module.exports = class Master {

    static async addData(req, res) {
        try {
            const data = req.body
            await master_barang.create(data)
            res.status(201).json({ message: "Created" })
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }

    static async findData(req, res) {
        try {
            const { q } = req.query
            console.log(q,'<<<');
            let option = { order: [['id', 'ASC']] }
            if (q) {
                option = {
                    where: {
                        nm_barang: {
                            [Op.like]: `%${q}%`
                        }
                    },
                    order: [['id', 'ASC']]
                }
            }
            const data = await master_barang.findAll(option)
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }

    static async findDataId(req, res) {
        try {
            const id = req.params.id
            const data = await master_barang.findByPk(id)
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async updateData(req, res) {
		try {
			const id = req.params.id;
			const data = req.body;
			await master_barang.update(data, { where: { id } });
			res.status(200).json({ message: "Updated!" });
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	}
    static async deleteData(req, res) {
		try {
			const id = req.params.id;
			await master_barang.destroy({ where: { id } });
			res.status(200).json({ message: "Deleted!" });
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	}
}