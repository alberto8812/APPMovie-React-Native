module.exports = {
  root: true,
  extends: '@react-native',
  parse:'@typescript-eslint/parse',
  Plugins:['@typescript-eslint'],
  rules:{
    'prettier/prettier':0,
    'quotes': ['error', 'single'],
    'no-console': 'off',
  },
  overrides:[
    {
      files:['*.ts', '*.tsx'],
      rules:{
        '@typescript-eslint/no-shadow':['error'],
        'no-shadow':'off',
        'no-undef':'off',
      }
    }
  ]
};