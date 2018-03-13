let _route = 'site/home/';

exports.index = (req, res) => {
  let products = [{
    image: 'http://via.placeholder.com/300x300',
    thumbnail: 'Thumbnail label',
    description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    image: 'http://via.placeholder.com/300x300',
    thumbnail: 'Thumbnail label',
    description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    image: 'http://via.placeholder.com/300x300',
    thumbnail: 'Thumbnail label',
    description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    image: 'http://via.placeholder.com/300x300',
    thumbnail: 'Thumbnail label',
    description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    image: 'http://via.placeholder.com/300x300',
    thumbnail: 'Thumbnail label',
    description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }];
  res.render(_route + 'index', {
    products: products
  });
};