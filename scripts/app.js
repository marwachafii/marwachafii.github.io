var app	= angular.module('page', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/:lang/:at/', {
            templateUrl : function(params){
			
				return 'views/' + params.at + '-' + params.lang + '.html';
			
			}
			
        })
        .otherwise({
            redirectTo : '/fr/home/'
        });
}])
.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
	
	function refresh(){
	
		$rootScope.page = $routeParams.at;	
		$rootScope.lang	= $routeParams.lang;
	
	}; 
	refresh();
	
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
		refresh();
    });
 }]);

app.controller('controller',[ '$scope' , '$rootScope' , '$location' , function($scope,$rootScope,$location){
	
	$scope.root	= $rootScope;
	
	$scope.switchTo	= function ( from , to ) {
		
		var path	= $location.path();
		
		$location.path( path.replace( from , to ) );
	
	};
	
	$scope.TEXT = {
		//Navigation
		"HOME" : {
			"en" : "Home",
			"fr" : "Accueil"			
		},
		//Navigation
		"PUBLICATIONS" : {
			"en" : "Publications",
			"fr" : "Publications"			
		},
		//Navigation
		"INTERESTS" : {
			"en" : "Research Interests",
			"fr" : "Axes de recherche"			
		},
		//Navigation
		"EXPERIENCE" : {
			"en" : "Research visits",
			"fr" : "Mobilités"			
		},
		//Navigation
		"TEACHING" : {
			"en" : "Teaching",
			"fr" : "Enseignement"			
		},
		//Navigation
		"SERVICES" : {
			"en" : "Services",
			"fr" : "Services"			
		}
	};
	
	$scope.journals	= [
		{
			title: 'DCT-OFDM with Index Modulation',
			link : 'https://hal-centralesupelec.archives-ouvertes.fr/hal-01488900/document',
			body : 'Chafii M,  Coon J, and Hedges D, "DCT-OFDM with Index Modulation". IEEE Communications Letters, 2017'
		},
		{
			title: 'Wavelet modulation : An alternative modulation with low energy consumption',
			link : 'http://www.sciencedirect.com/science/article/pii/S1631070516301633',
			body : 'Chafii M, Palicot J, Gribonval R, "Wavelet modulation : An alternative modulation with low energy consumption". Comptes Rendus Physique, 18(2) :156 – 167, 2017. Energy and radiosciences'
		},
		{
			title: 'A Necessary Condition for Designing Waveforms with better PAPR than OFDM',
			link : 'https://halshs.archives-ouvertes.fr/hal-01128714/document',
			body : 'Chafii M, Palicot J, Gribonval R, "A Necessary Condition for Designing Waveforms with better PAPR than OFDM". Accepted for Publication in IEEE Transactions on Communications'
		},	
		{
			title: 'Closed-form approximations of the peak-to-average power ratio distribution for multi-carrier modulation and their applications',
			link : 'http://asp.eurasipjournals.com/content/pdf/1687-6180-2014-121.pdf',
			body : 'Chafii M, Palicot J, Gribonval R, "Closed-form approximations of the peak-to-average power ratio distribution for multi-carrier modulation and their applications". EURASIP Journal on Advances in Signal Processing 2014 2014:121.'
		},
	
	];
	
	$scope.publications	= [
		{
			title: 'Enhancing Coverage in Narrow Band-IoT Using Maching Learning',
			link : '#',
			body : 'Chafii M, Faouzi B, Palicot J, "". IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: 'SC-FDMA with Index Modulation for M2M and IoT Uplink Applications',
			link : '#',
			body : 'Chafii M, Faouzi B, Palicot J, "". IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: 'A Precoding-based PAPR Reduction Technique for UF-OFDM and Filtered-OFDM Modulations in 5G Systems.',
			link : 'http://ieeexplore.ieee.org/document/8011329/',
			body : 'Benmebrouk M, Chafii M, Louet Y, and Faouzi B, "A Precoding-based PAPR Reduction Technique for UF-OFDM and Filtered-OFDM Modulations in 5G Systems.". URSI, GASS, 2017 Montréal, Canada.'
		},
		{
			title: ' Low-PAPR condition for 5G-Candidate Waveforms',
			link : 'http://ieeexplore.ieee.org/document/8105386/',
			body : 'Benmebrouk M, Chafii M, Louet Y, and Faouzi B, " Low-PAPR condition for 5G-Candidate Waveforms". European Wireless (EW) 2017, Dresden, Germany.'
		},
		
		{
			title: 'Power Spectral Density Limitations of the Wavelet-OFDM System',
			link : 'https://www.eurasip.org/Proceedings/Eusipco/Eusipco2016/papers/1570252216.pdf',
			body : 'Chafii M, Palicot J, Gribonval R, Burr A, "Power Spectral Density Limitations of the Wavelet-OFDM System". EUSIPCO (Budapest, Hungary, 2016).'
		},
		{
			title: 'Modified Tone Reservation for PAPR Reduction in OFDM Systems',
			link : 'https://www.eurasip.org/Proceedings/Eusipco/Eusipco2016/papers/1570256238.pdf',
			body : 'L. Diallo, Chafii M, Faouzi B, Palicot J, "Modified Tone Reservation for PAPR Reduction in OFDM Systems". EUSIPCO (Budapest, Hungary, 2016).'
		},
		
		{
			title: 'Wavelet-OFDM vs. OFDM : Performance Comparison',
			link : '#',
			body : 'Chafii M, Y. Harbi, Burr A, "Wavelet-OFDM vs. OFDM : Performance Comparison". ICT (Thessaloniki, Greece, 2016).'
		},
		{
			title: 'Adaptive Tone-Reservation for better BER Performance in a Frequency Selective Fading Channel',
			link : '#',
			body : 'Chafii M, L. Diallo, Palicot J, "Adaptive Tone-Reservation for better BER Performance in a Frequency Selective Fading Channel". IEEE VTC-Spring (Nanjing, China, 2016).'
		},
		{
			title: 'Closed-Form Approximations of the PAPR Distribution for Multi-Carrier Modulation Systems',
			link : 'http://www.eurasip.org/Proceedings/Eusipco/Eusipco2014/HTML/papers/1569923199.pdf',
			body : 'Chafii M, Palicot J, Gribonval R, "Closed-Form Approximations of the PAPR Distribution for Multi-Carrier Modulation Systems". EUSIPCO (Lisbon, Portugal, 2014).'
		},
		{
			title: 'A PAPR upper bound of Generalized Waveforms for Multi-Carrier modulation systems',
			link : 'http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=6877913',
			body : 'Chafii M, Palicot J, Gribonval R, "A PAPR upper bound of Generalized Waveforms for Multi-Carrier modulation systems", in ISCCSP, 6th International Symposium on Communications, Control and Signal Processing (Athens, 2014).'
		}
	
	];
	$scope.nationals	= [
	
		{
			title: 'L\'optimalité de l\'OFDM en termes de performance en PAPR',
			link : '#',
			body : 'Chafii M, Palicot J, Gribonval R, "L\'optimalité de l\'OFDM en termes de performance en PAPR". GRETSI, Lyon, France (2015).'
		},
		{
			title: 'La modulation en ondelettes : une modulation alternative à faible consommation d\'energie',
			link : '#',
			body : 'Chafii M, Palicot J, Gribonval R, "La modulation en ondelettes : une modulation alternative à faible consommation d\'energie". URSI, Rennes, France (2016) -- Best Paper Award'
		}
	
	];
	$scope.patents	= [
	
		{
			title: 'New Adaptive Multicarrier Modulation',
			link : '#',
			body : 'Chafii M, Palicot J, Gribonval R, "New Adaptive Multicarrier Modulation". French patent. Number: 1000356937 (2017).'
		},

	
	];
}]);