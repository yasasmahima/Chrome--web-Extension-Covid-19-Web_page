var button = document.getElementById("btn1");
button.addEventListener("click", function(){
    chrome.tabs.create({url:"https://covid-19-f0d95.web.app/index.html"});
});