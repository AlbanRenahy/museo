<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MonumentRepository")
 */
class Monument
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("monument")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("monument")
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("monument")
     */
    private $adress;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("monument")
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("monument")
     */
    private $likes;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("monument")
     */
    private $dislikes;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=10, nullable=true)
     * @Groups("monument")
     */
    private $latitude;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=10, nullable=true)
     * @Groups("monument")
     */
    private $longitude;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("monument")
     */
    private $image;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Period", inversedBy="monuments")
     */
    private $period;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Region", inversedBy="monuments")
     */
    private $region;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Thematic", inversedBy="monuments")
     */
    private $thematic;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Status", inversedBy="monuments")
     */
    private $status;

    public function __construct()
    {
        $this->thematic = new ArrayCollection();
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

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLikes(): ?int
    {
        return $this->likes;
    }

    public function setLikes(?int $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function getDislikes(): ?int
    {
        return $this->dislikes;
    }

    public function setDislikes(?int $dislikes): self
    {
        $this->dislikes = $dislikes;

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

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(?string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(?string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getPeriod(): ?Period
    {
        return $this->period;
    }

    public function setPeriod(?Period $period): self
    {
        $this->period = $period;

        return $this;
    }

    public function getRegion(): ?Region
    {
        return $this->region;
    }

    public function setRegion(?Region $region): self
    {
        $this->region = $region;

        return $this;
    }

    /**
     * @return Collection|Thematic[]
     */
    public function getThematic(): Collection
    {
        return $this->thematic;
    }

    public function addThematic(Thematic $thematic): self
    {
        if (!$this->thematic->contains($thematic)) {
            $this->thematic[] = $thematic;
        }

        return $this;
    }

    public function removeThematic(Thematic $thematic): self
    {
        if ($this->thematic->contains($thematic)) {
            $this->thematic->removeElement($thematic);
        }

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): self
    {
        $this->status = $status;

        return $this;
    }
}
