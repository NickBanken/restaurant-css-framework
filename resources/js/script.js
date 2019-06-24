var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  en:{
    login: "Log in",
    welcome: "Most delicious pizza's"+ "<br> "+" Hot delivery within 30mins!",
    deliver: "Delivery",
    takeout: "Take-out",
    checkout: "Check It out!",
    checkMenu: "Check our menu",
    ourMenu: "OUR PROMOTIONS",
    dinerAt: "Come diner in one"+"<br>"+" of our restaurants!",
    findRest: "Find restaurants",
    newsletter:"Newsletter",
    getOurPromo:"Get our promotions",
    allAbout:"About Pizza Mane",
    orderOnline:"Order Online"
  },
  fr:{
    login: "se connecter",
    welcome: "Livraison à chaud des plus délicieuses pizza's "+ "<br> "+" dans les 30 minutes!",
    deliver: "Livraison",
    takeout: "À emporter",
    checkout: "Vérifiez-le",
    checkMenu: "consultez notre menu",
    ourMenu: "notre menu",
    dinerAt: "Venez dîner en unde nos restaurants",
    findRest: "trouver des restaurants",
    newsletter:"lettre d'information",
    getOurPromo:"obtenir notre promotion",
    allAbout:"Tout sur nous",
    orderOnline:"commander en ligne"
  }
};

$('#allAbout').click(function () { console.log('huh?'); $("#allAbout").text("q"); })

$("#french").click(function(){
  $("#lang-select").text("FR");
  $("#login").html(language.fr.login);
  $("#intro").html(language.fr.welcome);
  $("#deliver").html(language.fr.deliver);
  $("#take-out").html(language.fr.takeout);
  $("#city-search").attr("placeholder","Ville, Rue")
  $("#button-search").html(language.fr.checkout);
  $("#checkMenu").html(language.fr.checkMenu);
  $("#ourMenu").html(language.fr.ourMenu);
  $("#dinerAt").html(language.fr.dinerAt);
  $("#findRest").html(language.fr.findRest);
  $("#newsletter").text(language.fr.newsletter);
  $("#getOurPromo").text(language.fr.getOurPromo);
  $("#allAbout").text(language.fr.allAbout);
  $("#orderOnline").text(language.fr.orderOnline);
  
  
})

$("#english").click(function(){
  $("#lang-select").text("EN");
  $("#intro").html(language.en.welcome);
  $("#login").html(language.en.login);
  $("#intro").html(language.en.welcome);
  $("#deliver").html(language.en.deliver);
  $("#take-out").html(language.en.takeout);
  $("#city-search").attr("placeholder","City, Street")
  $("#button-search").html(language.en.checkout);
  $("#checkMenu").html(language.en.checkMenu);
  $("#ourMenu").html(language.en.ourMenu);
  $("#dinerAt").html(language.en.dinerAt);
  $("#findRest").html(language.en.findRest);
  $("#newsletter").text(language.en.newsletter);
  $("#getOurPromo").text(language.en.getOurPromo);
  $("#allAbout").text(language.en.allAbout);
  $("#orderOnline").text(language.en.orderOnline);
})



if(window.location.hash){
  
  if(window.location.hash === "#fr"){
    console.log('has #');
    $("#hi").textContent = language.fr.welcome;
  }
}


