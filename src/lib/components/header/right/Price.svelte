<script>
    import {afterUpdate, onMount} from "svelte";
    import axios from "axios";
    import dotenv from "$data/dotenv.js";

    let price = 0;
    let products = [];

    onMount(async () => {
        try {
            const res = await axios.get(`${dotenv}/api/store/`);
            products = res.data;
        } catch (err) {
            console.log(err);
        }
    });

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function calculateTotalPrice() {
        price = cart.reduce((total, cartItem) => {
            const product = products.find(product => product.name === cartItem.productName);
            if (product) {
                total += parseFloat(product.price) * cartItem.quantity;
            }
            return total;
        }, 0);
    }

    afterUpdate(() => {
        calculateTotalPrice();
    });
    const formatPrice = (num) => num.toFixed(2).toString();
</script>

<p class="header__right--price">${price ? formatPrice(price) : "0.00"}</p>

<style lang="sass">
    .header__right--price
      font-size: 20px
      margin-right: 12px

    @media only screen and (max-width: 1200px)
        .header__right--price
          margin-right: 8px

    @media only screen and (max-width: 992px)
        .header__right--price
          margin-right: 6px
          font-size: 16px

    @media only screen and (max-width: 768px)
      .header__right--price
        margin-right: 4px
        font-size: 18px

    //displayed in slidebar
    @media only screen and (max-width: 576px)
      .header__right--price
        margin-right: 12px
        font-size: 18px
</style>