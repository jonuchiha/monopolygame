<div class="row spacer_big row_centered" style="padding:0px;">
    <?php
                for($i = 1; $i < 11 + 1; $i++) {
                    
                    echo '<div class="col col_bord tilecss" style="position: relative; background-color:'.$tiles[$i]->get_group().'" id="'.$tiles[$i]->get_id().'" >';
					if((!$tiles[$i]->get_cost() == NULL)) {
                        //If it s a property
                        
                        echo '<img class="tile" src="img/tiles/' . $tiles[$i]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Cost to Buy: £' . $tiles[$i]->get_cost() . ' </br>
						Rent 0 Houses: £' . $tiles[$i]->get_rent_due() . ' </br>
						Rent 1 Houses: £' . $tiles[$i]->get_rent_due_h1() . ' </br>
						Rent 2 Houses: £' . $tiles[$i]->get_rent_due_h2() . ' </br>
						Rent 3 Houses: £' . $tiles[$i]->get_rent_due_h3() . ' </br>
						Rent 4 Houses: £' . $tiles[$i]->get_rent_due_h4() . ' </br>
						Rent 1 Hotel: £' . $tiles[$i]->get_rent_due_h5() . ' </br>
						" title="' . $tiles[$i]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        echo '<p style="" class="tile_text_top">'. $tiles[$i]->get_name() .'</p>';
                        echo '<p style="" class="tile_text_bottom">£'. $tiles[$i]->get_cost() .'</p>'; 

					}
					else {
                        
                        //If its not a property
                        
						echo '<img class="tile" src="img/tiles/' . $tiles[$i]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Action: ' . $tiles[$i]->get_action() . ' </br>
						" title="' . $tiles[$i]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        $name = $tiles[$i]->get_name();
                        if(ctype_digit(substr($name, -1))) {
                            $name = substr_replace($name, "", -1);
                        }
                        if($name == "Go") {
                            $name = "";
                        } else if($name == "Jail/Just visiting") {
                            $name = "";
                        }      
                            echo '<p style="" class="tile_text_top">'. $name .'</p>';

                        
					}
                    echo '</div>';
                    
                }
                ?>
</div>

<?php
                $offset = 40;
                for($i = 0; $i < 9; $i++) {
                    
                    echo '<div class="row row-centered inner_board_col" style="padding:0px;">';
                    
                    
                    
                    echo '<div class="col col_bord tilecss" style="position: relative; background-color:'. $tiles[$i + $offset]->get_group().'" id="'. $tiles[$i + $offset]->get_id() .'" >';
					if((!$tiles[$i  + $offset]->get_cost() == NULL)) {
                        //If it s a property
                        
                        echo '<img class="tile" src="img/tiles/' . $tiles[$i  + $offset]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Cost to Buy: £' . $tiles[$i + $offset]->get_cost() . ' </br>
						Rent 0 Houses: £' . $tiles[$i + $offset]->get_rent_due() . ' </br>
						Rent 1 Houses: £' . $tiles[$i + $offset]->get_rent_due_h1() . ' </br>
						Rent 2 Houses: £' . $tiles[$i + $offset]->get_rent_due_h2() . ' </br>
						Rent 3 Houses: £' . $tiles[$i + $offset]->get_rent_due_h3() . ' </br>
						Rent 4 Houses: £' . $tiles[$i + $offset]->get_rent_due_h4() . ' </br>
						Rent 1 Hotel: £' . $tiles[$i + $offset]->get_rent_due_h5() . ' </br>
						" title="' . $tiles[$i + $offset]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        echo '<p style="" class="tile_text_top">'. $tiles[$i + $offset]->get_name() .'</p>';
                        echo '<p style="" class="tile_text_bottom">£'. $tiles[$i  + $offset]->get_cost() .'</p>'; 
                        
                        

					}
					else {
                        
                        //If its not a property
                        
						echo '<img class="tile" src="img/tiles/' . $tiles[$i + $offset]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Action: ' . $tiles[$i + $offset]->get_action() . ' </br>
						" title="' . $tiles[$i + $offset]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        $name = $tiles[$i + $offset]->get_name();
                        if(ctype_digit(substr($name, -1))) {
                            $name = substr_replace($name, "", -1);
                        }
                        
                        echo '<p style="" class="tile_text_top">'. $name .'</p>';
                        
					}
                    $offset = $offset - 2;
                    echo '</div>';
                    
                    if($i == 1) {
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col-3 inner_board_col" style="margin-left:10px; margin-right:10px;">';
                        echo '<img id="oppknockimg" src="img/oppknocksimg.jpg" width="100%">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        
                    } else if($i == 4) {



                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col-7 inner_board_col" style="margin-left:27.5px; margin-right:27.5px;">';
                        echo '<img src="img/propertytlogo.png" width="100%">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';

                    } else if($i == 7) {
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col-3 inner_board_col" style="margin-left:10px; margin-right:10px;">';
                        echo '<img id="popluckimg" src="img/potluckimg.jpg" width="100%">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        echo '<div class="col inner_board_col">';
                        echo '</div>'; 
                        echo '<div class="col inner_board_col">';
                        echo '</div>';
                        
                    } else {
                        for($p = 0; $p < 9; $p++) {
                            echo '<div class="col inner_board_col">';
                            echo '</div>';
                        }
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    echo '<div class="col col_bord tilecss" style="position: relative; background-color:'.$tiles[$i + 12]->get_group().'" id="'.$tiles[$i + 12]->get_id().'" >';
					if((!$tiles[$i + 12]->get_cost() == NULL)) {
                        //If it s a property
                        
                        echo '<img class="tile" src="img/tiles/' . $tiles[$i + 12]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Cost to Buy: £' . $tiles[$i + 12]->get_cost() . ' </br>
						Rent 0 Houses: £' . $tiles[$i + 12]->get_rent_due() . ' </br>
						Rent 1 Houses: £' . $tiles[$i + 12]->get_rent_due_h1() . ' </br>
						Rent 2 Houses: £' . $tiles[$i + 12]->get_rent_due_h2() . ' </br>
						Rent 3 Houses: £' . $tiles[$i + 12]->get_rent_due_h3() . ' </br>
						Rent 4 Houses: £' . $tiles[$i + 12]->get_rent_due_h4() . ' </br>
						Rent 1 Hotel: £' . $tiles[$i + 12]->get_rent_due_h5() . ' </br>
						" title="' . $tiles[$i + 12]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        echo '<p style="" class="tile_text_top">'. $tiles[$i + 12]->get_name() .'</p>';
                        echo '<p style="" class="tile_text_bottom">£'. $tiles[$i + 12]->get_cost() .'</p>'; 

					}
					else {
                        
                        //If its not a property
                        
						echo '<img class="tile" src="img/tiles/' . $tiles[$i + 12]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Action: ' . $tiles[$i + 12]->get_action() . ' </br>
						" title="' . $tiles[$i + 12]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        $name = $tiles[$i + 12]->get_name();
                        if(ctype_digit(substr($name, -1))) {
                            $name = substr_replace($name, "", -1);
                        }
                        
                        echo '<p style="" class="tile_text_top">'. $name .'</p>';
                        
					}
                    echo '</div>';
                    echo '</div>';
                }
            ?>

    <div class="row" style="padding:0px;">
        <?php
                for($i = 31; $i > 20; $i--) {
                    echo '<div class="col col_bord tilecss" style="position: relative; background-color:'.$tiles[$i]->get_group().'" id="'.$tiles[$i]->get_id().'" >';
					if((!$tiles[$i]->get_cost() == NULL)) {
                        //If it s a property
                        
                        echo '<img class="tile" src="img/tiles/' . $tiles[$i]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Cost to Buy: £' . $tiles[$i]->get_cost() . ' </br>
						Rent 0 Houses: £' . $tiles[$i]->get_rent_due() . ' </br>
						Rent 1 Houses: £' . $tiles[$i]->get_rent_due_h1() . ' </br>
						Rent 2 Houses: £' . $tiles[$i]->get_rent_due_h2() . ' </br>
						Rent 3 Houses: £' . $tiles[$i]->get_rent_due_h3() . ' </br>
						Rent 4 Houses: £' . $tiles[$i]->get_rent_due_h4() . ' </br>
						Rent 1 Hotel: £' . $tiles[$i]->get_rent_due_h5() . ' </br>
						" title="' . $tiles[$i]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        echo '<p style="" class="tile_text_top">'. $tiles[$i]->get_name() .'</p>';
                        echo '<p style="" class="tile_text_bottom">£'. $tiles[$i]->get_cost() .'</p>'; 

					}
					else {
                        
                        //If its not a property
                        
						echo '<img class="tile" src="img/tiles/' . $tiles[$i]->get_id() . '.jpg" width="100%" tabindex="0" data-trigger="focus" data-container="body" data-placement="bottom" data-toggle="popover" data-content="
						Action: ' . $tiles[$i]->get_action() . ' </br>
						" title="' . $tiles[$i]->get_name() . '" 
						style="text-align:center; outline:none;">';
                        
                        $name = $tiles[$i]->get_name();
                        if(ctype_digit(substr($name, -1))) {
                            $name = substr_replace($name, "", -1);
                        }
                        
                        if($name == "Free Parking") {
                            $name = "";
                        } else if($name == "Go to Jail") {
                            $name = "";
                        }   
                        
                        echo '<p style="" class="tile_text_top">'. $name .'</p>';
                        
					}
                    echo '</div>';
                }
                ?>
    </div>