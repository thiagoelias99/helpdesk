<?php

namespace App\Enums;

enum UserLevelEnum: string {
    case ADMIN = 'admin';
    case USER = 'user';
    case TECHNICIAN = 'technician';
}
