package
{
	import flash.text.TextField;
	
	import mx.core.UIComponent;
	
	public class BaseUI extends UIComponent
	{
		public function BaseUI()
		{
			super();

			var	label:TextField = new TextField();

			label.text = "完了";
			addChild(label);
			
			init();
		}

		private	function	init() : void
		{
			var	api:MixiAPI = new MixiAPI();
			api.setUIComponent(this);
			api.getProfile();
			api.getPeople();
		}
	
	
	}
}