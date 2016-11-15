require('dotenv').config({silent: true});

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION)

var Soccerplayer = require('./models/soccerplayer')

const soccerplayers = [
  {
    name:"Geoff Cameron",
    wsurl:"https://www.whoscored.com/Players/38772/",
    tmurl:"http://www.transfermarkt.com/geoff-cameron/leistungsdaten/spieler/31642"
  },
  {
    name:"Cameron Carter-Vickers",
    wsurl:"https://www.whoscored.com/Players/301029/",
    tmurl:"http://www.transfermarkt.com/cameron-carter-vickers/leistungsdaten/spieler/341049"
  },
  {
    name:"Lynden Gooch",
    wsurl:"https://www.whoscored.com/Players/294849/",
    tmurl:"http://www.transfermarkt.com/lynden-gooch/leistungsdaten/spieler/307781"
  },
  {
    name:"Brad Guzan",
    wsurl:"https://www.whoscored.com/Players/28746/",
    tmurl:"http://www.transfermarkt.com/brad-guzan/leistungsdaten/spieler/39471"
  },
  {
    name:"Emerson Hyndman",
    wsurl:"https://www.whoscored.com/Players/231119/",
    tmurl:"http://www.transfermarkt.com/emerson-hyndman/leistungsdaten/spieler/223047"
  },
  {
    name:"Gedion Zelalem",
    wsurl:"https://www.whoscored.com/Players/135469/",
    tmurl:"http://www.transfermarkt.com/gedion-zelalem/leistungsdaten/spieler/228370"
  },
  {
    name:"Adam Henley",
    wsurl:"https://www.whoscored.com/Players/106025/",
    tmurl:"http://www.transfermarkt.com/adam-henley/leistungsdaten/spieler/173585"
  },
  {
    name:"Eric Lichaj",
    wsurl:"https://www.whoscored.com/Players/66612/",
    tmurl:"http://www.transfermarkt.com/eric-lichaj/leistungsdaten/spieler/61575"
  },
  {
    name:"Andrija Novakovich",
    wsurl:"https://www.whoscored.com/Players/273304/",
    tmurl:"http://www.transfermarkt.com/andrija-novakovich/leistungsdaten/spieler/336160"
  },
  {
    name:"Tim Ream",
    wsurl:"https://www.whoscored.com/Players/85006/",
    tmurl:"http://www.transfermarkt.com/tim-ream/leistungsdaten/spieler/145466"
  },
  {
    name:"Jonathan Spector",
    wsurl:"https://www.whoscored.com/Players/9100/",
    tmurl:"http://www.transfermarkt.com/jonathan-spector/leistungsdaten/spieler/24637"
  },
  {
    name:"Danny Williams",
    wsurl:"https://www.whoscored.com/Players/83335/",
    tmurl:"http://www.transfermarkt.com/daniel-williams/leistungsdaten/spieler/38383"
  },
  {
    name:"DeAndre Yedlin",
    wsurl:"https://www.whoscored.com/Players/126958/",
    tmurl:"http://www.transfermarkt.com/deandre-yedlin/leistungsdaten/spieler/255916"
  },
  {
    name:"Gboly Ariyibi",
    wsurl:"https://www.whoscored.com/Players/141409/",
    tmurl:"http://www.transfermarkt.com/gboly-ariyibi/leistungsdaten/spieler/226958"
  },
  {
    name:"Tristan Bowen",
    wsurl:"https://www.whoscored.com/Players/72637/",
    tmurl:"http://www.transfermarkt.com/tristan-bowen/leistungsdaten/spieler/105976"
  },
  {
    name:"Will John",
    wsurl:"https://www.whoscored.com/Players/37453/",
    tmurl:"http://www.transfermarkt.com/will-john/leistungsdaten/spieler/39304"
  },
  {
    name:"Brian Span",
    wsurl:"https://www.whoscored.com/Players/111950/",
    tmurl:"http://www.transfermarkt.com/brian-span/leistungsdaten/spieler/206796"
  },
  {
    name:"Jordan Siebatcheu",
    wsurl:"https://www.whoscored.com/Players/260806/",
    tmurl:"http://www.transfermarkt.com/jordan-siebatcheu/leistungsdaten/spieler/355369"
  },
  {
    name:"Terrence Boyd",
    wsurl:"https://www.whoscored.com/Players/108403/",
    tmurl:"http://www.transfermarkt.com/terrence-boyd/leistungsdaten/spieler/103064"
  },
  {
    name:"John Brooks",
    wsurl:"https://www.whoscored.com/Players/104899/",
    tmurl:"http://www.transfermarkt.com/john-anthony-brooks/leistungsdaten/spieler/124732"
  },
  {
    name:"Timothy Chandler",
    wsurl:"https://www.whoscored.com/Players/69467/",
    tmurl:"http://www.transfermarkt.com/timothy-chandler/leistungsdaten/spieler/49723"
  },
  {
    name:"Ken Gipson",
    wsurl:"https://www.whoscored.com/Players/299057/",
    tmurl:"http://www.transfermarkt.com/ken-gipson/leistungsdaten/spieler/196822"
  },
  {
    name:"Julian Green",
    wsurl:"https://www.whoscored.com/Players/132316/",
    tmurl:"http://www.transfermarkt.com/julian-green/leistungsdaten/spieler/161204"
  },
  {
    name:"Aron Jóhannsson",
    wsurl:"https://www.whoscored.com/Players/74639/",
    tmurl:"http://www.transfermarkt.com/aron-johannsson/leistungsdaten/spieler/119169"
  },
  {
    name:"Fabian Johnson",
    wsurl:"https://www.whoscored.com/Players/30577/",
    tmurl:"http://www.transfermarkt.com/fabian-johnson/leistungsdaten/spieler/31041"
  },
  {
    name:"Alfredo Morales",
    wsurl:"https://www.whoscored.com/Players/94824/",
    tmurl:"http://www.transfermarkt.com/alfredo-morales/leistungsdaten/spieler/58500"
  },
  {
    name:"Devante Parker",
    wsurl:"https://www.whoscored.com/Players/239006/",
    tmurl:"http://www.transfermarkt.com/devante-parker/leistungsdaten/spieler/196836"
  },
  {
    name:"Shawn Parker",
    wsurl:"https://www.whoscored.com/Players/104920/",
    tmurl:"http://www.transfermarkt.com/shawn-parker/leistungsdaten/spieler/89659"
  },
  {
    name:"Christian Pulisic",
    wsurl:"https://www.whoscored.com/Players/302692/",
    tmurl:"http://www.transfermarkt.com/christian-pulisic/leistungsdaten/spieler/315779"
  },
  {
    name:"Bobby Wood",
    wsurl:"https://www.whoscored.com/Players/132359/",
    tmurl:"http://www.transfermarkt.com/bobby-wood/leistungsdaten/spieler/72519"
  },
  {
    name:"David Yelldell",
    wsurl:"https://www.whoscored.com/Players/13443/",
    tmurl:"http://www.transfermarkt.com/david-yelldell/leistungsdaten/spieler/4746"
  },
  {
    name:"Royal-Dominique Fennell",
    wsurl:"https://www.whoscored.com/Players/115180/",
    tmurl:"http://www.transfermarkt.com/royal-dominique-fennell/leistungsdaten/spieler/58004"
  },
  {
    name:"Jerome Kiesewetter",
    wsurl:"https://www.whoscored.com/Players/265848/",
    tmurl:"http://www.transfermarkt.com/jerome-kiesewetter/leistungsdaten/spieler/94167"
  },
  {
    name:"Fafà Picault",
    wsurl:"https://www.whoscored.com/Players/242785/",
    tmurl:"http://www.transfermarkt.com/fafa-picault/leistungsdaten/spieler/216683"
  },
  {
    name:"Andrew Wooten",
    wsurl:"https://www.whoscored.com/Players/111800/",
    tmurl:"http://www.transfermarkt.com/andrew-wooten/leistungsdaten/spieler/67407"
  },
  {
    name:"Joshua Perez",
    wsurl: String,
    tmurl:"http://www.transfermarkt.com/joshua-perez/profil/spieler/351506"
  },
  {
    name:"Desevio Payne",
    wsurl:"https://www.whoscored.com/Players/254684/",
    tmurl:"http://www.transfermarkt.com/desevio-payne/leistungsdaten/spieler/273570"
  },
  {
    name:"Rubio Rubin",
    wsurl:"https://www.whoscored.com/Players/235954/",
    tmurl:"http://www.transfermarkt.com/rubio-rubin/leistungsdaten/spieler/331282"
  },
  {
    name:"Matt Miazga",
    wsurl:"https://www.whoscored.com/Players/131999/",
    tmurl:"http://www.transfermarkt.com/matt-miazga/erfolge/spieler/245893"
  },
  {
    name:"Josh Gatt",
    wsurl:"https://www.whoscored.com/Players/89654/",
    tmurl:"http://www.transfermarkt.com/joshua-gatt/leistungsdaten/spieler/140798"
  },
  {
    name:"Cole Grossman",
    wsurl:"https://www.whoscored.com/Players/99322/",
    tmurl:"http://www.transfermarkt.com/cole-grossman/leistungsdaten/spieler/178771"
  },
  {
    name:"Ethan Horvath",
    wsurl:"https://www.whoscored.com/Players/296544/",
    tmurl:"http://www.transfermarkt.com/ethan-horvath/leistungsdaten/spieler/242284"
  },
  {
    name:"A. J. Soares",
    wsurl:"https://www.whoscored.com/Players/99300/",
    tmurl:"http://www.transfermarkt.com/a-j-soares/leistungsdaten/spieler/176850"
  },
  {
    name:"Scott Pittman",
    wsurl:"https://www.whoscored.com/Players/99680/",
    tmurl:"http://www.transfermarkt.com/scott-pittman/leistungsdaten/spieler/182614"
  },
  {
    name:"Bjorn Maars Johnsen",
    wsurl:"https://www.whoscored.com/Players/228985",
    tmurl:"http://www.transfermarkt.com/bjorn-johnsen/leistungsdaten/spieler/250686"
  },
  {
    name:"Perry Kitchen",
    wsurl:"https://www.whoscored.com/Players/99301/",
    tmurl:"http://www.transfermarkt.com/perry-kitchen/leistungsdaten/spieler/131183"
  },
  {
    name:"Caleb Stanko",
    wsurl:"https://www.whoscored.com/Players/136966/",
    tmurl:"http://www.transfermarkt.com/caleb-stanko/leistungsdaten/spieler/190269"
  },
  {
    name:"Ventura Alvarado",
    wsurl:"https://www.whoscored.com/Players/122691/",
    tmurl:"http://www.transfermarkt.com/ventura-alvarado/leistungsdaten/spieler/234166"
  },
  {
    name:"Paul Arriola",
    wsurl:"https://www.whoscored.com/Players/132631/",
    tmurl:"http://www.transfermarkt.com/paul-arriola/leistungsdaten/spieler/189876"
  },
  {
    name:"Jonathan Bornstein",
    wsurl:"https://www.whoscored.com/Players/23522/",
    tmurl:"http://www.transfermarkt.com/jonathan-bornstein/leistungsdaten/spieler/39454"
  },
  {
    name:"Edgar Castillo",
    wsurl:"https://www.whoscored.com/Players/33330/",
    tmurl:"http://www.transfermarkt.com/edgar-castillo/leistungsdaten/spieler/53542"
  },
  {
    name:"Joe Corona",
    wsurl:"https://www.whoscored.com/Players/104150/",
    tmurl:"http://www.transfermarkt.com/joe-corona/leistungsdaten/spieler/162940"
  },
  {
    name:"Dennis Flores",
    wsurl:"https://www.whoscored.com/Players/143420/",
    tmurl:"http://www.transfermarkt.com/dennis-flores/leistungsdaten/spieler/354104"
  },
  {
    name:"Greg Garza",
    wsurl:"https://www.whoscored.com/Players/91705/",
    tmurl:"http://www.transfermarkt.com/gregory-garza/leistungsdaten/spieler/118318"
  },
  {
    name:"Luis Gil",
    wsurl:"https://www.whoscored.com/Players/85010/",
    tmurl:"http://www.transfermarkt.com/luis-gil/leistungsdaten/spieler/131177"
  },
  {
    name:"Omar Gonzalez",
    wsurl:"https://www.whoscored.com/Players/72639/",
    tmurl:"http://www.transfermarkt.com/omar-gonzalez/leistungsdaten/spieler/99690"
  },
  {
    name:"Alejandro Guido",
    wsurl:"https://www.whoscored.com/Players/123051/",
    tmurl:"http://www.transfermarkt.com/alejandro-guido/leistungsdaten/spieler/189883"
  },
  {
    name:"Miguel Ibarra",
    wsurl:"https://www.whoscored.com/Players/247489/",
    tmurl:"http://www.transfermarkt.com/miguel-ibarra/leistungsdaten/spieler/220521"
  },
  {
    name:"Amando Moreno",
    wsurl:"https://www.whoscored.com/Players/126604/",
    tmurl:"http://www.transfermarkt.com/amando-moreno/leistungsdaten/spieler/253573"
  },
  {
    name:"Michael Orozco Fiscal",
    wsurl:"https://www.whoscored.com/Players/34552/",
    tmurl:"http://www.transfermarkt.com/michael-orozco/leistungsdaten/spieler/58599"
  },
  {
    name:"John Requejo",
    wsurl:"https://www.whoscored.com/Players/280941/",
    tmurl:"http://www.transfermarkt.com/john-requejo/leistungsdaten/spieler/346645"
  },
  {
    name:"Omar Salgado",
    wsurl:"https://www.whoscored.com/Players/99263/",
    tmurl:"http://www.transfermarkt.com/omar-salgado/leistungsdaten/spieler/170559"
  },
  {
    name:"Richard Sánchez",
    wsurl:"https://www.whoscored.com/Players/99288/",
    tmurl:"http://www.transfermarkt.com/richard-sanchez/leistungsdaten/spieler/178861"
  },
  {
    name:"José Francisco Torres",
    wsurl:"https://www.whoscored.com/Players/38169/",
    tmurl:"http://www.transfermarkt.com/jose-francisco-torres/leistungsdaten/spieler/52623"
  },
  {
    name:"Jorge Villafaña",
    wsurl:"https://www.whoscored.com/Players/113263/",
    tmurl:"http://www.transfermarkt.com/jorge-flores/leistungsdaten/spieler/59531"
  },
  {
    name:"William Yarbrough",
    wsurl:"https://www.whoscored.com/Players/117644/",
    tmurl:"http://www.transfermarkt.com/william-yarbrough/leistungsdaten/spieler/215473"
  },
  {
    name:"Luca De La Torre",
    wsurl:"https://www.whoscored.com/Players/322406/",
    tmurl:"http://www.transfermarkt.com/luca-de-la-torre/leistungsdaten/spieler/315762"
  },
  {
    name:"Joseph Gyau",
    wsurl:"https://www.whoscored.com/Players/110185/",
    tmurl:"http://www.transfermarkt.com/joseph-claude-gyau/leistungsdaten/spieler/160670"
  }
]

Soccerplayer.collection.remove()

soccerplayers.forEach(function (soccerplayer) {
  //Need to edit for soccer players
  console.log('soccerplayer', soccerplayer);
  const soccerplayerdb= new Soccerplayer(soccerplayer)
  soccerplayerdb.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  })
})
