<?php

namespace App\Repository;

use App\Entity\Monument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Monument|null find($id, $lockMode = null, $lockVersion = null)
 * @method Monument|null findOneBy(array $criteria, array $orderBy = null)
 * @method Monument[]    findAll()
 * @method Monument[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MonumentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Monument::class);
    }

    public function countByEntry()
    {
        $qb = $this->createQueryBuilder('m');
        $qb->select($qb->expr()->count('m'));
        return (int) $qb->getQuery()->getSingleScalarResult();
    }
}
