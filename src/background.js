/**
 * chrome で src に gstatic を持つ script タグが実行されるのを阻止
 * (この JavaScript が読み込まれない場合、ChromeCast のアプリが起動しない)
 *
 * Prevent chrome from executing script tags with gstatic in src
 * (If this JavaScript is not loaded, the ChromeCast app will not launch)
 */
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  {
    urls: ["*://*.gstatic.com/*"],
  },
  ["blocking"]
);
