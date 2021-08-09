module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      [
        'content',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'display',
        'vertical-align',
        'grid',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-column-gap',
        'grid-row-gap',
        'column-gap',
        'row-gap',
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        'align-content',
        'align-items',
        'justify-content',
        'align-self',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-scrolling',
        'box-sizing',
        'font',
        'font-family',
        'font-size',
        'line-height',
        'font-weight',
        'font-style',
        'letter-spacing',
        'text-indent',
        'text-transform',
        'text-align',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        'opacity',
        'visibility',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
