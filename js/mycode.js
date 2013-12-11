var appModel;

function App (){
	var self = this;
	
	self.devKey = ko.observable();
	self.summonerName = ko.observable();
	
	self.summonerName.subscribe(function(newValue){
		if(newValue && self.devKey()){
			$.ajax({
				url: "http://prod.api.pvp.net/api/lol/na/v1.1/summoner/by-name/" + newValue,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'SummonerByName',
				data: {
					api_key: self.devKey()
				}
			});
		}
	});
}

function SummonerByName(data){
	console.log(data);
}

$(document).ready(function(){
	appModel = new App();
	ko.applyBindings(appModel);
});