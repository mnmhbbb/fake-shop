import { Link } from 'react-router-dom';
import { Product } from '../../types';

const ProductItem = ({ id, category, description, image, price, rating, title }: Product) => {
  return (
    <li className='product-item'>
      <Link to={`/products/${id}`}>
        <span className='product-item__category'>{category}</span>
        <p className='product-item__title'>{title}</p>
        <img className='product-item__image' src={image} alt={title} />
        <p className='product-item__description'>{description}</p>
        <span className='product-item__price'>${price}</span>
        <span className='product-item__rating'>{rating.rate}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
