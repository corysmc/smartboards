// import common code
@import "common.js"

var onRun = function(context) {
  var shouldRename = true;
  align(context, shouldRename);
  var doc = context.document;
  [doc showMessage: 'Smartboards: Artboards aligned and renamed.'];
};
