package
{
	import	flash.system.Security;
	import	flash.external.ExternalInterface;
	
	public class MixiAPI
	{
		public function MixiAPI()
		{
			Security.allowDomain("*");
			
		}

		public	function	getProfile() : void
		{
			ExternalInterface.addCallback("getProfileCallback", getProfileCallback);
			ExternalInterface.call("getProfile");
			
		}

		private	function	getProfileCallback() : void
		{
			trace("プロファイルの取得完了");
		}
	
	}
}