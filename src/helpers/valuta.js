const valuta = (price, data, to) => {
    if (to == "us") {
        if (data == "USD") {
            return price
        } else if (data == "GBP") {
            return (price * 1.25)
        } else {
            return price
        }
    } else if (to == "som") {
        if (data == "GBP") {
            return (price * 15462)
        } else if (data == "USD") {
            return (price * 12320)
        }
    }
}