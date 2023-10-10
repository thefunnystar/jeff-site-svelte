<script>
    export let imagePath;
    export let linkUrl;
    export let paraText;
    export let prodTitle;
</script>

<div class="product__container">
    <img src={imagePath} alt="" class="product__container--image">
    <p class="product__container--title">{prodTitle}</p>
    <p class="product__container--paragraph">{paraText}</p>
    <a href={linkUrl} class="product__container--link">
        <p>Read More</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    </a>
</div>

<style lang="sass">
  .product__container
    width: 232.5px
    &--image
      width: 232.5px
      height: 310px
    &--title
      font-weight: 700
      font-size: 20px
      margin: 16px auto
    &--paragraph
      font-size: 16px
      margin: 16px auto 0
    &--link
      text-decoration: none
      color: $color-black
      display: flex
      align-items: center
      & > p
        font-size: 16px
        font-weight: bold
        display: inline-block
      & > svg
        margin-left: 8px
        height: 16px
        width: 16px
        display: inline-block
        vertical-align: middle

  @media only screen and (max-width: 1200px)
    .product__container
      width: 192.2px
      &--image
        width: 192.2px
        height: 256.27px
      &--title
        font-size: 16px
        margin: 8px auto
      &--paragraph
        font-size: 16px
        margin: 8px auto 0
      &--link
        & > p
          font-size: 16px
        & > svg
            margin-left: 8px
            height: 16px
            width: 16px

  @media only screen and (max-width: 992px)
    .product__container
      width: 148.8px
      &--image
        width: 148.8px
        height: 198.4px
      &--title
        font-size: 14px
        margin: 4px auto
      &--paragraph
        font-size: 12px
        margin: 4px auto 0
      &--link
        & > p
          font-size: 12px
        & > svg
          margin-left: 4px
          height: 12px
          width: 12px

  @media only screen and (max-width: 768px)
    .product__container
      width: 165.52px
      &--image
        width: 165.52px
        height: 220.69px
      &--title
        font-size: 18px
        margin: 8px auto
      &--paragraph
        font-size: 16px
        margin: 8px auto 0
      &--link
        & > p
          font-size: 16px
        & > svg
          margin-left: 4px
          height: 16px
          width: 16px

  @media only screen and (max-width: 576px)
    .product__container
      width: 232.5px
      &--image
        width: 232.5px
        height: 310px
      &--title
        font-size: 20px
        margin: 16px auto
      &--paragraph
        font-size: 16px
        margin: 16px auto 0
      &--link
        & > p
          font-size: 16px
        & > svg
          margin-left: 8px
          height: 16px
          width: 16px
</style>