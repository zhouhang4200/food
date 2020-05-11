<?php

namespace App\Console\Commands;

use App\Models\Merchant;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class Generate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:project';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '初始化，添加管理员什么的';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            User::updateOrCreate(['id' => 1],[
                'name' => '周航',
                'phone' => '13437284998',
                'password' => bcrypt('admin888'),
                'date' => Carbon::now()->toDateString(),
            ]);

            Merchant::updateOrCreate(['id' => 1],[
                'name' => '周航',
                'phone' => '13437284998',
                'password' => bcrypt('admin888'),
                'date' => Carbon::now()->toDateString(),
            ]);

            $this->info('初始化成功');
        } catch (\Exception $e) {
            $this->error('初始化失败：'.$e->getMessage());
        }
    }
}
