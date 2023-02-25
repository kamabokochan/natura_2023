import * as yup from 'yup'

const jpConfig = {
  mixed: {
    default: '入力エラーです',
    required: '必須入力項目です',
    notType: '形式が違います',
  },
  string: {
    email: '形式が違います',
  },
}

yup.setLocale(jpConfig)
export default yup
