<script>
    let email = "";

    function newsletterAlert() {
        // alert("Thank you for signing up to our newsletter!");
        alert("Feature coming soon!");
    }
</script>

<div class="footer__newsletter">
    <p class="footer__newsletter--title">Newsletter</p>
    <p class="footer__newsletter--text">Receive updates from us about new items for sale.</p>
    <div class="footer__newsletter--form">
        <form on:submit={(e) => {
      e.preventDefault();
      // Do something with the email address here, such as subscribing the user to your newsletter.
    }}>
            <input
                    type="email"
                    class="footer__newsletter--form-input"
                    placeholder="Email Address"
                    value={email}
                    on:input={(e) => email = e.target.value}
            />
            <button
                    type="submit"
                    class="footer__newsletter--form-button"
                    on:click={newsletterAlert}
            >
                Sign Up
            </button>
        </form>
    </div>
</div>

<style lang="sass">
  .footer__newsletter
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    margin-top: 48px
    margin-bottom: 48px
    &--title
      font-size: 16px
      color: $color-brown
      margin-right: 20px
    &--text
      font-size: 18px
      margin-right: 20px
    &--form
      &-input
        background-color: $color-white
        //padding: 8px 32px
        padding: 0 32px
        text-align: left
        width: calc(274px - 64px)
        height: 38px
        border: none
        outline: none
        font-size: 18px
        &::placeholder
          color: $color-mid-grey
          text-align: center
      &-button
        background-color: $color-skin !important
        //padding: 8px 16px;
        width: 99px
        height: 38px
        border: none
        outline: none
        font-size: 18px
        cursor: pointer

  @media only screen and (max-width: 1200px)
    .footer__newsletter
      margin-top: 24px
      margin-bottom: 24px
      &--title
        font-size: 12px
        margin-right: 12px
      &--text
        font-size: 16px
        margin-right: 12px
      &--form
        &-input
          //padding: 9px 36px
          padding: 0 16px
          width: calc(168px - 32px)
          height: 30px
          font-size: 16px
        &-button
          //padding: 9px 18px
          width: 81px
          height: 30px
          font-size: 16px

  @media only screen and (max-width: 992px)
    .footer__newsletter
      &--title
        font-size: 11px
        margin-right: 10px
      &--text
        font-size: 14px
        margin-right: 10px
      &--form
        &-input
          padding: 0 8px
          width: calc(144px - 16px)
          height: 27px
          font-size: 14px
        &-button
          width: 79px
          height: 27px
          font-size: 14px

  @media only screen and (max-width: 768px)
    .footer__newsletter
      margin-top: 18px
      margin-bottom: 18px
      &--title
        font-size: 14px
        margin-right: 16px
      &--text
        display: none
      &--form
        &-input
          width: calc(138px - 16px)
          height: 27px
          font-size: 16px
        &-button
          width: 73px
          height: 27px
          font-size: 16px

  @media only screen and (max-width: 576px)
    .footer__newsletter
      flex-direction: column
      margin-top: 0
      &--title
        font-size: 18px
        margin-right: 0
        margin-bottom: 8px
      &--text
        display: none
      &--form
        &-input
          width: calc(144px - 16px)
          height: 27px
          font-size: 14px
        &-button
          width: 79px
          height: 27px
          font-size: 14px
</style>