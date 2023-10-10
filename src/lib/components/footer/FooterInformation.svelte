<div class="footer__information">
    <p class="footer__information--text">&copy; Jeff and Steve Oliphant</p>
    <p class="footer__information--text">Email: steveoliphant@steve.net</p>
    <p class="footer__information--text">Mobile: 555-555-5555</p>
    <p class="footer__information--text">Sherman Oaks, CA 99999</p>
</div>

<style lang="sass">
  .footer__information
      padding-bottom: 64px
      display: flex
      flex-direction: column
      align-items: center
      &--text
        margin-top: 0
        margin-bottom: 4px
        font-size: 18px

  @media only screen and (max-width: 1200px)
    .footer__information
      padding-bottom: 32px
      &--text
        margin-bottom: 3px
        font-size: 16px

  @media only screen and (max-width: 992px)
    .footer__information
      padding-bottom: 24px
      &--text
        margin-bottom: 2px
        font-size: 14px

  @media only screen and (max-width: 768px)
    .footer__information
      padding-bottom: 18px
      &--text
        margin-bottom: 8px
        font-size: 16px

  @media only screen and (max-width: 576px)
    .footer__information
      padding-bottom: 12px
      &--text
        margin-bottom: 8px
        font-size: 14px
</style>