const fruits = [
    { name: "Яблуко", imageUrl: "https://www.bigom.lviv.ua/image/cache/catalog/PRODUCTS/golden-400x400.jpg" },
    { name: "Груша", imageUrl: "https://flora-ua.com/image/cache/catalog/GOODS/PLODOVI/grusha/noyaburska/noyabrska1_1-900x900.jpg" },
    { name: "Банан", imageUrl: "https://novus.online/uploads/13/68062-2850029.jpg" },
    { name: "Апельсин", imageUrl: "https://fruit-time.ua/images/cache/products/05/apelsin-imp-500x500.jpeg" },
    { name: "Мандарин", imageUrl: "https://ss.sport-express.ru/userfiles/materials/173/1739263/full.jpg" },
    { name: "Лимон", imageUrl: "https://otvalentiny.od.ua/upload/image/store/products/product-103/limon-500-g-108.png" },
    { name: "Ананас", imageUrl: "https://crazybox.com.ua/image/catalog/exotic_fruits/ananas_gold.JPG" },
    { name: "Кокос", imageUrl: "https://freshmart.com.ua/storage/web/cache/product/81/kokos.jpg?w=1024&h=768&fit=resize&q=80&fm=pjpg&t=1628596013&s=342a599728c4ce772e18b67eedc65f9d" },
    { name: "Манго", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/1200px-Mango_-_single.jpg" },
    { name: "Ківі", imageUrl: "https://vitaverde.com.ua/wp-content/uploads/2020/09/bermix-studio-1oMGgHn-M8k-unsplash.jpg" },
    { name: "Персик", imageUrl: "https://faktypro.com.ua/uploads/img/cikavi-fakti-pro-persiki.jpg" },
    { name: "Абрикос", imageUrl: "https://sadzhantsi.com/wp-content/uploads/2022/05/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D0%B9%D1%81.jpg" },
    { name: "Слива", imageUrl: "https://img.tsn.ua/cached/859/tsn-84ee4f9844c21d3af2b3cfbad2c9c711/thumbs/428x268/d1/5e/9c792e62fd0cebbf7f70104cfdc85ed1.jpeg" },
    { name: "Черешня", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cherry_Stella444.jpg/220px-Cherry_Stella444.jpg" },
    { name: "Вишня", imageUrl: "https://img.tsn.ua/cached/459/tsn-45ddb1c1da8bc78232f746637fde253d/thumbs/1116x628/f5/cc/681708fc887da70f3e59e3cb00d9ccf5.jpeg" },
    { name: "Гранат", imageUrl: "https://www.volyn24.com/img/modules/news/b/80/e03603b7f8d992379a9c1cd49eda480b/gallery-photo.jpg" },
    { name: "Полуниця", imageUrl: "https://content1.rozetka.com.ua/goods/images/big/9033212.jpg" },
    { name: "Щавель", imageUrl: "https://media.tenor.com/dtY_7fvtczUAAAAM/lil-admin-%D0%BC%D0%B5%D0%BB%D0%BB%D1%81%D1%82%D1%80%D0%BE%D0%B9.gif" },
    { name: "Шипшина", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Rosa_canina_001.JPG/220px-Rosa_canina_001.JPG" },
    { name: "Грейпфрут", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Grapefruit-Whole-%26-Split.jpg/220px-Grapefruit-Whole-%26-Split.jpg" },
    { name: "Помело", imageUrl: "https://img.championat.com/i/j/t/17055063151880766438.jpg" },
    { name: "Ківано", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Kiwano_open.jpg/220px-Kiwano_open.jpg" },
    { name: "Фейхоа", imageUrl: "https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/01/ingir_polza_i_vred_otsil.jpg" },
    { name: "Папайя", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Papaya_cross_section_02.jpg/220px-Papaya_cross_section_02.jpg" },
    { name: "Гуава", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Guava_Berry.jpg/220px-Guava_Berry.jpg" },
    { name: "Диня", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cantaloupe_and_cross_section.jpg/220px-Cantaloupe_and_cross_section.jpg" },
    { name: "Аннона", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Annona_cherimola_frucht_und_blatt.jpg/220px-Annona_cherimola_frucht_und_blatt.jpg" },
    { name: "Карамбола", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Carambola_Starfruit.jpg/220px-Carambola_Starfruit.jpg" }]

    let basket = [];
function addFruit(){
    let fruit_input = document.getElementById("fruitInput").value;
    let index = fruits.findIndex(fruit => fruit.name.toUpperCase() === fruit_input.toUpperCase());

    if(basket.includes(fruit_input.toUpperCase()) || index <= -1){
        alert("Фрукт вже обрано(або не існує)")}
    else  {
        document.getElementById("img").src = fruits[index].imageUrl;
        let fruitList = document.getElementById("fruitList");
        let list_el = document.createElement("li");
        list_el.textContent = fruit_input.toLowerCase();
        fruitList.appendChild(list_el); 
        basket.push(fruit_input.toUpperCase());
    } 
}

