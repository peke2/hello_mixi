package
{
	public class Greeter
	{
		public function Greeter()
		{
		}

		public	static	var	validNames:Array = ["Sammy", "Frank", "Dean" ];
		
		
		public	function	sayHello(userName:String="") : String
		{
			var	greeting:String;
			
			if( userName == "" )
			{
				greeting = "名前を入力してください";
			}
			else if( validName(userName) )
			{
				greeting = "Hello!";
			}
			else
			{
				greeting ="名前がリストにありません";
			}
			return	greeting;
		}
	

		public	function	validName(inputName:String="") : Boolean
		{
			if( validNames.indexOf(inputName) > -1 )
			{
				return	true;
			}
			else
			{
				return	false;
			}
		}
	
	}
}