<?php

namespace App\Form;

use App\Entity\Monument;
use App\Entity\Region;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MonumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('description', TextareaType::class)
            ->add('address', TextType::class)
            ->add('city', TextType::class)
            ->add('createdAt', DateTimeType::class, [
                'attr' => ['class' => 'disabled'],
            ])
            // ->add('latitude', HiddenType::class)
            // ->add('longitude', HiddenType::class)
            // ->add('updatedAt')
            // ->add('available', ChoiceType::class)
            ->add('region', EntityType::class, [
                'class' => Region::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('r')
                        ->orderBy('r.name', 'ASC');
                },
            ])
            //->add('category', ChoiceType::class)
            //->add('period', ChoiceType::class)
            //->add('target', ChoiceType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Monument::class,
        ]);
    }
}
