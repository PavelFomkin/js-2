/**
 * Класс, объекты которого описывают салаты в меню.
 *
 * @param salad Тип салата (MenuItem)
 * @param weight Вес салата
 * @constructor
 */
function Salad(salad, weight) {
    this._salad = new MenuItem(salad.getName() + " " + weight +" грамм",
                               salad.getPrice() * (weight / 100),
                               salad.getCalories() * (weight / 100));
    this._weight = weight;
}

Salad.prototype = Object.create(ProductInfo.prototype);
Salad.prototype.constructor = Salad;
Salad.prototype.getWeight = function () {
    return this._weight;
};