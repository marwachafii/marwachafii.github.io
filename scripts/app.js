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
		},
		//Navigation
		"AWARDS": {
			"en": "Awards and Recognitions",
			"fr": "Awards and Recognitions"
		}
	};

	$scope.journals = [
		{
			title: '[J17] Filtered Asymmetrically Clipped Optical-OFDM with Index Modulation for Optical Wireless Systems',
			link: '#',
			body: 'Azim W A, Le Guennec Y., Chafii M, and Ros. IEEE Communications Letters, December 2020'
		},		
		{
			title: '[J16] LACO-OFDM with Index Modulation for Optical Wireless Systems',
			link: '#',
			body: 'Azim W A, Le Guennec Y., Chafii M, and Ros. IEEE Wireless Communications Letters, December 2020'
		},
		{
			title: '[J15] A Robust and Low-Complexity Walsh-Hadamard Modulation for Doubly-Dispersive Channels',
			link: '#',
			body: 'Bomfin R, Nimr A, Chafii M, Fettweis G., IEEE Communications Letters, October 2020'
		},
		{
			title: '[J14] Deep Learning Based Data Recovery for Localization',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9205227',
			body: 'Nijma W, Chafii M, Nimr A, Fettweis G., IEEE Access, September 2020'
		},

		{
			title: '[J13] Index Modulation Aided Uplink NOMA for Massive Machine Type Communications',
			link: 'https://ieeexplore.ieee.org/document/9165182',
			body: 'Shahab M B, Johnson S., Shirvanimoghaddam M., Chafii M, Basar E., and Dohler M. IEEE Wireless Communications Letters, August 2020'
		},
		{
			title: '[J12] Enhanced Optical-OFDM with Index and Dual-Mode Modulation for Optical Wireless Systems',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9137274',
			body: 'Azim W A, Le Guennec Y., Chafii M, and Ros. IEEE Access, July 2020'
		},
		{
			title: '[J11] Deep Learning Based Channel Estimation Schemes for IEEE 802.11p Standard',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9120030',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE Access, June 2020'
		},
		{
			title: '[J10] On UW-based Transmission for MIMO Multi-Carriers with Spatial Multiplexing',
			link: 'https://hal.archives-ouvertes.fr/view/index/docid/2617383',
			body: 'Ehsanfar S, Chafii M, Fettweis G. IEEE Transactions on Wireless Communications, June 2020'
		},
		{
			title: '[J9] Spectral and Energy Efficient Fast-OFDM with Index Modulation for Optical Wireless Systems',
			link: '#',
			body: 'Azim W A, Chafii M, Le Guennec Y., and Ros L. IEEE Communications Letters, April 2020'
		},
		{
			title: '[J8] A Novel Iterative Receiver Design for CP-free Transmission under Frequency-Selective Channels',
			link: 'https://ieeexplore.ieee.org/document/8933115',
			body: 'Bomfin A, Chafii M, and Fettweis G. IEEE Communications Letters, December 2019'
		},
		{
			title: '[J7] Unified Low Complexity Radix-2 Architectures for Time and Frequency-domain GFDM Modem',
			link: 'https://hal.archives-ouvertes.fr/view/index/docid/1968962',
			body: 'Nimr A, Chafii M, and Fettweis G. IEEE Circuits and Systems Magazine, November 2018'
		},
		{
			title: '[J6] Pilot- and CP-aided Channel Estimation in MIMO Non-Orthogonal Multi-Carriers',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8573153',
			body: 'Ehsanfar S,  Matthe M, Chafii M, and Fettweis G. IEEE Transactions on Wireless Communications, December 2018'
		},
		{
			title: '[J5] Adaptive Wavelet Packet Modulation',
			link: 'https://hal-centralesupelec.archives-ouvertes.fr/hal-01713821/document',
			body: 'Chafii M,  Palicot J, Gribonval R, and Bader F. IEEE Transactions on Communications, February 2018'
		},
		{
			title: '[J4] DCT-OFDM with Index Modulation',
			link: 'https://hal-centralesupelec.archives-ouvertes.fr/hal-01488900/document',
			body: 'Chafii M,  Coon J, and Hedges D. IEEE Communications Letters, March 2017'
		},
		{
			title: '[J3] Wavelet modulation : An alternative modulation with low energy consumption',
			link: 'http://www.sciencedirect.com/science/article/pii/S1631070516301633',
			body: 'Chafii M, Palicot J, Gribonval R. Comptes Rendus Physique, 18(2) :156 – 167, 2017. Energy and radiosciences'
		},
		{
			title: '[J2] A Necessary Condition for Designing Waveforms with better PAPR than OFDM',
			link: 'https://halshs.archives-ouvertes.fr/hal-01128714/document',
			body: 'Chafii M, Palicot J, Gribonval R. IEEE Transactions on Communications, August 2016'
		},
		{
			title: '[J1] Closed-form approximations of the peak-to-average power ratio distribution for multi-carrier modulation and their applications',
			link: 'http://asp.eurasipjournals.com/content/pdf/1687-6180-2014-121.pdf',
			body: 'Chafii M, Palicot J, Gribonval R. EURASIP Journal on Advances in Signal Processing 2014 2014:121.'
		},

	];

	$scope.publications = [
		{
			title: '[C37] Sequence Design for Frame Detection Based on Autocorrelation',
			link: '#',
			body: 'Martinez A, Kumar A, Chafii M, Fettweis G.  IEEE VTC-Spring (Helsinki, Finland, April 2021).'
		},
		},
		{
			title: '[C36] OFDM with Index Modulation in Orbital Angular Momentum Multiplexed Free Space Optical Links',
			link: '#',
			body: 'Amhoud E, Chafii M, Nimr A, Fettweis G. IEEE VTC-Spring (Helsinki, Finland, April 2021).'
		},
		{
			title: '[C35] Convolutional Neural Networks based Denoising for Indoor Localization',
			link: '#',
			body: 'Njima W, Chafii M, Nimr A, Fettweis G. IEEE VTC-Spring (Helsinki, Finland, April 2021).'
		},
		{
			title: '[C34] Joint TRFI and Deep Learning for Vehicular Channel Estimation',
			link: '#',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE GLOBECOM Workshops (Taipei, Taiwan, December 2020)..'
		},

		{
			title: '[C33] In-phase and Quadrature Chirp Spread Spectrum for IoT Communications',
			link: 'https://arxiv.org/abs/2009.10421',
			body: 'Bizon Ivo, Chafii M, Nimr A, Fettweis G. IEEE GLOBECOM (Taipei, Taiwan, December 2020).'
		},
		{
			title: '[C32] Adaptive Channel Estimation based on DeepLearning',
			link: '#',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE VTC-fall (Victoria, Canada, October 2020).'
		},
		{
			title: '[C31] A New Approach for Enhanced Detection Using Chirp Reference Signals',
			link: '#',
			body: 'Martinez A, Kumar A, Chafii M, Fettweis G. IEEE VTC-fall (Victoria, Canada, October 2020).'
		},
		{
			title: '[C30] A New Approach for Accurate Time Synchronization Using Chirp Signals',
			link: '#',
			body: 'Martinez A, Kumar A ,Chafii M, Fettweis G. IEEE VTC-spring (Antwrep, Belgium, May 2020).'
		},
		{
			title: '[C29] Enhancing Least Square Channel Estimation Using Deep Learning',
			link: 'https://hal.archives-ouvertes.fr/hal-02504757/document',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE VTC-spring (Antwrep, Belgium, May 2020).'
		},
		{
			title: '[C28] A Study on Unique-Word based Synchronization for MIMO Systems over Time-Varying Channels',
			link: '#',
			body: 'Ehsanfar S, Chafii M, Fettweis G. IEEE WCNC (Seoul, Korea, April 2020).'
		},
		{
			title: '[C27] A Chirp-Based Frequency Synchronization Approach for Flat Fading Channels',
			link: '#',
			body: 'Martinez A, Kumar A, Chafii M, Fettweis G. 6G Wireless Summit (Levi, Finland, March 2020).'
		},
		{
			title: '[C26] A Frame Design for MIMO UW based Systems: Overhead Analysis & Channel Estimation',
			link: 'http://www.jkjmanagement.com/5gwf19-4/papers/p173-ehsanfar.pdf',
			body: 'Ehsanfar S, Chafii M, Fettweis G. IEEE 5G World Forum (Dresden, Germany, September 2019).'
		},
		{
			title: '[C25] Performance Assessment of Orthogonal Chirp Division Multiplexing in MIMO Space Time Coding',
			link: 'https://www.vodafone-chair.org/media/publications/roberto-bomfin/Performance_Assessment_of_Orthogonal_Chirp_Division_Multiplexing_in_MIMO_Space_Time_Coding.pdf',
			body: 'Bomfin R, Chafii M, Fettweis G. IEEE 5G World Forum (Dresden, Germany, September 2019).'
		},
		{
			title: '[C24] Cross-Layer Multi-User Selection in 5G Heterogeneous Networks Based on Hybrid Beamforming Optimization for Millimeter-Wave',
			link: '#',
			body: 'Fadel A, Nimr A, Chiang H, Chafii M, Cousin B. IEEE PIMRC (Istanbul, Turkey, September 2019).'
		},
		{
			title: '[C23] Real-Time Waveform Prototyping',
			link: 'https://ieeexplore.ieee.org/document/8815581',
			body: 'Danneberg D, Li Z, Nimr A, Ehsanfar S, Chafii M, Fettweis G. IEEE SPAWC (Cannes, France, July, 2019).'
		},
		{
			title: '[C22] Time-Variant Pilot- and CP-Aided Channel Estimation for GFDM',
			link: 'https://ieeexplore.ieee.org/abstract/document/8761411',
			body: 'Ehsanfar S, Chafii M, Fettweis G. IEEE ICC (Shanghai, China, Mai 2019).'
		},

		{
			title: '[C21] A Novel Modulation for IoT : PSK-LoRa',
			link: 'https://ieeexplore.ieee.org/document/8746470',
			body: 'Bomfin R, Chafii M, Fettweis G. IEEE VTC-spring (Kuala Lumpur, Malaisia, Mai 2019).'
		},
		{
			title: '[C20] Precoded-OFDM within GFDM Framework',
			link: 'https://ieeexplore.ieee.org/document/8746539',
			body: 'Nimr A, Chafii M, Fettweis G. IEEE VTC-spring (Kuala Lumpur, Malaisia, Mai 2019).'
		},
		{
			title: '[C19] Low-Complexity Iterative Receiver for Orthogonal Chirp Division Multiplexing',
			link: 'https://arxiv.org/pdf/1903.08070.pdf',
			body: 'Bomfin R, Chafii M, Fettweis G. IEEE WCNC (Marrakech, Morocco, April 2019).'
		},
		{
			title: '[C18] Low-Complexity Transceiver for GFDM systems with Partially Allocated Subcarriers',
			link: 'https://ieeexplore.ieee.org/document/8886058',
			body: 'Nimr A, Chafii M, Fettweis G. IEEE WCNC (Marrakech, Morocco, April 2019)..'
		},
		{
			title: '[C17] Tailoring Index-Modulation for uplink IoT and M2M Networks',
			link: 'https://hal.archives-ouvertes.fr/hal-01993154/document',
			body: 'Mancovasquez J, Chafii M, and Faouzi B. IEEE WCNC (Marrakech, Morocco, April 2019)..'
		},
		{
			title: '[C16] Online Wireless Lab Testbed',
			link: 'https://ieeexplore.ieee.org/document/8902759',
			body: 'Danneberg M, Bomfin, Ehsanfar S, Nimr A, Lin Z, Chafii M, Fettweis G. IEEE WCNC (Marrakech, Morocco, April 2019)..'
		},
		{
			title: '[C15] Blind Carrier Frequency Offset Estimation in Generalized Frequency Division Multiplexing',
			link: 'https://hal.archives-ouvertes.fr/hal-01965514/document',
			body: 'Martinez A, Maximilian M, Chafii M, Fettweis G. IEEE ICNC (Honolulu, Hawaii, United States, February 2019).'
		},
		{
			title: '[C14] Practical GFDM-based Linear Receivers',
			link: 'https://hal.archives-ouvertes.fr/hal-01968998/document',
			body: 'Nimr A, Chafii M, Fettweis G. IEEE SCC (Rostock, Germany, February 2019).'
		},
		{
			title: '[C13] Extended GFDM Framework: OTFS and GFDM Comparison',
			link: 'https://hal.archives-ouvertes.fr/hal-01968970/document',
			body: 'Nimr A, Chafii M, Maximilian M, Fettweis G. IEEE GLOBECOM (Abu Dhabi, UAE, December 2018).'
		},
		{
			title: '[C12] Performance Analysis of a 5G Transceiver Implementation for Remote Areas Scenarios',
			link: '#',
			body: 'Dias W, Gaspar D M, Mendes L, Maximilian M, Neuhaus P, Fettweis G. EuCNC (Ljubljana, Slovenia, 2018).'
		},
		{
			title: '[C11] Fourier Based Adaptive Waveform,',
			link: '#',
			body: 'Chafii M, Palicot J,  Gribonval R, Faouzi B. ICT (Saint-Malo, France, June 2018).'
		},
		{
			title: '[C10] Enhancing Coverage in Narrow Band-IoT Using Maching Learning',
			link: '#',
			body: 'Chafii M, Faouzi B, Palicot J. IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: '[C9] SC-FDMA with Index Modulation for M2M and IoT Uplink Applications',
			link: '#',
			body: 'Chafii M, Faouzi B, Palicot J. IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: '[C8] A Precoding-based PAPR Reduction Technique for UF-OFDM and Filtered-OFDM Modulations in 5G Systems.',
			link: 'http://ieeexplore.ieee.org/document/8011329/',
			body: 'Benmebrouk M, Chafii M, Louet Y, and Faouzi B. URSI, GASS, 2017 Montréal, Canada.'
		},
		{
			title: '[C7] Low-PAPR condition for 5G-Candidate Waveforms',
			link: 'http://ieeexplore.ieee.org/document/8105386/',
			body: 'Benmebrouk M, Chafii M, Louet Y, and Faouzi B. European Wireless (EW) 2017, Dresden, Germany.'
		},

		{
			title: '[C6] Power Spectral Density Limitations of the Wavelet-OFDM System',
			link: 'https://www.eurasip.org/Proceedings/Eusipco/Eusipco2016/papers/1570252216.pdf',
			body: 'Chafii M, Palicot J, Gribonval R, Burr A. EUSIPCO (Budapest, Hungary, 2016).'
		},
		{
			title: '[C5] Modified Tone Reservation for PAPR Reduction in OFDM Systems',
			link: 'https://www.eurasip.org/Proceedings/Eusipco/Eusipco2016/papers/1570256238.pdf',
			body: 'L. Diallo, Chafii M, Faouzi B, Palicot J. EUSIPCO (Budapest, Hungary, 2016).'
		},

		{
			title: '[C4] Wavelet-OFDM vs. OFDM : Performance Comparison',
			link: '#',
			body: 'Chafii M, Y. Harbi, Burr A. ICT (Thessaloniki, Greece, 2016).'
		},
		{
			title: '[C3] Adaptive Tone-Reservation for better BER Performance in a Frequency Selective Fading Channel',
			link: '#',
			body: 'Chafii M, L. Diallo, Palicot J. IEEE VTC-Spring (Nanjing, China, 2016).'
		},
		{
			title: '[C2] Closed-Form Approximations of the PAPR Distribution for Multi-Carrier Modulation Systems',
			link: 'http://www.eurasip.org/Proceedings/Eusipco/Eusipco2014/HTML/papers/1569923199.pdf',
			body: 'Chafii M, Palicot J, Gribonval R. EUSIPCO (Lisbon, Portugal, 2014).'
		},
		{
			title: '[C1] A PAPR upper bound of Generalized Waveforms for Multi-Carrier modulation systems',
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
				"ETIS, UMR 8051",
				"Université Paris-Seine, Université Cergy-Pontoise, ENSEA, CNRS",
				"France",
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
			title: "Ivo Bizon (2019-2022)",
			body: "Contributions to Internet of Things Communications: From Long Range to Location Aware Networks"
		},
		{
			title: "Abdul karim Gizzini (2019-2021)",
			body: "Machine Learning Based Channel Estimation for Vehicular Communications"
		},
		{
			title: "Roberto Bomfin (2018-2020)",
			body: "Waveform and Frame Design for Robust MIMO Space Time Coding Wireless Communications"
		},
		{
			title: "Ana-Belen Martinez (2018-2020)",
			body: "Chirp-based Detection and Synchronization Techniques for Wireless Communications"
		},
		{
			title: "Ahmad Nimr (2018-2020)",
			body: "Unified Framework for Multicarrier and Multiple Access based on Generalized Frequency Division Multiplexing"
		},
		{
			title: "Shahab Ehsan Far (2018-2020)",
			body: "Advanced Channel Estimation Techniques for MIMO Multi-Carrier Systems in Doubly-Dispersive Channels"
		}
	];

	$scope.postdocs = [
		{
			"title": "Wafa Njima",
			"body": "Machine learning-based Indoor Localization"
		},
		{
			"title": "Muralikrishnan Srinivasan",
			"body": "Context-awareness  for B5G"
		}
	]


	$scope.interests = [
		{
			title: "Machine learning for Communications",
			body: "Keywords: Deep learning for PHY; Reinforcement learning for resource allocation"
		},
		{
			title: "Signal processing for communications",
			body: "Keywords: Channel estimation; Synchronization; Optimization Theory; Time-frequency and time-scale analysis"
		},
		{
			title: "Digital communications",
			body: "Keywords: Advanced waveforms for wireless communications;Index modulation; Peak-to-Average Power Ratio Reduction Problem"
		}
	];

	$scope.administrative = [
		{
			title: "Vice-chair of the IEEE ComSoc Machine Learning for Communications Emerging Technologies Initiative",
			body: "2018 – present"
		},
		{
			title: "Research projects leader at Women in AI organization",
			body: "2018 - present"
		},
		{
			title: "Member of the governing body of ENSEA",
			body: "2020 - present"
		},
		{
			title: "President of the association of PhDs and Ph.D. students of IETR",
			body: "2014-2016"
		},
		{
			title: "Representative of IETR doctoral students at the laboratory council",
			body: "2016"
		}
	]

	$scope.events = [
		{
			"title": "Chair of the \"Training school on Machine learning for communications\"",
			"body": "September 2021, Berlin, Germany"
		},
		{
			"title": "Co-chair of the special session \"Selected topics on 6G Security\" ISWCS",
			"body": "September 2021, Berlin, Germany"
		},
		{
			"title": "Co-chair of the \"Training school on machine learning for Communications\"",
			"body": "April 2021, Tomsk, Russia"
		},
		{
			"title": "Co-chair of the European Conference on Artificial Intelligence (ECAI)",
			"body": "September 2020, Organization of Women in AI Meeting"
		},
		{
			"title": "Co-chair of the special session \"Machine Learning for Communications\" IEEE SPAWC",
			"body": "2020, Atlanta"
		},
		{
			"title": "Co-chair of IEEE Globecom 2019 Workshop \"Machine learning for Wireless Communications\"",
			"body": "2019, Hawaii"
		},
		{
			"title": "Chair of the \"Training school on Machine learning for Communications\"",
			"body": "September 2019, Paris"
		},
		{
			"title": "Invited speaker at the French conference GRETSI",
			"body": "2019, Lille, France"
		},
		{
			"title": "Keynote on \"Opportunities of Deep Learning in Wireless Physical Layer\",  IEEE 5G Summit",
			"body": "2018, Dresden, Germany"
		},
		{
			"title": "Tutorial on \"Advanced waveforms for 5G\"  5G Lab Summer School",
			"body": "2018"
		},
		{
			"title": "Session chair of Workshop ML-WiC at IEEE Globecom",
			"body": "2019"
		},
		{
			"title": "Session chair of SPC-I1 Interactive Session 1 at IEEE Globecom",
			"body": "2018"
		},
		{
			"title": "Session chair of the wireless workshop at IEEE 5G Summit",
			"body": "2018, Dresden"
		},
		{
			"title": "Session chair of PHY02 (Multicarrier Techniques), IEEE PIMRC",
			"body": "2018"
		}
	]

	$scope.editorial = [
		{
			"title": "Associate Editor for IEEE Communications Letters (2019-present) :  Machine learning for communications Track",
			"body": ""
		},
		{
			"title": "Guest editor at Frontiers in Communications and Networks",
			"body": ""
		}
	]

	$scope.tpc = [
		{
			"title": "IEEE ICC 2019,  2020, 2021",
			"body": ""
		},
		{
			"title": "IEEE Globecom 2019,  2020, 2021",
			"body": ""
		},
		{
			"title": "IEEE SPAWC 2020",
			"body": ""
		},
		{
			"title": "IEEE ICASSP 2020",
			"body": ""
		},
		{
			"title": "IEEE VTC-spring 2020",
			"body": ""
		},
		{
			"title": "WiOpt 2019",
			"body": ""
		},
		{
			"title": "I4CT 2018",
			"body": ""
		},
		{
			"title": "ICT 2018",
			"body": ""
		},
		{
			"title": "ISWCS 2018, 2017",
			"body": ""
		}
	]

	$scope.awards = [
		{
			title: "IEEE Communications Letters Best Editor Award",
			body: [
				"2020"
			]
		},
		{
			title: "One of N2Women's top 10 Rising Stars in Computer Networking and Communications",
			body: [
				"2020"
			]
		},
		{
			title: "PEDR Bonus of doctoral supervision and research (2019-2023)",
			body: [
				"The French National Council of Universities (CNU 61)",
			]
		},
		{
			title: "Chair of Excellence on Artificial Intelligence by CY Initiative of Excellence",
			body: [
				"2018-2022",
			]
		},
		{
			title: "Bonus of scientific excellence (2018 - 2022)",
			body: [
				"CY Initiative of Excellence",
			]
		},
		{
			title: "Prize of the Best Ph.D. in France in the fields: Signal, Image & Vision",
			body: [
				"Awarded jointly by the French Club EEA, the GdR ISIS et GRETSI",
				"2018"
			]
		},
		{
			title: "Best score at « Machine Learning Challenge », the training school « Machine & Deep Learning Techniques for (Beyond) 5G Wireless Communications Systems »",
			body: [
				"April 2019, Barcelona, Spain",
			]
		},
		{
			title: "Best paper award at URSI Conference",
			body: [
				"Rennes, 2016",
			]
		},
		{
			title: "One of the 300 talents of L'Oréal-UNESCO For Women in Science",
			body: [
				"2016",
			]
		},
		{
			title: "“Coup de Coeur” Award for the best innovation project - Doctoriales de Bretagne",
			body: [
				"2015",
			]
		},
	]
}]);
