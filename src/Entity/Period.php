<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ApiResource(
 *      normalizationContext={"groups"={"read"}},
 *      denormalizationContext={"groups"={"write"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\PeriodRepository")
 * @UniqueEntity(fields={"name"}, message="La période existe déjà")
 */
class Period
{

    public function __toString()
    {
        return $this->name;
    }

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"write"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Monument", mappedBy="period")
     * @Groups({"write", "read"})
     */
    private $monuments;

    
    public function __construct()
    {
        $this->createdAt = new \DateTime();
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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
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
    public function getMonuments(): Collection
    {
        return $this->monuments;
    }

    public function addMonument(Monument $monument): self
    {
        if (!$this->monuments->contains($monument)) {
            $this->monuments[] = $monument;
            $monument->setPeriod($this);
        }

        return $this;
    }

    public function removeMonument(Monument $monument): self
    {
        if ($this->monuments->contains($monument)) {
            $this->monuments->removeElement($monument);
            // set the owning side to null (unless already changed)
            if ($monument->getPeriod() === $this) {
                $monument->setPeriod(null);
            }
        }

        return $this;
    }
}
