//	Flashオブジェクトの埋め込み

function	init()
{
	gadgets.flash.embedFlash("http://sub0000498489.hmk-temp.com/test/hello_mixi/swf/HelloWorld.swf", document.getElementById("swf-here"), 9, {width:600, height:200});

	var	params =
	{
		width : 600,
		height : 200,
		id : "UserInfos",				//	JavaScriptからswfへアクセスする際のタグ名をセット
		allowScriptAccess : 'always'	//	swf -> JavaScriptへのアクセスを許可する
	};

	gadgets.flash.embedFlash("http://sub0000498489.hmk-temp.com/test/hello_mixi/swf/UserInfos.swf", document.getElementById("swf-userinfos"), 9, params);
}

gadgets.util.registerOnLoadHandler(init);

