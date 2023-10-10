<script>
    function scrollToBottom() {
        window.scrollTo(0,document.body.scrollHeight);
    }
</script>

<nav class="header__center">
    <a class="header__center--link" href="/">Home</a>
    <a class="header__center--link" href="/forsale">For Sale</a>
    <a class="header__center--link" href="/faq">FAQ</a>
    <a class="header__center--link" href="/about">About</a>
    <p class="header__center--link" on:click={scrollToBottom}>Contact</p>
</nav>

<style lang="scss">
  @mixin headerCenter {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .header__center {
    position: absolute;
    margin: auto;
    @include headerCenter();
    display: flex;
    align-items: center;

    &--link {
      color: $color-gold;
      text-decoration: none;
      font-size: 20px;
      margin-right: 48px;
      cursor: pointer;
    }

    &--link:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    .header__center--link {
        margin-right: 24px;
    }
  }

  @media only screen and (max-width: 992px) {
    .header__center--link {
        font-size: 16px;
        margin-right: 18px;
    }
  }

  // Unconventional screen size
  @media only screen and (max-width: 800px) {
    .header__center--link {
        margin-right: 12px;
    }
  }

  // Do not display anything on sm/xs screens
  @media only screen and (max-width: 768px) {
    .header__center {
      position: static;
      left: auto;
      transform: translateX(0);
      height: 37.77px;
      margin: 0;
    }
  }

    @media only screen and (max-width: 576px) {
        .header__center {
          position: static;
          left: auto;
          transform: translateX(0);
          height: auto;
          flex-direction: column;

          &--link {
            margin-right: 0;
            margin-bottom: 12px;
            font-size: 18px;
          }

          &--link:last-child {
            margin-top: 0 !important;
            margin-bottom: 0;
          }

          &--link:first-of-type {
            margin-top: 18px;
          }
        }
    }
</style>