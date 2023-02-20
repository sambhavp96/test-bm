<?php

function xmlToJson($url) {
    $xmlString = file_get_contents($url);
    $xml = simplexml_load_string($xmlString);
    $json = json_encode($xml);
    return $json;
}
$url = "http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml";
$json = xmlToJson($url);
echo $json;