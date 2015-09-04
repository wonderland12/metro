<?php

// dates

$data = array(
	'clinic_id' => isset($_POST['item_id']) ? $_POST['item_id'] : null,
	'date'      => isset($_POST['date']) ? $_POST['date'] : null,
	'title'     => isset($_POST['title']) ? $_POST['title'] : null,
	'review'     => isset($_POST['review']) ? $_POST['review'] : null,
	
	'behandlung'     => isset($_POST['behandlung']) && $_POST['behandlung'] != 0 ? 6 - $_POST['behandlung'] : null,
	'aufklarung'     => isset($_POST['aufklarung']) && $_POST['aufklarung'] != 0 ? 6 - $_POST['aufklarung'] : null,
	'vertrauensverhaltnis'     => isset($_POST['vertrauensverhaltnis']) && $_POST['vertrauensverhaltnis'] != 0 ? 6 - $_POST['vertrauensverhaltnis'] : null,
	'freundlichkeit'     => isset($_POST['freundlichkeit']) && $_POST['freundlichkeit'] != 0 ? 6 - $_POST['freundlichkeit'] : null,
	'pflegepersonal'     => isset($_POST['pflegepersonal']) && $_POST['pflegepersonal'] != 0 ? 6 - $_POST['pflegepersonal'] : null,
	'wartezeit_neuaufnahme'     => isset($_POST['wartezeit_neuaufnahme']) && $_POST['wartezeit_neuaufnahme'] != 0 ? 6 - $_POST['wartezeit_neuaufnahme'] : null,
	'essen'     => isset($_POST['essen']) && $_POST['essen'] != 0 ? 6 - $_POST['essen'] : null,
	'hygiene'     => isset($_POST['hygiene']) && $_POST['hygiene'] != 0 ? 6 - $_POST['hygiene'] : null,
	'besuchszeiten'     => isset($_POST['besuchszeiten']) && $_POST['besuchszeiten'] != 0 ? 6 - $_POST['besuchszeiten'] : null,
	'atmosphare'     => isset($_POST['atmosphare']) && $_POST['atmosphare'] != 0 ? 6 - $_POST['atmosphare'] : null,
	'einkaufsmoglichkeiten'     => isset($_POST['einkaufsmoglichkeiten']) && $_POST['einkaufsmoglichkeiten'] != 0 ? 6 - $_POST['einkaufsmoglichkeiten'] : null,
	'kinderfreundlichkeit'     => isset($_POST['kinderfreundlichkeit']) && $_POST['kinderfreundlichkeit'] != 0 ? 6 - $_POST['kinderfreundlichkeit'] : null,
	'unterhaltungsmoglichkeiten'     => isset($_POST['unterhaltungsmoglichkeiten']) && $_POST['unterhaltungsmoglichkeiten'] != 0 ? 6 - $_POST['unterhaltungsmoglichkeiten'] : null,
	'innenbereich'     => isset($_POST['innenbereich']) && $_POST['innenbereich'] != 0 ? 6 - $_POST['innenbereich'] : null,
	'parkmoglichkeiten'     => isset($_POST['parkmoglichkeiten']) && $_POST['parkmoglichkeiten'] != 0 ? 6 - $_POST['parkmoglichkeiten'] : null,
	'offentliche_erreichbarkeit'     => isset($_POST['offentliche_erreichbarkeit']) && $_POST['offentliche_erreichbarkeit'] != 0 ? 6 - $_POST['offentliche_erreichbarkeit'] : null,
	'besuchszeiten' => isset($_POST['besuchszeiten']) && $_POST['besuchszeiten'] != 0 ? 6 - $_POST['besuchszeiten'] : null,
	'klinik_cafeteria' => isset($_POST['klinik_cafeteria']) && $_POST['klinik_cafeteria'] != 0 ? 6 - $_POST['klinik_cafeteria'] : null,
	'aubenbereich' => isset($_POST['aubenbereich']) && $_POST['aubenbereich'] != 0 ? 6 - $_POST['aubenbereich'] : null,
	'parkmoglichkeiten' => isset($_POST['parkmoglichkeiten']) && $_POST['parkmoglichkeiten'] != 0 ? 6 - $_POST['parkmoglichkeiten'] : null,
	'zimmerausstattung' => isset($_POST['zimmerausstattung']) && $_POST['zimmerausstattung'] != 0 ? 6 - $_POST['zimmerausstattung'] : null,
	
	'gender'     => isset($_POST['gender']) ? $_POST['gender'] : null,
	'age'       => isset($_POST['age']) ? $_POST['age'] : null,
	'month'     => isset($_POST['month']) ? $_POST['month'] : null,
	'year'     => isset($_POST['year']) ? $_POST['year'] : null,
	'reason'     => isset($_POST['reason']) ? $_POST['reason'] : null,
	'hilfreich'     => isset($_POST['reccomend']) ? $_POST['reccomend'] : null,
	'insuring' => isset($_POST['insuring']) ? $_POST['insuring'] : null,
	'stimme' => isset($_POST['interested']) ? $_POST['interested'] : null,
	
);

$ratings = array(
	'behandlung'     => isset($_POST['behandlung']) && $_POST['behandlung'] != 0 ? 6 - $_POST['behandlung'] : null,
	'aufklarung'     => isset($_POST['aufklarung']) && $_POST['aufklarung'] != 0 ? 6 - $_POST['aufklarung'] : null,
	'vertrauensverhaltnis'     => isset($_POST['vertrauensverhaltnis']) && $_POST['vertrauensverhaltnis'] != 0 ? 6 - $_POST['vertrauensverhaltnis'] : null,
	'freundlichkeit'     => isset($_POST['freundlichkeit']) && $_POST['freundlichkeit'] != 0 ? 6 - $_POST['freundlichkeit'] : null,
	'pflegepersonal'     => isset($_POST['pflegepersonal']) && $_POST['pflegepersonal'] != 0 ? 6 - $_POST['pflegepersonal'] : null,
	'wartezeit_neuaufnahme'     => isset($_POST['wartezeit_neuaufnahme']) && $_POST['wartezeit_neuaufnahme'] != 0 ? 6 - $_POST['wartezeit_neuaufnahme'] : null,
	'essen'     => isset($_POST['essen']) && $_POST['essen'] != 0 ? 6 - $_POST['essen'] : null,
	'hygiene'     => isset($_POST['hygiene']) && $_POST['hygiene'] != 0 ? 6 - $_POST['hygiene'] : null,
	'besuchszeiten'     => isset($_POST['besuchszeiten']) && $_POST['besuchszeiten'] != 0 ? 6 - $_POST['besuchszeiten'] : null,
	'atmosphare'     => isset($_POST['atmosphare']) && $_POST['atmosphare'] != 0 ? 6 - $_POST['atmosphare'] : null,
	'einkaufsmoglichkeiten'     => isset($_POST['einkaufsmoglichkeiten']) && $_POST['einkaufsmoglichkeiten'] != 0 ? 6 - $_POST['einkaufsmoglichkeiten'] : null,
	'kinderfreundlichkeit'     => isset($_POST['kinderfreundlichkeit']) && $_POST['kinderfreundlichkeit'] != 0 ? 6 - $_POST['kinderfreundlichkeit'] : null,
	'unterhaltungsmoglichkeiten'     => isset($_POST['unterhaltungsmoglichkeiten']) && $_POST['unterhaltungsmoglichkeiten'] != 0 ? 6 - $_POST['unterhaltungsmoglichkeiten'] : null,
	'innenbereich'     => isset($_POST['innenbereich']) && $_POST['innenbereich'] != 0 ? 6 - $_POST['innenbereich'] : null,
	'parkmoglichkeiten'     => isset($_POST['parkmoglichkeiten']) && $_POST['parkmoglichkeiten'] != 0 ? 6 - $_POST['parkmoglichkeiten'] : null,
	'offentliche_erreichbarkeit'     => isset($_POST['offentliche_erreichbarkeit']) && $_POST['offentliche_erreichbarkeit'] != 0 ? 6 - $_POST['offentliche_erreichbarkeit'] : null,
	'klinik_cafeteria' => isset($_POST['klinik_cafeteria']) && $_POST['klinik_cafeteria'] != 0 ? 6 - $_POST['klinik_cafeteria'] : null,
	'aubenbereich' => isset($_POST['aubenbereich']) && $_POST['aubenbereich'] != 0 ? 6 - $_POST['aubenbereich'] : null,
	'zimmerausstattung' => isset($_POST['zimmerausstattung']) && $_POST['zimmerausstattung'] != 0 ? 6 - $_POST['zimmerausstattung'] : null,
);

$count = 0;
$rating = 0;

$notes = array(
	'note1' => 0,
	'note2' => 0,
	'note3' => 0,
	'note4' => 0,
	'note5' => 0,
	'note6' => 0,
);

foreach($ratings as $r)
{
	if(!empty($r))
	{
		$notes['note'.$r]++;
		
		$count++;
		$rating += $r;
	} else {
		$notes['note6']++;
	}
}
$rating = $rating/$count;
$data['rating'] = $rating;


$res = 'INSERT INTO `clinics_reviews` SET';

foreach($data as $k=>$v){
	if(!empty($v))
		$res .= '`'.$k.'` = \''.$v.'\',';
}

$res = substr($res, 0, -1);




foreach($data as $k=>$v){
	if(!empty($v))
		$res .= '`'.$k.'` = \''.$v.'\',';
}

//mysql_query($res);

$res = mysql_query("SELECT behandlung,aufklarung,vertrauensverhaltnis,
freundlichkeit,pflegepersonal,wartezeit_neuaufnahme,essen,
hygiene,besuchszeiten,atmosphare,zimmerausstattung,klinik_cafeteria,einkaufsmoglichkeiten,
kinderfreundlichkeit,unterhaltungsmoglichkeiten,innenbereich,aubenbereich,
parkmoglichkeiten,offentliche_erreichbarkeit FROM `clinics_reviews` WHERE `clinic_id` = ".(int)$data['clinic_id']);

$reviews_fields = array();
$fields_rating_sum = array(
	'behandlung'     => 0,
	'aufklarung'     => 0,
	'vertrauensverhaltnis'  =>   0,
	'freundlichkeit'     => 0,
	'pflegepersonal'     => 0,
	'wartezeit_neuaufnahme'     => 0,
	'essen'     => 0,
	'hygiene'     => 0,
	'besuchszeiten'     => 0,
	'atmosphare'     => 0,
	'einkaufsmoglichkeiten'     => 0,
	'kinderfreundlichkeit'     => 0,
	'unterhaltungsmoglichkeiten'     => 0,
	'innenbereich'     => 0,
	'parkmoglichkeiten'     => 0,
	'offentliche_erreichbarkeit'     => 0,
	'klinik_cafeteria' => 0,
	'aubenbereich' => 0,
	'zimmerausstattung' => 0,
);
$fields_rating_count = array(
	'behandlung'     => 0,
	'aufklarung'     => 0,
	'vertrauensverhaltnis'  =>   0,
	'freundlichkeit'     => 0,
	'pflegepersonal'     => 0,
	'wartezeit_neuaufnahme'     => 0,
	'essen'     => 0,
	'hygiene'     => 0,
	'besuchszeiten'     => 0,
	'atmosphare'     => 0,
	'einkaufsmoglichkeiten'     => 0,
	'kinderfreundlichkeit'     => 0,
	'unterhaltungsmoglichkeiten'     => 0,
	'innenbereich'     => 0,
	'parkmoglichkeiten'     => 0,
	'offentliche_erreichbarkeit'     => 0,
	'klinik_cafeteria' => 0,
	'aubenbereich' => 0,
	'zimmerausstattung' => 0,
);

$fields_rating_result = array(
	'behandlung'     => 0,
	'aufklarung'     => 0,
	'vertrauensverhaltnis'  =>   0,
	'freundlichkeit'     => 0,
	'pflegepersonal'     => 0,
	'wartezeit_neuaufnahme'     => 0,
	'essen'     => 0,
	'hygiene'     => 0,
	'besuchszeiten'     => 0,
	'atmosphare'     => 0,
	'einkaufsmoglichkeiten'     => 0,
	'kinderfreundlichkeit'     => 0,
	'unterhaltungsmoglichkeiten'     => 0,
	'innenbereich'     => 0,
	'parkmoglichkeiten'     => 0,
	'offentliche_erreichbarkeit'     => 0,
	'klinik_cafeteria' => 0,
	'aubenbereich' => 0,
	'zimmerausstattung' => 0,
);

$rating_all = 0;
$rating_count = 0;

while($row = mysql_fetch_assoc($res))
{
	$reviews_fields[] = $row;
}

foreach($reviews_fields as $reviews_field)
{
	foreach($reviews_field as $k=>$field)
	{
		if(!empty($field))
		{
			$fields_rating_sum[$k] += $field;
			$rating_all += $field;
			$fields_rating_count[$k]++;
			$rating_count++;
		}
	}
}

foreach($fields_rating_sum as $k=>$field)
{
	$fields_rating_result[$k] = $field/$fields_rating_count[$k];
}

$rating = $rating_all/$rating_count;


$summary = array(

	'reviews_total' => $itemReviewsSummary['reviews_total'] + 1,
	'note1' => $itemReviewsSummary['note1'] + $notes['note1'],
	'note2' => $itemReviewsSummary['note2'] + $notes['note2'],
	'note3' => $itemReviewsSummary['note3'] + $notes['note3'],
	'note4' => $itemReviewsSummary['note4'] + $notes['note4'],
	'note5' => $itemReviewsSummary['note5'] + $notes['note5'],
	'note6' => $itemReviewsSummary['note6'] + $notes['note6'],
	
	'wartezeit_neuaufnahme_count' => $itemReviewsSummary['wartezeit_neuaufnahme_count'] + $data['wartezeit_neuaufnahme'],
	'zimmerausstattung_count' => $itemReviewsSummary['zimmerausstattung_count'] + $data['zimmerausstattung'],
	'essen_count' => $itemReviewsSummary['essen_count'] + $data['essen'],
	'higyene_count' => $itemReviewsSummary['higyene_count'] + $data['higyene'],
	'besuchszeiten_count' => $itemReviewsSummary['besuchszeiten_count'] + $data['besuchszeiten'],
	'atmosphare_count' => $itemReviewsSummary['atmosphare_count'] + $data['atmosphare'],
	'klinik_cafeteria_count' => $itemReviewsSummary['klinik_cafeteria_count'] + $data['klinik_cafeteria'],
	'einkaufsmoglichkeiten_count' => $itemReviewsSummary['einkaufsmoglichkeiten_count'] + $data['einkaufsmoglichkeiten'],
	'kinderfreundlichkeit_count' => $itemReviewsSummary['kinderfreundlichkeit_count'] + $data['kinderfreundlichkeit'],
	'unterhaltungsmoglichkeiten_count' => $itemReviewsSummary['unterhaltungsmoglichkeiten_count'] + $data['unterhaltungsmoglichkeiten'],
	'innenbereich_count' => $itemReviewsSummary['innenbereich_count'] + $data['innenbereich'],
	'aubenbereich_count' => $itemReviewsSummary['aubenbereich_count'] + $data['aubenbereich'],
	'parkmoglichkeiten_count' => $itemReviewsSummary['parkmoglichkeiten_count'] + $data['parkmoglichkeiten'],
	'offentliche_erreichbarkeit_count' => $itemReviewsSummary['offentliche_erreichbarkeit_count'] + $data['offentliche_erreichbarkeit'],
	
	'behandlung'     => $fields_rating_result['behandlung'],
	'aufklarung'     => $fields_rating_result['aufklarung'],
	'vertrauensverhaltnis'  =>   $fields_rating_result['vertrauensverhaltnis'],
	'freundlichkeit'     => $fields_rating_result['freundlichkeit'],
	'pflegepersonal'     => $fields_rating_result['pflegepersonal'],
	'wartezeit_neuaufnahme'     => $fields_rating_result['wartezeit_neuaufnahme'],
	'essen'     => $fields_rating_result['essen'],
	'hygiene'     => $fields_rating_result['hygiene'],
	'besuchszeiten'     => $fields_rating_result['besuchszeiten'],
	'atmosphare'     => $fields_rating_result['atmosphare'],
	'einkaufsmoglichkeiten'     => $fields_rating_result['einkaufsmoglichkeiten'],
	'kinderfreundlichkeit'     => $fields_rating_result['kinderfreundlichkeit'],
	'unterhaltungsmoglichkeiten'     => $fields_rating_result['unterhaltungsmoglichkeiten'],
	'innenbereich'     => $fields_rating_result['innenbereich'],
	'parkmoglichkeiten'     => $fields_rating_result['parkmoglichkeiten'],
	'offentliche_erreichbarkeit'     => $fields_rating_result['offentliche_erreichbarkeit'],
	'klinik_cafeteria' => $fields_rating_result['klinik_cafeteria'],
	'aubenbereich' => $fields_rating_result['aubenbereich'],
	
	'rating' => $rating,
);

$sql = "UPDATE `clinics_reviews_summary` SET";

foreach($summary as $k=>$v){
	if(!empty($v))
		$sql .= '`'.$k.'` = \''.$v.'\',';
}

$sql .= ' WHERE 	clinic_id = '.(int)$data['clinic_id'];
echo $sql;
exit;

header( 'Location: '.$item['AddReviewLink'].'?success', true, 303 );

