//	Flashオブジェクトの埋め込み

var	params =
{
	width : 400,
	height : 240,
	allowScriptAccess : 'always'
};

gadgets.flash.embedFlash("http://sub0000498489.hmk-temp.com/test/hello_mixi/swf/HelloWorld.swf", document.getElementById("swf-here"), 9, params);

gadgets.flash.embedFlash("http://sub0000498489.hmk-temp.com/test/hello_mixi/swf/UserInfos.swf", document.getElementById("swf-userinfos"), 9, params);


