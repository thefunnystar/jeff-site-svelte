<!-- Hamburger.svelte -->
<script>
    import { slidebarStore, toggleSlidebar } from "$stores/slidebarStore.js";

    function handleClick() {
        toggleSlidebar();
    }
</script>

<div class="header__right--hamburger" on:click={handleClick}>
    <div class="header__right--hamburger-line"></div>
    <div class="header__right--hamburger-line"></div>
    <div class="header__right--hamburger-line"></div>
</div>


<style lang="sass">
  .header__right--hamburger
    display: none

  @media only screen and (max-width: 768px)
    .header__right--hamburger
      margin: auto 0 auto 10px
      display: flex
      flex-direction: column
      height: 22px
      justify-content: space-between
      cursor: pointer
      &-line
        content: ''
        width: 24px
        height: 2px
        background-color: $color-mid-greyish

  @media only screen and (max-width: 576px)
    .header__right--hamburger
      margin: auto 0 auto 8px
</style>