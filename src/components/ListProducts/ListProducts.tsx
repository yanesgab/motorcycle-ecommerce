import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { ProductCard } from '..';
import products from '@/data/motos.json';

export const ListProducts: React.FC = () => {
  return (
    <Container>
      <Grid container>
        {products.data.data.map((product: any) => (
          <Grid item xs={12} sm={6} md={3} key={product.baseProductCode}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5px;
`;
