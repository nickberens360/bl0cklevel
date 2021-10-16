import MyComponent from '../../../../slices/TextImageRight';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"heading1","text":"Expedite transparent ROI","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco labore reprehenderit cupidatat nisi incididunt laboris nulla enim minim. Ea nisi proident consequat minim dolor voluptate.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
