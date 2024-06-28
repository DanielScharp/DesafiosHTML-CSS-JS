//
// https://github.com/yairEO/knobs
// 

var settings = {
  visible: 1, 
  CSSVarTarget: document.body, 
  knobs: [
    {
      cssVar: ['fps'],
      label: 'Frame Per Second',
      type: 'range',
      value: 26,
      min: 1,
      max: 60,
      step: 1,
    }
  ]
}

new Knobs(settings)