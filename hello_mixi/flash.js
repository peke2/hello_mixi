//	Flashオブジェクトの埋め込み

function	init()
{
	var	params =
	{
		width : 600,
		height : 200,
		allowScriptAccess : 'always'
	};

	gadgets.flash.embedFlash("http://sub0000498489.hmk-temp.com/test/hello_mixi/swf/HelloWorld.swf", document.getElementById("swf-here"), 9, {width:600, height:200});

	gadgets.flash.embedFlash("http://sub0000498489.hmk-temp.com/test/hello_mixi/swf/UserInfos.swf", document.getElementById("swf-userinfos"), 9, params);
}

gadgets.util.registerOnLoadHandler(init);

