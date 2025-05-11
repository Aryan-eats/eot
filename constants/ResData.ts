import restaurantImage from "../assets/images/restaurant.png";
import dishImage from "../assets/images/burger.png"; // Same image for all dishes
export const ResData = Array.from({ length: 50 }, (_, index) => ({
    title: `Restaurant ${index + 1}`,
    firstSubTitle: "Fast Food, Indian",
    secondSubTitle: "Serves Veg & Non-Veg",
    imageSource: restaurantImage, // Default image
    isTitleInsideImage: false,
    isDistanceTime: true,
    time: `${15 + (index % 10)} mins`, // Varies between 15-24 mins
    distance: `${2 + (index % 5)}.${index % 10} km`, // Random distances
    // isAddButton: true,
    buttonTitle: "Order Now",
    onPress: () => console.log(`Ordered from Restaurant ${index + 1}`),

    items: Array.from({ length: 5 }, (_, itemIndex) => ({
      name: `Popular Item ${itemIndex + 1}`,
      price: `${100 + itemIndex * 20}₹`, // Prices vary from 100₹ to 180₹
      imageSource: dishImage, // Same dish image for all items
    })),
  }));
  

  