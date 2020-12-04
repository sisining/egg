'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.hello.say);
  router.get('/query', controller.query.queryall);
  router.get('/queryOne', controller.query.queryOne);
  router.post('/create', controller.query.createOne);
  router.put('/update', controller.query.updateOne);
  router.delete('/delete', controller.query.deleteOne);

  // router.get('/query',controller.query.getAll)
  // router.post('/create',controller.query.addOne)
  // router.put('/update',controller.query.updateThose)
  // router.post('/delete',controller.query.deleteThose)
};
