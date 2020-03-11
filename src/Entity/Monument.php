<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ApiResource
 * @ORM\Entity(repositoryClass="App\Repository\MonumentRepository")
 * @UniqueEntity(fields={"name"}, message="Le monument existe déjà")
 */
class Monument
{

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->period = new ArrayCollection();
        $this->options = new ArrayCollection();
    }

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le Monument doit avoir obligatoirement un nom")
     * @Assert\Length(
     *      min = 5,
     *      max = 150,
     *      minMessage = "Le nom du monument doit faire au minimum {{ limit }} caractéres",
     *      maxMessage = "Le nom du monument doit faire au maximum {{ limit }} caractéres",
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Le Monument doit avoir obligatoirement un nom")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le Monument doit avoir obligatoirement une adresse")
     * @Assert\Length(
     *      min = 2,
     *      max = 250,
     *      minMessage = "L'adresse du monument doit faire au minimum {{ limit }} caractéres",
     *      maxMessage = "L'adresse' du monument doit faire au maximum {{ limit }} caractéres",
     * )
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $available;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=8, nullable=true)
     * @Assert\Type(type="float")
     */
    private $latitude;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=8, nullable=true)
     * @Assert\Type(type="float")
     */
    private $longitude;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Region", inversedBy="monuments")
     */
    private $region;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="monuments")
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Period", inversedBy="monuments")
     */
    private $period;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Target", inversedBy="monuments")
     */
    private $target;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Option", inversedBy="monuments")
     */
    private $options;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

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

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

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

    public function getAvailable(): ?bool
    {
        return $this->available;
    }

    public function setAvailable(?bool $available): self
    {
        $this->available = $available;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|Period[]
     */
    public function getPeriod(): Collection
    {
        return $this->period;
    }

    public function addPeriod(Period $period): self
    {
        if (!$this->period->contains($period)) {
            $this->period[] = $period;
        }

        return $this;
    }

    public function removePeriod(Period $period): self
    {
        if ($this->period->contains($period)) {
            $this->period->removeElement($period);
        }

        return $this;
    }

    public function getTarget(): ?Target
    {
        return $this->target;
    }

    public function setTarget(?Target $target): self
    {
        $this->target = $target;

        return $this;
    }

    /**
     * Get min = 2,
     */ 
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set min = 2,
     *
     * @return  self
     */ 
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * @return Collection|Option[]
     */
    public function getOptions(): Collection
    {
        return $this->options;
    }

    public function addOption(Option $option): self
    {
        if (!$this->options->contains($option)) {
            $this->options[] = $option;
        }

        return $this;
    }

    public function removeOption(Option $option): self
    {
        if ($this->options->contains($option)) {
            $this->options->removeElement($option);
        }

        return $this;
    }
}
