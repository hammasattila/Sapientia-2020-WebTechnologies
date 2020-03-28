function openSample(sampleCodeHost, section, title, htmlCode, cssCode, jsCode) {
  var cssCleanCode = cssCode.replace(/\xA0/g, " ");
  mdn.analytics.trackEvent({
    category: "Samples",
    action: "open-" + sampleCodeHost,
    label: section
  });
  if (win.ga) {
    ga("set", "dimension8", "Yes");
  }
  if (sampleCodeHost === "jsfiddle") {
    openJSFiddle(title, htmlCode, cssCleanCode, jsCode);
  } else if (sampleCodeHost === "codepen") {
    openCodepen(title, htmlCode, cssCleanCode, jsCode);
  }
}

function openCodepen(title, htmlCode, cssCode, jsCode) {
  var $form = $(
    '<form method="post" action="https://codepen.io/pen/define" class="hidden" target="_blank">' +
      '<input type="hidden" name="data">' +
      analytics +
      '<input type="submit" />' +
      "</form>"
  ).appendTo(doc.body);
  var data = { title: title, html: plug + htmlCode, css: cssCode, js: jsCode };
  $form.find("input[name=data]").val(JSON.stringify(data));
  $form.get(0).submit();
}
