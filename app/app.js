import Vue2Leaflet from 'vue2-leaflet';
 
Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);

new Vue({ el: '#app'});

alert('hey');