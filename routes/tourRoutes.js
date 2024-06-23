const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController');


const router = express.Router();

//router.param('id',tourController.checkID);

router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getTours);

router.route('/tour-stats').get(tourController.getTourStats);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getTours)
  .post(tourController.CreateTour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.UpdateTour)
  .delete(tourController.deleteTour);


module.exports = router;