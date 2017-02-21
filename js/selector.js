/**
 * Created by shiyuwudi on 2017/2/21.
 */

function helloWorld() {
  // $(document).ready(function(){
  //   onReady();
  // });

  // $().ready(function(){
  //   onReady();
  // });

  $(onReady)
}

function onReady() {
  console.log('ready3');
  $("#btn").click(function(){
    $(this).hide();
  });

  $('#btn1').click(function () {
    $('#test').hide();
  });

  $('#btn2').click(function () {
    $('p').hide();
  });

  $('#btn3').click(function () {
    $('.testClass').toggle();
  });
}