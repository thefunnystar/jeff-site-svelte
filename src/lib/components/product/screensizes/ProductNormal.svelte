<script>
    import insight1 from "$images/insight_1.jpg";
    import insight2 from "$images/insight_2.jpg";
    import insight3 from "$images/insight_3.jpg";
    import insight4 from "$images/insight_4.jpg";
    import Product from "$components/product/Product.svelte";
    import products from "$data/products.js";
</script>

<div class="products__container">
    <Product prodTitle={products.phonographs.prod} imagePath={insight1} paraText={products.phonographs.para} linkUrl={products.phonographs.href} />
    <Product prodTitle={products.gramophones.prod} imagePath={insight2} paraText={products.gramophones.para} linkUrl={products.gramophones.href} />
    <Product prodTitle={products.music_boxes.prod} imagePath={insight3} paraText={products.music_boxes.para} linkUrl={products.music_boxes.href} />
    <Product prodTitle={products.records_and_needles.prod} imagePath={insight4} paraText={products.records_and_needles.para} linkUrl={products.records_and_needles.href} />
</div>

<style lang="scss">
  .products__container {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(232.5px*4 + 64px);
  }

  @media only screen and (max-width: 1200px) {
    .products__container {
      margin-top: 16px;
      width: calc(192.2px*4 + 64px);
    }
  }

  @media only screen and (max-width: 992px) {
    .products__container {
      margin-top: 16px;
      width: calc(148.8px*4 + 64px);
    }
  }

  @media only screen and (max-width: 768px) {
    .products__container {
      display: none;
    }
  }

  @media only screen and (max-width: 576px) {
    .products__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      width: 250px;
    }
  }
</style>