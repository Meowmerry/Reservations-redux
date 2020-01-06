'use strict';
const moment = require('moment')
const now = moment().format('YYYY-MM-DD HH:mm:ss')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert('RestaurantCategories', [
      { name: 'Thai', createdAt: now, updatedAt: now },
      { name: 'International', createdAt: now, updatedAt: now },
      { name: 'Asian', createdAt: now, updatedAt: now },
      { name: 'Bar Lounge Bottle', createdAt: now, updatedAt: now },
      { name: 'American', createdAt: now, updatedAt: now },
      { name: 'Italian', createdAt: now, updatedAt: now },
      { name: 'Indian', createdAt: now, updatedAt: now },
      { name: 'Afternoon Tea', createdAt: now, updatedAt: now },
    ], {});

    const Thai = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'Thai';`
    ))[0][0];
    const International = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'International';`
    ))[0][0];
    const Asian= (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'Asian';`
    ))[0][0];
    const BarLoungeBottle = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'Bar Lounge Bottle';`
    ))[0][0];
    const American = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'American';`
    ))[0][0];
    const Italian = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'Italian';`
    ))[0][0];
    const Indian = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'Indian';`
    ))[0][0];
    const AfternoonTea = (await queryInterface.sequelize.query(
      `SELECT id from RestaurantCategories where name = 'Afternoon Tea';`
    ))[0][0];

    return await queryInterface.bulkInsert('RestaurantLists', [
      {
        name: 'Thara Thong - Royal Orchid Sheraton Hotel & Towers',
        image: 'https://resizer.otstatic.com/v2/photos/large/1/25346615.jpg',
        description: 'Thara Thong serves authentic Bangkok fare in a grand traditional setting. Dine at charming floor seating and low tables beneath an ornate hand-carved teakwood pavilion with large, handsomely dressed windows. The dining room and outdoor terrace overlook serene views of the legendary Chao Phraya River, while the gentle sound of live Thai classical music adds to the unique atmosphere. Located on First Floor, Royal Orchid Sheraton Hotel & Towers',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Thai.id
      },
      {
        name: 'Paii at The House on Sathorn - W Bangkok',
        image: 'https://images.otstatic.com/prod/24896044/1/large.jpg',
        description: 'Highlights include the local Giant River Prawn, char-grilled and served with “choo chee” curry sauce; the French Razor Clams, flambéed table-side with house-made XO sauce; and the French Turbot, stuffed with lemongrass, shallots and kaffir lime leaves and baked in a thick Thai herb salt crust. Diners will not want to miss the Giant Crab Fried Rice, made with organic jasmine rice from Nakhon Pathom. The plate is designed for sharing and topped with no less than half a kilo of freshly steamed Surat Thani mud crab meat.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Thai.id
      },
      {
        name: 'Front Room at the Waldorf Astoria',
        image: 'https://images.otstatic.com/prod/26475932/6/large.jpg',
        description: 'A culinary experience featuring Nordic-Thai Cuisine by Chef Rungthiwa Chummongkhon. Chef Fae, born and raised in Northern Thailand has spent the last 10 years in Denmark where she gained experience in world class restaurants like Geranium in Copenhagen and Hotel Belle Epoque in Germany. Pure locally sourced, Thai ingredients are combined with Nordic cooking techniques like fermenting, curing, preserving and smoking to create original visual and contextual flavors that are innovative yet familiar. Explored through a tasting menu or by a la cart, rounded up by creative cocktails and matching wines. A unique setting to entertain and discover. ',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Thai.id
      },
      {
        name: 'Siam Tea Room',
        image: 'https://images.otstatic.com/prod/24974634/1/large.jpg',
        description: 'With its delightful combination of Thai and western styles, this deli-inspired outlet spans the culinary divide. Sample a selection of freshly-baked pastries, authentic Thai cuisine and a splendid afternoon tea service featuring fine-grade tea leaves sourced from the hills of northern Thailand. A welcoming area with comfy sofas, this is the ideal spot for a swift yet supremely satisfying lunch.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Thai.id
      },
      {
        name: 'JW Café',
        image: 'https://images.otstatic.com/prod/25760499/1/large.jpg',
        description: 'JW Café makes it easy to enjoy fantastic all-day dining. Fuel up for your morning in Bangkok with a delicious breakfast, or treat yourself to our extensive buffet for lunch or dinner.',        
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: International.id
      },
      {
        name: 'Niche',
        image: 'https://images.otstatic.com/prod/25899452/1/large.jpg',
        description: 'The new Niche menu presents a selection of tempting dishes that combine the very best of western and Asian recipes, flavours and ingredients. These new dishes, created and presented by Chef Stefan Trepp, include classic Thai favourites such as river prawns, Tom Kha Gai soup and Phad Thai noodles.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: International.id
      },
      {
        name: 'Feast - Royal Orchid Sheraton Hotel & Towers',
        image: 'https://resizer.otstatic.com/v2/photos/large/1/25345611.jpg',
        description: 'Feast is a “world cuisine” restaurant—a vibrant modern venue that welcomes you with stylish décor plus an international buffet and à la carte menus.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: International.id
      },
      {
        name: 'The Rain Tree Cafe - The Athenee Hotel, a Luxury Collection Hotel Bangkok',
        image: 'https://resizer.otstatic.com/v2/photos/large/25983718.jpg',
        description: 'The Rain Tree Café has been reconceived in a modern interpretation of Thai neo-colonial interior décor & style. Three separate but complementary spaces evidencing extreme elegance and making excellent use of natural light are interwoven with threads of touching homeliness',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: International.id
      },
      {
        name: 'Living Room',
        image: 'https://images.otstatic.com/prod/26226331/1/large.jpg',
        description: 'Journey down the Silk Road and experience authentic Cantonese specialties prepared with flair and passion by Hong Kong Master Chef Kam and his highly skilled and experienced culinary team. Dine on a dim sum lunch; a pure expression of the Chinese tea and snack tradition, enhanced by decades of refinement. The a la carte menu offers a variety of Cantonese cuisine for lunch and dinner. Silk Road offers five private dining rooms.',        
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Asian.id
      },
      {
        name: 'Praya Kitchen - Bangkok Marriott Hotel The Surawongse',
        image: 'https://images.otstatic.com/prod/26475932/6/large.jpg',
        description: 'An authentic Thai buffet restaurant that brings back forgotten recipes passed down from generation to generation. The simple yet sophisticated delicacies are recreated from chefs’ childhood memories, using seasonal local ingredients.',        
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Asian.id
      },
      {
        name: 'You & Mee - Grand Hyatt Erawan Bangkok',
        image: 'https://images.otstatic.com/prod/26331863/1/large.jpg',
        description: 'You&Mee is a casual Bangkok restaurant with a boulevard ambience, ideal for a quick lunch, a light bite after work or a satisfying supper. Throughout the day and night lovers of authentic Thai and Asian cuisines can order a wide variety of noodle dishes. There’s also a lunchtime curry buffet, and a popular evening Khao Tom rice soup buffet. Located on Lower Lobby at the Grand Hyatt Erawan Bangkok.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Asian.id
      },
      {
        name: 'Akira Back',
        image: 'https://images.otstatic.com/prod/26331862/1/large.jpg',
        description: 'The modern style of gastronomy is inventive, exciting and vibrant, blending Japanese and Korean elements with other international influences. Akira Back is, in fact, four different venues in one, comprising a main dining area, sushi bar, omakase bar and four private dining rooms with spectacular views across the Bangkok skyline through floor-to-ceiling windows.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Asian.id
      },
      {
        name: 'Yao Rooftop Bar - Bangkok Marriott Hotel The Surawongse',
        image: 'https://images.otstatic.com/prod/26475928/2/large.jpg',
        description: ' Yào Rooftop Bar is Chinese modern in style, with an air of classic Shanghai chic that blends vintage style with luxurious sophistication. Situated on the rooftop floor of Bangkok Marriott Hotel The Surawongse, Yào Rooftop Bar is conducive to socializing thanks to its chilled-out atmosphere and chic décor that’s a fusion of modern Chinese and vintage style with Shanghai-style opulence. Due to local liqueur laws children below 20 years of age allowed to the Rooftop only until 8:00 pm.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: BarLoungeBottle.id
      },
      {
        name: 'Lobby Lounge- Royal Orchid Sheraton Hotel & Towers',
        image: 'https://resizer.otstatic.com/v2/photos/large/1/25346574.jpg',
        description: 'Our tasteful and inviting Lobby Lounge is the perfect spot for a casual meeting with colleagues or a relaxed conversation with a friend. With plush furnishings, jewel-toned décor, and subtle Thai motifs, this comfortable space welcomes you for light bites and beverages throughout the day. Our drink menu includes a global selection of wines and a range of spirits. For something sweet, choose from a variety of bakery and pastry selections, including classics such as Black Forest cake, blueberry cheesecake, macaroons, brownies, and more.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: BarLoungeBottle.id
      },
      {
        name: 'Alfresco 64, A Chivas Bar – Tower Club at lebua State Tower',
        image: 'https://images.otstatic.com/prod/25038726/1/large.jpg',
        description: 'The new rooftop bar at The Dome, the luxury hotel’s collection of multi-award-winning restaurants and bars, is a partnership with Chivas Regal, makers of the most prestigious premium blended Scotch whisky in the world, and designed to bring a new whisky degustation experience to the heart of Bangkok with the best sunset views.',       
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: BarLoungeBottle.id
      },
      {
        name: 'Flute, A Perrier Jouet Bar – Tower Club at lebua State Tower',
        image: 'https://images.otstatic.com/prod/25038741/1/large.jpg',
        description: 'Located in 64th floor, here under the moon and stars, you may partake of our exclusive champagne selections, by the bottle or the by flute, you will have the privilege to taste the delicacy and the refinement of Perrier Jouet Blanc de Blancs, Cuvee Belle époque Brut & Rose & even the taste of G.H. Mumm Cuvée R. Lalou, G.H. Mumm Grand Cru Brut Selection, Perrier-Jouët Blason Rosé - all of which are available in Thailand exclusively at the Dome.',      
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: BarLoungeBottle.id
      },
      {
        name: 'The Loft & Champagne Bar at the Waldorf Astoria',
        image: 'https://images.otstatic.com/prod/25792239/1/large.jpg',
        description: 'The Loft - Exotic, glamorous and steeped in the romance of art nouveu. A New York inspired bar, using the legacy of the Old Waldorf Astoria Barbook. Artisanal spirits and forgotten cocktails are crafted to the modern palate using a great collection of house-made ingredients, accompanied by gourmet bar bites. The Champagne Bar- An artistic jewel on top of the building. Champagne by the glass, hand-crafted cocktails and one of the best views of Bangkok are the perfect combination for an exclusive night out.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: American.id
      },
      {
        name: 'New York Steakhouse - JW Marriott Hotel Bangkok',
        image: 'https://resizer.otstatic.com/v2/photos/large/25797831.jpg',
        description: 'For a quality restaurant experience here in Bangkok, look no further than our signature New York Steakhouse. We serve premium cuts of steak and chops, seasonal sides and delectable seafood, in addition to a curated list of fine wines. Please note that the dress code is Smart Casual and we will offer an alternate dining area to those wearing flip flops (slippers). Children under age of 12 are required to follow proper dining etiquette.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: American.id
      },
      {
        name: 'The Rain Tree Cafe - The Athenee Hotel, a Luxury Collection Hotel Bangkok',
        image: 'https://images.otstatic.com/prod/28583233/1/large.jpg',
        description: 'The Rain Tree Café has been reconceived in a modern interpretation of Thai neo-colonial interior décor & style. Three separate but complementary spaces evidencing extreme elegance and making excellent use of natural light are interwoven with threads of touching homeliness. These three unique areas are cleverly interwoven and are aptly named: The Bronze Kitchen upgraded with interactive live cooking stations, The Valaya Room with its formal library-style “VIP” space and The Secret Garden for more private affairs. Enjoy an inspiring voyage of discovery on our stunning international buffet that also features five specialty dishes of the day from our specialist head chefs. Service for Breakfast, Lunch, Dinner, Sunday Brunch and Dessert Buffet.  Allow us to fulfil your needs - please let us know should you have any special dietary requirements (vegetarian, vegan, gluten-free, halal), food allergies, or food intolerances.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: American.id
      },
      {
        name: 'Bawarchi Chidlom',
        image: 'https://images.otstatic.com/prod/26008269/1/large.jpg',
        description: 'Bawarchi´s fare is derivative of traditional Mughals cuisine focusing around the Tandoor clay oven, where breads, fish, meat and poultry are all cooked in the authentic North West Indian style. Once you are in Bawarchi, you cannot leave without tasting our signature curries. Sensitive to the needs of our vegetarian guests our vegetarian meals are always prepared separately. We have an extensive selection of vegetarian dishes from across India.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: American.id
      },

      {
        name: "Rossini's " ,
        image: 'https://images.otstatic.com/prod/25050727/1/large.jpg',
        description: 'Renowned as one of the finest places in Bangkok to enjoy a memorable lunch or dinner of contemporary Italian cuisine. Designed in the style of an enchanting Tuscan villa, Rossini’s ensures a truly unique dining experience for lovers of fine food and wine. Rossini’s is defined by the passion, creativity and flair of its gifted Executive Chef, Gaetano Palumbo. Born in Sicily, Chef Gaetano grew up in Sciacca, a traditional fishing town in Agrigento Province, an area known as the culinary heart of traditional Sicilian cuisine. “In Sicily, cooking and eating together is central to community and family life,” says Chef Gaetano. “Everyone has a passion for local cuisine and produce, and learning the art of cooking is just as important as enjoying the pleasures of eating good food.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Italian.id
      },
      {
        name: " Giorgio's - Royal Orchid Sheraton Hotel & Towers ",
        image: 'https://resizer.otstatic.com/v2/photos/large/1/25346640.jpg',
        description: "Giorgio's is the perfect venue for a romantic and memorable meal, bringing you the comfort of authentic Italian flavors in a setting inspired by old world European charm. Gather in the cozy atmosphere among glowing chandeliers, exposed rafters, dark wooden floors, and faux patina. Diners can opt for air-conditioned comfort or al fresco dining on an open terrace overlooking the Chao Phraya River. The sophisticated menu features a tempting selection of pastas and entrées prepared with care using a blend of fresh local ingredients and Italian imports. Satisfying favorites include ossobuco di vitello in salsa gremolata with risotto alla milanese, spaghetti alle vongole, and risotto al tartufo. Pair your meal with the perfect wines from Italy and beyond, or allow us to make a recommendation.",
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Italian.id
      },
      {
        name: 'Lobby Lounge- Royal Orchid Sheraton Hotel & Towers',
        image: 'https://resizer.otstatic.com/v2/photos/large/1/25346574.jpg',
        description: 'Our tasteful and inviting Lobby Lounge is the perfect spot for a casual meeting with colleagues or a relaxed conversation with a friend. With plush furnishings, jewel-toned décor, and subtle Thai motifs, this comfortable space welcomes you for light bites and beverages throughout the day. Our drink menu includes a global selection of wines and a range of spirits. For something sweet, choose from a variety of bakery and pastry selections, including classics such as Black Forest cake, blueberry cheesecake, macaroons, brownies, and more. Live bands enhance the upbeat, carefree vibe on Tuesday, Wednesday, Friday and Saturday from 8:30 PM to midnight.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Italian.id
      },
      {
        name: 'BarSu',
        image: 'https://images.otstatic.com/prod/25050635/1/large.jpg',
        description: 'BarSu offers creative interpretations of casual fare such as tasty American pan pizza, juicy chicken burger, succulent beef skewer all complemented by cold beers, fine wines and signature drinks.The relaxed dining experience is elevated by chic contemporary décor and interactive music. There is also an intimate terrace overlooking bustling Sukhumvit Road. Meet, greet and eat with friends at BarSu!',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Italian.id
      },

      {
        name: 'Bawarchi Rooftop',
        image: 'https://images.otstatic.com/prod/27262019/2/large.jpg',
        description: 'We sit atop the highest floor of Hotel Solitaire Bangkok with sweeping vistas of downtown Bangkok.It is our aspiration to bring you on an epicurean journey traversing India. We have curated a menu that highlights the different regions in India. Welcome to Bawarchi Rooftop - Your Oasis In The Sky. Experience Indian Fine Dining with a view!',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Indian.id
      },
      
      {
        name: 'Breeze – Tower Club at lebua State Tower',
        image: 'https://images.otstatic.com/prod/26245753/2/large.jpg',
        description: 'Breeze is homage to Asian cuisine, and its rising stature among connoisseurs. Located high above Bangkok on the 51st and 52nd floors of the hotel Tower Club at lebua, the restaurant is known as the ‘new face of Asian dining’, a stunning venue where design, cuisine and service come together for an evening unlike any other.With a sumptuous menus that remain true to its authentic Asian roots while raising the bar for progressive presentation, Breeze breathes new life into ancient traditions, whisking the past into the present, and indeed on to the future. The result is a testament to the chef’s respect for history, and passion for freshness, flavor, and the aesthetics of haute cuisine.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Indian.id
      },
      
      {
        name: 'Pink Bar',
        image: 'https://images.otstatic.com/prod/26091141/1/large.jpg',
        description: 'Pink, the romantic, “millennial pink” champagne bar adjacent to Chef’s Table, aptly opens on February 14th. This glamorous bar, drawing its elegance from the 1950’s, will be the go-to spot for pre-dinner drinks and canapes, or a digestif and cigar to wind down the evening. Pink will exude love, complete with rose and gold hues, a gold champagne centerpiece table sculpted from exotic metals and floor-to-ceiling champagne cellar. The outdoor patio offers the best panoramic views of Bangkok’s cityscape, temples and beyond – inside, guests can relax in circular loungers while enjoying live piano and soothing vocals.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Indian.id
      },
      
      {
        name: 'Honest to you with love',
        image: 'https://images.otstatic.com/prod/26245754/2/large.jpg',
        description: 'With a sumptuous menus that remain true to its authentic Asian roots while raising the bar for progressive presentation, Breeze breathes new life into ancient traditions, whisking the past into the present, and indeed on to the future. The result is a testament to the chef’s respect for history, and passion for freshness, flavor, and the aesthetics of haute cuisine.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: Indian.id
      },
      {
        name: 'The Allis',
        image: 'https://images.otstatic.com/prod/26108341/1/large.jpg',
        description: "Set in a relaxed and welcoming social space for group dining, meetings and date nights, The Allis is a restaurant and cocktail bar with an expansive art collection and views of Green Street from floor-to-ceiling windows.The Allis is named after the family that commissioned the restaurant's historic West Loop building in 1907. It offers all-day dining, serving egg dishes and house-made pastries for breakfast, sandwiches and salads for lunch, plus shared plates and entrees for dinner. Afternoon tea is served daily, along with coffee, wine and craft cocktails. Live music every Tuesday & 1/2 of select bottles of wine, 6pm - 9pmHappy Hour Monday - Friday, 3pm - 6pm",
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: AfternoonTea.id
      },
      {
        name: 'Filini Restaurant and Bar-Radisson Blu Aqua Hotel',
        image: 'https://images.otstatic.com/prod/23871652/1/large.jpg',
        description: " Whether you're looking for a dozen oysters fresh from the sea, a hearty weekend brunch buffet to enjoy with the kids, or an elegant dinner of housemade pasta (bucatini carbonara, perhaps?) and a slice of indulgent chocolate layered cake, Filini Restaurant and Bar has you covered. Authentic, exciting and innovative, Filini focuses on the finest fresh ingredients and flavors. The cuisine is uncomplicated but exquisitely prepared and presented to enhance the excellence of the produce. Unpretentious and stylish, the mood of the restaurant is friendly and subtle with memorable Mediterranean overtones. Modern Tea is available Friday through Sunday from 2pm to 4pm. Guests can enjoy a selection of sweet and savory bites alongside a pot of tea from Rare Tea Cellars or Craft fully made Tea Cocktails . Reservations require 24-hour advance notice and are available by phone only. Please call 312-477-0234. A Modern Twist on an Afternoon Tradition.",
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: AfternoonTea.id
      },
      {
        name: 'Lockwood Restaurant and Bar',
        image: 'https://images.otstatic.com/prod/25757939/1/large.jpg',
        description: " Great food derived from the Great Lakes region. Lockwood Restaurant & Bar offers innovative takes on classic American fare by incorporating locally sourced ingredients along side some of Chicago’s most recognizable flavors serving simple Midwestern favorites with a sense of elegance.The menu places an emphasis on the Great Lake’s region, with all produce farmed and cultivated from the Illinois area and neighboring states and most fish are fresh lake catches or harvested in free-range, naturally sustainable farms.Lockwood Restaurant & Bar is available for corporate buyouts, milestone occasions and receptions, accommodating up to 200 for reception events. Lockwood also offers an exclusive private dining room, which can accommodate up to 14 as well as a wine room, perfect for tastings, accommodating up to 4.Please call 312-917-3404 if you would like to make an Afternoon Tea reservation. Reservations must be received 24 hours in advance when trying to schedule a tea for the next day.",
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: AfternoonTea.id
      },
      {
        name: 'Commons Club',
        image: 'https://images.otstatic.com/prod/25086639/1/large.jpg',
        description: 'This is where work and play intermingle. Where DJ sets, live entertainment, fashion soirees, and entrepreneurial talks are abound. Where cocktails embolden a palate-pleasing culinary menu. Where guests and locals meet. Unbound inspiration from around the world placed on every plate, in every cocktail and with each encounter.Membership experiences without dues…that’s the feeling you get at the Commons Club.Through the lens of globally-inspired chef Moosah Reaume, Commons Club offers an eclectic menu with reinvented takes on contemporary American dishes. Bringing culinary delight to the downtown Chicago restaurant landscape by combining unexpected ingredients with bold flavors, Commons Club infuses a relaxed, yet elegant experience. So prepare to go on a journey.',
        createdAt: now,
        updatedAt: now,
        restaurant_category_id: AfternoonTea.id
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('RestaurantCategories', null, {});
    return queryInterface.bulkDelete('RestaurantLists', null, {});
  }
};
