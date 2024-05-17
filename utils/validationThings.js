const yup = require('yup');

/* При свторенні штуки:

1. Body не має бути пустим
2. Body має довжину він 3 до 100 символів

*/




const ThingSchema = yup({
    body: yup.string().required().min(3).max(100)
});

module.exports.validateThing = async (req, res, next) => {
    const { body } = req;

    try {
        const validatedObject = await ThingSchema.validate(body);

        if(validatedObject) {
            next();
        }
    } catch (error) {
        next(error);
    };
}