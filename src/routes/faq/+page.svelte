<script>
    import {onMount} from "svelte";
    import axios from "axios";
    import dotenv from "$data/dotenv.js";

    let faqData = [];
    let isRotated = [];

    onMount(() => {
        async function fetchData() {
            try {
                // const res = await fetch(`${process.env.DJANGO_API_URL}/api/faq/`);
                // const res = await fetch(`http://localhost:8000/api/faq/`);
                // faqData = await res.json();
                const res = await axios.get(`${dotenv}/api/faq/`);
                faqData = res.data;
                isRotated = new Array(faqData.length).fill(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    });

    function toggleRotation(idx) {
        const updatedIsRotated = [...isRotated];
        updatedIsRotated[idx] = !updatedIsRotated[idx];
        isRotated = updatedIsRotated;
    }

    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }
</script>

<div class="faq">
    <p class="faq__title">Frequently Asked Questions</p>
    {#each faqData as item, idx}
        <div class={`faq__div ${isRotated[idx] ? "shadow-enabled" : ""}`} key={idx}>
            <div class="faq__div--face">
                <p class="faq__div--face-question">{item.question}</p>
                <button
                        class={`faq__div--face-toggle ${isRotated[idx] ? "rotated" : ""}`}
                        on:click={() => toggleRotation(idx)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                </button>
            </div>
            <p class={`faq__div--answer ${isRotated[idx] ? "show-answer" : ""}`}>{item.answer}</p>
        </div>
    {/each}
    <p class="faq__contact">For other inquiries, please visit the contact page: <span class="faq__contact--span" on:click={scrollToBottom}>Contact Us</span></p>
</div>

<style lang="scss">
  .faq {
    background-color: $color-background;

    &__title {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      margin: 0 auto 64px;
      padding-top: 64px;
    }

    &__div {
      width: 1000px;
      margin: 32px auto;
      border: $color-border 1px solid;
      border-radius: 16px;

      &--face {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 48px;

        &-question {
          margin-right: auto;
          font-size: 18px;
        }

        &-toggle {
          cursor: pointer;
          border: none;
          background-color: transparent;
        }

        &-toggle > * {
          font-size: 20px;
        }
      }

      &--answer {
        display: none;
        margin: 48px;
      }
    }

    &__contact {
      font-size: 20px;
      text-align: center;
      margin: 64px auto 0;
      padding-bottom: 64px;

      &--span {
        color: $color-light-blue;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

  //More Styles

  .rotated {
    transform: rotate(180deg);
    transition: .9s ease;
  }

  .show-answer {
    display: block;
    transition: .9s ease;
  }

  .shadow-enabled {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
    background-color: $color-white;
    transition: .9s ease;
  }

  @media only screen and (max-width: 1200px) {
    .faq {
      &__title {
        font-size: 20px;
        margin: 0 auto 48px;
      }
      &__div {
        width: 628.12px;
        margin: 24px auto;
        &--face {
          margin: 48px;
          &-question {
            font-size: 16px;
          }
          &-toggle > * {
            font-size: 16px;
          }
        }
        &--answer {
          margin: 48px;
        }
      }
      &__contact {
        font-size: 18px;
        margin: 48px auto 0;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .faq {
      &__title {
        font-size: 18px;
        margin: 0 auto 32px;
      }
      &__div {
        width: 519.25px;
        margin: 18px auto;
        &--face {
          margin: 32px;
          &-question {
            font-size: 16px;
          }
          &-toggle > * {
            font-size: 16px;
          }
        }
        &--answer {
          margin: 32px;
        }
      }
      &__contact {
        font-size: 16px;
        margin: 32px auto 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .faq {
      &__title {
        font-size: 16px;
        margin: 0 auto 24px;
      }
      &__div {
        width: 452.25px;
        margin: 16px auto;
        &--face {
          margin: 24px;
          &-question {
            font-size: 12px;
          }
          &-toggle > * {
            font-size: 12px;
          }
        }
        &--answer {
          margin: 24px;
        }
      }
      &__contact {
        font-size: 14px;
        margin: 24px auto 0;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .faq {
      &__title {
        font-size: 20px;
        margin: 0 auto 32px;
      }
      &__div {
        width: 452.25px;
        margin: 16px auto;
        &--face {
          margin: 24px;
          &-question {
            font-size: 12px;
          }
          &-toggle > * {
            font-size: 12px;
          }
        }
        &--answer {
          margin: 24px;
        }
      }
      &__contact {
        font-size: 14px;
        margin: 24px auto 0;
      }
    }
  }
</style>