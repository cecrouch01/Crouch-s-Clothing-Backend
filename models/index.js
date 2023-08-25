// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  //figure out what happens onDelete (maybe even onUpdate)
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // figure out what happens onDelete (maybe even onUpdate)
});
Product.belongsToMany(Tag, {
  through: ProductTag
});
Tag.belongsToMany(Product, {
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
