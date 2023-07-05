import * as yup from 'yup';

export const gameResultValidationSchema = yup.object().shape({
  result: yup.string().required(),
  organization_id: yup.string().nullable(),
});
