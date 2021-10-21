import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          title="SergioTest"
          price={11}
          description="Very cool vea"
        />
      </ul>
    </section>
  );
};

export default Products;
