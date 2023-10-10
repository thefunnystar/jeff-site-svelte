<script>
import bag from "$images/shopping-cart.svg";

// Extract cart data from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Calculate cartTotal by summing the quantities in the cart
let cartTotal = cart.reduce((total, item) => total + item.quantity, 0);
</script>

<a href="/checkout" class="header__right--bag">
    <img src={bag} alt="bag" class="header__right--bag-svg">
    <p class="header__right--bag-count">{cartTotal ? cartTotal : 0}</p>
</a>

<style lang="sass">
    @mixin priceCenter
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -120%)

    .header__right--bag
      position: relative
      &-svg
        height: 48px
        width: auto
      &-count
        font-size: 20px
        font-weight: 700
        color: $color-black
        @include priceCenter

    @media only screen and (max-width: 1200px)
      .header__right--bag-svg
        height: 40px

    @media only screen and (max-width: 992px)
      .header__right--bag
        &-svg
          height: 32px
        &-count
          font-size: 16px

    @media only screen and (max-width: 768px)
      .header__right--bag
        &-svg
          height: 32px
        &-count
          font-size: 16px

    // Slidebar Only
    @media only screen and (max-width: 576px)
      .header__right--bag
        &-svg
          height: 24px
        &-count
          font-size: 14px
          // override
          transform: translate(-50%, -125%)
</style>