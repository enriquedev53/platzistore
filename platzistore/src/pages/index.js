import ProductList from '@containers/ProductList';
import Head from 'next/Head';
export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
