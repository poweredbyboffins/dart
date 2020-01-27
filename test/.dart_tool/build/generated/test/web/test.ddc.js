define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const test = Object.create(dart.library);
  const $text = dartx.text;
  const $onClick = dartx.onClick;
  const $_get = dartx._get;
  let MouseEventTovoid = () => (MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(test.reverseText, MouseEventTovoid());
    }
  });
  let C0;
  test.main = function main() {
    let t0;
    t0 = html.querySelector("#sample_text_id");
    t0[$text] = "Click me!";
    t0[$onClick].listen(C0 || CT.C0);
    t0;
  };
  test.reverseText = function reverseText(event) {
    let text = html.querySelector("#sample_text_id")[$text];
    let buffer = new core.StringBuffer.new();
    for (let i = text.length - 1; i >= 0; i = i - 1) {
      buffer.write(text[$_get](i));
    }
    html.querySelector("#sample_text_id")[$text] = buffer.toString();
  };
  dart.trackLibraries("web/test", {
    "org-dartlang-app:///web/test.dart": test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAKmC,SAFjC,mBAAc;IACR,YAAO;IACP,AAAQ;;EAChB;0CAE4B;AACtB,eAAO,AAAiC,mBAAnB;AACrB,iBAAa;AACjB,aAAS,IAAI,AAAK,AAAO,IAAR,UAAU,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAC,CAAA;AAChB,MAArB,AAAO,MAAD,OAAO,AAAI,IAAA,QAAC,CAAC;;AAEoC,IAAzD,AAAiC,mBAAnB,4BAA0B,AAAO,MAAD;EAChD","file":"test.ddc.js"}');
  // Exports:
  return {
    web__test: test
  };
});

//# sourceMappingURL=test.ddc.js.map
