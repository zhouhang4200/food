<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class User extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'phone' => 'required|numeric',
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'phone.required' => '手机号必填',
            'phone.numeric' => '手机号必须为数字',
            'password.required' => '密码必填',
        ];
    }
}
