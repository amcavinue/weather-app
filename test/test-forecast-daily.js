/*const React = require('react');
const TestUtils = require('react-addons-test-utils');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const store = require('../js/store');
const actions = require('../js/actions/index');
const ForecastDaily = require('../js/components/current-conditions');

describe('ForecastDaily Component', () => {
  it('Renders the component',  () => {
    store.dispatch(
      actions.getCurrWeatherSuccess(
        {"coord":{"lon":-81.86,"lat":41.14},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":17.6,"pressure":1014,"humidity":78,"temp_min":15.8,"temp_max":19.4},"visibility":1207,"wind":{"speed":13.87,"deg":270},"clouds":{"all":90},"dt":1483653060,"sys":{"type":1,"id":2182,"message":0.1901,"country":"US","sunrise":1483620769,"sunset":1483654456},"id":5162512,"name":"Medina","cod":200}
      )
    );
    
    store.dispatch(
      actions.getForecastHourlySuccess(
        {"city":{"id":5162512,"name":"Medina","coord":{"lon":-81.863747,"lat":41.13839},"country":"US","population":0,"sys":{"population":0}},"cod":"200","message":0.1748,"cnt":40,"list":[{"dt":1483660800,"main":{"temp":17.06,"temp_min":17.06,"temp_max":17.81,"pressure":1002.05,"sea_level":1030.16,"grnd_level":1002.05,"humidity":100,"temp_kf":-0.41},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":44},"wind":{"speed":16.02,"deg":258.501},"snow":{"3h":0.006},"sys":{"pod":"n"},"dt_txt":"2017-01-06 00:00:00"},{"dt":1483671600,"main":{"temp":15.8,"temp_min":15.8,"temp_max":16.36,"pressure":1003.18,"sea_level":1031.53,"grnd_level":1003.18,"humidity":100,"temp_kf":-0.31},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":24},"wind":{"speed":16.91,"deg":263.002},"snow":{"3h":0.043},"sys":{"pod":"n"},"dt_txt":"2017-01-06 03:00:00"},{"dt":1483682400,"main":{"temp":13.32,"temp_min":13.32,"temp_max":13.68,"pressure":1004.15,"sea_level":1032.59,"grnd_level":1004.15,"humidity":100,"temp_kf":-0.21},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":20},"wind":{"speed":16.26,"deg":261.005},"snow":{"3h":0.016},"sys":{"pod":"n"},"dt_txt":"2017-01-06 06:00:00"},{"dt":1483693200,"main":{"temp":11.19,"temp_min":11.19,"temp_max":11.37,"pressure":1004.33,"sea_level":1032.96,"grnd_level":1004.33,"humidity":100,"temp_kf":-0.1},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":20},"wind":{"speed":15.23,"deg":259},"snow":{"3h":0.03},"sys":{"pod":"n"},"dt_txt":"2017-01-06 09:00:00"},{"dt":1483704000,"main":{"temp":9.53,"temp_min":9.53,"temp_max":9.53,"pressure":1006.29,"sea_level":1035.02,"grnd_level":1006.29,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":20},"wind":{"speed":16.04,"deg":247.5},"snow":{"3h":0.01775},"sys":{"pod":"n"},"dt_txt":"2017-01-06 12:00:00"},{"dt":1483714800,"main":{"temp":11,"temp_min":11,"temp_max":11,"pressure":1008.55,"sea_level":1037.21,"grnd_level":1008.55,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":8},"wind":{"speed":15.82,"deg":247.5},"snow":{"3h":0.00125},"sys":{"pod":"d"},"dt_txt":"2017-01-06 15:00:00"},{"dt":1483725600,"main":{"temp":15.69,"temp_min":15.69,"temp_max":15.69,"pressure":1008.93,"sea_level":1037.39,"grnd_level":1008.93,"humidity":100,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":14.65,"deg":259.001},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-01-06 18:00:00"},{"dt":1483736400,"main":{"temp":16.32,"temp_min":16.32,"temp_max":16.32,"pressure":1010.17,"sea_level":1038.66,"grnd_level":1010.17,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":20},"wind":{"speed":14.81,"deg":253.001},"snow":{"3h":0.0025},"sys":{"pod":"d"},"dt_txt":"2017-01-06 21:00:00"},{"dt":1483747200,"main":{"temp":13.36,"temp_min":13.36,"temp_max":13.36,"pressure":1012.35,"sea_level":1041.12,"grnd_level":1012.35,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":20},"wind":{"speed":14.45,"deg":256.006},"snow":{"3h":0.0125},"sys":{"pod":"n"},"dt_txt":"2017-01-07 00:00:00"},{"dt":1483758000,"main":{"temp":11.28,"temp_min":11.28,"temp_max":11.28,"pressure":1013.97,"sea_level":1042.98,"grnd_level":1013.97,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":12},"wind":{"speed":14.34,"deg":251.502},"snow":{"3h":0.005},"sys":{"pod":"n"},"dt_txt":"2017-01-07 03:00:00"},{"dt":1483768800,"main":{"temp":8.68,"temp_min":8.68,"temp_max":8.68,"pressure":1015.37,"sea_level":1044.47,"grnd_level":1015.37,"humidity":100,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":14.45,"deg":251},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-07 06:00:00"},{"dt":1483779600,"main":{"temp":7.25,"temp_min":7.25,"temp_max":7.25,"pressure":1015.99,"sea_level":1045.31,"grnd_level":1015.99,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":13.22,"deg":261.004},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-07 09:00:00"},{"dt":1483790400,"main":{"temp":6.56,"temp_min":6.56,"temp_max":6.56,"pressure":1017.21,"sea_level":1046.43,"grnd_level":1017.21,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":13.22,"deg":254.503},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-07 12:00:00"},{"dt":1483801200,"main":{"temp":7.99,"temp_min":7.99,"temp_max":7.99,"pressure":1018.19,"sea_level":1047.43,"grnd_level":1018.19,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":13.78,"deg":244},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-01-07 15:00:00"},{"dt":1483812000,"main":{"temp":14.81,"temp_min":14.81,"temp_max":14.81,"pressure":1017.4,"sea_level":1046.11,"grnd_level":1017.4,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":15.08,"deg":247.502},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-01-07 18:00:00"},{"dt":1483822800,"main":{"temp":17.3,"temp_min":17.3,"temp_max":17.3,"pressure":1015.97,"sea_level":1044.73,"grnd_level":1015.97,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":48},"wind":{"speed":17.69,"deg":249.502},"snow":{"3h":0.0025},"sys":{"pod":"d"},"dt_txt":"2017-01-07 21:00:00"},{"dt":1483833600,"main":{"temp":16.21,"temp_min":16.21,"temp_max":16.21,"pressure":1016.22,"sea_level":1044.96,"grnd_level":1016.22,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":64},"wind":{"speed":20.71,"deg":251.005},"snow":{"3h":0.0075},"sys":{"pod":"n"},"dt_txt":"2017-01-08 00:00:00"},{"dt":1483844400,"main":{"temp":15.23,"temp_min":15.23,"temp_max":15.23,"pressure":1015.61,"sea_level":1044.58,"grnd_level":1015.61,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":56},"wind":{"speed":23.71,"deg":260.502},"snow":{"3h":0.025},"sys":{"pod":"n"},"dt_txt":"2017-01-08 03:00:00"},{"dt":1483855200,"main":{"temp":15.35,"temp_min":15.35,"temp_max":15.35,"pressure":1015.79,"sea_level":1045.01,"grnd_level":1015.79,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":20},"wind":{"speed":23.85,"deg":300.011},"snow":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2017-01-08 06:00:00"},{"dt":1483866000,"main":{"temp":15.15,"temp_min":15.15,"temp_max":15.15,"pressure":1017.18,"sea_level":1046.55,"grnd_level":1017.18,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":36},"wind":{"speed":21.83,"deg":305.008},"snow":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2017-01-08 09:00:00"},{"dt":1483876800,"main":{"temp":14.93,"temp_min":14.93,"temp_max":14.93,"pressure":1019,"sea_level":1048.54,"grnd_level":1019,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":19.06,"deg":308.001},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-08 12:00:00"},{"dt":1483887600,"main":{"temp":16.62,"temp_min":16.62,"temp_max":16.62,"pressure":1021.24,"sea_level":1050.61,"grnd_level":1021.24,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":12},"wind":{"speed":18.52,"deg":292.003},"snow":{"3h":0.0025},"sys":{"pod":"d"},"dt_txt":"2017-01-08 15:00:00"},{"dt":1483898400,"main":{"temp":17.71,"temp_min":17.71,"temp_max":17.71,"pressure":1021.76,"sea_level":1050.72,"grnd_level":1021.76,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":48},"wind":{"speed":19.82,"deg":288.502},"snow":{"3h":0.01},"sys":{"pod":"d"},"dt_txt":"2017-01-08 18:00:00"},{"dt":1483909200,"main":{"temp":18.81,"temp_min":18.81,"temp_max":18.81,"pressure":1022.11,"sea_level":1051.02,"grnd_level":1022.11,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":48},"wind":{"speed":16.58,"deg":289.002},"snow":{"3h":0.0025},"sys":{"pod":"d"},"dt_txt":"2017-01-08 21:00:00"},{"dt":1483920000,"main":{"temp":17.96,"temp_min":17.96,"temp_max":17.96,"pressure":1023.03,"sea_level":1052.15,"grnd_level":1023.03,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":64},"wind":{"speed":14.45,"deg":267.502},"snow":{"3h":0.0075},"sys":{"pod":"n"},"dt_txt":"2017-01-09 00:00:00"},{"dt":1483930800,"main":{"temp":16.8,"temp_min":16.8,"temp_max":16.8,"pressure":1023.07,"sea_level":1052.34,"grnd_level":1023.07,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":64},"wind":{"speed":15.73,"deg":249},"snow":{"3h":0.0975},"sys":{"pod":"n"},"dt_txt":"2017-01-09 03:00:00"},{"dt":1483941600,"main":{"temp":12.55,"temp_min":12.55,"temp_max":12.55,"pressure":1023.05,"sea_level":1052.3,"grnd_level":1023.05,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":24},"wind":{"speed":14.25,"deg":234.514},"snow":{"3h":0.04},"sys":{"pod":"n"},"dt_txt":"2017-01-09 06:00:00"},{"dt":1483952400,"main":{"temp":10.61,"temp_min":10.61,"temp_max":10.61,"pressure":1022.63,"sea_level":1051.8,"grnd_level":1022.63,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":64},"wind":{"speed":13.11,"deg":209.501},"snow":{"3h":0.005},"sys":{"pod":"n"},"dt_txt":"2017-01-09 09:00:00"},{"dt":1483963200,"main":{"temp":11.51,"temp_min":11.51,"temp_max":11.51,"pressure":1022.02,"sea_level":1051.12,"grnd_level":1022.02,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":80},"wind":{"speed":14.07,"deg":199},"snow":{"3h":0.015},"sys":{"pod":"n"},"dt_txt":"2017-01-09 12:00:00"},{"dt":1483974000,"main":{"temp":15.35,"temp_min":15.35,"temp_max":15.35,"pressure":1020.82,"sea_level":1049.7,"grnd_level":1020.82,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":17.25,"deg":186.501},"snow":{"3h":0.085},"sys":{"pod":"d"},"dt_txt":"2017-01-09 15:00:00"},{"dt":1483984800,"main":{"temp":22.48,"temp_min":22.48,"temp_max":22.48,"pressure":1018.24,"sea_level":1046.72,"grnd_level":1018.24,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":19.71,"deg":196.504},"snow":{"3h":0.05},"sys":{"pod":"d"},"dt_txt":"2017-01-09 18:00:00"},{"dt":1483995600,"main":{"temp":24.92,"temp_min":24.92,"temp_max":24.92,"pressure":1017.1,"sea_level":1045.35,"grnd_level":1017.1,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":88},"wind":{"speed":17.29,"deg":211.007},"snow":{"3h":0.01},"sys":{"pod":"d"},"dt_txt":"2017-01-09 21:00:00"},{"dt":1484006400,"main":{"temp":22.88,"temp_min":22.88,"temp_max":22.88,"pressure":1017.56,"sea_level":1045.99,"grnd_level":1017.56,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":8},"wind":{"speed":15.93,"deg":205.503},"snow":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2017-01-10 00:00:00"},{"dt":1484017200,"main":{"temp":22.89,"temp_min":22.89,"temp_max":22.89,"pressure":1016.85,"sea_level":1045.32,"grnd_level":1016.85,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":36},"wind":{"speed":15.01,"deg":193.002},"snow":{"3h":0.015},"sys":{"pod":"n"},"dt_txt":"2017-01-10 03:00:00"},{"dt":1484028000,"main":{"temp":20.87,"temp_min":20.87,"temp_max":20.87,"pressure":1016.08,"sea_level":1044.56,"grnd_level":1016.08,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":15.55,"deg":183.003},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-10 06:00:00"},{"dt":1484038800,"main":{"temp":21.52,"temp_min":21.52,"temp_max":21.52,"pressure":1014.39,"sea_level":1042.71,"grnd_level":1014.39,"humidity":100,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":17.25,"deg":180.003},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-01-10 09:00:00"},{"dt":1484049600,"main":{"temp":24.52,"temp_min":24.52,"temp_max":24.52,"pressure":1011.99,"sea_level":1040.2,"grnd_level":1011.99,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":76},"wind":{"speed":19.51,"deg":175.005},"snow":{"3h":0.03},"sys":{"pod":"n"},"dt_txt":"2017-01-10 12:00:00"},{"dt":1484060400,"main":{"temp":29.04,"temp_min":29.04,"temp_max":29.04,"pressure":1009.5,"sea_level":1037.39,"grnd_level":1009.5,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":92},"wind":{"speed":24.29,"deg":175.501},"snow":{"3h":0.795},"sys":{"pod":"d"},"dt_txt":"2017-01-10 15:00:00"},{"dt":1484071200,"main":{"temp":33.74,"temp_min":33.74,"temp_max":33.74,"pressure":1005.49,"sea_level":1033.14,"grnd_level":1005.49,"humidity":100,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":27.98,"deg":182.502},"rain":{"3h":2.32},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-01-10 18:00:00"},{"dt":1484082000,"main":{"temp":37.74,"temp_min":37.74,"temp_max":37.74,"pressure":1001.79,"sea_level":1029.11,"grnd_level":1001.79,"humidity":96,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":30.89,"deg":188.5},"rain":{"3h":4.01},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-01-10 21:00:00"}]} 
      )
    );
    
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <ForecastDaily weather={store.getState().weather}/>
    );
    let result = renderer.getRenderOutput();
    
    // Test the component.
    TestUtils.isElementOfType(result, ForecastDaily);
    
    // Test nested elements.
    expect(result.props.children.length).to.equal(6);
    expect(result.props.children[0].type).to.equal('h2');
    expect(result.props.children[5].type.displayName).to.equal('LineChart');
  });
});*/