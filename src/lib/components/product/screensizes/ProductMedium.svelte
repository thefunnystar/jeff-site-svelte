<script>
    import insight1 from "$images/insight_1.jpg";
    import insight3 from "$images/insight_3.jpg";
    import insight2 from "$images/insight_2.jpg";
    import insight4 from "$images/insight_4.jpg";
    import Product from "$components/product/Product.svelte";
    import products from "$data/products.js";
</script>

<div class="products__container">
    <div class="products__container-1">
        <Product prodTitle={products.phonographs.prod} imagePath={insight1} paraText={products.phonographs.para1} linkUrl={products.phonographs.href} />
        <Product prodTitle={products.music_boxes.prod} imagePath={insight3} paraText={products.music_boxes.para1} linkUrl={products.music_boxes.href} />
    </div>
    <div class="products__container-2">
        <Product prodTitle={products.gramophones.prod} imagePath={insight2} paraText={products.gramophones.para1} linkUrl={products.gramophones.href} />
        <Product prodTitle={products.records_and_needles.prod} imagePath={insight4} paraText={products.records_and_needles.para1} linkUrl={products.records_and_needles.href} />
    </div>
</div>

<style lang="scss">
  .products__container {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .products__container {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      width: 356.55px;
      &-2 {
        margin-top: 52px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .products__container {
      display: none;
    }
  }
</style>