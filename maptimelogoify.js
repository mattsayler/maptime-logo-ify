// function to maptime logo-ify some text. Requires jQuery

function MaptimeLogoify(logoText, targetClass, targetClassStyle) {
  logoText = typeof logoText !== 'undefined' ? logoText : "#maptime!"; //Default text
  targetClass = typeof targetClass != 'undefined' ? targetClass : "logo"; //Default target div class
  
  var target = "div." + targetClass;
  var colors = [["red","#ff0000"], 
                ["orange","#ffa500"], 
                ["yellow","#ffff00"], 
                ["green","#008000"], 
                ["blue","#00dddd"], 
                ["indigo","#800080"]];
  
  // Append & style a div for each color to the target.
  // The color names (i.e. "indigo") are used for div
  // classes in case you want to do some additional
  // styling or add animation, etc.
  for (i = 0; i < 6; i++ ) {
    var cssAttribs = {"color":colors[i][1], 
                     "z-index":"inherit+" + String(i), 
                     "position":"absolute",
                     "top":String(i*0.04) + "em",
                     "left":String(i*0.02) + "em"
                     };
    
    $(target).append($("<div></div>")
                      .addClass(colors[i][0])
                      .text(logoText)
                      .css(cssAttribs)
                    );
  };
  
  // Optionally, styling for the target div can be passed in via 
  // the 'targetClassStyle' parameter (instead of defining it in 
  // the head or a css doc)
  if (targetClassStyle !== undefined & targetClassStyle !== null & targetClassStyle !== "") {
    $(target).css(targetClassStyle);
  };

};
