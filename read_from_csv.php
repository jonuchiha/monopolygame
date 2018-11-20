<?php

$csv = array();
$tiles = array();


$row = 0;
if (($handle = fopen("tiles.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        $row++;
        for ($c=0; $c < $num; $c++) {
            #echo "field" . $data[$c] . "<br />\n";
        }
        $csv[$row] = $data;
    }
    fclose($handle);
}

for($i = 0; $i < sizeof($csv) + 1; $i++) {
    
    $to_push = new tiles($csv[$i][0], $csv[$i][1], $csv[$i][1], $csv[$i][3], $csv[$i][4], $csv[$i][5], $csv[$i][7], $csv[$i][8], $csv[$i][10], $csv[$i][11], $csv[$i][12], $csv[$i][13], $csv[$i][14], $csv[$i][15]);
    array_push($tiles, $to_push);
}
/*for($i = 0; $i < sizeof($csv) + 1; $i++) {
    echo $tiles[$i]->get_name() . " ";
    echo $tiles[$i]->get_id() . " "; 
    echo $tiles[$i]->get_group() . " ";
    echo $tiles[$i]->get_can_buy() . " ";
    echo "<br>";
} */
#print_r($tiles);
?>