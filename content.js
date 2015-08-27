var myList = [];

var captureUrl = function(){
  url = window.location.toString();
  return url;
};
var addToList = function(url, list){
    list.unshift(url);
    return list;
};
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    if( request.message === "clicked_browser_action"){
        caughtUrl = captureUrl();
        addToList(caughtUrl, myList);
      }
      console.log(myList);
      console.log(caughtUrl);
        // chrome.runtime.sendMessage({"message":"open_new_tab","url": caughtUrl });
  });
