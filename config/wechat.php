<?php

return [
    'base_config' => [
//        'app_id' => "2018030802336096",
//        'notify_url'     => 'http://js.qsios.com/mobile/leveling/wechat/notify',
//        'return_url'     => 'http://js.qsios.com/mobile/leveling/wechat/return',
//        'ali_public_key' => 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7Dq65aKIvY/hPxPBt+14lWv3Bt8GJMifOlqRnGb78Mx5oMv17o9iC7JLNV0HodrIsBYVpdJQoQiQ6rRe9wIdAV0OXUIir3fQxKo6whvCyGecnDQGYXpac7zBMFaoVa256q/uSTidFJIFnLvajJuRXwWZBYXujy+mZ9AUZbmNax8RDytqKEv6E+AUuPrwNMW7BkI4f67j0BEgc4qhas347fnQ1yxQ0bMp9C9NuKboWlFJ+bVz6SImdVcfwBnLQ+DyILwPcSiVoNySskJx6XyKAYzCDd04+dXHzuerAGBFp88gbOM+mTqgPOMYkvW2LhQdqkAw+btLJ+gdHcK8xUuXqQIDAQAB',
//        'private_key' => "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoixb88r3wnuU+cTifXpMPyVofN28z6ey8NTx7Jm6wOEhcJx4HZnZkNty9ggF4IsoGLmp25bOuBqowmC+yLnGkvLZ+XYYbodedgif8W5Pxlrt0SQH4N+k3a5qBJYD+zsMwTB/IVuwe6/VRa1uCzWUVZ2/9Pmj+J7EEmO3KJeFpGWD8Dmvv7Hw86tUhutMjFWVx3VDQ0M64ghZHJrfKFB23C1erARmA0j/NAh2ie8MRlXNojvrz3TSBXWwAEKgjdQJkkmmL1rPWPisARHfHzUdEdgjIlxzpT5YbIFB0BIlBhSO4LCLFggtT0+V0pfgy0t00Xc9t4UzwsK644wHixei5AgMBAAECggEBAKNag8JQBxYS+z9E/0s/n6t6TTXaRZZ8UC2uL1twyXFUa5WdeDZV8cN5hQLL4V6t4T6SeC+avEacQRFuPzQkXZL8MKhTPurDNrZ7cwPdQouxuyeepyEMF6bWTN6FGfxdK8NA1MEYtivWKGNseTpSlnljUqCRf7Ntht1c14PIqStxkd4vSor+BzxBiWfyFpkIG6hEMDYT7GG1/Hu1su5eD4TNaxXOCh4w11nqw/C9kij4CU8Zw/8E83Y36SgjMrDlgJ+VLxqVA/SgF31wFHPQK56zpeq3c2m7nyps0l4Gxy0pJK6q0WZUOEazVsS1LwWnI71LCRLpQg0CaiA8ab9o450CgYEA03OWSk/s45YbWwEYiGRYoLz5RQA9ZUlRag1ectMHUGnRlNxPG0K4RVvfqZamhZEht3bVQTgbRzFFvp562o/1/M88Iqj9VtXy5BJPZSlHZxrDhwwJ9JTDC/EZthYhlbBNtuEjaWpLzmz6Cyjie0N+4wYKBgy7P+42AqCDwhEsN7sCgYEAzA1LfjIR6LVIveYdvdmEDB4omG41Pw2jtmtnCkN6/6UCd0EzCQfevCBmOzR6/H/DGf6aGn1N6s0igEk8m//KD0emYVNmAptyrDVlXHA+oWVJv7229IUofgAkoB5bQkFADwUFjlQNM/yxU4XaNj6G0FMc1xhDdsqoZTU05SE/mBsCgYBcjcWE9YMNAxEqPkqMuM+KW+0H5Nj60qLONtfWjsQu0IKqE9yUZBngUhyOUKDG6gXGFj+18mcOPGT40MmZjVXwuIzr5ugs8C0G43TZJL5aRP68x+o7ojnVqkzExN8idC8wE0+6voo76rtv0w9/QMXzfRs6FqyHiS8e6z+A3J9sLQKBgA6ReG1XF848eygLsN3oFLRkxtMzMxwAVkrk2iNyc+qilk17WzBu3mkiCwp5EbrLSFunwMrZXWHBKZBtKiWdGokCvY8/TA4tmP9QhJ8X6HDPcXd+DPziMOTmD7da03ske3VXD3F88MBgbyyeZtjul+Nxu6JjuhVWHLW1GcSuHgM3AoGAbv+Y8qAEG1KwXrmVRJ7686w0uaIhAUeg1QbCM5TlYHiMLsiY5vUermBTgEDk9Ws6qqNyGb+96dHoNYQJsToMhEyWTahtoODzZZfRMuAcEJY9Kly5CAGQCuBGTA+g7plAltpju01Rk/j/3YucvkD7CKBNLQJkoK4Oxnc22Blb7NY=",

        'app_id' => "wx5e0fd315aff830a4", // 微信公众号appid
        'mch_id' => "1537249771", // 商户号
        'key' => '2E6E50E2BBFFF4D97E3C16AD8D37A79C', // 微信支付签名密钥
        'cert_client' => './apiclient_cert.pem',        // 客户端证书路径，退款时需要用到
        'cert_key' => './apiclient_key.pem',            // 客户端秘钥路径，退款时需要用到
        'notify_url'     => 'http://http://h5.diancan.nanmingyu.com/h5/wechat/notify',
        'return_url'     => 'http://http://h5.diancan.nanmingyu.com/h5/wechat/return',


//        'app_id' => "2016091400506627",
//        'notify_url' => 'http://h5.keeper.test/h5/wechat/notify',
//        'return_url' => 'http://h5.keeper.test/h5/wechat/return',
//        'ali_public_key' => 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArljDsHYrjmiNmReCOn+Yr9zlWhKANouqJhy1F0L9C4BWOwtq23Gh99OUgvu2fSikHdedONe8jRIuzMoMsxvbQUjQSgLpmBQHHFQmk9nZBOzrlYJdkspKmTZGWL7pn3HZhW2yZmJIAv9P9/QWK0VXua0nPrAeHYQG1P8tBjogDX7z8hN31InUJre0+kht/wW+ep01mXrRNw7lg5IQEkswuosR+e1k8H/fUo7UJn0/d5YnbYmjrgg0+6DHhj6b+Bc8fjwAOEX6dwuF4IOYG6nbJklkACpQNVZn+LqsPs+1HDNrfuqUTMryCOYj/PFGxYkphxB4BKitwtpfA4ieuVViQQIDAQAB',
//        'private_key' => 'MIIEowIBAAKCAQEAqzsJjW61F8QqToYAlrbxtg/5ykyiCufkez+uSA88MUL86/+R20oX7wY+gh+lu9VTuvk08I9lqtCHDEdeQQ7DXF2EQWtQJmQMJF2nx1SlksT13hHtmj77iMo2QeHXxUU7VREpKt/EoYsAkU2Bo8RUaswWGt6+DrRK/7vdJgkJIdfXUJXtlZdK14qCW9Jf0SjPlUL1YXOUuE3eKKlgFInm8cbKATdLn1x8++xfba/N419paTLWNN7kCRtcB0kK6Mjgpuny2HzcUTzdz7h+jEWsjq1P1Htt8Wwj822MY5SwYcMRZ14IZbUpKxejnFzotgB0MmBhVMkXjif8VJc9ac1DFQIDAQABAoIBACIsAwkFugBHNsY6+e0aD3ztDUWxK3mPs8pg+BALclDGdKFIfLxNuh8KmPjxBetJdI9Q4p7Lj1eajAkISSgkoRpS020W1IUE3GN5iV0/aFe1FPg/jbKFtT8kU9WsE5qb6W5doWCcDarLic51sFSVft9dYV/1aeqXUoxc2pKXpQnqrLoX3WxM7lVlL09fmw8LKWUMAmkziLDVf25m4aakCXWvXLExWPXabGHDutBeFWnHcwA81XW1cpGP66GmdoZTZpaaZc/2aLxgHjhl8pB221oTOHNw70CaVdzxUZ54m3KFzPvTHkiP9jsOJvT3vgvWOHlcnIV28VXc1VfPz9YU/vUCgYEA2n1aQeHAvPtnNTWlSFgwdGbf+xmiY1x4Fff/l3KlKHQpVCfoh2bunQiwJFOTYPK+kVnGc+d8xkvEAJ9ruTD8GxxTZCTOXpdwhgvkTUTPwQiKxeS42zNi7hKXSQ+yN8JYuUNWH3Qdv4rrEGeDLNxOZYcYLYMJOGxR75Fs5JgKfisCgYEAyKCk2Qz84s1KiDrs8PqFm8ntoFs8KdDXSLDw34Xj4YNLes9ECYubxQ17INoqt+ibHQD2Pr8WNIraGnM8HA1MPCzpCAy3bCcyU/UmhM9osShUAo3ivP2eSqjkimISJ0r4l/UNhn73DVZB8ur3izMA6YvsgOXSm3OIM9t49eDL478CgYAhFcJJH6pT863ZPNpebhxIRBu+pk8UxLfae8dUY6Pm0FBB0hlAB7IyTVJ+7bjvgVKiJ/oJKxCV5nszrPBfBq/mWw+1pm0pnb0IT1yu5rCfBnAdL1leuBVO/7mw8pOGJgPRagTslmS60Ipv3XzbmjC05xQeMC2BQcXWhSr8IpnUKQKBgHkxeYNYMic7het3VQxY+X7bYz07/8Lu0i2qHUeZVMg0jNL6A4qUmBtYAmodADMqQxEpNJdAzUQeIJRbyhLUAZpUMszXCbI+l0taStNtizuBNgZ4+V/bANTu42eoyHiN9E+vC2WUqt6Wna4FPFYNEF8EVHCk5C1dhAh3asF08xV3AoGBAJx96wkKj6ettUAKM1UY99K3bCOKgcq97J59G8QvxPLTibz1mr9I9pstBorFbl31njNQnbrHgkEfbVy1GKVbCIJBx+9yILdBK+ERQll7xD23cRR+Bq4SDl5MztqBJ4ou1MKmvUDjFYiwH4GTyEpnfzQ5PFKOlAGekh8QRKFbUsI+',
//        'mode' => 'dev',
    ],
];
