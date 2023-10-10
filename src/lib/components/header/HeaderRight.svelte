<script>
    import Price from "$components/header/right/Price.svelte";
    import Hamburger from "$components/header/right/Hamburger.svelte";
    import Bag from "$components/header/right/Bag.svelte";
    import Translation from "$components/header/right/Translation.svelte";
</script>

<div class="header__right">
    <div class="header__right--price-container">
        <Price />
    </div>
    <div class="header__right--bag-container">
        <Bag />
    </div>
    <div class="header__right--translation-container">
        <Translation />
    </div>
    <Hamburger />
</div>
<div class="header__right-mini">
    <Translation />
    <Hamburger />
</div>

<style lang="sass">
  .header__right
    display: flex
    flex-direction: row
    align-items: center
    margin: auto 32px auto auto
    &-mini
      display: none

  @media only screen and (max-width: 1200px)
    .header__right
      margin: auto 24px auto auto

  @media only screen and (max-width: 992px)
    .header__right
      margin: auto 24px auto auto

  @media only screen and (max-width: 768px)
    .header__right
      margin: auto 12px auto auto
      &--translation-container
        display: none

  @media only screen and (max-width: 576px)
    .header__right
      display: none
      &-mini
        display: flex
        margin: auto 12px auto auto
      &--bag-container, &--price-container
        display: none
</style>