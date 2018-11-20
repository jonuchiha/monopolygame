<?php

class tiles {
    var $ownedBy;
    var $position;
    #Real name of tile
    var $name;
    #Minimalised version of name e.g. Pot Luck --> potluck
    var $id;
    #E.g. utilitiy or color
    var $group;
    #E.g. collect 200$
    var $action;
    var $can_buy;
    var $cost;
    var $rent_due;
    var $rent_due_h1;
    var $rent_due_h2;
    var $rent_due_h3;
    var $rent_due_h4;
    var $rent_due_h5;
	var $colour_set_num;
	var $houses = 0;
    var $hotels = 0;
	var $house_cost = 50;
	var $hotel_cost = 80;
	
    function __construct($position, $name, $id, $group, $action, $can_buy, $cost, $rent_due, $rent_due_h1, $rent_due_h2, $rent_due_h3, $rent_due_h4, $rent_due_h5, $colour_set_num) {
        $ownerBy = -1;
        $this->position = $position;
        $this->name = $name;
		$this->colour_set_num = $colour_set_num;
        
        
        $new_id = strtolower($id);
        $new_id = str_replace(' ', '', $new_id);
        $new_id = str_replace('/', '', $new_id);
        
        
        $this->id = $new_id;
        $this->group = $group;
        $this->action = $action;
        
        if($can_buy == "Yes") {
            $this->can_buy = TRUE;
        } else {
            $this->can_buy = FALSE;    
        }
        
        #$this->can_buy = $can_buy;
        $this->cost = $cost;
        $this->rent_due = $rent_due;
        $this->rent_due_h1 = $rent_due_h1;
        $this->rent_due_h2 = $rent_due_h2;
        $this->rent_due_h3 = $rent_due_h3;
        $this->rent_due_h4 = $rent_due_h4;
        $this->rent_due_h5 = $rent_due_h5;
        
        if($group == "Station") {
            $this->group = "White";
            $this->rent_due = 100;
        }
        
        
        if($group == "Utilities") {
            $this->group = "White";
            $this->rent_due = 50;
        }
        
        if($group == "") {
            $this->group = "White";
        }
        
        
        
    }
	function get_houses(){
		return $this->houses;
	}
	function get_hotels(){
		return $this->hotels;
	}
	
	function get_house_cost(){
		return $this->house_cost;
	}
	function get_hotel_cost(){
		return $this->hotel_cost;
	}
	
	
	
    function get_position() {
        return $this->position;
    }
    function get_name() {
        return $this->name;
    }
    function get_id() {
        return $this->id;
    }
    function get_group() {
        return $this->group;
    }
    function get_action() {
        return $this->action;
    }
    function get_can_buy() {
        return $this->can_buy;
    }
    function get_cost() {
        return $this->cost;
    }
    function get_rent_due() {
        return $this->rent_due;
    }
    function get_rent_due_h1() {
        return $this->rent_due_h1;
    }
    function get_rent_due_h2() {
        return $this->rent_due_h2;
    }
    function get_rent_due_h3() {
        return $this->rent_due_h3;
    }
    function get_rent_due_h4() {
        return $this->rent_due_h4;
    }
    function get_rent_due_h5() {
        return $this->rent_due_h5;
    }
	
	function get_colour_set_num() {
        return $this->colour_set_num;
    }
}

?>