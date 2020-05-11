<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class User extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'phone' => 'required|numeric',
            'password' => 'required|between:8,16',
        ];
    }

    public function messages()
    {
        return [
            'phone.required' => '手机号必填',
            'phone.numeric' => '手机号必须为数字',
            'password.required' => '密码必填',
            'password.between' => '密码必须在8-16位之间',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $error = $validator->errors()->first();

        throw new HttpResponseException(response()->json(['status' => 0, 'content' => $error, 'data' => '']), Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
