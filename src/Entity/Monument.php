<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Api\FilterInterface;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation\UploadableField;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\NumericFilter;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
/**
 * @ApiResource(iri="http://schema.org/Monument")
 * @ApiResource(
 *      normalizationContext={
 *          "groups"={
 *              Monument::READ,
 *              Region::READ
 *           }
 *      },
 *      denormalizationContext={"groups"={Monument::READ}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\MonumentRepository")
 * @UniqueEntity(fields={"name"}, message="Le monument existe déjà")
 * @ApiFilter(NumericFilter::class, properties={"latitude, longitude"})
 * @ApiFilter(BooleanFilter::class, properties={"available"})
 * @Vich\Uploadable
 */
class Monument
{

    const READ = 'Monument:Read';
    const WRITE = 'Monument:Write';

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->period = new ArrayCollection();
        // $this->options = new ArrayCollection();
    }

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({Monument::READ})
     */
    private $id;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     * 
     * @Vich\UploadableField(mapping="monument_image", fileNameProperty="imageName", size="imageSize")
     * 
     * @var File|null
     */
    private $imageFile;

    /**
     * @ORM\Column(type="string")
     *
     * @var string|null
     */
    private $imageName;

    /**
     * @ORM\Column(type="integer")
     *
     * @var int|null
     */
    private $imageSize;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le Monument doit avoir obligatoirement un nom")
     * @Assert\Length(
     *      min = 5,
     *      max = 150,
     *      minMessage = "Le nom du monument doit faire au minimum {{ limit }} caractéres",
     *      maxMessage = "Le nom du monument doit faire au maximum {{ limit }} caractéres",
     * )
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Le Monument doit avoir obligatoirement un nom")
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le Monument doit avoir obligatoirement une addresse")
     * @Assert\Length(
     *      min = 2,
     *      max = 250,
     *      minMessage = "L'adresse du monument doit faire au minimum {{ limit }} caractéres",
     *      maxMessage = "L'adresse' du monument doit faire au maximum {{ limit }} caractéres",
     * )
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $address;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $available;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Assert\Type(type="float")
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $latitude;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Assert\Type(type="float")
     * @Groups({Monument::READ, Monument::WRITE})
     */
    private $longitude;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Region", inversedBy="monuments", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * 
     * @Groups({Monument::READ, Monument::WRITE})
     * @ApiProperty(iri="http://schema.org/identifier")
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
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isActive;

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

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): self
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

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(?bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }
    
    public function setImageSize(?int $imageSize): void
    {
        $this->imageSize = $imageSize;
    }

    public function getImageSize(): ?int
    {
        return $this->imageSize;
    }

}
