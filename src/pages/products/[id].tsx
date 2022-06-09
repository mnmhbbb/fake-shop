import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Product } from '../../types';
import { fetcher, QueryKeys } from '../../queryClient';
import ProductDetail from '../../components/product/detail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: 'GET',
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  return (
    <>
      <h2>상품 상세</h2>
      <ProductDetail item={data} />
    </>
  );
};
export default ProductDetailPage;
