package
{
	import flash.events.MouseEvent;
	import flash.external.ExternalInterface;
	import flash.system.Security;
	import flash.text.*;
	
	import flashx.textLayout.tlf_internal;
	
	import mx.core.UIComponent;
	
	import spark.components.Button;

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
			label.autoSize = TextFieldAutoSize.LEFT;
			label.y = 24;
			ui.addChild(label);

		}

		private	function	getProfileCallback(viewer_name:String, error_msg:String) : void
		{
			trace("プロファイルの取得完了");

			var	label:TextField = new TextField();
			label.text = "JavaScriptからのコールバック完了";
			label.autoSize = TextFieldAutoSize.LEFT;
			label.y = 48;

			if( error_msg )
			{
				label.text = "[ERROR]:<" + error_msg + ">";
			}
			else
			{
				label.text = "[viewer name]:<" + viewer_name + ">";
			}
			ui.addChild(label);
		}
	

		public	function	getPeople() : void
		{
			ExternalInterface.addCallback("getPeopleCallback", getPeopleCallback);
			ExternalInterface.call("getPeople");
			
			var	label:TextField = new TextField();
			label.text = "フレンド情報取得開始";
			label.autoSize = TextFieldAutoSize.LEFT;
			label.y = 72;
			ui.addChild(label);
			
		}

		
		
		private	function	getPeopleCallback(id_list:Array, name_list:Array, error_msg:String) : void
		{
			var	label:TextField = new TextField();
			label.text = "JavaScriptからのコールバック完了";
			label.autoSize = TextFieldAutoSize.LEFT;
			label.multiline = true;
			label.y = 96;
			
			if( error_msg )
			{
				label.text = error_msg;
			}
			else
			{
				var	text:String;
				text = "max[" + id_list.length + "]人\n";
				for(var i:uint=0; i<id_list.length; i++)
				{
					var	id:String = id_list[i];
					var	name:String = name_list[i];
					text += "["+id+"]"+"<"+name+">\n";
				}
				label.text = text;
			}
			ui.addChild(label);
		}
	

		public	function	addInviteButton() : void
		{
			var	button:Button = new Button();
			button.label = "招待";
			button.width = 80;
			button.height = 20;
			button.x = 200;
			button.y = 0;
		//	button.addEventListener(ComponentEvent.BUTTON_DOWN, inviteHandler);
			button.addEventListener(MouseEvent.CLICK, inviteHandler);
			this.ui.addChild(button);
		}
		
		
		public	function	inviteHandler(event:MouseEvent) : void
		{
			trace("招待ボタンが押されました");

			ExternalInterface.addCallback("inviteCallback", inviteCallback);
			ExternalInterface.call("invite");
		}

		
		private	function	inviteCallback() : void
		{
		}

		
	}
}