<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PeriodRepository")
 */
class Period
{
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
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Monument", mappedBy="period")
     */
    private $monument;

    public function __construct()
    {
        $this->monument = new ArrayCollection();
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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Monument[]
     */
    public function getMonument(): Collection
    {
        return $this->monument;
    }

    public function addMonument(Monument $monument): self
    {
        if (!$this->monument->contains($monument)) {
            $this->monument[] = $monument;
            $monument->setPeriod($this);
        }

        return $this;
    }

    public function removeMonument(Monument $monument): self
    {
        if ($this->monument->contains($monument)) {
            $this->monument->removeElement($monument);
            // set the owning side to null (unless already changed)
            if ($monument->getPeriod() === $this) {
                $monument->setPeriod(null);
            }
        }

        return $this;
    }
}
