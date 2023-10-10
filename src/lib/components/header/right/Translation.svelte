<script>
import translationIcon from "$images/translation_icon.png";

function translationButton() {
    alert(
        "功能暫時不可用。\n아직 기능을 사용할 수 없습니다.\nFeature is not yet available.",
    );
}
</script>

<img src={translationIcon} on:click={translationButton} alt="" class="header__right--translation-icon">

<style lang="sass">
    .header__right--translation-icon
      margin: 0 0 0 18px
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      cursor: pointer
      position: relative
      width: auto
      height: 60px

    @media only screen and (max-width: 1200px)
      .header__right--translation-icon
        margin: 0 0 0 18px
        height: 48px

    @media only screen and (max-width: 992px)
        .header__right--translation-icon
            margin: 0 0 0 12px
            height: 36px

    // slidebar only
    @media only screen and (max-width: 768px)
        .header__right--translation-icon
            height: 29px

    // mini header right
    @media only screen and (max-width: 576px)
      .header__right--translation-icon
        margin: auto 0 auto 8px
        height: 29px
</style>