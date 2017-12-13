;(function () {
  "use strict";

  var nameMassage = document.querySelector('.ba-name__massage'),//choose div
      massageField = document.querySelector('.ba-your__massege');//choose textarea

      massageField.hidden = true;//fiel textarea the default is hidden

      document.addEventListener('keydown', editorInit);

      function editorInit(event){
        console.log(event.keyCode);

        if(event.keyCode == 69 && event.ctrlKey && massageField.hidden){ // when press ctrl+E
          event.preventDefault();//remove default actions
          massageField.value = nameMassage.innerHTML.trim();
          nameMassage.hidden = true;//screech
          massageField.hidden = false;//show
          massageField.focus();//focus on text area
        }

        if(event.keyCode == 83 && event.ctrlKey && !massageField.hidden){//when press ctrl+S
            event.preventDefault();
            console.log('Hello');
            nameMassage.innerHTML = massageField.value;
            nameMassage.hidden = false;//show
            massageField.hidden = true;//screech
        }
        if(event.keyCode == 27 && !massageField.hidden){//when press ESC
            event.preventDefault();
            nameMassage.hidden = false;//show
            massageField.hidden = true;//screech
        }
      }

})();
