<script>
    import HeaderCenter from "$components/header/HeaderCenter.svelte";
    import Translation from "$components/header/right/Translation.svelte";
    import Price from "$components/header/right/Price.svelte";
    import Bag from "$components/header/right/Bag.svelte";
</script>

<div class="slidebar-container">
    <div class="slidebar">
        <HeaderCenter />
        <div class="slidebar__translation">
            <Translation />
        </div>
        <div class="slidebar__shopping">
            <Price />
            <Bag />
        </div>
    </div>
</div>

<style lang="scss">
  .slidebar-container {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .slidebar {
      width: calc(100% - 8px);
      height: 37.77px;
      background-color: $color-light-grey;
      border-radius: 4px;
      transition: left 0.3s ease;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;

      &-container {
        transform: translateY(2px);
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        height: 100%;
      }

      &__translation {
        display: flex;
        align-items: center;
      }
      
      &__shopping {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .slidebar {
      flex-direction: column;
      width: calc(100% - 8px);
      height: auto;

      &-container {
        transform: translateY(4px);
      }

      &__translation {
        display: none;
      }

      &__shopping {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 6px;
      }
    }
  }
</style>