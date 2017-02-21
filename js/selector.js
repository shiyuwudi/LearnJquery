/**
 * Created by shiyuwudi on 2017/2/21.
 */

function helloWorld() {
  //ready的第1种写法
  // $(document).ready(function(){
  //   onReady();
  // });

  //ready的第2种写法
  // $().ready(function(){
  //   onReady();
  // });

  //ready的第3种写法
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