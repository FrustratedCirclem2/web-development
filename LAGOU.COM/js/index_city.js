(function () {
  var changCity_Btn = document.getElementsByClassName("gw")[0];
  var shade = document.getElementsByClassName("shade")[0];
  var city_selectbox = document.getElementsByClassName("city_selectbox")[0];
  var close_btn = document.getElementsByClassName("city_bar")[0].getElementsByTagName("img")[0];
  var currentCity = document.getElementById('currentCity');
  function shadeClear() {
    shade.style.display = "none";
    city_selectbox.style.display = "none";
  }

  function changCity(event) {
    var target = event.target;
    if(target.tagName.toUpperCase() == 'A') {
      var city = target.dataset.city;
      currentCity.innerText = city;
      shadeClear();
    }
  }

  changCity_Btn.onclick = function () {
    shade.style.display = "block";
    city_selectbox.style.display = "block";
  };
  city_selectbox.onclick = changCity;
  shade.onclick = shadeClear;
  close_btn.onclick = shadeClear;
})();
