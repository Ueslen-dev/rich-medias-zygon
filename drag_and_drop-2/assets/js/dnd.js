function _(id) {
  return document.getElementById(id);
}

var droppedIn = false;
var lvl = 1;

window.onload = function () {

  var dropZone = _('drop_zone');

  dropZone.addEventListener('dragenter', handleDragEnter, false);
  dropZone.addEventListener('dragleave', handleDragLeave, false);
  dropZone.addEventListener('drop', handleDragDrop, false);

  function handleDragEnter(e) {
  }

  function handleDragLeave(e) {
  }

  function handleDragDrop(e) {

    e.preventDefault();
    var element_id = e
      .dataTransfer
      .getData("text");
    e.
      target
      .appendChild(_(element_id));
    _(element_id).removeAttribute("draggable")
    _(element_id).style.display = 'none';
    _('toy').classList.add('level-' + lvl);
    _('title').style.backgroundImage = "url('assets/img/l"+lvl+".png')"; 
    _(element_id).style.cursor = "default";
    droppedIn = true;
    lvl++;
    if (lvl >= 6) {
      setTimeout(function () {
        _('main').style.display = 'none';
        _('wrapper').style.display = 'block';
      }, 300);
    }
  }


  let objects = document.querySelectorAll('.object');
  objects.forEach(function (object) {
    object.addEventListener('dragstart', handleDragStart, false);
    object.addEventListener('dragend', handleDragEnd, false);
    object.addEventListener('touchstart', handleTouchStart, false);
    object.addEventListener('touchmove', handleTouchMove, false);
    object.addEventListener('touchend', handleTouchEnd, false);
  });


  function handleDragStart(e) {

    e.dataTransfer.dropEffect = "move";
    e
      .dataTransfer
      .setData("text", e.target.getAttribute('id'));
  }

  function handleDragEnd(e) {
    if (droppedIn == false) {

    }
    droppedIn = false;
  }

  function handleTouchStart(e) {

    originalX = (e.target.offsetLeft - 10) + "px";
    originalY = (e.target.offsetTop - 10) + "px";
    activeEvent = 'start';
  }

  function handleTouchMove(e) {
    var touchLocation = e.targetTouches[0];
    var pageX = (touchLocation.pageX - 50) + "px";
    var pageY = (touchLocation.pageY - 50) + "px";
    e.target.style.position = "absolute";
    e.target.style.left = pageX;
    e.target.style.top = pageY;
    activeEvent = 'move';
  }

  function handleTouchEnd(e) {
    e.preventDefault();

    if (activeEvent === 'move') {
      var pageX = (parseInt(e.target.style.left) - 50);
      var pageY = (parseInt(e.target.style.top) - 50);

      if (detectTouchEnd(dropZone.offsetLeft, dropZone.offsetTop, pageX, pageY, dropZone.offsetWidth, dropZone.offsetHeight)) {
        dropZone.appendChild(e.target);
        e.target.style.position = "initial";
        e.target.style.display = 'none';
        droppedIn = true;
        _('toy').classList.add('level-' + lvl);
        _('title').style.backgroundImage = "url('assets/img/l"+lvl+".png')"; 
        lvl++;
        if (lvl >= 6) {
          setTimeout(function () {
            _('main').style.display = 'none';
            _('wrapper').style.display = 'block';
          }, 300);
        }
      } else {
        e.target.style.left = originalX;
        e.target.style.top = originalY;
      }
    }
  }

  function detectTouchEnd(x1, y1, x2, y2, w, h) {
    if (x2 - x1 > w)
      return false;
    if (y2 - y1 > h)
      return false;
    return true;
  }
}
