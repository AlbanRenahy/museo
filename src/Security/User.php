<?php 

namespace App\Security;

use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUserInterface;

class User implements JWTUserInterface
{

    public function __construct($email, array $roles)
    {
        $this->email = $email;
        $this->roles = $roles;
    }

    public static function createFromPayload($email, array $payload)
    {
        return new self(
            $email,
            $payload['roles'], // Added by default
        );
    }

}