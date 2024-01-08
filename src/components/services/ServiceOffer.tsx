import { ValidatOffer } from '../../components/Icons';
export default function ServiceOffer(props: {
  title: string;
  price: string;
  description: string;
  servicesList: string[];
}) {
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
}
