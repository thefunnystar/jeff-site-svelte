<script>
    import dotenv from "$data/dotenv.js";
    import axios from 'axios';
    import {onMount} from "svelte";

    export let product;
    export let removeFromCart;

    let productDetails;

    onMount(async () => {
        if (product.name) {
            try {
                const res = axios.get(`${dotenv}/api/store/${product.name}/`)
                productDetails = res.data;
            } catch (err) {
                console.log(err);
            }
        }
    });

    function handleQuantityChange(event) {
        const newQuantity = parseInt(event.target.value);
        product.quantity = newQuantity;

        // Update the quantity in local storage
        const cartData = JSON.parse(localStorage.getItem('cart')) || {};
        cartData[product.name] = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cartData));
    }

    // Function to remove the item from the cart and local storage
    function removeItem() {
        removeFromCart(product.name);
    }
</script>

<div class="shop-modal__item">
    <img src={productDetails.image} alt="" class="shop-modal__item--image" />
    <div class="wrapper">
        <div class="shop-modal__item--description">
            <p class="shop-modal__item--description-title">{productDetails.name}</p>
            <p class="shop-modal__item--description-price">
                {productDetails.no_price ? 'No Price Listed' : `$${productDetails.price}`}
            </p>
        </div>
        <div class="shop-modal__item--options">
            <select
                    name=""
                    id=""
                    class="shop-modal__item--options-amount"
                    bind:value={product.quantity}
                    on:change={handleQuantityChange}
            >
                <!-- You can generate quantity options dynamically -->
                {#each Array.from({ length: Math.min(productDetails.stock, 10) }, (_, i) as value (i)}
                    <option value={i + 1}>{i + 1}</option>
                {/each}
            </select>
            <i
                    class="shop-modal__item--options-delete"
                    on:click={removeItem}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </i>
        </div>
    </div>
</div>

<style lang="scss">
  @media only screen and (max-width: 576px) {
    .shop-modal__item {
      flex-direction: column;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .shop-modal__item {
    margin: 16px;
    margin-right: 32px;
    display: flex;
    flex-direction: row;
    &--image {
      width: 200px;
      height: 250px;
      margin-right: 16px;
    }
    &--description {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      &-title {
        font-size: 16px;
        margin-bottom: 16px;
      }
      &-price {
        font-size: 16px;
      }
    }

    &--options {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      &-amount {
        margin-bottom: 16px;
        height: 24px;
        width: 32px;
        border-radius: 4px;
        border: 2px solid $color-line;
      }
      &-delete {
        height: 24px;
        width: 24px;
      }
    }
  }
</style>