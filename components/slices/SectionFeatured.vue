<template>
  <section class='content-section section-feature'>
    <h1>{{ $prismic.asText(slice.primary.heading) }}</h1>
    <prismic-rich-text class="content-section" :class="'text-section-' + slice.slice_label" :field="slice.primary.content"/>
    <prismic-image :field="slice.primary.background_image"/>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'section-featured'
}
</script>

<style lang="sass" scoped>
.quote blockquote
  display: block
  font-family: 'Lora', Serif
  font-size: 36px
  font-style: italic
  font-weight: normal
  color: #484D52
  letter-spacing: 1.14
  line-height: 1.5em
  quotes: "“" "”" "‘" "’"
  text-align: center

  &:before
    color: #e9e9e9
    content: open-quote
    font-family: 'Lora', Serif
    font-size: 2.5em
    font-weight: 900
    line-height: 0.1em
    margin-left: 10px
    margin-right: 10px
    vertical-align: -0.3em

  &:after
    color: #e9e9e9
    content: open-quote
    font-family: 'Lora', Serif
    font-size: 2.5em
    font-weight: 900
    line-height: 0.1em
    margin-left: 10px
    margin-right: 10px
    vertical-align: -0.3em
    content: close-quote

@media (max-width: 767px)
  .content-section
    margin-bottom: 2rem
  .quote
    font-size: 20px
</style>

