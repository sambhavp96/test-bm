<?php

function filterByPrice($items, $threshold) {
    $filteredItems = array_filter($items, function($item) use ($threshold) {
        return $item['price'] >= $threshold;
    });
    return $filteredItems;
}


function calculateTotalPrice($items) {
    $total = array_reduce($items, function($accumulator, $item) {
        return $accumulator + $item['price'];
    }, 0);
    return $total;
}


// Examples

$items = [
    ['id' => 1, 'price' => 10.99],
    ['id' => 2, 'price' => 20.99],
    ['id' => 3, 'price' => 5.99],
    ['id' => 4, 'price' => 15.99],
];
$threshold = 10.0;
$filteredItems = filterByPrice($items, $threshold);

$totalPrice = calculateTotalPrice($filteredItems);
