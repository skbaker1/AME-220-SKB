var dialogLib = {
  alert:{
    _CB: function(){},
    _bClicked: function(){
      _CB();
      $(".wrapper").remove();
    },
    show: function(msg, label, callback){
      _CB = callback = callback || function(){};
      label = label || "OK";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.alert._bClicked()'>" + label + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    }
  }
  }
}
