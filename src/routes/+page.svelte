<script>
    import mainImage from '$images/antique1.jpg';
    import ProductNormal from "$components/product/screensizes/ProductNormal.svelte";
    import ProductMedium from "$components/product/screensizes/ProductMedium.svelte";
    import Collecting from "$components/product/information/Collecting.svelte";
    import Section from "$components/product/information/Section.svelte";
</script>

<div class="index">
    <Collecting />
    <img src={mainImage} class="main-image" alt="">
    <a href="/forsale" class="main-link">See what&apos;s in stock.</a>
    <Section />
    <!--{#if screenWidth >= 768 || <= 576}-->
        <ProductNormal />
    <!--{:else}-->
        <ProductMedium />
</div>

<style lang="sass">
  .index
    display: flex
    flex-direction: column
    // 994px
    width: calc(232.5px*4 + 64px)
    justify-content: center
    margin: 0 auto
  .main-link
    margin: 32px auto
    font-size: 24px
    cursor: pointer

  @media only screen and (max-width: 1200px)
    .index
      // 833px
      width: calc(192.2px*4 + 64px)
    .main-link
      margin: 24px auto
      font-size: 20px

  @media only screen and (max-width: 992px)
    .index
      // 659px
      width: calc(148.8px*4 + 64px)
    .main-link
      margin: 16px auto
      font-size: 16px

  @media only screen and (max-width: 768px)
    .index
      width: 356.55px
    .main-link
      margin: 12px auto
      font-size: 18px

  @media only screen and (max-width: 576px)
    .index
      width: 356.55px
    .main-link
      margin: 12px auto
      font-size: 18px
</style>