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

	//	ユーザーのプロフィールを取得
	var req = opensocial.newDataRequest();
	req.add(req.newFetchPersonRequest(opensocial.IdSpec.PersonId.VIEWER), "viewer");
	req.send(
		function(data)
		{
			var	error_msg;
			var	viewer_name;
			if( data.hadError() )
			{
				error_msg = data.getErrorMessage();
				//	エラー発生時の処理
			}
			else
			{
				//	取得結果に対する処理
				var	viewer = data.get("viewer").getData();
				viewer_name = viewer.getDisplayName();
			}
			document["UserInfos"].getProfileCallback(viewer_name, error_msg);
		}
	);
}

//	フレンド情報の取得
function	getPeople()
{
	var params = {};
	params[opensocial.IdSpec.Field.USER_ID] = opensocial.IdSpec.PersonId.VIEWER;
	params[opensocial.IdSpec.Field.GROUP_ID] = "FRIENDS";
	var idSpec = opensocial.newIdSpec(params);
	var req = opensocial.newDataRequest();
	req.add(req.newFetchPeopleRequest(idSpec), "friends");
	req.send(function(data) {
		var	msg;
		var	id_list = [];
		var	name_list = [];

		if( data.hadError() )
	    {
			msg = data.getErrorMessage();
			// エラー発生時の処理
		} else {
	        // 取得結果に対する処理

			var	friends = data.get("friends").getData();

			friends.each( function(friend){
				var	id = friend.getId();
				var	nickname = friend.getDisplayName();
				var	thumbnailUrl = friend.getField(opensocial.Person.Field.THUMBNAIL_URL);
				id_list.push(id);
				name_list.push(nickname);
			});
	    }
		document["UserInfos"].getPeopleCallback(id_list, name_list, msg);
	});
}

