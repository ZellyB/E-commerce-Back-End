const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  const dbCat = await Category.findAll({
    include: {
      model: Product,
      attributes: [`id`, `product_name`, `price`, `stock`, `category_id`]
    }
  })
  // find all categories, w/ associated model & attributes included
  res.status(200).json(dbCat)
  } catch(err){
    res.status(500).json(err)
  }  
});

router.get('/:id', async (req, res) => {
  try{
    const dbCatById = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: [`id`, `product_name`, `price`, `stock`, `category_id`]        
      }
    })
    if(!dbCatById){
      res.status(404).json({message: `no Categories found by that id`})
    }
    res.status(200).json(dbCatById)
  } catch(err){
     res.status(500).json(err)
   }  
});

router.post('/', async (req, res) => {
  try {
    const dbNewCat = await Category.create({
      category_name: req.body.category_name})
    res.status(200).json(dbNewCat)
  }catch(err){
    res.status(400).json(err)
  }  
});

router.put('/:id', async (req, res) => {
  try {
    const dbUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if(!dbUpdate){
      res.status(404).json({message: `no Categories found by that id`})
    }
    res.status(200).json(dbUpdate)
  } catch (err){res.status(500).json(err)}
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const dbDelete = await Category.destroy( {
      where: {
        id: req.params.id
      }
    })
    if(!dbDelete){
      res.status(404).json({message: `no Categories found by that id`})
    }
    res.status(200).json(dbDelete)
  } catch (err){res.json(500).json(err)}
  // delete a category by its `id` value
});

module.exports = router;
