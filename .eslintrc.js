module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'],
  rules: {
    // 문자열은 쌍따옴표
    quotes: ['error', 'single'],

    // 세미콜론 필수
    semi: ['error', 'always'],

    // 템플릿 문자열 사용 권장
    'prefer-template': 'error',

    // 연산자 앞뒤 공백
    'space-infix-ops': 'error',

    // 쉼표 뒤 공백
    'comma-spacing': ['error', { before: false, after: true }],

    // 중괄호 생략 금지
    curly: ['error', 'all'],

    // 탭 간격 2칸
    indent: ['error', 2, { SwitchCase: 1 }],

    // Prettier와 연동
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
