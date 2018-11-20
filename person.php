<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php 
 echo '<p>Hello World</p>'; 
 print "Hello world!"; 
 echo '<script type="text/javascript">alert("hello!");</script>';
 var $name;
 var $token;
 var $location_on_board;
 var $money;
 var $property = array();
 var $special_cards = array();
 var $passed_go;
 var $id;
 class person {
	function __construct($name,$token,$id) {
		$passed_go = false;
		$money = 0;		
	}
	public function increase_balance($amount){
        $this->amount = $amount; 
        return $money + $this;
    }
	public function increase_balance($amount){
        $this->amount = $amount; 
        return $money - $this;
    }
	function get_name() {
       return $this->name;
    }
	function get_token() {
       return $this->token;
    }
	function get_location_on_board() {
       return $this->$location_on_board;
    }
	function get_money() {
       return $this->money;
    }
	function get_property() {
       return $this->property;
    }
	function get_special_cards() {
       return $this->special_cards;
    }
	function get_passed_go() {
       return $this->passed_go;
    }
	function get_id() {
       return $this->id;
    }
 }
 ?> 
 </body>

</html>