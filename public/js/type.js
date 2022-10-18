//TypeWritting Effect
$(document).ready(function () {
  var tickr = [
    '<del style="color: white" ><ins>Connecting...</ins><ins>1.5</ins></del>',
    '<span style="color:white;">Seja bem vindo ao<br></span><span style="color: blue">Code Guide<ins>3</ins></span>',
  ];

  $("#demo_3").t(tickr.join((x = "<ins>1.2</ins><del>*</del>")) + x, {
    speed: 45,
    repeat: true,
    pause_on_click: true,
  });
});
