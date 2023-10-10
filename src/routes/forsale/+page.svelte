<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import Card from "$components/card/Card.svelte";
    import dotenv from "$data/dotenv.js";

    let products = [];

    let productDescriptions = [];
    let categories = [];
    let descriptions = [];

    onMount(async () => {
        try {
            const res = await axios.get(`${dotenv}/api/category/`);
            // console.log(res.data);
            productDescriptions = res.data.map(item => {
                return {
                    category: item.category,
                    description: item.description,
                };
            });
            categories = productDescriptions.map(item => item.category);
            descriptions = productDescriptions.map(item => item.description);
        } catch (err) {
            console.log(err);
        }
    });

    onMount(async () => {
        try {
            const res = await axios.get(`${dotenv}/api/store/`);
            // console.log(res.data);
            products = res.data;
        } catch (err) {
            console.log(err);
        }
    });

    function formatUnderscore(string) {
        return string.replace(/ /g, "_");
    }
</script>

<div class="forsale">
    <p class="forsale__header">For Sale</p>
    <p class="forsale__header--text">
        &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Dolorem assumenda corporis labore blanditiis ipsum,
        impedit adipisci delectus suscipit. Vel, eligendi facilis. Optio error
        labore odio numquam aut magnam quasi inventore! Voluptas, accusantium
        harum debitis quo ducimus neque culpa ab, saepe cumque vitae laboriosam,
        aliquid velit illo quod quaerat alias sunt iste? Molestiae quidem
        possimus inventore corporis ex consectetur vitae accusamus?
    </p>
    {#each categories as category, index}
        <div class="forsale__category" key={index}>
            <p class="forsale__category--title" id={formatUnderscore(category)}>{category}</p>
            <p class="forsale__category--desc">{descriptions[index]}</p>
            <div class="forsale__category--div">
                {#each products as product}
                    {#if product.category === category}
                        <Card
                            class="forsale__category--div-card"
                            key={product.id}
                            name={product.name}
                            no_price={product.no_price}
                            price={product.price}
                            image={product.image}
                        >
                        </Card>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  .forsale {
    margin: 0 auto;
    &__header {
      margin-top: 64px;
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      &--text {
        margin: 64px auto;
        font-size: 16px;
        line-height: 1.5;
        width: 1008px;
      }
    }

    &__category {
      margin: 0 auto 48px;
      width: 1008px;
      &--title {
        margin-right: auto;
        margin-bottom: 32px;
        font-weight: 600;
        font-size: 24px;
      }
      &--desc {
        line-height: 1.5;
      }
      &--div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: auto;
        margin-top: 32px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .forsale {
      margin: 0 auto;
      &__header {
        margin-top: 64px;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        &--text {
          margin: 64px auto;
          font-size: 16px;
          line-height: 1.5;
          width: 748px;
        }
      }

      &__category {
        margin: 0 auto 48px;
        width: 748px;
        &--title {
          margin-right: auto;
          margin-bottom: 32px;
          font-weight: 600;
          font-size: 24px;
        }
        &--desc {
          line-height: 1.5;
        }
        &--div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-right: auto;
          margin-top: 32px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .forsale {
      margin: 0 auto;
      &__header {
        margin-top: 64px;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        &--text {
          margin: 64px auto;
          font-size: 16px;
          line-height: 1.5;
          width: 488px;
        }
      }

      &__category {
        margin: 0 auto 48px;
        width: 488px;
        &--title {
          margin-right: auto;
          margin-bottom: 32px;
          font-weight: 600;
          font-size: 24px;
        }
        &--desc {
          line-height: 1.5;
        }
        &--div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-right: auto;
          margin-top: 32px;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .forsale {
      width: 250px;
      &__header {
        margin-top: 16px;
        font-size: 24px;
        &--text {
          margin: 16px auto 32px;
          font-size: 16px;
          width: 250px;
          line-height: 1;
        }
      }
      &__category {
        margin: 0 0 12px;
        &--title {
          margin-bottom: 8px;
          font-size: 20px;
        }
        &--desc {
            font-size: 16px;
          line-height: 1;
          width: 250px;
          margin-bottom: 16px;
        }
        &--div {
          max-width: 400px;
          margin-top: 8px;
        }
      }
    }
  }
</style>