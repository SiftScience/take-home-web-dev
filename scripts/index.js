$(function () {
  var panels = [
    { className: '.panel-one-trigger', displayName: 'display-panel-one' },
    { className: '.panel-two-trigger', displayName: 'display-panel-two' }
  ];

  for (var i = 0; i < panels.length; i++) {
    var panel = panels[i];
    $(panel.className).on('click', function (evt) {
      evt.stopPropagation();

      $('.content')
        .removeClass('display-panel-one')
        .removeClass('display-panel-two')
        .addClass(panel.displayName);
      return false;
    });
  }
});
