const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//This gets all categories and their associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});
//This gets a specific cagetory with it's associated product
router.get('/:id', async (req, res) => {
try{
  const singleCategoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  });
  //Talk about if this follows industry standards
  if (singleCategoryData !== null) {
  res.status(200).json(singleCategoryData)
  } else {
    res.status(400).json('Improper Id')
  }
} catch(err) {
  res.status(500).json(err)
}
});
//This creates a new Category
router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } catch(err){
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json('Successfully Updated')
  } catch(err) {
    res.status(400).json(err)
  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
