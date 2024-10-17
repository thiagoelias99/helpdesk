<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTicketRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // $user = auth()->user();
        // return $user->role === 'admin' || $user->role === 'technician';
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category' => ['required', 'string', 'exists:categories,category'],
            'priority' => ['required', 'string', 'exists:priorities,priority'],
            'status' => ['required', 'string', 'exists:statuses,status'],
            'technician_id' => ['required', 'integer', 'exists:users,id'],
        ];
    }
}
