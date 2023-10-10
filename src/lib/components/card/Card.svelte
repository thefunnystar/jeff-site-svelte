<script>
    const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    export let name, no_price, price, image;

    function addToCart(product) {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || {};
        const currentQuantity = existingCart[product.name] || 0;
        existingCart[product.name] = currentQuantity + 1;
        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${product.name} was added to cart!`);
        console.log(existingCart);
    }
</script>

<div class="card">
    <img src={image} class="card__image" alt="" />
    <p class="card__title">{name}</p>
    {#if no_price}
        <p class="card__price">No Price Listed</p>
    {:else}
        <p class="card__price">${numberWithCommas(price)}</p>
    {/if}
    <button class="card__button" on:click={() => addToCart({ name, no_price, price, image })}>Add to Shopping List</button>
</div>

<style lang="scss">
  .card {
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__image {
      width: 228px;
      height: 250px;
    }
    &__title {
      color: $color-light-blue;
      font-size: 16px;
      margin: 4px auto;
    }
    &__price {
      font-size: 16px;
      margin: 4px auto;
    }
    &__button {
      cursor: pointer;
      border: none;
      width: 178px;
      height: 43px;
      color: $color-white;
      border-radius: 8px;
      padding: 8px;
      background-color: $color-blue;
      margin: 4px auto;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .card:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 768px) {
    .card {
      margin-right: 16px;
    }
  }
</style>