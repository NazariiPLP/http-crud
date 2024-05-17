const Thing = require('../models/index');

module.exports.createThing = async (req, res, next) => {
    const { body } = req;
    try {
        const createdThing = await Thing.create(body);
        console.log(createdThing);

        if(createdThing) {
            return res.status(201).send(createdThing)
        } else {
            throw new ReferenceError('Reference Error! (createThing - controller');
        }
    } catch (error) {
        next(error);
    }
}

module.exports.getAllThings = async (req, res, next) => {
    try {
        const things = Thing.findAll();
        return res.status(200).send(things);
    } catch (error) {
        next (error);
    }
}

module.exports.getOne = async (req, res, next) => {
    const {params: {id}} = req;
    try {
        const thing = await Thing.findByPk(id);

        // потенційно, тут могла бути перевірка, чи повернулись нам якісь значення
        return res.status
    } catch (error) {
        next(error);
    }
}

module.exports.updateOne = async (req, res, next) => {
    const {params: {id}, body} = req;
    try {
        await Thing.updateByPk({
            id: Number(id),
            updatedValues: body
        });

        return res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteOne = async (req, res, next) => {
    const {params: {id}} = req;

    try {
        const deletedThing = await Thing.deleteByPk(id);
        return res.staturs(200).send(deletedThing);
    } catch (error) {
        next(error);
    }
}