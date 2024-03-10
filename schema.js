const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Product = sequelize.define('product', {
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  SKU: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

const ProductCategory = sequelize.define('product_category', {
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

const ProductInventory = sequelize.define('product_inventory', {
  quantity: Sequelize.INTEGER,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

const Discount = sequelize.define('discount', {
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  discount_percent: Sequelize.DECIMAL,
  active: Sequelize.BOOLEAN,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

Product.belongsTo(ProductCategory, {foreignKey: 'category_id'});
Product.belongsTo(ProductInventory, {foreignKey: 'inventory_id'});
Product.belongsTo(Discount, {foreignKey: 'discount_id'});

sequelize.sync();
