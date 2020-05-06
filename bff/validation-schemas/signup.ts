import Joi from "joi";

export const signupBody = Joi.object().keys({
  phone: Joi.string()
    .regex(/^0[0-9]{10}$/)
    .required()
    .error(new Error("Telefon Numarası hatalı")),
  password: Joi.string()
    .min(6)
    .max(25)
    .required()
    .error(new Error("Şifre Hatalı")),
});
