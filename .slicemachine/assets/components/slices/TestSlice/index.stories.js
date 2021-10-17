import MyComponent from '../../../../../components/slices/TestSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'components/slices/TestSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"test_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Embrace sexy e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Deserunt ipsum nulla ad voluptate commodo aliqua sit proident duis ex ullamco. Ipsum ut qui cillum velit in eiusmod mollit ea. Velit quis enim velit velit exercitation velit pariatur fugiat sint.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1495476479092-6ece1898a101?w=900&h=500&fit=crop"},"picker":"#37d67a"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
