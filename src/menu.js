export default function createMenu() {
    console.log("Creating Menu");
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = "";

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = "OUR MENU";

    menuDiv.appendChild(menuHeading);


    const breakfast = Breakfast();
    menuDiv.appendChild(breakfast);
    menuDiv.appendChild(MainDishes());
    menuDiv.append(Desserts());

    contentDiv.appendChild(menuDiv);
}

const createMenuCategory = (categoryName) => {
    const category = document.createElement("div");
    category.classList.add("menu-category")

    const categoryHeading = document.createElement('h3');
    categoryHeading.textContent = categoryName; 
    const hr = document.createElement('HR');

    category.appendChild(categoryHeading);
    category.appendChild(hr);


    return category;

}

const createMenuItem = (name, price) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const itemName = document.createElement('p');
    itemName.textContent = name;

    const hr = document.createElement('HR');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$ ${price}`;

    itemDiv.append(itemName, hr, itemPrice);

    return itemDiv;
}


const Breakfast = () => {
    const breakfast = createMenuCategory("Breakfast");

    const eggs = createMenuItem("3 eggs omlette", 3);
    const eggsWithBacon = createMenuItem("3 eggs with bacon", 4);
    const baconAndCheese = createMenuItem("Bacon and cheese", 6);


    breakfast.append(eggs, eggsWithBacon, baconAndCheese);

    return breakfast;
}


const MainDishes = () => {
    const mainDishes = createMenuCategory("Main course");

    const steak = createMenuItem("Chef's steak", 19);
    const chicken = createMenuItem("Chicken and mushrooms", 15);
    const curryChicken = createMenuItem("Curry chicken", 15);
    const grilledSalmon = createMenuItem("Grilled salmon with sauce", 24);



    mainDishes.append(steak, chicken, curryChicken, grilledSalmon);

    return mainDishes;
}

const Desserts = () => {
    const desserts = createMenuCategory("Desserts");

    const pancakes = createMenuItem("Pancakes with cream", 8);
    const cheesecake = createMenuItem("Blueberry Cheesecake", 6);
    const icecream = createMenuItem("Homemade ice cream", 6);

    desserts.append(pancakes, cheesecake, icecream);

    return desserts;
}




