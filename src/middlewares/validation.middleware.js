import { body, validationResult } from 'express-validator';

// {
//     input4name: '',
//     input4username: '',
//     input4email: '',
//     input4password: '',
//     remember: 'on'
//   }





const validateRequest = async (req, res, next) => {
    // console.log(req.body);
    // 1. Setup rules for validation.
    const rules = [
        body('input4name').notEmpty().withMessage('Name is required'),
        body('input4username').notEmpty().withMessage('Username is required'),
        body('input4password').isStrongPassword({minLength: 7 }).withMessage('Password '),
        
    ];

    // 2. run those rules.
    await Promise.all(
        rules.map((rule) => rule.run(req))
    );

    // 3. check if there are any errors after running the rules.
    var validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let err = [];
        validationErrors.array().forEach((obj) => {
            err.push(obj.msg);
        })
        return res.render('new-product', {
            errorStack: err
        });
    }

    next();
};

export default validateRequest;