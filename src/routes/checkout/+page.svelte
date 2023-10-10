<script>
    import ProductDetails from "$components/shopmodal/ProductDetails.svelte";
    import Summary from "$components/shopmodal/Summary.svelte";
    import {onMount} from "svelte";

    let cartItems = [];

    onMount(async () => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || {};

        // Convert cart data into an array of items
        cartItems = Object.keys(cartData).map((itemName) => ({
            name: itemName,
            quantity: cartData[itemName],
        }));
    })

    // Function to remove an item from the cart
    function removeFromCart(itemName) {
        // Get the current cart data from local storage
        const cartData = JSON.parse(localStorage.getItem("cart")) || {};

        if (cartData[itemName]) {
            // Decrease the quantity by 1
            cartData[itemName] = Math.max(0, cartData[itemName] - 1);

            // If the quantity reaches 0, remove the item from the cart data
            if (cartData[itemName] === 0) {
                delete cartData[itemName];
            }

            // Update the cart data in local storage
            localStorage.setItem("cart", JSON.stringify(cartData));

            // Refresh the cart items state to reflect the removal or quantity update
            cartItems = Object.keys(cartData).map((itemName) => ({
                name: itemName,
                quantity: cartData[itemName],
            }));
        }
    }
</script>

<div>
    <p class="shop-header">Checkout</p>
    <div class="shop-modal">
        <div class="shop-modal__items">
            {#each cartItems as cartItem, index}
                <ProductDetails
                        product={cartItem}
                        removeFromCart={removeFromCart}
                        key={index}
                />
            {/each}
        </div>
        <Summary />
    </div>
</div>

<style lang="scss">
  .shop {
    &-header {
      margin: 64px auto;
      font-weight: 600;
      font-size: 32px;
    }

    &-modal {
      border-radius: 16px;
      border: 1px solid $color-border;
      width: 1280px;
      min-height: 380px;
      display: flex;
      flex-direction: row;

      &__items {
        //width: 768px;
        width: 648px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .shop {
      &-header {
        margin: 48px auto;
        font-size: 32px;
      }

      &-modal {
        border-radius: 16px;
        width: 980px;
        min-height: 380px;

        &__items {
          width: 588px;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .shop {
      &-header {
        margin: 48px auto;
        font-size: 32px;
      }

      &-modal {
        flex-direction: column;
        border-radius: 12px;
        width: 730px;
        min-height: 0;

        &__items {
          width: 730px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .shop {
      &-header {
        margin: 32px auto;
        font-size: 32px;
      }

      &-modal {
        flex-direction: column;
        border-radius: 12px;
        width: 565px;
        min-height: 0;

        &__items {
          width: 565px;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .shop {
      &-header {
        margin: 16px auto;
        font-size: 16px;
      }

      &-modal {
        flex-direction: column;
        border-radius: 8px;
        width: 280px;
        min-height: 0;

        &__items {
          width: 280px;
        }
      }
    }
  }
</style>