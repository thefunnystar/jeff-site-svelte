<script>
    export let categoryTitle;
    export let categoryLink1;
    export let categoryLink2;
    export let categoryLink1Text;
    export let categoryLink2Text;
</script>

<div class="category">
    <p class="category__title">{categoryTitle}</p>
    <a href={categoryLink1} class="category__link">{categoryLink1Text}</a>
    <a href={categoryLink2} class="category__link">{categoryLink2Text}</a>
    <slot />
    <!--    <img src={paypal} alt="" class="category__paypal">-->
</div>

<style lang="sass">
  .category
    display: flex
    flex-direction: column
    &__title
      font-size: 16px
      color: $color-brown
      margin-bottom: 8px
    &__link
      font-size: 18px
      margin-bottom: 4px
      color: $color-black

      text-decoration: none

  @media only screen and (max-width: 1200px)
    .category
      &__title
        font-size: 12px
        margin-bottom: 8px
      &__link
        font-size: 16px
        margin-bottom: 4px

  @media only screen and (max-width: 992px)
    .category
      &__title
        font-size: 11px
        margin-bottom: 8px
      &__link
        font-size: 14px
        margin-bottom: 4px

  @media only screen and (max-width: 768px)
    .category
      &__title
        font-size: 14px
        margin-bottom: 8px
      &__link
        font-size: 16px
        margin-bottom: 4px

  @media only screen and (max-width: 576px)
    .category
      display: flex
      align-items: center
      &__title
        font-size: 18px
        margin-bottom: 8px
      &__link
        font-size: 24px
        margin-bottom: 8px
        &:last-of-type
          margin-bottom: 0
</style>