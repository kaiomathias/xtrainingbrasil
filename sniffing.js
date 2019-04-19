    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iOS/i);
        }
        
    };

    function checkOs() {
        if (isMobile.Android()) {
            window.open('http://bit.ly/xtrainingandroid', '_blank');

        }
        if(isMobile.iOS()) {
            window.open('http://bit.ly/xtrainingiphone', '_blank');

        }
    }

    /*
    Esse trecho precisa estar dentro do head do html.
     <script type="text/javascript">
     window.onload = function() {
         checkOs;
     }
    </script>
    */
    
   
    
    
   