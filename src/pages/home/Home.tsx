import React from 'react';
import Navigation from '../../components/Nav/Navigation';
import cv from '../../media/CVSwannMartin.pdf';
import { ValidatOffer } from '../../components/Icons';

const ServiceOffer = (props: {
  title: string;
  price: string;
  description: string;
  servicesList: string[];
}) => {
  const { title, price, servicesList, description } = props;
  return (
    <a href="/contact" title="go to contact" className="service">
      <h1>{title}</h1>
      <p>From</p>

      <h2>{price}</h2>
      <p>{description}</p>
      <ul className="list">
        {servicesList?.map((el, i) => (
          <li
            className={`list-item ${i === 0 ? 'list-item--first' : ''} ${
              i === servicesList.length - 1 ? 'list-item--last' : ''
            }`}
            key={`list-element-${i}`}
          >
            <ValidatOffer class="color-5" />
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </a>
  );
};

const PerDay = () => {
  return (
    <section className="perday">
      <div className="flex">
        <div>
          <h2>Price per Day</h2>
          <p>For any offer different than listed below</p>
          <h3>
            <span>300€</span>
            <small>/day</small>
          </h3>
        </div>
        <div>
          <h2>Maintenance</h2>
          <p>For websites already created</p>
          <h3>
            25€<small>/months</small>
          </h3>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const title = 'Developer';
  const subtitle = 'TypeScript | Reactjs | React Native';
  const linkText = ' see my CV';

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1 className="content-title">{title}</h1>
          <h2 className="content-subtitle">{subtitle}</h2>
          <div className="content-pdf">
            <a
              className="content-pdf-link"
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span>{linkText}</span>
            </a>
          </div>
        </div>

        <PerDay />
        <section className="services">
          <ServiceOffer
            {...{
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
            }}
          />
          <ServiceOffer
            {...{
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
            }}
          />
          <ServiceOffer
            {...{
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
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
