window.FlowersApp = angular.module('FlowersApp', ['ngRoute']);

FlowersApp.controller("FlowersController", function ($scope) {
    $scope.flowers = [
        {
            "id":1,
            "name":"The Viola",
            "description":"The Viola, a bouquet of deep purples and smoky greys, is inspired by Shakespeare's feistiest heroine. Bolero calla lilies and purple brassica, united with blue eryngium and pussy willow, create an irresistible display with a rock and roll edge. ",
            "created_at":"2014-11-21T13:53:53.485+00:00",
            "updated_at":"2014-11-21T13:57:41.347+00:00",
            "instructions":"Introducing The Viola, a bouquet of deep purples and smoky greys, inspired by Shakespeare's feisty heroine. Bolero calla lilies and purple brassica, united with blue eryngium and pussy willow, create an irresistible display with a rock and roll edge.\r\nDesigned by our florist and arranged by hand for you, The Viola is ready to be displayed in your favourite vase. Just cut each stem diagonally about 3cm from the end, and re-trim every few days to enjoy your bouquet for as long as possible.",
            "collection_id":2,
            "weekly_bouquet":false,
            "starting_on":"2014-11-25",
            "ending_on":"2500-01-01",
            "slug":"the-viola",
            "lily_free":false,
            "price":"£45",
            "thumb": "https://res.cloudinary.com/bloomandwild/image/upload/s--48E66Z2d--/t_product_box_website_main.lossless_compression/v1416578534/wqgrt0fe04mzmfx2h8zp.jpg"
        },
        {
            "id":2,
            "name":"The Lucy",
            "description":"Add a touch of sophisticated winter sparkle to their Christmas with The Lucy. Inspired by the snowy forests of Narnia, this arrangement combines white bloom chrystanthemums, eryngium orion, fir and hypericum berries.",
            "created_at":"2014-11-21T13:53:53.214+00:00",
            "updated_at":"2014-11-21T13:55:39.318+00:00",
            "instructions":"The Lucy was designed by our florist and chosen for you. Inspired by the snowy forests of Narnia, the arrangement combines white bloom chrystanthemums, eryngium orion, hypericum berries and fur with a touch of winter sparkle.\r\nGather the fir, pine and eucalyptus to create a base for your arrangement. Intersperse the berries and eryngium throughout and place birch twigs around the edges of the foliage to add height. Finally, trim the white blooms to different lengths, and arrange in the centre of your bouquet for a stunning focal point.",
            "collection_id":1,
            "weekly_bouquet":false,
            "starting_on":"2014-11-25",
            "ending_on":"2500-01-01",
            "slug":"the-lucy",
            "lily_free":false,
            "price":"£35",
            "thumb": "https://res.cloudinary.com/bloomandwild/image/upload/s--kU6OTH4s--/t_product_box_website_main.lossless_compression/v1417198974/rfw4n13cdkkkmpy9gm22.jpg"
        },
        {
            "id":3,
            "name":"The Beatrix",
            "description":"Velvety petals and festive fragrances combine with a hint of Christmas sparkle in this traditional Christmas arrangement, featuring burgundy carnations, rosemary, cinnamon and fir.",
            "created_at":"2014-11-21T13:53:53.375+00:00",
            "updated_at":"2014-11-21T13:57:32.297+00:00",
            "instructions":"The Beatrix was designed by our florist and chosen for you. Velvety petals and festive fragrances combine with a hint of Christmas sparkle in this traditional arrangement that features burgundy carnations, rosemary, cinnamon and fir.\r\n\r\nGather the fir, pine and rosemary to create a base for your arrangement. Keeping the bear grass tied together, insert this in the centre of the foliage. Intersperse the carnations, leucadenron and eryngium throughout. Finally, position the cinnamon and berries, and pull out individual strands of bear grass for movement and height.",
            "collection_id":1,
            "weekly_bouquet":false,
            "starting_on":"2014-11-25",
            "ending_on":"2500-01-01",
            "slug":"the-beatrix",
            "lily_free":false,
            "price":"£27",
            "thumb": "https://res.cloudinary.com/bloomandwild/image/upload/s--U38TxnZw--/t_product_box_website_main.lossless_compression/v1417199030/vic4oblscftagpfgtoqg.jpg"
        }
    ];

    });
    FlowersApp.controller("FlowerDetailsController", function ($scope, $routeParams) {
        $scope.getFlowerById($routeParams.id);
    });

