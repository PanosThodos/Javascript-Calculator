$(document).ready(function() {
  var currNum = '',
      oldNum = '',
      op,
      res;
  // build string of int
  $('.btn-default').on('click', function() {
    if (res) {
      currNum = $(this).data('num');
      res = '';
    } else {
      currNum += $(this).data('num');
    }
    $('#result').text(currNum);
  }); 
  // event when operator is clicked
  $('.btn-primary').on('click', function() {
    oldNum = currNum;
    currNum = '';
    op = $(this).data('num');
  }); 
  //when equals is pressed
  $('.btn-success').on('click', function() {
    oldNum = parseFloat(oldNum);
    currNum = parseFloat(currNum);
    
    switch (op) {
      case 'divide':
        res = oldNum / currNum;
        break;  
      
      case 'multiply':
        res = oldNum * currNum;
        break;
        
      case 'minus':
        res = oldNum - currNum;
        break;
        
      case 'plus':
        res = oldNum + currNum;
        break;
    }    
    $('#result').text(res);
    currNum = res;
  });
  // AC click clears everything and starts from scatch
  $('#allClear').on('click', function() {
    res = 0;
    currNum = '';
    oldNum = '';
    $('#result').text(res);
  });
  
  // CE click clears only current number and show old number
  $('#clearLast').on('click', function() {
    
    $('#result').text(oldNum);
  });
});