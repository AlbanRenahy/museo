<?php

namespace App\Form;

use App\Entity\Period;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PeriodType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true
            ])
            ->add('createdAt', DateType::class, [
                'disabled' => true,
                'format' => 'dd-MM-yyyy'
            ])
            ->add('updatedAt', HiddenType::class, [
                'required' => false,
                'disabled' => true
            ])
            // ->add('monuments')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Period::class,
        ]);
    }
}
