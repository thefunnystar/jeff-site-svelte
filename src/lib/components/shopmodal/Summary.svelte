<div class="shop-modal__summary">
    <p class="shop-modal__summary--order-summary">Order Summary</p>
    <div class="shop-modal__summary--subtotal">
        <p class="shop-modal__summary--subtotal-title">Subtitle</p>
        <p class="shop-modal__summary--subtotal-price">$</p>
    </div>
    <div class="shop-modal__summary--line"></div>
    <div class="shop-modal__summary--shipping">
        <p class="shop-modal__summary--shipping-title">Shipping Price</p>
        <p class="shop-modal__summary--shipping-price">$</p>
    </div>
    <div class="shop-modal__summary--line"></div>
    <div class="shop-modal__summary--order-total">
        <p class="shop-modal__summary--order-total-title">Order Total</p>
        <p class="shop-modal__summary--order-total-price">$</p>
    </div>
    <button class="shop-modal__summary--checkout">
        <p class="shop-modal__summary--checkout-text">Checkout</p>
    </button>
</div>

<style lang="scss">
  .shop-modal__summary {
    width: 512px;
    background-color: $color-checkout;
    display: flex;
    flex-direction: column;

    &--order-summary {
      margin: 32px;
      font-size: 16px;
      font-weight: 600;
    }

    &--subtotal,
    &--shipping,
    &--order-total {
      margin: 32px;

      &-title {
        margin-right: auto;
      }

      &-price {
        margin-left: auto;
      }
    }

    &--line {
      margin: 32px;
      content: '';
      height: 1px;
      width: 100%;
      background-color: $color-line;
    }

    &--checkout {
      background-color: $color-blue;
      width: 448px;
      height: 64px;
      position: relative;

      &-text {
        margin: 32px;
        color: $color-white;
        font-weight: 600;
        font-size: 16px;
        position: absolute;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .shop-modal__summary {
      width: 432px;
      &--order-summary {
        margin: 32px;
        font-size: 16px;
      }
      &--subtotal,
      &--shipping,
      &--order-total {
        margin: 32px;
      }
      &--line {
        margin: 32px;
        height: 1px;
      }
      &--checkout {
        width: 378px;
        height: 64px;
        &-text {
          margin: 32px;
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .shop-modal__summary {
      width: 730px;
      &--order-summary {
        margin: 32px;
        font-size: 16px;
      }
      &--subtotal,
      &--shipping,
      &--order-total {
        margin: 32px;
      }
      &--line {
        margin: 32px;
        height: 1px;
      }
      &--checkout {
        width: 425.6px;
        height: 64px;
        &-text {
          margin: 32px;
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .shop-modal__summary {
      width: 565.16px;
      &--order-summary {
        margin: 32px;
        font-size: 16px;
      }
      &--subtotal,
      &--shipping,
      &--order-total {
        margin: 32px;
      }
      &--line {
        margin: 32px;
        height: 1px;
      }
      &--checkout {
        width: 329.5px;
        height: 49.55px;
        &-text {
          margin: 32px;
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .shop-modal__summary {
      width: 730px;
      &--order-summary {
        margin: 16px;
        font-size: 10px;
      }
      &--subtotal,
      &--shipping,
      &--order-total {
        margin: 16px;
      }
      &--line {
        margin: 16px;
        height: 1px;
      }
      &--checkout {
        width: 230.77px;
        height: 48px;
        &-text {
          margin: 16px;
          font-size: 10px;
        }
      }
    }
  }
</style>