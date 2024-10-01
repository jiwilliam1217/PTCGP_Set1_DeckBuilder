import { SpeedInsights } from "@vercel/speed-insights/next";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My Pokémon TCG Deck Builder!</h1>
            {/* Add Speed Insights component */}
            <SpeedInsights />
            {/* Other components and content */}
        </div>
    );
};

export default HomePage;


const cards = [
{
    id: '0A1',
    name: 'Potion',
    types: ['Item'],
    image: 'images/potion.webp',
    zoomedImage: 'images/potion.webp',
  },  
{
    id: '0A2',
    name: 'X Speed',
    types: ['Item'],
    image: 'images/x-speed.webp',
    zoomedImage: 'images/x-speed.webp',
  }, 
{
    id: '0A3',
    name: 'Hand Scope',
    types: ['Item'],
    image: 'images/hand-scope.webp',
    zoomedImage: 'images/hand-scope.webp',
  }, 
{
    id: '0A4',
    name: 'Pokédex',
    types: ['Item'],
    image: 'images/pokedex.webp',
    zoomedImage: 'images/pokedex.webp',
  }, 
{
    id: '0A5',
    name: 'Poké Ball',
    types: ['Item'],
    image: 'images/poke-ball.webp',
    zoomedImage: 'images/poke-ball.webp',
  }, 
{
    id: '0A6',
    name: 'Red Card',
    types: ['Item'],
    image: 'images/red-card.webp',
    zoomedImage: 'images/red-card.webp',
  }, 
{
    id: '0A7',
    name: 'Professors Research',
    types: ['Item'],
    image: 'images/professors-research-oak.webp',
    zoomedImage: 'images/professors-research-oak.webp',
  }, 
{
    id: '0A9',
    name: 'Pikachu',
    types: ['Electric'],
    image: 'images/pikachuP1.webp',
    zoomedImage: 'images/pikachuP1.webp',
  },  
{
    id: '001',
    name: 'Bulbasaur',
    types: ['Grass'],
    image: 'images/bulbasaur.webp',
    zoomedImage: 'images/bulbasaur.webp',
    //pack: [Genetic Apex - Mewtwo]
  },
  {
    id: '002',
    name: 'Ivysaur',
    types: ['Grass'],
    image: 'images/ivysaur.webp',
    zoomedImage: 'images/ivysaur.webp',
    //pack: [Genetic Apex - Mewtwo]
  },
  {
    id: '003',
    name: 'Venusaur',
    types: ['Grass'],
    image: 'images/venusaur.webp',
    zoomedImage: 'images/venusaur.webp'
  },
{
    id: '004',
    name: 'Venusaur ex',
    types: ['Grass'],
    image: 'images/venusaur-ex.webp',
    zoomedImage: 'images/venusaur-ex.webp'
  },
  {
    id: '005',
    name: 'Caterpie',
    types: ['Grass'],
    image: 'images/caterpie.webp',
    zoomedImage: 'images/caterpie.webp'
  },
{
    id: '006',
    name: 'Metapod',
    types: ['Grass'],
    image: 'images/metapod.webp',
    zoomedImage: 'images/metapod.webp'
  },
{
    id: '007',
    name: 'Butterfree',
    types: ['Grass'],
    image: 'images/butterfree.webp',
    zoomedImage: 'images/butterfree.webp'
  },
{
    id: '008',
    name: 'Weedle',
    types: ['Grass'],
    image: 'images/weedle.webp',
    zoomedImage: 'images/weedle.webp'
  },
{
    id: '009',
    name: 'Kakuna',
    types: ['Grass'],
    image: 'images/kakuna.webp',
    zoomedImage: 'images/kakuna.webp'
  },
{
    id: '010',
    name: 'Beedrill',
    types: ['Grass'],
    image: 'images/beedrill.webp',
    zoomedImage: 'images/beedrill.webp'
  },
{
    id: '011',
    name: 'Oddish',
    types: ['Grass'],
    image: 'images/oddish.webp',
    zoomedImage: 'images/oddish.webp'
  },
{
    id: '012',
    name: 'Gloom',
    types: ['Grass'],
    image: 'images/gloom.webp',
    zoomedImage: 'images/gloom.webp'
  },
{
    id: '013',
    name: 'Vileplume',
    types: ['Grass'],
    image: 'images/vileplume.webp',
    zoomedImage: 'images/vileplume.webp'
  },
{
    id: '014',
    name: 'Paras',
    types: ['Grass'],
    image: 'images/paras.webp',
    zoomedImage: 'images/paras.webp'
  },
{
    id: '015',
    name: 'Parasect',
    types: ['Grass'],
    image: 'images/parasect.webp',
    zoomedImage: 'images/parasect.webp'
  },
{
    id: '016',
    name: 'Venonat',
    types: ['Grass'],
    image: 'images/venonat.webp',
    zoomedImage: 'images/venonat.webp'
  },
{
    id: '017',
    name: 'Venomoth',
    types: ['Grass'],
    image: 'images/venomoth.webp',
    zoomedImage: 'images/venomoth.webp'
  },
{
    id: '018',
    name: 'Bellsprout',
    types: ['Grass'],
    image: 'images/bellsprout.webp',
    zoomedImage: 'images/bellsprout.webp'
  },
{
    id: '019',
    name: 'Weepinbell',
    types: ['Grass'],
    image: 'images/weepinbell.webp',
    zoomedImage: 'images/weepinbell.webp'
  },
{
    id: '020',
    name: 'Victreebel',
    types: ['Grass'],
    image: 'images/victreebel.webp',
    zoomedImage: 'images/victreebel.webp'
  },
{
    id: '021',
    name: 'Exeggcute',
    types: ['Grass'],
    image: 'images/exeggcute.webp',
    zoomedImage: 'images/exeggcute.webp'
  },
{
    id: '022',
    name: 'Exeggutor',
    types: ['Grass'],
    image: 'images/exeggutor.webp',
    zoomedImage: 'images/exeggutor.webp'
  },
{
    id: '023',
    name: 'Exeggutor ex',
    types: ['Grass'],
    image: 'images/exeggutor-ex.webp',
    zoomedImage: 'images/exeguttor-ex.webp'
  },
{
    id: '024',
    name: 'Tangela',
    types: ['Grass'],
    image: 'images/tangela.webp',
    zoomedImage: 'images/tangela.webp'
  },
{
    id: '025',
    name: 'Scyther',
    types: ['Grass'],
    image: 'images/scyther.webp',
    zoomedImage: 'images/scyther.webp'
  },
{
    id: '026',
    name: 'Pinsir',
    types: ['Grass'],
    image: 'images/pinsir.webp',
    zoomedImage: 'images/pinsir.webp'
  },
{
    id: '027',
    name: 'Cottonee',
    types: ['Grass'],
    image: 'images/cottonee.webp',
    zoomedImage: 'images/cottonee.webp'
  },
{
    id: '028',
    name: 'Whimsicott',
    types: ['Grass'],
    image: 'images/whimsicott.webp',
    zoomedImage: 'images/whimsicott.webp'
  },
{
    id: '029',
    name: 'Petilil',
    types: ['Grass'],
    image: 'images/petilil.webp',
    zoomedImage: 'images/petilil.webp'
  },
{
    id: '030',
    name: 'Lilligant',
    types: ['Grass'],
    image: 'images/lilligant.webp',
    zoomedImage: 'images/lilligant.webp'
  },
{
    id: '031',
    name: 'Skiddo',
    types: ['Grass'],
    image: 'images/skiddo.webp',
    zoomedImage: 'images/skiddo.webp'
  },
{
    id: '032',
    name: 'Gogoat',
    types: ['Grass'],
    image: 'images/gogoat.webp',
    zoomedImage: 'images/gogoat.webp'
  },
  {
    id: '033',
    name: 'Charmander',
    types: ['Fire'],
    image: 'images/charmander.webp',
    zoomedImage: 'images/charmander.webp'
  },
 {
    id: '034',
    name: 'Charmeleon',
    types: ['Fire'],
    image: 'images/charmeleon.webp',
    zoomedImage: 'images/charmeleon.webp'
  },
 {
    id: '035',
    name: 'Charizard',
    types: ['Fire'],
    image: 'images/charizard.webp',
    zoomedImage: 'images/charizard.webp'
  },
 {
    id: '036',
    name: 'Charizard ex',
    types: ['Fire'],
    image: 'images/charizard-ex.webp',
    zoomedImage: 'images/charizard-ex.webp'
  },
 {
    id: '037',
    name: 'Vulpix',
    types: ['Fire'],
    image: 'images/vulpix.webp',
    zoomedImage: 'images/vulpix.webp'
  },
 {
    id: '038',
    name: 'Ninetales',
    types: ['Fire'],
    image: 'images/ninetales.webp',
    zoomedImage: 'images/ninetales.webp'
  },
 {
    id: '039',
    name: 'Growlithe',
    types: ['Fire'],
    image: 'images/growlithe.webp',
    zoomedImage: 'images/growlithe.webp'
  },
 {
    id: '040',
    name: 'Arcanine',
    types: ['Fire'],
    image: 'images/arcanine.webp',
    zoomedImage: 'images/arcanine.webp'
  },
 {
    id: '041',
    name: 'Arcanine ex',
    types: ['Fire'],
    image: 'images/arcanine-ex.webp',
    zoomedImage: 'images/arcanine-ex.webp'
  },
{
    id: '042',
    name: 'Ponyta',
    types: ['Fire'],
    image: 'images/ponyta.webp',
    zoomedImage: 'images/ponyta.webp'
  },
{
    id: '043',
    name: 'Rapidash',
    types: ['Fire'],
    image: 'images/rapidash.webp',
    zoomedImage: 'images/rapidash.webp'
  },
{
    id: '044',
    name: 'Magmar',
    types: ['Fire'],
    image: 'images/magmar.webp',
    zoomedImage: 'images/magmar.webp'
  },
{
    id: '045',
    name: 'Flareon',
    types: ['Fire'],
    image: 'images/flareon.webp',
    zoomedImage: 'images/flareon.webp'
  },
{
    id: '046',
    name: 'Moltres',
    types: ['Fire'],
    image: 'images/moltres.webp',
    zoomedImage: 'images/moltres.webp'
  },
{
    id: '047',
    name: 'Moltres ex',
    types: ['Fire'],
    image: 'images/moltres-ex.webp',
    zoomedImage: 'images/moltres-ex.webp'
  },
{
    id: '048',
    name: 'Heatmor',
    types: ['Fire'],
    image: 'images/heatmor.webp',
    zoomedImage: 'images/heatmor.webp'
  },
{
    id: '049',
    name: 'Salandit',
    types: ['Fire'],
    image: 'images/salandit.webp',
    zoomedImage: 'images/salandit.webp'
  },
{
    id: '050',
    name: 'Salazzle',
    types: ['Fire'],
    image: 'images/salazzle.webp',
    zoomedImage: 'images/salazzle.webp'
  },
{
    id: '051',
    name: 'Sizzlipede',
    types: ['Fire'],
    image: 'images/sizzlipede.webp',
    zoomedImage: 'images/sizzlipede.webp'
  },
{
    id: '052',
    name: 'Centiskorch',
    types: ['Fire'],
    image: 'images/centiskorch.webp',
    zoomedImage: 'images/centiskorch.webp'
  },
  {
    id: '053',
    name: 'Squirtle',
    types: ['Water'],
    image: 'images/squirtle.webp',
    zoomedImage: 'images/squirtle.webp'
  },
  {
    id: '054',
    name: 'Wartortle',
    types: ['Water'],
    image: 'images/wartortle.webp',
    zoomedImage: 'images/wartortle.webp'
  },
  {
    id: '055',
    name: 'Blastoise',
    types: ['Water'],
    image: 'images/blastoise.webp',
    zoomedImage: 'images/blastoise.webp'
  },
 {
    id: '056',
    name: 'Blastoise ex',
    types: ['Water'],
    image: 'images/blastoise-ex.webp',
    zoomedImage: 'images/blastoise-ex.webp'
  },
{
    id: '057',
    name: 'Psyduck',
    types: ['Water'],
    image: 'images/psyduck.webp',
    zoomedImage: 'images/psyduck.webp'
  },
{
    id: '058',
    name: 'Golduck',
    types: ['Water'],
    image: 'images/golduck.webp',
    zoomedImage: 'images/golduck.webp'
  },
{
    id: '059',
    name: 'Poliwag',
    types: ['Water'],
    image: 'images/poliwag.webp',
    zoomedImage: 'images/poliwag.webp'
  },
{
    id: '060',
    name: 'Poliwhirl',
    types: ['Water'],
    image: 'images/poliwhirl.webp',
    zoomedImage: 'images/poliwhirl.webp'
  },
{
    id: '061',
    name: 'Poliwrath',
    types: ['Water'],
    image: 'images/poliwrath.webp',
    zoomedImage: 'images/poliwrath.webp'
  },
{
    id: '062',
    name: 'Tentacool',
    types: ['Water'],
    image: 'images/tentacool.webp',
    zoomedImage: 'images/tentacool.webp'
  },
{
    id: '063',
    name: 'Tentacruel',
    types: ['Water'],
    image: 'images/tentacruel.webp',
    zoomedImage: 'images/tentacruel.webp'
  },
{
    id: '064',
    name: 'Seel',
    types: ['Water'],
    image: 'images/seel.webp',
    zoomedImage: 'images/seel.webp'
  },
{
    id: '065',
    name: 'Dewgong',
    types: ['Water'],
    image: 'images/dewgong.webp',
    zoomedImage: 'images/dewgong.webp'
  },
{
    id: '066',
    name: 'Shellder',
    types: ['Water'],
    image: 'images/shellder.webp',
    zoomedImage: 'images/shellder.webp'
  },
{
    id: '067',
    name: 'Cloyster',
    types: ['Water'],
    image: 'images/cloyster.webp',
    zoomedImage: 'images/cloyster.webp'
  },
{
    id: '068',
    name: 'Krabby',
    types: ['Water'],
    image: 'images/krabby.webp',
    zoomedImage: 'images/krabby.webp'
  },
{
    id: '069',
    name: 'Kingler',
    types: ['Water'],
    image: 'images/kingler.webp',
    zoomedImage: 'images/kingler.webp'
  },
{
    id: '070',
    name: 'Horsea',
    types: ['Water'],
    image: 'images/horsea.webp',
    zoomedImage: 'images/horsea.webp'
  },
{
    id: '071',
    name: 'Seadra',
    types: ['Water'],
    image: 'images/seadra.webp',
    zoomedImage: 'images/seadra.webp'
  },
{
    id: '072',
    name: 'Goldeen',
    types: ['Water'],
    image: 'images/goldeen.webp',
    zoomedImage: 'images/goldeen.webp'
  },
{
    id: '073',
    name: 'Seaking',
    types: ['Water'],
    image: 'images/seaking.webp',
    zoomedImage: 'images/seaking.webp'
  },
{
    id: '074',
    name: 'Staryu',
    types: ['Water'],
    image: 'images/staryu.webp',
    zoomedImage: 'images/staryu.webp'
  },
{
    id: '075',
    name: 'Starmie',
    types: ['Water'],
    image: 'images/starmie.webp',
    zoomedImage: 'images/starmie.webp'
  },
{
    id: '076',
    name: 'Starmie ex',
    types: ['Water'],
    image: 'images/starmie-ex.webp',
    zoomedImage: 'images/starmie-ex.webp'
  },
{
    id: '077',
    name: 'Magikarp',
    types: ['Water'],
    image: 'images/magikarp.webp',
    zoomedImage: 'images/magikarp.webp'
  },
{
    id: '078',
    name: 'Gyarados',
    types: ['Water'],
    image: 'images/gyarados.webp',
    zoomedImage: 'images/gyarados.webp'
  },
{
    id: '079',
    name: 'Lapras',
    types: ['Water'],
    image: 'images/lapras.webp',
    zoomedImage: 'images/lapras.webp'
  },
{
    id: '080',
    name: 'Vaporeon',
    types: ['Water'],
    image: 'images/vaporeon.webp',
    zoomedImage: 'images/vaporeon.webp'
  },
{
    id: '081',
    name: 'Omanyte',
    types: ['Water'],
    image: 'images/omanyte.webp',
    zoomedImage: 'images/omanyte.webp'
  },
{
    id: '082',
    name: 'Omastar',
    types: ['Water'],
    image: 'images/omastar.webp',
    zoomedImage: 'images/omastar.webp'
  },
{
    id: '083',
    name: 'Articuno',
    types: ['Water'],
    image: 'images/articuno.webp',
    zoomedImage: 'images/articuno.webp'
  },
{
    id: '084',
    name: 'Articuno ex',
    types: ['Water'],
    image: 'images/articuno-ex.webp',
    zoomedImage: 'images/articuno-ex.webp'
  },
{
    id: '085',
    name: 'Ducklett',
    types: ['Water'],
    image: 'images/ducklett.webp',
    zoomedImage: 'images/ducklett.webp'
  },
{
    id: '086',
    name: 'Swanna',
    types: ['Water'],
    image: 'images/swanna.webp',
    zoomedImage: 'images/swanna.webp'
  },
{
    id: '087',
    name: 'Froakie',
    types: ['Water'],
    image: 'images/froakie.webp',
    zoomedImage: 'images/froakie.webp'
  },
{
    id: '088',
    name: 'Frogadier',
    types: ['Water'],
    image: 'images/frogadier.webp',
    zoomedImage: 'images/frogadier.webp'
  },
{
    id: '089',
    name: 'Greninja',
    types: ['Water'],
    image: 'images/greninja.webp',
    zoomedImage: 'images/greninja.webp'
  },
{
    id: '090',
    name: 'Pyukumuku',
    types: ['Water'],
    image: 'images/pyukumuku.webp',
    zoomedImage: 'images/pyukumuku.webp'
  },
{
    id: '091',
    name: 'Bruxish',
    types: ['Water'],
    image: 'images/bruxish.webp',
    zoomedImage: 'images/bruxish.webp'
  },
{
    id: '092',
    name: 'Snom',
    types: ['Water'],
    image: 'images/snom.webp',
    zoomedImage: 'images/snom.webp'
  },
{
    id: '093',
    name: 'Frosmoth',
    types: ['Water'],
    image: 'images/frosmoth.webp',
    zoomedImage: 'images/frosmoth.webp'
  },
 {
    id: '094',
    name: 'Pikachu',
    types: ['Electric'],
    image: 'images/pikachu.webp',
    zoomedImage: 'images/pikachu.webp'
  },
 {
    id: '095',
    name: 'Raichu',
    types: ['Electric'],
    image: 'images/raichu.webp',
    zoomedImage: 'images/raichu.webp'
  },
 {
    id: '096',
    name: 'Pikachu ex',
    types: ['Electric'],
    image: 'images/pikachu-ex.webp',
    zoomedImage: 'images/pikachu-ex.webp'
  },
 {
    id: '097',
    name: 'Magnemite',
    types: ['Electric'],
    image: 'images/magnemite.webp',
    zoomedImage: 'images/magnemite.webp'
  },
 {
    id: '098',
    name: 'Magneton',
    types: ['Electric'],
    image: 'images/magneton.webp',
    zoomedImage: 'images/magneton.webp'
  },
 {
    id: '099',
    name: 'Voltorb',
    types: ['Electric'],
    image: 'images/voltorb.webp',
    zoomedImage: 'images/voltorb.webp'
  },
 {
    id: '100',
    name: 'Electrode',
    types: ['Electric'],
    image: 'images/electrode.webp',
    zoomedImage: 'images/electrode.webp'
  },
 {
    id: '101',
    name: 'Electabuzz',
    types: ['Electric'],
    image: 'images/electabuzz.webp',
    zoomedImage: 'images/electabuzz.webp'
  },
 {
    id: '102',
    name: 'Jolteon',
    types: ['Electric'],
    image: 'images/jolteon.webp',
    zoomedImage: 'images/jolteon.webp'
  },
 {
    id: '103',
    name: 'Zapdos',
    types: ['Electric'],
    image: 'images/zapdos.webp',
    zoomedImage: 'images/zapdos.webp'
  },
 {
    id: '104',
    name: 'Zapdos ex',
    types: ['Electric'],
    image: 'images/zapdos-ex.webp',
    zoomedImage: 'images/zapdos-ex.webp'
  },
 {
    id: '105',
    name: 'Blitzle',
    types: ['Electric'],
    image: 'images/blitzle.webp',
    zoomedImage: 'images/blitzle.webp'
  },
 {
    id: '106',
    name: 'Zebstrika',
    types: ['Electric'],
    image: 'images/zebstrika.webp',
    zoomedImage: 'images/zebstrika.webp'
  },
 {
    id: '107',
    name: 'Tynamo',
    types: ['Electric'],
    image: 'images/tynamo.webp',
    zoomedImage: 'images/tynamo.webp'
  },
 {
    id: '108',
    name: 'Eelektrik',
    types: ['Electric'],
    image: 'images/eelektrik.webp',
    zoomedImage: 'images/eelektrik.webp'
  },
 {
    id: '109',
    name: 'Eelektross',
    types: ['Electric'],
    image: 'images/eelektross.webp',
    zoomedImage: 'images/eelektross.webp'
  },
 {
    id: '110',
    name: 'Helioptile',
    types: ['Electric'],
    image: 'images/helioptile.webp',
    zoomedImage: 'images/helioptile.webp'
  },
{
    id: '111',
    name: 'Heliolisk',
    types: ['Electric'],
    image: 'images/heliolisk.webp',
    zoomedImage: 'images/heliolisk.webp'
  },
{
    id: '112',
    name: 'Pincurchin',
    types: ['Electric'],
    image: 'images/pincurchin.webp',
    zoomedImage: 'images/pincurchin.webp'
  },
 {
    id: '113',
    name: 'Clefairy',
    types: ['Psychic'],
    image: 'images/clefairy.webp',
    zoomedImage: 'images/clefairy.webp'
  },
 {
    id: '114',
    name: 'Clefable',
    types: ['Psychic'],
    image: 'images/clefable.webp',
    zoomedImage: 'images/clefable.webp'
  },
{
    id: '115',
    name: 'Abra',
    types: ['Psychic'],
    image: 'images/abra.webp',
    zoomedImage: 'images/abra.webp'
  },
{
    id: '116',
    name: 'Kadabra',
    types: ['Psychic'],
    image: 'images/kadabra.webp',
    zoomedImage: 'images/kadabra.webp'
  },
{
    id: '117',
    name: 'Alakazam',
    types: ['Psychic'],
    image: 'images/alakazam.webp',
    zoomedImage: 'images/alakazam.webp'
  },
{
    id: '118',
    name: 'Slowpoke',
    types: ['Psychic'],
    image: 'images/slowpoke.webp',
    zoomedImage: 'images/slowpoke.webp'
  },
{
    id: '119',
    name: 'Slowbro',
    types: ['Psychic'],
    image: 'images/slowbro.webp',
    zoomedImage: 'images/slowbro.webp'
  },
{
    id: '120',
    name: 'Gastly',
    types: ['Psychic'],
    image: 'images/gastly.webp',
    zoomedImage: 'images/gastly.webp'
  },
{
    id: '121',
    name: 'Haunter',
    types: ['Psychic'],
    image: 'images/haunter.webp',
    zoomedImage: 'images/haunter.webp'
  },
{
    id: '122',
    name: 'Gengar',
    types: ['Psychic'],
    image: 'images/gengar.webp',
    zoomedImage: 'images/gengar.webp'
  },
{
    id: '123',
    name: 'Gengar ex',
    types: ['Psychic'],
    image: 'images/gengar-ex.webp',
    zoomedImage: 'images/gengar-ex.webp'
  },
{
    id: '124',
    name: 'Drowzee',
    types: ['Psychic'],
    image: 'images/drowzee.webp',
    zoomedImage: 'images/drowzee.webp'
  },
{
    id: '125',
    name: 'Hypno',
    types: ['Psychic'],
    image: 'images/hypno.webp',
    zoomedImage: 'images/hypno.webp'
  },
{
    id: '126',
    name: 'Mr. Mime',
    types: ['Psychic'],
    image: 'images/mr-mime.webp',
    zoomedImage: 'images/mr-mime.webp'
  },
{
    id: '127',
    name: 'Jynx',
    types: ['Psychic'],
    image: 'images/jynx.webp',
    zoomedImage: 'images/jynx.webp'
  },
{
    id: '128',
    name: 'Mewtwo',
    types: ['Psychic'],
    image: 'images/mewtwo.webp',
    zoomedImage: 'images/mewtwo.webp'
  },
{
    id: '129',
    name: 'Mewtwo ex',
    types: ['Psychic'],
    image: 'images/mewtwo-ex.webp',
    zoomedImage: 'images/mewtwo-ex.webp'
  },
{
    id: '130',
    name: 'Ralts',
    types: ['Psychic'],
    image: 'images/ralts.webp',
    zoomedImage: 'images/ralts.webp'
  },
{
    id: '131',
    name: 'Kirlia',
    types: ['Psychic'],
    image: 'images/kirlia.webp',
    zoomedImage: 'images/kirlia.webp'
  },
{
    id: '132',
    name: 'Gardevoir',
    types: ['Psychic'],
    image: 'images/gardevoir.webp',
    zoomedImage: 'images/gardevoir.webp'
  },
{
    id: '133',
    name: 'Woobat',
    types: ['Psychic'],
    image: 'images/woobat.webp',
    zoomedImage: 'images/woobat.webp'
  },
{
    id: '134',
    name: 'Swoobat',
    types: ['Psychic'],
    image: 'images/swoobat.webp',
    zoomedImage: 'images/swoobat.webp'
  },
{
    id: '135',
    name: 'Golett',
    types: ['Psychic'],
    image: 'images/golett.webp',
    zoomedImage: 'images/golett.webp'
  },
{
    id: '136',
    name: 'Golurk',
    types: ['Psychic'],
    image: 'images/golurk.webp',
    zoomedImage: 'images/golurk.webp'
  },
 {
    id: '137',
    name: 'Sandshrew',
    types: ['Fighting'],
    image: 'images/sandshrew.webp',
    zoomedImage: 'images/sandshrew.webp'
  },
 {
    id: '138',
    name: 'Sandslash',
    types: ['Fighting'],
    image: 'images/sandslash.webp',
    zoomedImage: 'images/sandslash.webp'
  },
 {
    id: '139',
    name: 'Diglett',
    types: ['Fighting'],
    image: 'images/diglett.webp',
    zoomedImage: 'images/diglett.webp'
  },
 {
    id: '140',
    name: 'Dugtrio',
    types: ['Fighting'],
    image: 'images/dugtrio.webp',
    zoomedImage: 'images/dugtrio.webp'
  },
 {
    id: '141',
    name: 'Mankey',
    types: ['Fighting'],
    image: 'images/mankey.webp',
    zoomedImage: 'images/mankey.webp'
  },
 {
    id: '142',
    name: 'Primeape',
    types: ['Fighting'],
    image: 'images/primeape.webp',
    zoomedImage: 'images/primeape.webp'
  },
 {
    id: '143',
    name: 'Machop',
    types: ['Fighting'],
    image: 'images/machop.webp',
    zoomedImage: 'images/machop.webp'
  },
 {
    id: '144',
    name: 'Machoke',
    types: ['Fighting'],
    image: 'images/machoke.webp',
    zoomedImage: 'images/machoke.webp'
  },
 {
    id: '145',
    name: 'Machamp',
    types: ['Fighting'],
    image: 'images/machamp.webp',
    zoomedImage: 'images/machamp.webp'
  },
{
    id: '146',
    name: 'Machamp ex',
    types: ['Fighting'],
    image: 'images/machamp-ex.webp',
    zoomedImage: 'images/machamp-ex.webp'
  },
{
    id: '147',
    name: 'Geodude',
    types: ['Fighting'],
    image: 'images/geodude.webp',
    zoomedImage: 'images/geodude.webp'
  },
{
    id: '148',
    name: 'Graveler',
    types: ['Fighting'],
    image: 'images/graveler.webp',
    zoomedImage: 'images/graveler.webp'
  },
{
    id: '149',
    name: 'Golem',
    types: ['Fighting'],
    image: 'images/golem.webp',
    zoomedImage: 'images/golem.webp'
  },
{
    id: '150',
    name: 'Onix',
    types: ['Fighting'],
    image: 'images/onix.webp',
    zoomedImage: 'images/onix.webp'
  },
{
    id: '151',
    name: 'Cubone',
    types: ['Fighting'],
    image: 'images/cubone.webp',
    zoomedImage: 'images/cubone.webp'
  },
{
    id: '152',
    name: 'Marowak',
    types: ['Fighting'],
    image: 'images/marowak.webp',
    zoomedImage: 'images/marowak.webp'
  },
{
    id: '153',
    name: 'Marowak ex',
    types: ['Fighting'],
    image: 'images/marowak-ex.webp',
    zoomedImage: 'images/marowak-ex.webp'
  },
{
    id: '154',
    name: 'Hitmonlee',
    types: ['Fighting'],
    image: 'images/hitmonlee.webp',
    zoomedImage: 'images/hitmonlee.webp'
  },
{
    id: '155',
    name: 'Hitmonchan',
    types: ['Fighting'],
    image: 'images/hitmonchan.webp',
    zoomedImage: 'images/hitmonchan.webp'
  },
{
    id: '156',
    name: 'Rhyhorn',
    types: ['Fighting'],
    image: 'images/rhyhorn.webp',
    zoomedImage: 'images/rhyhorn.webp'
  },
{
    id: '157',
    name: 'Rhydon',
    types: ['Fighting'],
    image: 'images/rhydon.webp',
    zoomedImage: 'images/rhydon.webp'
  },
{
    id: '158',
    name: 'Kabuto',
    types: ['Fighting'],
    image: 'images/kabuto.webp',
    zoomedImage: 'images/kabuto.webp'
  },
{
    id: '159',
    name: 'Kabutops',
    types: ['Fighting'],
    image: 'images/kabutops.webp',
    zoomedImage: 'images/kabutops.webp'
  },
{
    id: '160',
    name: 'Mienfoo',
    types: ['Fighting'],
    image: 'images/mienfoo.webp',
    zoomedImage: 'images/mienfoo.webp'
  },
{
    id: '161',
    name: 'Mienshao',
    types: ['Fighting'],
    image: 'images/mienshao.webp',
    zoomedImage: 'images/mienshao.webp'
  },
{
    id: '162',
    name: 'Clobbopus',
    types: ['Fighting'],
    image: 'images/clobbopus.webp',
    zoomedImage: 'images/clobbopus.webp'
  },
{
    id: '163',
    name: 'Grapploct',
    types: ['Fighting'],
    image: 'images/grapploct.webp',
    zoomedImage: 'images/grapploct.webp'
  },
 {
    id: '164',
    name: 'Ekans',
    types: ['Dark'],
    image: 'images/ekans.webp',
    zoomedImage: 'images/ekans.webp'
  },
 {
    id: '165',
    name: 'Arbok',
    types: ['Dark'],
    image: 'images/arbok.webp',
    zoomedImage: 'images/arbok.webp'
  },
 {
    id: '166',
    name: 'Nidoran F',
    types: ['Dark'],
    image: 'images/nidoran-f.webp',
    zoomedImage: 'images/nidoran-f.webp'
  },
{
    id: '167',
    name: 'Nidorina',
    types: ['Dark'],
    image: 'images/nidorina.webp',
    zoomedImage: 'images/nidorina.webp'
  },
{
    id: '168',
    name: 'Nidoqueen',
    types: ['Dark'],
    image: 'images/nidoqueen.webp',
    zoomedImage: 'images/nidoqueen.webp'
  },
 {
    id: '169',
    name: 'Nidoran M',
    types: ['Dark'],
    image: 'images/nidoran-m.webp',
    zoomedImage: 'images/nidoran-m.webp'
  },
{
    id: '170',
    name: 'Nidorino',
    types: ['Dark'],
    image: 'images/nidorino.webp',
    zoomedImage: 'images/nidorino.webp'
  },
{
    id: '171',
    name: 'Nidoking',
    types: ['Dark'],
    image: 'images/nidoking.webp',
    zoomedImage: 'images/nidoking.webp'
  },
{
    id: '172',
    name: 'Zubat',
    types: ['Dark'],
    image: 'images/zubat.webp',
    zoomedImage: 'images/zubat.webp'
  },
{
    id: '173',
    name: 'Golbat',
    types: ['Dark'],
    image: 'images/golbat.webp',
    zoomedImage: 'images/golbat.webp'
  },
{
    id: '174',
    name: 'Grimer',
    types: ['Dark'],
    image: 'images/grimer.webp',
    zoomedImage: 'images/grimer.webp'
  },
{
    id: '175',
    name: 'Muk',
    types: ['Dark'],
    image: 'images/muk.webp',
    zoomedImage: 'images/muk.webp'
  },
{
    id: '176',
    name: 'Koffing',
    types: ['Dark'],
    image: 'images/koffing.webp',
    zoomedImage: 'images/koffing.webp'
  },
{
    id: '177',
    name: 'Weezing',
    types: ['Dark'],
    image: 'images/weezing.webp',
    zoomedImage: 'images/weezing.webp'
  },
 {
    id: '178',
    name: 'Mawile',
    types: ['Metal'],
    image: 'images/mawile.webp',
    zoomedImage: 'images/mawile.webp'
  },
 {
    id: '179',
    name: 'Pawniard',
    types: ['Metal'],
    image: 'images/pawniard.webp',
    zoomedImage: 'images/pawniard.webp'
  },
{
    id: '180',
    name: 'Bisharp',
    types: ['Metal'],
    image: 'images/bisharp.webp',
    zoomedImage: 'images/bisharp.webp'
  },
 {
    id: '181',
    name: 'Meltan',
    types: ['Metal'],
    image: 'images/meltan.webp',
    zoomedImage: 'images/meltan.webp'
  },
 {
    id: '182',
    name: 'Melmetal',
    types: ['Metal'],
    image: 'images/melmetal.webp',
    zoomedImage: 'images/melmetal.webp'
  },
 {
    id: '183',
    name: 'Dratini',
    types: ['Dragon'],
    image: 'images/dratini.webp',
    zoomedImage: 'images/dratini.webp'
  },
 {
    id: '184',
    name: 'Dragonair',
    types: ['Dragon'],
    image: 'images/dragonair.webp',
    zoomedImage: 'images/dragonair.webp'
  },
 {
    id: '185',
    name: 'Dragonite',
    types: ['Dragon'],
    image: 'images/dragonite.webp',
    zoomedImage: 'images/dragonite.webp'
  },
 {
    id: '186',
    name: 'Pidgey',
    types: ['Colorless'],
    image: 'images/pidgey.webp',
    zoomedImage: 'images/pidgey.webp'
  },
 {
    id: '187',
    name: 'Pidgeotto',
    types: ['Colorless'],
    image: 'images/pidgeotto.webp',
    zoomedImage: 'images/pidgeotto.webp'
  },
{
    id: '188',
    name: 'Pidgeot',
    types: ['Colorless'],
    image: 'images/pidgeot.webp',
    zoomedImage: 'images/pidgeot.webp'
  },
{
    id: '189',
    name: 'Rattata',
    types: ['Colorless'],
    image: 'images/rattata.webp',
    zoomedImage: 'images/rattata.webp'
  },
{
    id: '190',
    name: 'Raticate',
    types: ['Colorless'],
    image: 'images/raticate.webp',
    zoomedImage: 'images/raticate.webp'
  },
{
    id: '191',
    name: 'Spearow',
    types: ['Colorless'],
    image: 'images/spearow.webp',
    zoomedImage: 'images/spearow.webp'
  },
{
    id: '192',
    name: 'Fearow',
    types: ['Colorless'],
    image: 'images/fearow.webp',
    zoomedImage: 'images/fearow.webp'
  },
{
    id: '193',
    name: 'Jigglypuff',
    types: ['Colorless'],
    image: 'images/jigglypuff.webp',
    zoomedImage: 'images/jigglypuff.webp'
  },
{
    id: '194',
    name: 'Wigglytuff',
    types: ['Colorless'],
    image: 'images/wigglytuff.webp',
    zoomedImage: 'images/wigglytuff.webp'
  },
{
    id: '195',
    name: 'Wigglytuff ex',
    types: ['Colorless'],
    image: 'images/wigglytuff-ex.webp',
    zoomedImage: 'images/wigglytuff-ex.webp'
  },
{
    id: '196',
    name: 'Meowth',
    types: ['Colorless'],
    image: 'images/meowth.webp',
    zoomedImage: 'images/meowth.webp'
  },
{
    id: '197',
    name: 'Persian',
    types: ['Colorless'],
    image: 'images/persian.webp',
    zoomedImage: 'images/persian.webp'
  },
{
    id: '198',
    name: 'Farfetchd',
    types: ['Colorless'],
    image: 'images/farfetchd.webp',
    zoomedImage: 'images/farfetchd.webp'
  },
{
    id: '199',
    name: 'Doduo',
    types: ['Colorless'],
    image: 'images/doduo.webp',
    zoomedImage: 'images/doduo.webp'
  },
 {
    id: '200',
    name: 'Dodrio',
    types: ['Colorless'],
    image: 'images/dodrio.webp',
    zoomedImage: 'images/dodrio.webp'
  },
{
    id: '201',
    name: 'Lickitung',
    types: ['Colorless'],
    image: 'images/lickitung.webp',
    zoomedImage: 'images/lickitung.webp'
  },
{
    id: '202',
    name: 'Chansey',
    types: ['Colorless'],
    image: 'images/chansey.webp',
    zoomedImage: 'images/chansey.webp'
  },
{
    id: '203',
    name: 'Kangaskhan',
    types: ['Colorless'],
    image: 'images/Kangaskhan.webp',
    zoomedImage: 'images/Kangaskhan.webp'
  },
{
    id: '204',
    name: 'Tauros',
    types: ['Colorless'],
    image: 'images/tauros.webp',
    zoomedImage: 'images/tauros.webp'
  },
{
    id: '205',
    name: 'Ditto',
    types: ['Colorless'],
    image: 'images/ditto.webp',
    zoomedImage: 'images/ditto.webp'
  },
{
    id: '206',
    name: 'Eevee',
    types: ['Colorless'],
    image: 'images/eevee.webp',
    zoomedImage: 'images/eevee.webp'
  },
{
    id: '207',
    name: 'Eevee',
    types: ['Colorless'],
    image: 'images/eevee2.webp',
    zoomedImage: 'images/eevee2.webp'
  },
{
    id: '208',
    name: 'Eevee',
    types: ['Colorless'],
    image: 'images/eevee3.webp',
    zoomedImage: 'images/eevee3.webp'
  },
{
    id: '209',
    name: 'Porygon',
    types: ['Colorless'],
    image: 'images/porygon.webp',
    zoomedImage: 'images/porygon.webp'
  },
{
    id: '210',
    name: 'Aerodactyl',
    types: ['Colorless'],
    image: 'images/Aerodactyl.webp',
    zoomedImage: 'images/Aerodactyl.webp'
  },
{
    id: '211',
    name: 'Snorlax',
    types: ['Colorless'],
    image: 'images/Snorlax.webp',
    zoomedImage: 'images/Snorlax.webp'
  },
{
    id: '212',
    name: 'Minccino',
    types: ['Colorless'],
    image: 'images/minccino.webp',
    zoomedImage: 'images/minccino.webp'
  },
{
    id: '213',
    name: 'Cinccino',
    types: ['Colorless'],
    image: 'images/cinccino.webp',
    zoomedImage: 'images/cinccino.webp'
  },
{
    id: '214',
    name: 'Wooloo',
    types: ['Colorless'],
    image: 'images/wooloo.webp',
    zoomedImage: 'images/wooloo.webp'
  },
{
    id: '215',
    name: 'Dubwool',
    types: ['Colorless'],
    image: 'images/dubwool.webp',
    zoomedImage: 'images/dubwool.webp'
  },
 {
    id: '216',
    name: 'Helix Fossil',
    types: ['Item'],
    image: 'images/helix-fossil.webp',
    zoomedImage: 'images/helix-fossil.webp'
  },
{
    id: '217',
    name: 'Dome Fossil',
    types: ['Item'],
    image: 'images/dome-fossil.webp',
    zoomedImage: 'images/dome-fossil.webp'
  },
{
    id: '218',
    name: 'Old Amber',
    types: ['Item'],
    image: 'images/old-amber.webp',
    zoomedImage: 'images/old-amber.webp'
  },
 {
    id: '219',
    name: 'Erika',
    types: ['Supporter'],
    image: 'images/erika.webp',
    zoomedImage: 'images/erika.webp'
  },
{
    id: '220',
    name: 'Misty',
    types: ['Supporter'],
    image: 'images/misty.webp',
    zoomedImage: 'images/misty.webp'
  },
{
    id: '221',
    name: 'Blaine',
    types: ['Supporter'],
    image: 'images/blaine.webp',
    zoomedImage: 'images/blaine.webp'
  },
{
    id: '222',
    name: 'Koga',
    types: ['Supporter'],
    image: 'images/koga.webp',
    zoomedImage: 'images/koga.webp'
  },
{
    id: '223',
    name: 'Giovanni',
    types: ['Supporter'],
    image: 'images/giovanni.webp',
    zoomedImage: 'images/giovanni.webp'
  },
{
    id: '224',
    name: 'Brock',
    types: ['Supporter'],
    image: 'images/brock.webp',
    zoomedImage: 'images/brock.webp'
  },
{
    id: '225',
    name: 'Sabrina',
    types: ['Supporter'],
    image: 'images/sabrina.webp',
    zoomedImage: 'images/sabrina.webp'
  },
{
    id: '226',
    name: 'Lt. Surge',
    types: ['Supporter'],
    image: 'images/ltsurge.webp',
    zoomedImage: 'images/ltsurge.webp'
  },
{
    id: '227',
    name: 'Bulbasaur',
    types: ['Grass'],
    image: 'images/bulbasaur2.webp',
    zoomedImage: 'images/bulbasaur2.webp',
    //pack: [Genetic Apex - Mewtwo]
  },
{
    id: '228',
    name: 'Gloom',
    types: ['Grass'],
    image: 'images/gloom2.webp',
    zoomedImage: 'images/gloom2.webp'
  },
{
    id: '229',
    name: 'Pinsir',
    types: ['Grass'],
    image: 'images/pinsir2.webp',
    zoomedImage: 'images/pinsir2.webp'
  },
 {
    id: '230',
    name: 'Charmander',
    types: ['Fire'],
    image: 'images/charmander2.webp',
    zoomedImage: 'images/charmander2.webp'
  },
{
    id: '231',
    name: 'Rapidash',
    types: ['Fire'],
    image: 'images/rapidash2.webp',
    zoomedImage: 'images/rapidash2.webp'
  },
{
    id: '232',
    name: 'Squirtle',
    types: ['Water'],
    image: 'images/squirtle2.webp',
    zoomedImage: 'images/squirtle2.webp'
  },
{
    id: '233',
    name: 'Gyarados',
    types: ['Water'],
    image: 'images/gyarados2.webp',
    zoomedImage: 'images/gyarados2.webp'
  },
{
    id: '234',
    name: 'Lapras',
    types: ['Water'],
    image: 'images/lapras2.webp',
    zoomedImage: 'images/lapras2.webp'
  },
{
    id: '235',
    name: 'Electrode',
    types: ['Electric'],
    image: 'images/electrode2.webp',
    zoomedImage: 'images/electrode2.webp'
  },
{
    id: '236',
    name: 'Alakazam',
    types: ['Psychic'],
    image: 'images/alakazam2.webp',
    zoomedImage: 'images/alakazam2.webp'
  },
{
    id: '237',
    name: 'Slowpoke',
    types: ['Psychic'],
    image: 'images/slowpoke2.webp',
    zoomedImage: 'images/slowpoke2.webp'
  },
{
    id: '238',
    name: 'Diglett',
    types: ['Fighting'],
    image: 'images/diglett2.webp',
    zoomedImage: 'images/diglett2.webp'
  },
{
    id: '239',
    name: 'Cubone',
    types: ['Fighting'],
    image: 'images/cubone2.webp',
    zoomedImage: 'images/cubone2.webp'
  },
{
    id: '240',
    name: 'Nidoqueen',
    types: ['Dark'],
    image: 'images/nidoqueen2.webp',
    zoomedImage: 'images/nidoqueen2.webp'
  },
{
    id: '241',
    name: 'Nidoking',
    types: ['Dark'],
    image: 'images/nidoking2.webp',
    zoomedImage: 'images/nidoking2.webp'
  },
{
    id: '242',
    name: 'Golbat',
    types: ['Dark'],
    image: 'images/golbat2.webp',
    zoomedImage: 'images/golbat2.webp'
  },
{
    id: '243',
    name: 'Weezing',
    types: ['Dark'],
    image: 'images/weezing2.webp',
    zoomedImage: 'images/weezing2.webp'
  },
 {
    id: '244',
    name: 'Dragonite',
    types: ['Dragon'],
    image: 'images/dragonite2.webp',
    zoomedImage: 'images/dragonite2.webp'
  },
{
    id: '245',
    name: 'Pidgeot',
    types: ['Colorless'],
    image: 'images/pidgeot2.webp',
    zoomedImage: 'images/pidgeot2.webp'
  },
{
    id: '246',
    name: 'Meowth',
    types: ['Colorless'],
    image: 'images/meowth2.webp',
    zoomedImage: 'images/meowth2.webp'
  },
{
    id: '247',
    name: 'Ditto',
    types: ['Colorless'],
    image: 'images/ditto2.webp',
    zoomedImage: 'images/ditto2.webp'
  },
{
    id: '248',
    name: 'Eevee',
    types: ['Colorless'],
    image: 'images/eevee4.webp',
    zoomedImage: 'images/eevee4.webp'
  },
{
    id: '249',
    name: 'Porygon',
    types: ['Colorless'],
    image: 'images/porygon2.webp',
    zoomedImage: 'images/porygon2.webp'
  },
{
    id: '250',
    name: 'Snorlax',
    types: ['Colorless'],
    image: 'images/Snorlax2.webp',
    zoomedImage: 'images/Snorlax2.webp'
  },
{
    id: '251',
    name: 'Venusaur ex',
    types: ['Grass'],
    image: 'images/venusaur-ex2.webp',
    zoomedImage: 'images/venusaur-ex2.webp'
  },
{
    id: '252',
    name: 'Exeggutor ex',
    types: ['Grass'],
    image: 'images/exeggutor-ex2.webp',
    zoomedImage: 'images/exeguttor-ex2.webp'
  },
 {
    id: '253',
    name: 'Charizard ex',
    types: ['Fire'],
    image: 'images/charizard-ex2.webp',
    zoomedImage: 'images/charizard-ex2.webp'
  },
{
    id: '254',
    name: 'Arcanine ex',
    types: ['Fire'],
    image: 'images/arcanine-ex2.webp',
    zoomedImage: 'images/arcanine-ex2.webp'
  },
{
    id: '255',
    name: 'Moltres ex',
    types: ['Fire'],
    image: 'images/moltres-ex2.webp',
    zoomedImage: 'images/moltres-ex2.webp'
  },
 {
    id: '256',
    name: 'Blastoise ex',
    types: ['Water'],
    image: 'images/blastoise-ex2.webp',
    zoomedImage: 'images/blastoise-ex2.webp'
  },
{
    id: '257',
    name: 'Starmie ex',
    types: ['Water'],
    image: 'images/starmie-ex2.webp',
    zoomedImage: 'images/starmie-ex2.webp'
  },
{
    id: '258',
    name: 'Articuno ex',
    types: ['Water'],
    image: 'images/articuno-ex2.webp',
    zoomedImage: 'images/articuno-ex2.webp'
  },
{
    id: '259',
    name: 'Pikachu ex',
    types: ['Electric'],
    image: 'images/pikachu-ex2.webp',
    zoomedImage: 'images/pikachu-ex2.webp'
  },
 {
    id: '260',
    name: 'Zapdos ex',
    types: ['Electric'],
    image: 'images/zapdos-ex2.webp',
    zoomedImage: 'images/zapdos-ex2.webp'
  },
{
    id: '261',
    name: 'Gengar ex',
    types: ['Psychic'],
    image: 'images/gengar-ex2.webp',
    zoomedImage: 'images/gengar-ex2.webp'
  },
{
    id: '262',
    name: 'Mewtwo ex',
    types: ['Psychic'],
    image: 'images/mewtwo-ex2.webp',
    zoomedImage: 'images/mewtwo-ex2.webp'
  },
{
    id: '263',
    name: 'Machamp ex',
    types: ['Fighting'],
    image: 'images/machamp-ex2.webp',
    zoomedImage: 'images/machamp-ex2.webp'
  },
{
    id: '264',
    name: 'Marowak ex',
    types: ['Fighting'],
    image: 'images/marowak-ex2.webp',
    zoomedImage: 'images/marowak-ex2.webp'
  },
{
    id: '265',
    name: 'Wigglytuff ex',
    types: ['Colorless'],
    image: 'images/wigglytuff-ex2.webp',
    zoomedImage: 'images/wigglytuff-ex2.webp'
  },
 {
    id: '266',
    name: 'Erika',
    types: ['Supporter'],
    image: 'images/erika2.webp',
    zoomedImage: 'images/erika2.webp'
  },
{
    id: '267',
    name: 'Misty',
    types: ['Supporter'],
    image: 'images/misty2.webp',
    zoomedImage: 'images/misty2.webp'
  },
{
    id: '268',
    name: 'Blaine',
    types: ['Supporter'],
    image: 'images/blaine2.webp',
    zoomedImage: 'images/blaine2.webp'
  },
{
    id: '269',
    name: 'Koga',
    types: ['Supporter'],
    image: 'images/koga2.webp',
    zoomedImage: 'images/koga2.webp'
  },
{
    id: '270',
    name: 'Giovanni',
    types: ['Supporter'],
    image: 'images/giovanni2.webp',
    zoomedImage: 'images/giovanni2.webp'
  },
{
    id: '271',
    name: 'Brock',
    types: ['Supporter'],
    image: 'images/brock2.webp',
    zoomedImage: 'images/brock2.webp'
  },
{
    id: '272',
    name: 'Sabrina',
    types: ['Supporter'],
    image: 'images/sabrina2.webp',
    zoomedImage: 'images/sabrina2.webp'
  },
{
    id: '273',
    name: 'Lt. Surge',
    types: ['Supporter'],
    image: 'images/ltsurge2.webp',
    zoomedImage: 'images/ltsurge2.webp'
  },
{
    id: '274',
    name: 'Moltres ex',
    types: ['Fire'],
    image: 'images/moltres-ex3.webp',
    zoomedImage: 'images/moltres-ex3.webp'
  },
{
    id: '275',
    name: 'Articuno ex',
    types: ['Water'],
    image: 'images/articuno-ex3.webp',
    zoomedImage: 'images/articuno-ex3.webp'
  },
 {
    id: '276',
    name: 'Zapdos ex',
    types: ['Electric'],
    image: 'images/zapdos-ex3.webp',
    zoomedImage: 'images/zapdos-ex3.webp'
  },
{
    id: '277',
    name: 'Gengar ex',
    types: ['Psychic'],
    image: 'images/gengar-ex3.webp',
    zoomedImage: 'images/gengar-ex3.webp'
  },
{
    id: '278',
    name: 'Machamp ex',
    types: ['Fighting'],
    image: 'images/machamp-ex3.webp',
    zoomedImage: 'images/machamp-ex3.webp'
  },
{
    id: '279',
    name: 'Wigglytuff ex',
    types: ['Colorless'],
    image: 'images/wigglytuff-ex3.webp',
    zoomedImage: 'images/wigglytuff-ex3.webp'
  },
 {
    id: '280',
    name: 'Charizard ex',
    types: ['Fire'],
    image: 'images/charizard-ex3.webp',
    zoomedImage: 'images/charizard-ex3.webp'
  },
{
    id: '281',
    name: 'Pikachu ex',
    types: ['Electric'],
    image: 'images/pikachu-ex3.webp',
    zoomedImage: 'images/pikachu-ex3.webp'
  },
{
    id: '282',
    name: 'Mewtwo ex',
    types: ['Psychic'],
    image: 'images/mewtwo-ex3.webp',
    zoomedImage: 'images/mewtwo-ex3.webp'
  },
{
    id: '283',
    name: 'Mew',
    types: ['Psychic'],
    image: 'images/mew.webp',
    zoomedImage: 'images/mew.webp'
  },
 {
    id: '284',
    name: 'Charizard ex',
    types: ['Fire'],
    image: 'images/charizard-ex4.webp',
    zoomedImage: 'images/charizard-ex4.webp'
  },
{
    id: '285',
    name: 'Pikachu ex',
    types: ['Electric'],
    image: 'images/pikachu-ex4.webp',
    zoomedImage: 'images/pikachu-ex4.webp'
  },
//const cards = [
{
    id: '286',
    name: 'Mewtwo ex',
    types: ['Psychic'],
    image: 'images/mewtwo-ex4.webp',
    zoomedImage: 'images/mewtwo-ex4.webp'
  }
];

const cardList = document.getElementById("cards-container"); // Container for card list
const deckList = document.getElementById("deck-list"); // Container for deck list
const largeImage = document.getElementById("large-image"); // Large image display
const largeImageContainer = document.getElementById("large-image-container"); // Container for large image
const searchInput = document.getElementById("search-input"); // Search input
const typeFilter = document.getElementById("type-filter"); // Type filter dropdown

// Create card elements for card list
cards.forEach((card) => {
    const cardElement = createCardElement(card);
    cardList.appendChild(cardElement);
});

// Function to create a card element
function createCardElement(card) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.dataset.types = card.types.join(","); // Store types for filtering
    cardDiv.innerHTML = `<h3>${card.name}</h3><img src="${card.image}" alt="${card.name}">`;
    cardDiv.style.display = "none"; // Hide card by default

    // Add hover event for card list
    cardDiv.addEventListener("mouseover", () => {
        showLargeImage(card.image);
    });

    // Add click event to add card to deck
    cardDiv.addEventListener("click", () => {
        addCardToDeck(card);
    });

    return cardDiv;
}

// Function to show large image
function showLargeImage(imageSrc) {
    largeImage.src = imageSrc;
    largeImage.style.display = "block"; // Show the large image
}

// Function to add card to deck
function addCardToDeck(card) {
    const existingCards = Array.from(deckList.children); // Get all current deck cards
    const count = existingCards.filter(deckCard =>
        deckCard.querySelector('h3').innerText === card.name // Count matching card names
    ).length;

    if (count < 2) { // Check if less than 2 cards of the same name exist
        const deckCardElement = createDeckCardElement(card);
        deckList.appendChild(deckCardElement);
    } else {
        //alert(`You can only have up to 2 ${card.name} cards in your deck.`); // Alert user if limit reached
    }
}

// Function to create a deck card element
function createDeckCardElement(card) {
    const deckCardDiv = document.createElement("div");
    deckCardDiv.className = "card";
    deckCardDiv.innerHTML = `<h3>${card.name}</h3><img src="${card.image}" alt="${card.name}">`;

    // Add hover event for deck cards
    deckCardDiv.addEventListener("mouseover", () => {
        showLargeImage(card.image);
    });

    // Add click event to remove card from deck
    deckCardDiv.addEventListener("click", () => {
        deckCardDiv.remove();
    });

    return deckCardDiv;
}

// Function to filter cards based on search and type
function filterCards() {
    const query = searchInput.value.toLowerCase(); // Get the search query in lowercase
    const selectedType = typeFilter.value; // Get the selected type
    const cardElements = cardList.querySelectorAll(".card"); // Get all card elements inside the cardList

    let anyVisible = false; // Track if any card is visible

    // Loop through all cards and show/hide based on the search query and type filter
    cardElements.forEach((cardElement) => {
        const cardName = cardElement.querySelector('h3').innerText.toLowerCase(); // Get card name in lowercase
        const cardType = cardElement.dataset.types.split(","); // Get card types from data

        const nameMatches = cardName.includes(query); // Check if name matches query
        const typeMatches = selectedType === "" || cardType.includes(selectedType); // Check if type matches

        // Show card if it matches both name and type criteria
        if (nameMatches && typeMatches) {
            cardElement.style.display = ""; // Show the card
            anyVisible = true; // Mark as visible
        } else {
            cardElement.style.display = "none"; // Hide the card
        }
    });

    // Show or hide "No cards found" message
    const noCardsMessage = document.getElementById("no-cards-message");
    if (!anyVisible) {
        if (!noCardsMessage) {
            const messageContainer = document.createElement('div');
            messageContainer.id = "no-cards-message";
            messageContainer.innerHTML = "<p>No cards found. Please apply a filter or search.</p>";
            cardList.appendChild(messageContainer); // Append message if no cards are found
        }
    } else {
        if (noCardsMessage) {
            noCardsMessage.remove(); // Remove the message if cards are visible
        }
    }
}

const saveDeckButton = document.getElementById("save-deck-button");
const loadDeckButton = document.getElementById("load-deck-button");
const clearDeckButton = document.getElementById("clear-deck-button");

// Save deck to localStorage
saveDeckButton.addEventListener("click", () => {
    const deckCards = Array.from(deckList.children).map(deckCard => {
        const cardName = deckCard.querySelector('h3').innerText;
        return cards.find(card => card.name === cardName); // Get the card object by name
    });

    localStorage.setItem('savedDeck', JSON.stringify(deckCards));
    alert('Deck saved locally!');
});

// Load deck from localStorage
loadDeckButton.addEventListener("click", () => {
    const savedDeck = JSON.parse(localStorage.getItem('savedDeck'));

    if (savedDeck && savedDeck.length > 0) {
        deckList.innerHTML = ''; // Clear current deck
        savedDeck.forEach(card => {
            const deckCardElement = createDeckCardElement(card);
            deckList.appendChild(deckCardElement);
        });
        alert('Deck loaded successfully!');
    } else {
        alert('No saved deck found.');
    }
});

// Clear the deck both from UI and localStorage
clearDeckButton.addEventListener("click", () => {
    deckList.innerHTML = ''; // Clear the deck in the UI
    localStorage.removeItem('savedDeck'); // Remove from localStorage
    alert('Load deleted!');
});

const deckNameInput = document.getElementById("deck-name-input");

saveDeckButton.addEventListener("click", () => {
    const deckName = deckNameInput.value || 'default'; // Use 'default' if no name provided
    const deckCards = Array.from(deckList.children).map(deckCard => {
        const cardName = deckCard.querySelector('h3').innerText;
        return cards.find(card => card.name === cardName);
    });

    localStorage.setItem(`savedDeck-${deckName}`, JSON.stringify(deckCards));
    alert(`Deck saved as '${deckName}' successfully!`);
});

loadDeckButton.addEventListener("click", () => {
    const deckName = deckNameInput.value || 'default';
    const savedDeck = JSON.parse(localStorage.getItem(`savedDeck-${deckName}`));

    if (savedDeck && savedDeck.length > 0) {
        deckList.innerHTML = ''; 
        savedDeck.forEach(card => {
            const deckCardElement = createDeckCardElement(card);
            deckList.appendChild(deckCardElement);
        });
        alert(`Deck '${deckName}' loaded successfully!`);
    } else {
        alert(`No saved deck found with the name '${deckName}'.`);
    }
});

// Function to shuffle the deck
function shuffleDeck() {
    const deckCards = Array.from(deckList.children); // Get all current deck cards
    const shuffledCards = deckCards.sort(() => Math.random() - 0.5); // Shuffle using random sort

    // Clear the deck and re-add shuffled cards
    deckList.innerHTML = ''; // Clear current deck
    shuffledCards.forEach(card => deckList.appendChild(card)); // Append shuffled cards back
}

// Bind the shuffle function to the button click
const shuffleDeckButton = document.getElementById("shuffle-deck-button");
shuffleDeckButton.addEventListener("click", shuffleDeck);


// Existing code...

// Function to export the deck
function exportDeck() {
    const deckCards = Array.from(deckList.children).map(deckCard => {
        const cardName = deckCard.querySelector('h3').innerText;
        return cards.find(card => card.name === cardName);
    });

    const deckData = JSON.stringify(deckCards, null, 2);
    const blob = new Blob([deckData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'deck.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Bind the export function to the button click
const exportDeckButton = document.getElementById("export-deck-button");
exportDeckButton.addEventListener("click", exportDeck);

// Function to import the deck
function importDeck(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        const deckData = JSON.parse(e.target.result);

        // Clear the current deck
        deckList.innerHTML = '';

        // Add each card in the imported deck
        deckData.forEach(card => {
            const deckCardElement = createDeckCardElement(card);
            deckList.appendChild(deckCardElement);
        });

        alert('Deck imported successfully!');
    };

    reader.readAsText(file);
}

// Bind the import function to the file input change
const importDeckInput = document.getElementById("import-deck-input");
importDeckInput.addEventListener("change", importDeck);

// Show file input dialog when import button is clicked
const importDeckButton = document.getElementById("import-deck-button");
importDeckButton.addEventListener("click", () => {
    importDeckInput.click();
});

// Event listeners for search and type filter
searchInput.addEventListener("input", filterCards);
typeFilter.addEventListener("change", filterCards);

// Dark mode toggle functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode was previously enabled and apply
const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
if (darkModeEnabled) {
    body.classList.add("dark-mode");
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save dark mode preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
