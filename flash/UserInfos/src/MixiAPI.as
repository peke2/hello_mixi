package
{
	import flash.external.ExternalInterface;
	import flash.system.Security;
	import flash.text.TextField;
	
	import mx.core.UIComponent;

	public class MixiAPI
	{
		private	var	ui : UIComponent;

		public function MixiAPI()
		{
			Security.allowDomain("*");
			
		}

		public	function	setUIComponent(ui:UIComponent):void
		{
			this.ui = ui;
		}
		
		
		public	function	getProfile() : void
		{
			ExternalInterface.addCallback("getProfileCallback", getProfileCallback);
			ExternalInterface.call("getProfile");

			var	label:TextField = new TextField();
			label.text = "プロフィール取得開始";
			label.y = 24;
			ui.addChild(label);

		}

		private	function	getProfileCallback() : void
		{
			trace("プロファイルの取得完了");

			var	label:TextField = new TextField();
			label.text = "JavaScriptからのコールバック完了";
			label.y = 48;
			ui.addChild(label);
		}
	
	}
}