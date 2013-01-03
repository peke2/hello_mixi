function init() {
  var req = opensocial.newDataRequest();
  req.add(req.newFetchPersonRequest(opensocial.IdSpec.PersonId.VIEWER), "viewer");
  req.send(function(data) {
    var viewer = data.get("viewer").getData();
    var name = viewer.getDisplayName();
    //document.getElementById("target").value = name;
	var element = document.getElementById("disp");
	var	text = element.innerHTML;
	element.innerHTML = "<font size='6'>Hello "+ name + "!</font>";
  });
}
gadgets.util.registerOnLoadHandler(init);


//	mixi APIのテスト用
function	getProfile()
{
	var	element = document.getElementById("status");
	var	text = element.innerHTML;
//	element.innerHTML = document["UserInfos"];
	element.innerHTML = "コールバック完了！";

	document["UserInfos"].getProfileCallback();
}

