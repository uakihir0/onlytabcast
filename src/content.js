/**
 * src に gstatic を持つ script タグが追加されないように変更
 * (本質的にはこの対応は不要)
 *
 * Change src so that script tags with gstatic are not added to src
 * (Essentially, this action is unnecessary.)
 */
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      if (
        mutation.addedNodes[i].tagName === "SCRIPT" &&
        mutation.addedNodes[i].src.indexOf("gstatic") !== -1
      ) {
        mutation.addedNodes[i].parentNode.removeChild(mutation.addedNodes[i]);
      }
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
