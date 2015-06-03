
ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [50.43720129, 30.52230100],
                zoom: 15,
                behaviors: [],
                controls: ["zoomControl"] //,"searchControl"
            });

            myPlacemark = new ymaps.Placemark([50.43720129, 30.52230100], {
              balloonContentHeader: "Главный офис",
              balloonContentBody: "Киев, Спортивная площадь 1а</br></br>тел. +38(050) 123-12-12</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+38(050) 123-12-12",
             balloonContentFooter: ""
            });

            myMap.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open();

        }



$(document).ready(function(){

$('input[name="phone"]').inputmask("+38(999)999-99-99");
$('.fancybox').fancybox({
    padding: 0,
    helpers: { overlay: { locked: false } }
  });

$('a.call-back-link').fancybox({
    padding: 0,
    helpers: { overlay: { locked: false, openEffect:'elastic',openMethod:'zoomOut' } }
  });

$('div.col-cat-wrap').on('click', 'a', function(e){
    event.preventDefault(e);
    var d=Array();

    //$(this).parent().find('.cat-model-wrap').children().each(function(ind,elm){d[ind]=elm;});
    console.log( $(this).parent().find('.cat-h3').html());
    var t=$(this).parent();
    $('#pop-model').html(t.find('.cat-h3').html()+'<br>'+t.find('.cat-desc').html());
    $('#pop-img').attr('src', t.find('.cat-img').attr('src'));

    $.fancybox({
        padding: 0,
        //type: "inline",
        helpers: { overlay: { locked: false } },
        href: "#model"

    });

});

});
