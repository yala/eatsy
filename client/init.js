Meteor.startup(function() {
	Tracker.autorun(function() {
		Meteor.subscribe('eatsery', Session.get('location'));
	});

	GoogleMaps.load({
		v: '3',
  		key: 'AIzaSyCc7dxUtKyvEVFk3o-nqvJptwvNxE5WDJo',
    	libraries: 'places'
	});
});





