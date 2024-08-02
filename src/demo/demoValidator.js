import validationSchema from "../../utils/validateSchema.js";
import {validationResult} from "express-validator"

// ADD SUPPLIER VALIDATION:
// export const addDemoValidation = [
//   ...validationSchema.body.requiredText([
//     "requiredText1",
//     "requiredText2",
//     "nestedObj.requiredText3",
//   ]),
//   ...validationSchema.body.text([
//     "optionText1",
//     "optionalText2",
//     "nestedObject.optionalText3",
//   ]),
//   ...validationSchema.body.number(["businessContactPerson.phoneNo"]),
//   ...validationSchema.body.array([
//     "bidEmails",
//     "projectsEmail",
//     "accountsEmail",
//   ]),
// ];


export const userByIdValidation = [
  ...validationSchema.param.mongooseId(['id'])
];

export const addUserValidation=[
  ...validationSchema.body.requiredText(['firstName', 'lastName', 'email', 'password']),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next()
}
]

export const deleteUserValidation = [
  ...validationSchema.param.mongooseId(['id']),
];

export const updateUserValidation = [
  ...validationSchema.param.mongooseId(['id']),
  ...validationSchema.body.requiredText(['firstName', 'lastName', 'email', 'password']),
];