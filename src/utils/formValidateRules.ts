import { Rule } from 'antd/lib/form';
import { MAX_LENGTH } from '../constants/_validate';

export const formValidateRules: Rule[] = [
  {
    max: MAX_LENGTH,
    message: `Максимальная длина записи должна быть меньше или равна ${MAX_LENGTH} символам`,
  },
];