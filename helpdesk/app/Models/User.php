<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Enums\UserLevelEnum;
use Illuminate\Database\Eloquent\Builder;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'level',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function isAdmin()
    {
        return $this->level === UserLevelEnum::ADMIN->value;
    }

    public function isTechnician()
    {
        return $this->level === UserLevelEnum::TECHNICIAN->value || $this->level === UserLevelEnum::ADMIN->value;
    }

    public function scopeTechnician(Builder $query){
        return $query->where('level', 'technician');
    }
}
