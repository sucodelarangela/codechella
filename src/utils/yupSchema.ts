import * as yup from 'yup';

export const yupSchema = yup.object({
  name: yup.string()
    .required("Campo obrigatório.")
    .min(10, "O nome deve ter pelo menos 10 caracteres")
    .test({
      name: 'has-lastname',
      test(value, ctx) {
        if (!value.includes(' ')) {
          return ctx.createError({ message: 'Você precisa inserir nome e sobrenome.' });
        }
        return true;
      }
    }),
  email: yup.string().email()
    .required("Campo obrigatório."),
  sector: yup.string().required("Campo obrigatório."),
  showDate: yup.string().required("Campo obrigatório."),
  ticket: yup.string().required("Campo obrigatório."),
  date: yup.date()
    .required("Campo obrigatório.")
    .test({
      name: 'is-18yo',
      test(value, ctx) {
        const today = new Date();
        const age = today.getFullYear() - value.getFullYear() -
          (today.getMonth() < value.getMonth() ||
            (today.getMonth() === value.getMonth() && today.getDate() < value.getDate()));
        if (age < 18) {
          return ctx.createError({ message: 'Você precisa ter mais de 18 anos.' });
        }
        return true;
      }
    })
});
