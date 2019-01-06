var app = angular.module('page', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/:lang/:at/', {
				templateUrl: function (params) {

					return 'views/' + params.at + '-' + params.lang + '.html';

				}

			})
			.otherwise({
				redirectTo: '/en/home/'
			});
	}])
	.run(['$rootScope', '$location', '$routeParams', function ($rootScope, $location, $routeParams) {

		function refresh() {

			$rootScope.page = $routeParams.at;
			$rootScope.lang = $routeParams.lang;

		};
		refresh();

		$rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
			refresh();
		});
	}]);

app.controller('controller', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

	$scope.root = $rootScope;

	$scope.switchTo = function (from, to) {

		var path = $location.path();

		$location.path(path.replace(from, to));

	};

	$scope.TEXT = {
		//Navigation
		"HOME": {
			"en": "Home",
			"fr": "Accueil"
		},
		//Navigation
		"PUBLICATIONS": {
			"en": "Publications",
			"fr": "Publications"
		},
		//Navigation
		"RESEARCH": {
			"en": "Research",
			"fr": "Recherche"
		},
		//Navigation
		"CV": {
			"en": "CV",
			"fr": "CV"
		},
		//Navigation
		"TEACHING": {
			"en": "Teaching",
			"fr": "Enseignement"
		},
		//Navigation
		"SERVICES": {
			"en": "Services",
			"fr": "Services"
		}
	};

	$scope.journals = [
		{
			title: 'Unified Low Complexity Radix-2 Architectures for Time and Frequency-domain GFDM Modem',
			link: 'https://hal.archives-ouvertes.fr/view/index/docid/1968962',
			body: 'Nimr A,  Matthe M, Chafii M, and Fettweis G. IEEE Circuits and Systems Magazine, 2018'
		},
		{
			title: 'Pilot- and CP-aided Channel Estimation in MIMO Non-Orthogonal Multi-Carriers',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8573153',
			body: 'Ehsanfar S,  Matthe M, Chafii M, and Fettweis G. IEEE Transactions on Wireless Communications, November 2018'
		},		
		{
			title: 'Adaptive Wavelet Packet Modulation',
			link: 'https://hal-centralesupelec.archives-ouvertes.fr/hal-01713821/document',
			body: 'Chafii M,  Palicot J, Gribonval R, and Bader F. IEEE Transactions on Communications, February 2018'
		},
		{
			title: 'DCT-OFDM with Index Modulation',
			link: 'https://hal-centralesupelec.archives-ouvertes.fr/hal-01488900/document',
			body: 'Chafii M,  Coon J, and Hedges D. IEEE Communications Letters, 2017'
		},
		{
			title: 'Wavelet modulation : An alternative modulation with low energy consumption',
			link: 'http://www.sciencedirect.com/science/article/pii/S1631070516301633',
			body: 'Chafii M, Palicot J, Gribonval R. Comptes Rendus Physique, 18(2) :156 – 167, 2017. Energy and radiosciences'
		},
		{
			title: 'A Necessary Condition for Designing Waveforms with better PAPR than OFDM',
			link: 'https://halshs.archives-ouvertes.fr/hal-01128714/document',
			body: 'Chafii M, Palicot J, Gribonval R. Accepted for Publication in IEEE Transactions on Communications'
		},
		{
			title: 'Closed-form approximations of the peak-to-average power ratio distribution for multi-carrier modulation and their applications',
			link: 'http://asp.eurasipjournals.com/content/pdf/1687-6180-2014-121.pdf',
			body: 'Chafii M, Palicot J, Gribonval R. EURASIP Journal on Advances in Signal Processing 2014 2014:121.'
		},

	];

	$scope.publications = [
		{
			title: 'Blind Carrier Frequency Offset Estimation in Generalized Frequency Division Multiplexing',
			link: '#',
			body: 'Martinez A, Maximilian M, Chafii M, Fettweis G. IEEE ICNC (Honolulu, Hawaii, United States, February 2019).'
		},
		{
			title: 'Practical GFDM-based Linear Receivers',
			link: '#',
			body: 'Nimr A, Chafii M, Fettweis G. IEEE SCC (Rostock, Germany, February 2019).'
		},
		{
			title: 'Extended GFDM Framework: OTFS and GFDM Comparison',
			link: '#',
			body: 'Nimr A, Chafii M, Maximilian M, Fettweis G. IEEE GLOBECOM (Abu Dhabi, UAE, December 2018).'
		},
		{
			title: 'Performance Analysis of a 5G Transceiver Implementation for Remote Areas Scenarios',
			link: '#',
			body: 'Dias W, Gaspar D M, Mendes L, Maximilian M, Neuhaus P, Fettweis G. EuCNC (Ljubljana, Slovenia, 2018).'
		},
		{
			title: 'Fourier Based Adaptive Waveform,',
			link: '#',
			body: 'Chafii M, Palicot J,  Gribonval R, Faouzi B. ICT (Saint-Malo, France, June 2018).'
		},
		{
			title: 'Enhancing Coverage in Narrow Band-IoT Using Maching Learning',
			link: '#',
			body: 'Chafii M, Faouzi B, Palicot J. IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: 'SC-FDMA with Index Modulation for M2M and IoT Uplink Applications',
			link: '#',
			body: 'Chafii M, Faouzi B, Palicot J. IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: 'A Precoding-based PAPR Reduction Technique for UF-OFDM and Filtered-OFDM Modulations in 5G Systems.',
			link: 'http://ieeexplore.ieee.org/document/8011329/',
			body: 'Benmebrouk M, Chafii M, Louet Y, and Faouzi B. URSI, GASS, 2017 Montréal, Canada.'
		},
		{
			title: ' Low-PAPR condition for 5G-Candidate Waveforms',
			link: 'http://ieeexplore.ieee.org/document/8105386/',
			body: 'Benmebrouk M, Chafii M, Louet Y, and Faouzi B. European Wireless (EW) 2017, Dresden, Germany.'
		},

		{
			title: 'Power Spectral Density Limitations of the Wavelet-OFDM System',
			link: 'https://www.eurasip.org/Proceedings/Eusipco/Eusipco2016/papers/1570252216.pdf',
			body: 'Chafii M, Palicot J, Gribonval R, Burr A. EUSIPCO (Budapest, Hungary, 2016).'
		},
		{
			title: 'Modified Tone Reservation for PAPR Reduction in OFDM Systems',
			link: 'https://www.eurasip.org/Proceedings/Eusipco/Eusipco2016/papers/1570256238.pdf',
			body: 'L. Diallo, Chafii M, Faouzi B, Palicot J. EUSIPCO (Budapest, Hungary, 2016).'
		},

		{
			title: 'Wavelet-OFDM vs. OFDM : Performance Comparison',
			link: '#',
			body: 'Chafii M, Y. Harbi, Burr A. ICT (Thessaloniki, Greece, 2016).'
		},
		{
			title: 'Adaptive Tone-Reservation for better BER Performance in a Frequency Selective Fading Channel',
			link: '#',
			body: 'Chafii M, L. Diallo, Palicot J. IEEE VTC-Spring (Nanjing, China, 2016).'
		},
		{
			title: 'Closed-Form Approximations of the PAPR Distribution for Multi-Carrier Modulation Systems',
			link: 'http://www.eurasip.org/Proceedings/Eusipco/Eusipco2014/HTML/papers/1569923199.pdf',
			body: 'Chafii M, Palicot J, Gribonval R. EUSIPCO (Lisbon, Portugal, 2014).'
		},
		{
			title: 'A PAPR upper bound of Generalized Waveforms for Multi-Carrier modulation systems',
			link: 'http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=6877913',
			body: 'Chafii M, Palicot J, Gribonval R in ISCCSP, 6th International Symposium on Communications, Control and Signal Processing (Athens, 2014).'
		}

	];
	$scope.nationals = [

		{
			title: 'L\'optimalité de l\'OFDM en termes de performance en PAPR',
			link: '#',
			body: 'Chafii M, Palicot J, Gribonval R. GRETSI, Lyon, France (2015).'
		},
		{
			title: 'La modulation en ondelettes : une modulation alternative à faible consommation d\'energie',
			link: '#',
			body: 'Chafii M, Palicot J, Gribonval R. URSI, Rennes, France (2016) -- Best Paper Award'
		}

	];
	$scope.patents = [

		{
			title: 'New Adaptive Multicarrier Modulation',
			link: '#',
			body: 'Chafii M, Palicot J, Gribonval R. French patent. Number: 1000356937 (2017).'
		}

	];

	$scope.cv = [
		{
			title: "Since September 2018: Associate Professor ",
			body: [
				"ENSEA (Ecole nationale superieure de l'Electronique et de ses Applications)",
				"ETIS, ICI team, UMR CNRS 8051",
				"Universit'e Cergy-Pontoise, Universit2 Paris-Seine",
				"France"
			]
		},
		{
			title: "Since February 2018: Research Group Leader",
			body: [
				"Vodafone Chair Mobile Communications Systems",
				"5G Lab Germany Technische Universität Dresden",
				"Germany"
			]
		},
		{
			title: "2017: Postdoctoral researcher",
			body: [
				"CentraleSup'elec, France",
				"Topic :Enhancing the coverage for Low Power Wide Area networks",
				"(LPWA) technologies for Internet of Things (IoT) applications."
			]
		},
		{
			title: "2013-2016: PhD",
			body: [
				"IETR, CentraleSupélec, France ",
				"Topic : “Study of a New Waveform for Multi-Carrier Systems with low Peak-to-Average Power Ratio (PAPR)”",
				'July-August 2016: Resarch visit at Oxford university, UK.',
				'July-August 2015: Resarch visit at Yokohama National University, Japan.',
				'June-July 2015: Research visit at the University of York, United Kingdom.',
				'June-July 2014: Research visit at the Poznan University of Technology, Poland.'

			]
		},
		{
			title: "2012-2013: Master ",
			body: [
				"Master in Research, with Honors “Advanced Wireless Communication Systems (SAR)” at CentraleSupélec (ex. Supélec, Gif), France"
			]
		}
	];

	$scope.students = [
		{
			title: "Roberto Bomfin (2016-2020)",
			body: "Chirp-based Multicarrier Waveform"
		},
		{
			title: "Ana-Belen Martinez(2015-2019)",
			body: "Synchronization for MIMO-GFDM"
		},
		{
			title: "Ahmad Nimr (2015-2019)",
			body: "Asynchronose multi-access for GFDM"
		},
		{
			title: "Shahab Ehsan Far (2015-2019)",
			body: "Channel estimation for MIMO-GFDM"
		},
		{
			title: "Martin Danneberg (2015-2019)",
			body: "Prototyping of real-time waveforms "
		}
	];

	$scope.interests = [
		{
			title: "Machine learning",
			body: "Keywords: Deep learning for PHY; Reinforcement learning; Dynamic spectrum access in IoT and Cognitive radio"
		},
		{
			title: "Signal processing for communications",
			body: "Keywords: Time-frequency and time-scale analysis;Fourier transforms;Wavelet transforms;Probabilistic models"
		},
		{
			title: "Digital communications",
			body: "Keywords: Index modulation; Waveforms for 5G wireless systems; Adaptive waveforms; Peak-to-Average Power Ratio Reduction Problem"
		}
	];
}]);
