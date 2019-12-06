const initialState = [
  {
    id: 1,
    name: "Blue Tanktop",
    imageUrl: "https://m.media-amazon.com/images/I/91Dh3ec3EFL._SR500,500_.jpg",
    price: 25
  },
  {
    id: 1,
    name: "Blue Tanktop",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHx1FofDwWZPG3vTpQEW03vCNgSzA-hH6d7kxUMejxS3MuEwGD&s",
    price: 25
  },
  {
    id: 1,
    name: "Blue Tanktop",
    imageUrl:
      "https://d3eh3svpl1busq.cloudfront.net/FxDPfJndvBoyXQgxvTENyZGmumPaXqzu/assets/static/optimized/rev-7b4f931/image/cache/catalog/Mobiles/Samsung/Samsung-Galaxy-A50/Samsung-Galaxy-A50-Qmart-5-550x550.jpg",
    price: 25
  },
  {
    id: 1,
    name: "Blue Tanktop",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG2LGmJ26GUSoUvQx1bnDiCyaY5MqyfYP2X3XCuWUWeWzrWbv&s",
    price: 25
  },
  {
    id: 1,
    name: "Blue Tanktop",
    imageUrl:
      "https://www.themobileindian.com/public/thumbs/news/2019/12/28913/mi-9-lite_354_612.jpg",
    price: 25
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PHONES":
      return state;
    default:
      return state;
  }
};
