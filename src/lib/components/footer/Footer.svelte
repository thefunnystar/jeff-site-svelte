<script>
    import footerLine from '$images/yyj_line.png'
    import paypal from '$images/paypal.png'
    import FooterCategory from "$components/footer/FooterCategory.svelte";
    import FooterNewsletter from "$components/footer/FooterNewsletter.svelte";
    import FooterInformation from "$components/footer/FooterInformation.svelte";

    const categories = {
        cat1: {
            title: "Purchase",
            text1: "Shopping Cart",
            text2: "Check Out",
        },
        cat2: {
            title: "More Information",
            text1: "Questions",
            text2: "Events",
        },
        cat3: {
            title: "About Us",
            text1: "About",
            text2: "Contact",
        },
    }
</script>

<div class="footer">
    <img src={footerLine} alt="" class="footer__line">
    <div class="footer__categories">
        <FooterCategory categoryTitle={categories.cat1.title} categoryLink1="/checkout" categoryLink2="/checkout" categoryLink1Text={categories.cat1.text1} categoryLink2Text={categories.cat1.text2}>
            <img src={paypal} alt="" class="category__paypal">
        </FooterCategory>
        <FooterCategory categoryTitle={categories.cat2.title} categoryLink1="/faq" categoryLink2="/events" categoryLink1Text={categories.cat2.text1} categoryLink2Text={categories.cat2.text2} />
        <FooterCategory categoryTitle={categories.cat3.title} categoryLink1="/about" categoryLink2="/contact" categoryLink1Text={categories.cat3.text1} categoryLink2Text={categories.cat3.text2} />
    </div>
    <FooterNewsletter />
    <FooterInformation />
</div>

<style lang="sass">
  /* Not normally included */
  .category__paypal
    width: 112.5px
    height: 26.47px

  .footer
    background-color: $color-light-grey
    &__line
      display: flex
      justify-content: center
      width: 800px
      height: 9px
      margin: 0 auto 64px
      padding-top: 64px
    &__categories
      margin: 48px auto
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 600px

  @media only screen and (max-width: 1200px)
    .category__paypal
      width: 90px
      height: 21.18px

    .footer
      &__line
        width: 600px
        height: 7.25px
        margin: 0 auto 32px
        padding-top: 32px
      &__categories
        margin: 24px auto
        width: 450px

  @media only screen and (max-width: 992px)
    .category__paypal
      width: 70px
      height: 17px

    .footer
      &__line
        width: 450px
        height: 4.65px
        margin: 0 auto 24px
        padding-top: 32px
      &__categories
        margin: 20px auto
        width: 325px

  @media only screen and (max-width: 768px)
    .footer
      &__line
        width: 450px
        height: 4px
        margin: 0 auto 16px
        padding-top: 32px
      &__categories
        margin: 18px auto
        width: 375px

  @media only screen and (max-width: 576px)
    .category__paypal
      width: 90px
      height: 21.18px
      margin-top: 8px

    .footer
      &__line
        width: 175px
        height: 4px
        margin: 0 auto 12px
        padding-top: 24px
      &__categories
        flex-direction: column
        align-items: center
        align-content: center
        margin: 12px auto 0
        width: auto
</style>