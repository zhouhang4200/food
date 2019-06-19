<?php

return [
    // 上菜状态
    'dish_status' => [
        [
            'id' => 0,
            'name' => '未上菜'
        ],
        [
            'id' => 1,
            'name' => '已上菜'
        ],
    ],

    // 订单支付渠道
    'order_channels' => [
        [
            'id' => 1,
            'name' => '微信'
        ],
        [
            'id' => 2,
            'name' => '支付宝'
        ],
    ],
    // 订单支付状态
    'order_pay_status' => [
        [
            'id' => 0,
            'name' => '未支付'
        ],
        [
            'id' => 1,
            'name' => '已支付'
        ],
    ],
];
