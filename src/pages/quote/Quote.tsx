import React from 'react';

import ServiceOffer from '../../components/services/ServiceOffer';
import PerDay from '../../components/services/PerDay';
import './style.scss';

const Quote = () => {
  const offers = [
    {
      title: 'Simple Website',
      price: '900€',
      description:
        'Ideal for a small business showcase site. A static website without any backend.',
      servicesList: [
        '4 pages website, Home, About, Contact, Menu...',
        'Domain name & hosting',
        'Design Responsive for all screen sizes',
        'SEO',
        'Contact form',
        'Site deployement',
        'Free updates available up to 1 week before and after deployement'
      ]
    },
    {
      title: 'Pro Website',
      price: '1500€',
      description:
        'Ideal for a professional business site. A website with backend and authentification.',
      servicesList: [
        '7 pages website, Home, About, Contact, Services, Products, Menu, Admin...',
        'Domain name & hosting',
        '6 months maintenance',
        'Design Responsive for all screen sizes',
        'SEO',
        'Contact form',
        'Site deployement',
        'Free updates available up to 1 week before and after deployement'
      ]
    },
    {
      title: 'Custom Project',
      price: 'Special Service Quote',
      description:
        'You want to implement a new feature in your website. You want to create a mobile app, a website with backend and authentification with more than 7 pages.',
      servicesList: [
        'Detailed Quote',
        'Domain name & hosting',
        'Design Responsive for all screen sizes',
        'SEO',
        'Contact form',
        'Site deployement',
        'Free updates available up to 1 week before and after deployement'
      ]
    }
  ];
  return (
    <div className="services">
      <PerDay />
      <section>
        {offers.map((offer) => (
          <ServiceOffer key={offer.title} {...offer} />
        ))}
      </section>
    </div>
  );
};

export default Quote;
