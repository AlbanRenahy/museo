<?php

namespace App\Form;

use App\Entity\Monument;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MonumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('city')
            ->add('address')
            ->add('description')
            // ->add('thematic')
            // ->add('likes')
            // ->add('dislikes')
            // ->add('createdAt')
            // ->add('updatedAt')
            // ->add('latitude', NumberType::class)
            // ->add('longitude', NumberType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Monument::class,
        ]);
    }
}
