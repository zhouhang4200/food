<?php

return [
    // 上菜状态
    'customer' => [
        'status' => [
            [
                'id' => 0,
                'name' => '未上菜'
            ],
            [
                'id' => 1,
                'name' => '已上菜'
            ],
        ],
    ],


    // 订单支付渠道
    'order' => [
        'channel' => [
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
        'pay_status' => [
            [
                'id' => 0,
                'name' => '未支付'
            ],
            [
                'id' => 1,
                'name' => '已支付'
            ],
        ],
    ],

    'finance' => [
        // 收入子类型
        'sub_type' => [
            [
                'id' => 11,
                'name' => '微信收入'
            ],
            [
                'id' => 12,
                'name' => '支付宝收入'
            ],
        ],
        // 收入类型
        'type' => [
            [
                'id' => 1,
                'name' => '收入'
            ],
            [
                'id' => 2,
                'name' => '支出'
            ],
        ],
    ],

];
