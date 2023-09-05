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
			"en": "Advising",
			"fr": "Recherche"
		},
		//Navigation
		"SERVICES": {
			"en": "Service",
			"fr": "Services"
		},
		//Navigation
		"AWARDS": {
			"en": "Awards and Honors",
			"fr": "Awards and Recognitions"
		}
	};

	$scope.journals = [
		{
			title: '[J38] Emergent Communication in Multi-Agent Reinforcement Learning for Future Wireless Networks',
			body: 'Chafii M, Naoumi S, Alami R, Almazrouei E, Bennis M, Debbah M, IEEE Internet of Things Magazine, 2023'
		},
		{
			title: '[J37] Dual-Mode Time Domain Multiplexed Chirp Spread Spectrum',
			body: 'Azim A. W., Bazzi A, Mahrukh F, Shubair R, and Chafii M, IEEE Transactions on Vehicular Technology, 2023'
		},
		{
			title: '[J36] Deep Neural Network Augmented Wireless Channel Estimation for Preamble-based OFDM PHY on Zynq System on Chip',
			body: 'Ul haq S.A, Gizzini A, Shrey S, Darak S, Saurabh S, and Chafii M, IEEE Transactions on Very Large Scale Integration Systems, 2023'
		},		
		{
			title: '[J35] On Integrated Sensing and Communication Waveforms with Tunable PAPR',
			link: 'https://arxiv.org/pdf/2210.02892.pdf',
			body: 'Bazzi A, Chafii M, IEEE Transactions on Wireless Communications, March 2023'
		},		
		{
			title: '[J34] Twelve Scientific Challenges for 6G: Rethinking the Foundations of Communications Theory',
			link: 'https://arxiv.org/pdf/2207.01843.pdf',
			body: 'Chafii, M., Bariah, L., Muhaidat, S. and Debbah, M., IEEE Communications Surveys & Tutorials, February 2023'
		},
		{
			title: '[J33] On Outage-based Beamforming Design for Dual-Functional Radar-Communication 6G Systems',
			link: 'https://arxiv.org/pdf/2207.04921.pdf',
			body: 'Bazzi A, Chafii M, IEEE Transactions on Wireless Communications, January 2023'
		},		
		{
			title: '[J32] On Optimality of Gamma Approximation for Lognormal Shadowing Models',
			body: 'Dang S, Ye J, Beach M, Chafii M, IEEE Antennas and Wireless Propagation Letters, December 2022'
		},		
		{
			title: '[J31] Meta Distribution of Partial-NOMA',
			body: 'Ali K, Al-Dweik A, Hossain E, Chafii M, IEEE Wireless Communications Letters, October 2022'
		},
		{
			title: '[J30] Dual-Mode Chirp Spread Spectrum Modulation',
			body: 'Azim A, Bazzi A, Shubair R, Chafii M, IEEE Wireless Communications Letters, July 2022'
		},
		{
			title: '[J29] A Survey on Deep Learning based Channel Estimation in Doubly Dispersive Environments',
			link:'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9813719',
			body: 'Gizzini A, Chafii M, IEEE Access, July 2022'
		},
		{
			title: '[J28] DNN-based Indoor Localization Under Limited Dataset using GANs and Semi-Supervised Learning',
			link:'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9812625',
			body: 'Njima W, Bazzi A, Chafii M, IEEE Access, July 2022'
		},
		{
			title: '[J27] A Novel Approach for Cancellation of Non-Aligned Inter Spreading Factor Interference in LoRa Systems',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9755895',
			body: 'Bizon I, Zhang Q, Kumar A, Martinez A, Chafii M, Fettweis G, IEEE Open Journal of the Communications Society (OJCOMS), April 2022'
		},
		{
			title: '[J26] Low Complex Methods for Robust Channel Estimation in Doubly Dispersive Environments',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9743925',
			body: 'Gizzini A, Chafii M, IEEE Access, March 2022'
		},
		{
			title: '[J25] Context-Aware Security for 6G Wireless: The Role of Physical Layer Security',
			link:'https://arxiv.org/pdf/2101.01536.pdf',
			body: 'Chorti A, Barreto A, Kopsell S, Zoli M, Chafii M, Sehier P, Fettweis G, Poor V, IEEE Communications Standards Magazine, February 2022'
		},
		
		{
			title: '[J24] Enhanced PSK-LoRa',
			body: 'Azim A. W., Monsalve J. L. G., Chafii M. IEEE Wireless Communications Letters, December 2021'
		},
		{
			title: '[J23] CNN aided Weighted Interpolation for Channel Estimation in Vehicular Communications',
			link:'https://arxiv.org/pdf/2104.08813.pdf',
			body: 'Gizzini A, Chafii M, Nimr A, Shubair R, Fettweis G. IEEE Transactions on Vehicular Technology, September 2021'
		},	
		{
			title: '[J22] Compressive Learning in Communication Systems: A Neural Network Receiver for Detecting Compressed Signals in OFDM Systems',
			link:'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9523563',
			body: 'Carneiro P, Mendes L, Chafii M. IEEE Access, August 2021'
		},		
		{
			title: '[J21] Indoor Localization using Data Augmentation via Selective Generative Adversarial Networks',
			link:'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9477623',
			body: 'Njima W, Chafii M, Chorti A, Shubair R, Poor V. IEEE Access, July 2021'
		},
		{
			title: '[J20] Alternative Chirp Spread Spectrum Techniques for LPWANs.',
			link: 'https://arxiv.org/pdf/2102.09250.pdf',
			body: 'Bizon I, Chafii M, Nimr A, Fettweis G. IEEE Transactions on Green Communications and Networking, May 2021'
		},		
		{
			title: '[J19] Filtered Multicarrier Waveforms Classification: A Deep Learning Based Approach.',
			link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9425589',
			body: 'Zerhouni K, Amhoud E, Chafii M. IEEE Access, May 2021'
		},		
		{
			title: '[J18] A Robust Baseband Transceiver Design for Doubly-Dispersive Channels.',
			link: 'https://hal.archives-ouvertes.fr/hal-03161973/document',
			body: 'Bomfin R, Chafii M, Nimr A, Fettweis G. IEEE Transactions on Wireless Communications, February 2021'
		},		
		{
			title: '[J17] Filtered Asymmetrically Clipped Optical-OFDM with Index Modulation for Optical Wireless Systems',
			link: 'https://hal.archives-ouvertes.fr/hal-03097509/document',
			body: 'Azim W A, Le Guennec Y., Chafii M, and Ros. IEEE Communications Letters, December 2020'
		},		
		{
			title: '[J16] LACO-OFDM with Index Modulation for Optical Wireless Systems',
			link: 'https://hal.archives-ouvertes.fr/hal-03082081/document',
			body: 'Azim W A, Le Guennec Y., Chafii M, and Ros. IEEE Wireless Communications Letters, December 2020'
		},
		{
			title: '[J15] A Robust and Low-Complexity Walsh-Hadamard Modulation for Doubly-Dispersive Channels',
			link: 'https://hal.archives-ouvertes.fr/hal-03146370/document',
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
			link: 'https://hal.archives-ouvertes.fr/hal-02869457/document',
			body: 'Azim W A, Chafii M, Le Guennec Y., and Ros L. IEEE Communications Letters, April 2020'
		},
		{
			title: '[J8] A Novel Iterative Receiver Design for CP-free Transmission under Frequency-Selective Channels',
			link: 'https://hal.archives-ouvertes.fr/hal-02538883/file/OCDM.pdf',
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
			title: '[C56] A Dynamic Transmission Strategy for ISAC in Large Networks',
			body: ' Ali K, Chafii M. IEEE GLOBECOM (2023).'
		},
		{
			title: '[C55] SCA-Based Beamforming Optimization for IRS-Enabled Secure Integrated Sensing and Communication',
			body: ' Kumar V, Chafii M, Swindlehurst L, Tran L, Flanagan M. IEEE GLOBECOM (2023).'
		},
		{
			title: '[C54] Emergent Communication in Multi-Agent Reinforcement Learning for Flying Base Stations',
			body: ' Naoumi S, Alami R, Hacid H, Almazrouei E, Debbah M, Bennis M, Chafii M. IEEE MeditCom (2023).'
		},
		{
			title: '[C53] Uplink and Downlink Communications Fusion for Enhanced Radar Sensing',
			body: ' Chowdary A, Bazzi A, Chafii M. IEEE SPAWC (2023).'
		},
		
		{
			title: '[C52] Deep Learning-based Estimation for Multitarget Radar Detection',
			body: ' Mamady D, Bazzi A, Chafii M, Amhoud M. IEEE VTC-Spring (2023).'
		},
		{
			title: '[C51] Robust Integrated Sensing and Communication Beamforming for Dual-functional Radar and Communications: Method and Insights',
			body: ' Bazzi A, Chafii M. URSI GASS (2023).'
		},
		{
			title: '[C50] Hypothesis Testing on FMCW and OFDM for Joint Communication and Radar in IEEE 802.11bd',
			body: ' Ehsanfar S, Bazzi A, K Moessner, Chafii M. IEEE ICC Workshops, Rome, Italy (Mai 2023).'
		},		
		{
			title: '[C49] Deep Learning Based Channel Estimation In High Mobility Communications Using Bi-RNN Networks',
			body: ' Gizzini A, Chafii M. IEEE ICC, Rome, Italy (Mai 2023).'
		},
		{
			title: '[C48] Blind Transmitter Localization Using Deep Learning: A Scalability Study',
			body: ' Bizon I, Nimr A, Schulz P, Chafii M,  Fettweis G. IEEE WCNC, Glasgow, Scoltand (March 2023).'
		},
		{
			title: '[C47] Maximum a-Posteriori Equalizer for Sparse Walsh Hadamard Modulation',
			body: ' Bomfin R, Chafii M, Nimr A, Fettweis G. IEEE GLOBECOM, Rio de Janeiro, Brazil (December 2022).'
		},
		
		{
			title: '[C46] Experimental Performance of Blind Position Estimation Using Deep Learning',
			body: ' Bizon I, Li Z,  Nimr A, Chafii M, Fettweis G. IEEE GLOBECOM, Rio de Janeiro, Brazil (December 2022).'
		},
		{
			title: '[C45] Waveform Design for Power-Domain Asynchronous NOMA',
			body: ' Sigmund M, Bomfin R, Chafii M, Nimr A, Fettweis G. IEEE VTC-spring, Helsinki, Finland (June 2022).'
		},
		{
			title: '[C44] Performance Comparison of IEEE 802.11p, 802.11bd-draft and a Unique-Word-based PHY in Doubly-Dispersive Channels',
			body: ' Ehsanfar S, Moessner K, Gizzini A, Chafii M. IEEE WCNC, Austin, US, (April 2022).'
		},
		{
			title: '[C43] Iterative Receiver for Power-Domain NOMA with Mixed Waveforms',
			body: 'Sigmund M, Bomfin R, Chafii M, Ahmad N, Fettweis G. IEEE WCNC, Austin, US, (April 2022).'
		},
		{
			title: '[C42] Temporal Averaging LSTM-based Channel Estimation Scheme for IEEE 802.11p Standard',
			link:'https://arxiv.org/pdf/2106.04829.pdf',
			body: 'Gizzini A, Chafii M, Ehsanfar S, Shubair R. IEEE GLOBECOM, Madrid, Spain, (December 2021).'
		},
		{
			title: '[C41]GAN Based Data Augmentation for Indoor Localization Using Labeled and Unlabeled Data',
			body: 'Wafa N, Chafii M, Shubair R. BalkanCom, Novi Sad, Serbia (September 2021) - Invited paper.'
		},
		{
			title: '[C40] Indoor Localization Under Limited Measurements: A Cross-Environment Joint Semi-Supervised and Transfer Learning Approach',
			body: 'AlHajri M, Shubair R, Chafii M. IEEE SPAWC (September 2021).'
		},
		{
			title: '[C39] Blind Transmitter Localization in Wireless Sensor Networks: A Deep Learning Approach',
			link:'https://www.vodafone-chair.org/media/publications/ivo-bizon/Blind_Transmitter_Localization_in_Wireless_Sensor_Networks_A_Deep_Learning_Approach.pdf',
			body: 'Bizon Ivo, Chafii M, Nimr A, Fettweis G. IEEE PIMRC (September 2021).'
		},		
		{
			title: '[C38] Channel Estimation for MIMO Space Time Coded OTFS under Doubly Selective Channels',
			link:'https://arxiv.org/pdf/2104.01023.pdf',
			body: 'Bomfin R, Chafii M, Nmr A, Fettweis G. IEEE ICC 2021 Workshops, Montreal, Canada.'
		},		
		{
			title: '[C37] Sequence Design for Frame Detection Based on Autocorrelation',
			body: 'Martinez A, Kumar A, Chafii M, Fettweis G.  IEEE VTC-Spring (Helsinki, Finland, April 2021).'
		},
		{
			title: '[C36] OFDM with Index Modulation in Orbital Angular Momentum Multiplexed Free Space Optical Links',
			body: 'Amhoud E, Chafii M, Nimr A, Fettweis G. IEEE VTC-Spring (Helsinki, Finland, April 2021).'
		},
		{
			title: '[C35] Convolutional Neural Networks based Denoising for Indoor Localization',
			body: 'Njima W, Chafii M, Nimr A, Fettweis G. IEEE VTC-Spring (Helsinki, Finland, April 2021).'
		},
		{
			title: '[C34] Joint TRFI and Deep Learning for Vehicular Channel Estimation',
			link:'https://hal.archives-ouvertes.fr/hal-02951636/document',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE GLOBECOM Workshops (Taipei, Taiwan, December 2020).'
		},

		{
			title: '[C33] In-phase and Quadrature Chirp Spread Spectrum for IoT Communications',
			link: 'https://arxiv.org/abs/2009.10421',
			body: 'Bizon Ivo, Chafii M, Nimr A, Fettweis G. IEEE GLOBECOM (Taipei, Taiwan, December 2020).'
		},
		{
			title: '[C32] Adaptive Channel Estimation based on DeepLearning',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE VTC-fall (Victoria, Canada, October 2020).'
		},
		{
			title: '[C31] A New Approach for Enhanced Detection Using Chirp Reference Signals',
			body: 'Martinez A, Kumar A, Chafii M, Fettweis G. IEEE VTC-fall (Victoria, Canada, October 2020).'
		},
		{
			title: '[C30] A New Approach for Accurate Time Synchronization Using Chirp Signals',
			body: 'Martinez A, Kumar A ,Chafii M, Fettweis G. IEEE VTC-spring (Antwrep, Belgium, May 2020).'
		},
		{
			title: '[C29] Enhancing Least Square Channel Estimation Using Deep Learning',
			link: 'https://hal.archives-ouvertes.fr/hal-02504757/document',
			body: 'Gizzini A, Chafii M, Nimr A, Fettweis G. IEEE VTC-spring (Antwrep, Belgium, May 2020).'
		},
		{
			title: '[C28] A Study on Unique-Word based Synchronization for MIMO Systems over Time-Varying Channels',
			body: 'Ehsanfar S, Chafii M, Fettweis G. IEEE WCNC (Seoul, Korea, April 2020).'
		},
		{
			title: '[C27] A Chirp-Based Frequency Synchronization Approach for Flat Fading Channels',
			link: 'https://www.researchgate.net/publication/341158654_A_Chirp-Based_Frequency_Synchronization_Approach_for_Flat_Fading_Channels',
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
			body: 'Dias W, Gaspar D M, Mendes L, Maximilian M, Neuhaus P, Fettweis G. EuCNC (Ljubljana, Slovenia, 2018).'
		},
		{
			title: '[C11] Fourier Based Adaptive Waveform,',
			body: 'Chafii M, Palicot J,  Gribonval R, Faouzi B. ICT (Saint-Malo, France, June 2018).'
		},
		{
			title: '[C10] Enhancing Coverage in Narrow Band-IoT Using Maching Learning',
			body: 'Chafii M, Faouzi B, Palicot J. IEEE WCNC (Barcelona, Spain, 2017).'
		},
		{
			title: '[C9] SC-FDMA with Index Modulation for M2M and IoT Uplink Applications',
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
			body: 'Chafii M, Y. Harbi, Burr A. ICT (Thessaloniki, Greece, 2016).'
		},
		{
			title: '[C3] Adaptive Tone-Reservation for better BER Performance in a Frequency Selective Fading Channel',
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
	
	$scope.patents = [

		{
			title: 'New Adaptive Multicarrier Modulation',
			body: 'Chafii M, Palicot J, Gribonval R. French patent. Number: 1000356937 (2017).'
		}

	];


	$scope.students = [
		{
			title: "Akhileswar Chowdary (Fall '22–)",
			body: "New York University Tandon School of Engineering"
		},
		{
			title: "Salmane Naoumi (Fall '22–)",
			body: "New York University Tandon School of Engineering"
		},		
		{
			title: "Ivo Bizon (Fall '18–)",
			body: "TU Dresden, Germany"
		},
		{
			title: "Abdul karim Gizzini (Spring '21–Fall '22)",
			body: "ETIS (CY Paris University, ENSEA, CNRS), France"
		},
		{
			title: "Roberto Bomfin (Spring '18–Fall '21)",
			body: "TU Dresden, Germany"
		},
		{
			title: "Ana-Belen Martinez (Spring '18–Fall '22)",
			body: "TU Dresden, Germany"
		},
		{
			title: "Ahmad Nimr (Spring '18–Fall '21)",
			body: "TU Dresden, Germany"
		},
		{
			title: "Shahab Ehsan Far (Spring '18–Fall '20)",
			body: "TU Dresden, Germany"
		}
	];

	$scope.postdocs = [
		{	"title": "Roberto Bomfin (Fall '22–)",
			"body": "New York University Abu Dhabi"
			
		},		
		{	"title": "Ahmad Bazzi (Spring '22–)",
			"body": "New York University Abu Dhabi"
			
		},
		{	"title": "Konpal Ali (Spring '22–)",
			"body": "New York University Abu Dhabi"
			
		},
		{	"title": "Abdulkarim Gizzini (Spring '21–Fall '22)",
			"body": "ETIS (CY Paris University, ENSEA, CNRS), France"
			
		},
		{
			"title": "Wafa Njima (Fall '20–Spring '21)",
			"body": "ETIS (CY Paris University, ENSEA, CNRS), France"
		}
	]


	$scope.interests = [
		{
			title: "Wireless communications",
			body: "Keywords: Waveform design for wireless communications;Index modulation; Peak-to-Average Power Ratio Reduction Problem"
		},		
		{
			title: "Machine learning for Communications",
			body: "Keywords: Deep learning for Indoor Localization, Deep learning for Channel Estimation"
		},
		{
			title: "Signal processing for communications",
			body: "Keywords: Channel estimation; Synchronization; Time-frequency and time-scale analysis"
		},

	];

	$scope.administrative = [
		{
			title: "Vice-chair, Green ISAC Special Interest Group of the IEEE TCGCC",
			body: "'22–"
		},
		{
			title: "Vice-chair, IEEE ComSoc UAE Chapter",
			body: "'22–"
		},
		{
			title: "Leader of the Education working group of the IEEE ComSoc Integrated Sensing and Communication Emerging Technologies Initiative",
			link: "https://isac.committees.comsoc.org/?_ga=2.205053011.2113553381.1620737478-1148819387.1606722468",
			body: "'21–"
		},		
		{
			title: "Vice-chair of the IEEE ComSoc Machine Learning for Communications Emerging Technologies Initiative",
			link: "https://mlc.committees.comsoc.org/officers-2/",
			body: "'18–"
		},
		{
			title: "Founding member, IEEE OTFS-special Interest Group",
			body: "'21–"
		},
		{
			title: "Co-chair of the Gender Committee of the AI4EU Community",
			link: "https://www.ai4eu.eu/gender-diversity-ai",
			body: "'19–'21"
		},	
		{
			title: "Research projects leader, Women in AI organization",
			link: "https://www.womeninai.co/",
			body: "'18–'21"
		},

	]

	$scope.events = [
		{
			"title": "General vice-chair, IEEE WCNC 2024",
			"body": "Dubai, UAE, '24"
		},
		{
			"title": "Workshop co-chair, IEEE WCNC 2023, Workshop on Delay-Doppler Communications, Sensing, and Their Integration",
			"body": "Glasgow, Scotland, '23"
		},
		{
			"title": "Symposium co-chair, IEEE ICC 2023 Symposium on Selected Areas in Communications: Machine Learning for Communication and Networking Track",
			"body": "Rome, Italy, '23"
		},
		{
			"title": "General chair, IEEE 6G Training School",
			"body": "UAE, '22"
		},
		{
			"title": "TPC co-chair, Abu Dhabi 6G Summit 2022",
			"body": "'22"
		},
		
		{
			"title": "Co-chair of the IEEE WCNC Track: Machine Learning and Optimization for Wireless Systems",
			"body": "2022, Austin, USA"
		},
		{
			"title": "Co-chair of the IEEE SPAWC 2021 Special Session: Machine Learning for Green and Sustainable Communications Beyond 5G",
			"body": "Lucca, Italy"
		},		
		{
			"title": "Co-chair of the special session \"Selected topics on 6G Security\" ISWCS",
			"body": "September 2021, Berlin, Germany"
		},
		{
			"title": "Co-organizer of IEEE ComSoc ISAC-ETI Webinar Series",
			'link': "https://sites.google.com/view/isac-webinar-series/home",
			"body": "2021-present"
		},		
		{
			"title": "Invited talk on Women in AI in the TeamUp5G Workshop on Ethics and Inclusiveness for Telecommunications Engineers",
			'link': "https://teamup5g.webs.tsc.uc3m.es/events/teamup5g-workshop-on-ethics-and-inclusiveness-for-telecommunications-engineers/",
			"body": "Online, March 2021"
		},
		{
			"title": "Co-chair of the \"Training school on machine learning for Communications\"",
			"link": "http://msit.tpu.ru/ieee/",
			"body": "March 2021, Tomsk, Russia, Virtual"
		},
		{
			"title": "Co-chair of the European Conference on Artificial Intelligence (ECAI)",
			"link": "https://digital.ecai2020.eu/women-in-ai-time/",
			"body": "September 2020, Organization of Women in AI Meeting"
		},
		{
			"title": "Chair of the special session \"Machine Learning for Communications\" IEEE SPAWC",
			"link": "https://spawc2020.netlify.app/technical-program.html#S1569584614",
			"body": "2020, Atlanta, USA "
		},
		{
			"title": "TPC Chair of IEEE Globecom 2019 Workshop \"Machine learning for Wireless Communications\"",
			"link": "https://gcwkshp2019mlwic.wixsite.com/mlwic",
			"body": "2019, Hawaii, USA"
		},
		{
			"title": "Chair of the IEEE ComSoc \"Training school on Machine learning for Communications\"",
			"link": "https://sites.google.com/view/mlc-training-school/",
			"body": "September 2019, Paris"
		},
		{
			"title": "Invited speaker at the French conference GRETSI",
			"body": "2019, Lille, France"
		},
		{
			"title": "Keynote on \"Opportunities of Deep Learning in Wireless Physical Layer\",  IEEE 5G Summit",
			"link": "https://twitter.com/5g_lab/status/1044566789290676224?lang=en",
			"body": "2018, Dresden, Germany"
		},
		{
			"title": "Tutorial on \"Advanced waveforms for 5G\"  5G Lab Summer School",
			"link": "https://twitter.com/comnets_tud/status/1043059799208943617",
			"body": "2018, Dresden, Germany"
		},
		{
			"title": "Session chair of Workshop ML-WiC at IEEE Globecom",
			"body": "2019, Hawaii"
		},
		{
			"title": "Session chair of SPC-I1 Interactive Session 1 at IEEE Globecom",
			"body": "2018, Abu Dhabi"
		},
		{
			"title": "Session chair of the wireless workshop at IEEE 5G Summit",
			"body": "2018, Dresden"
		},
		{
			"title": "Session chair of PHY02 (Multicarrier Techniques), IEEE PIMRC",
			"body": "2018, Istanbul"
		}
	]

	$scope.editorial = [
		{
			"title": "Associate Editor, IEEE Transactions on Communications",
			"body": "'22–'23"
		},
		{
			"title": "Guest Editor, IEEE Communications Magazine: Data Sets for Machine Learning in Wireless Communications and Networks",
			"body": "'23"
		},
		{
			"title": "Guest Editor, IEEE Internet of Things Magazine: Emerging Trends and Challenges in Internet-of-Underwater-Things",
			"body": "'22"
		},
		{
			"title": "Guest Editor, Open Journal of the Communications Society (OJ-COMS), Special issue on Integrated Sensing and Communications for Multi-functional Networks in 6G Era",
			"body": "'22"
		},
		{
			"title": "Associate Editor for IEEE Communications Letters :  Machine learning for communications Track",
			"link": "https://www.comsoc.org/publications/journals/ieee-comml/ieee-communications-letters-editorial-board",
			"body": "'19–'21"
		},
		{
			"title": "Guest editor at Frontiers in Communications and Networks",
			"link" : "https://www.frontiersin.org/research-topics/17035/index-modulation-for-6g-communications",
			"body": "''21"
		}
	]


	$scope.awards = [
		{
			title: " Award of the Highest Number of Activities  in 2022",
			body: [
				"by the IEEE Section, 2023"
			]
		},		
		{
			title: " IEEE ComSoc Best Young Researcher Award:",
			body: [
				"in Europe, Middle-East Africa (EMEA) region for research activities for the benefit of the IEEE Communications Society, 2022"
			]
		},		
		{
			title: "Best Editor Award for IEEE Communications Letters:",
			body: [
				"Machine Learning for Communications Track in 2020"
			]
		},
		{
			title: "Nominated in the top 10 Rising Stars in Computer Networking and Communications in 2020",
			link: "https://n2women.comsoc.org/awards/rising-stars/2020-rising-stars-in-computer-networking-and-communications/",
			body: [
				"by N2Women, supported by IEEE ComSoc, Facebook, Google, Microsoft, National Science Foundation, Sigmobile, and CRA-W"
			]
		},
		{
			title: "PEDR Award for Doctoral Supervision and Research (2019-2023)",
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
			title: "Prize of the Best Ph.D. in France in the fields: Signal, Image & Vision",
			link: "http://www.gretsi.fr/prix-de-these.php",
			body: [
				"Awarded jointly by the French Club EEA, the GdR ISIS et GRETSI",
				"2018"
			]
		},
		{
			title: "First place in the « Machine Learning Challenge », at the training school « Machine & Deep Learning Techniques for (Beyond) 5G Wireless Communications Systems »",
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
