

if (Products.find().count() === 0) {
        console.log("Importing private/products.json to db")

        var data = JSON.parse(Assets.getText("products.json"));

        data.forEach(function (item, index, array) {
            Products.insert(item);
        })
    }
