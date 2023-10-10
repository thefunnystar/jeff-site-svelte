<script>
    import HeaderCenter from '$components/header/HeaderCenter.svelte';
    import HeaderRight from "$components/header/HeaderRight.svelte";
    import Slidebar from "$components/header/slidebar/Slidebar.svelte";
    import { slidebarStore } from "$stores/slidebarStore.js";

    let slidebarOpen;

    // Subscribe to the slidebarStore to get the isOpen value
    slidebarStore.subscribe(($slidebarStore) => {
        slidebarOpen = $slidebarStore.isOpen;
    });
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<div class="header-container">
    <header class="header">
        <div class="header__left">
            <a href="/">Oliphant Antiques</a>
        </div>
        <div class="header__center">
            <HeaderCenter />
        </div>
        <HeaderRight />
    </header>
<!--    <div class="header__slidebar" style="display: {slidebarOpen ? 'block' : 'none'}">-->
<!--        <Slidebar />-->
<!--    </div>-->
</div>

<style lang="scss">
  .header {
    height: 110px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: $color-light-greyish;
    border-bottom: 4px solid $color-mid-greyish;

    &__left {
      margin-right: auto;
      margin-left: 32px;

      & > * {
        font-family: 'Dancing Script', cursive;
        text-decoration: none;
        color: $color-yellow;
        font-size: 36px;
      }
    }

    &__center {
      display: flex;
      align-items: center;
    }

    &__slidebar {
      display: none;
    }
  }

  @media only screen and (max-width: 1200px) {
    .header {
      height: 88px;
      border-bottom: 3px solid $color-mid-greyish;

      &__left {
        margin-left: 24px;

        & > * {
          font-size: 30px;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .header {
      height: 68px;
      border-bottom: 2px solid $color-mid-greyish;

      &__left {
        margin-left: 24px;

        & > * {
          font-size: 24px;
        }
      }
    }
  }

    @media only screen and (max-width: 768px) {
        .header {
        height: 54px;
        border-bottom: 1px solid $color-mid-greyish;

            &__left {
                margin-left: 12px;

                & > * {
                font-size: 24px;
                }
            }

            &__center {
                display: none;
            }
        }
    }
</style>