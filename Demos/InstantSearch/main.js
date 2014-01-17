var app = angular.module("DemoInstantSearch", []);
var controllers = {};
var filters = {};
var factories = {};

factories.Movies = function()
{
	return [{
			url: 'http://www.imdb.com/title/tt0111161/?ref_=chttp_tt_1',
			title: 'The Shawshank Redemption (1994)',
			image: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX34_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0068646/?ref_=chttp_tt_2',
			title: 'The Godfather (1972)',
			image: 'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX34_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0071562/?ref_=chttp_tt_3',
			title: 'The Godfather: Part II (1974)',
			image: 'http://ia.media-imdb.com/images/M/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX34_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0468569/?ref_=chttp_tt_4',
			title: 'The Dark Knight (2008)',
			image: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX34_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0110912/?ref_=chttp_tt_5',
			title: ' Pulp Fiction (1994)',
			image: 'http://ia.media-imdb.com/images/M/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SY50_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0060196/?ref_=chttp_tt_6',
			title: ' The Good, the Bad and the Ugly (1966)',
			image: 'http://ia.media-imdb.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX34_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0108052/?ref_=chttp_tt_7',
			title: 'Schindler\'s List (1993)',
			image: 'http://ia.media-imdb.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX34_CR0,0,34,50_.jpg'
	},{
			url: 'http://www.imdb.com/title/tt0050083/?ref_=chttp_tt_8',
			title: ' 12 Angry Men (1957)',
			image: 'http://ia.media-imdb.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX34_CR0,0,34,50_.jpg'
	}];
}
controllers.InstantSearchController = function($scope, Movies)
{
	this.movies = Movies;
	return $scope.InstantSearchController = this;
}

filters.SearchFor = function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};
}


app.controller(controllers);
app.filter(filters);
app.factory(factories);
