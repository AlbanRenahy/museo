<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ApiResource
 * @ORM\Entity(repositoryClass="App\Repository\OptionRepository")
 * @UniqueEntity(fields={"name"}, message="L'option existe déjà")
 */
class Option
{

    public function __toString()
    {
        return $this->name;
    }
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Monument", mappedBy="options")
     */
    private $monuments;

    public function __construct()
    {
        $this->monuments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Monument[]
     */
    public function getMonuments(): Collection
    {
        return $this->monuments;
    }

    public function addMonument(Monument $monument): self
    {
        if (!$this->monuments->contains($monument)) {
            $this->monuments[] = $monument;
            $monument->addOption($this);
        }

        return $this;
    }

    public function removeMonument(Monument $monument): self
    {
        if ($this->monuments->contains($monument)) {
            $this->monuments->removeElement($monument);
            $monument->removeOption($this);
        }

        return $this;
    }
}
