chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var activeTab = tabs[0];
    if (tab.incognito){
      alert("Can't save while incognito.");
    }else{
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    }
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
})
// chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
//   if( request.message === "open_new_tab"){
//     chrome.tabs.create({"url": request.url});
//   }
// });
