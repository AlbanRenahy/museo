<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RolesRepository")
 */
class Roles
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $roles;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRoles(): ?User
    {
        return $this->roles;
    }

    public function setRoles(User $roles): self
    {
        $this->roles = $roles;

        return $this;
    }
}
