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


//	mixi API�̃e�X�g�p
function	getProfile()
{
	document["UserInfos"].getProfileCallback();
}

