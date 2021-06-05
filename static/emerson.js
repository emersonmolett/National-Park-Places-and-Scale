console.log("emerson.js loaded");

function buildCharts(parkID) {
  // d3.csv("../resources/natParksFinal.csv").then((data) => {
  d3.json("/natparks").then((data) => {
    parkInfo = data[parkID]
    var att_2020 = parkInfo.att_2020;
    console.log(parkInfo);
    console.log(att_2020);
    var xvalues = [parkInfo["att_2011"], parkInfo["att_2012"], parkInfo["att_2013"], parkInfo["att_2014"], parkInfo["att_2015"], parkInfo["att_2016"], parkInfo["att_2017"], parkInfo["att_2018"], parkInfo["att_2019"], parkInfo["att_2020"]]
    var yvalues = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
    var data = [{
      x: xvalues,
      y: yvalues,
      type: "bar",
      orientation: "h",
      marker: {
        color: "2d4b1e",
      }
    }];
    var layout = {
      title: `${parkInfo.name}<br>Recreation Visits per Year`,
      xaxis: {
        title: "Recreation Visits"
      },
      yaxis: {
        title: "Year",
        categoryorder: "Year",
      }
    };
    Plotly.newPlot("bar", data, layout);

    // build a scatter plot for latitude vs area & longitude vs area 
    var trace1 = {
      x: [338.7514314, 34766.27907, 13.63651004, 0.343944871, 3045.134062, 424.242424, 30907.51386, 1372.259424, 1310.872059, 139.8468513, 61681.66391, 521.0467526, 16.48720354, 603410.4554, 3249.049004, 72777.02156, 316425.9504, 1778.676381, 76458.19051, 763.2574801, 17.13552104, 42758.99469, 316.6652687, 242735.7444, 33683.63595, 0.344770867, 829.4903597, 2785109.207, 810878.1015, 727814.1057, 977.3883618, 122460.6017, 113139.5931, 119828.0065, 0.880662913, 173836.4991, 31227.96861, 101864.5926, 4316.597175, 243.957306, 0.588082457, 1595.260479, 43.90171377, 0.992710291, 2.047610217, 35986.97523, 18987.9403, 93543.25815, 160.0093233, 463.3710823, 58460.01493, 205.8740046, 88228.00392, 334248.2128, 44309.20922, 31131.73586, 649475.1372, 28418.37322, 244795.0679, 263.4488178, 790.5969234, 269.5601899, 46797.2668, 0.190195221, 473.237847, 20.04432674, 1.275232649, 20870.30689, 5740.454027, 6124.966513, 3468.952139, 117.5721062, 34375.33196, 54.56660573, 245685.1578, 28.23616758, 60.27894721, 11877.25961, 20804.46189, 9843.996974, 9873.79296, 12204.46571, 26.01276879, 14537.82502, 8.326043247, 8510.509891, 20448.38257, 26407.99796, 42.69566183, 4811.388264, 846.2442239, 182551.778, 53389.23842, 698956.1059, 24332.16278, 38363.56208, 41363.13032, 32720.53108, 113.6533546, 30.32626157, 3434914.761, 68950.15306, 6026738.313, 799.4358281, 1350.072694, 211361.8997, 65578.13088, 3.342207327, 18044.58572, 0.522457474, 2497.364355, 693.0609099, 113577.677, 1278.876109, 177.420958, 13.19575927, 1531728.486, 0.530989324, 19705.21763, 0.454152796, 1154.829107, 2264.265451, 6270.906543, 0.300562749, 997.964559, 140.2086559, 517.6370301, 1301.197997, 282.4035641, 897.3601007, 705.1123569, 273.8938049, 46.72097128, 368.2227102, 916.0088489, 25.0689149, 5416.595419, 495.7773064, 20.45776314, 71.04542751, 16.73584156, 232.257933, 720.6785426, 443.5753611, 208.3220817, 344.0611162, 8317.739991, 8.137991638, 8.399173219, 6.984000605, 9264.958495, 7.992321966, 675.2199531, 8472246.497, 194.426638, 27158.69, 11168.17411, 0.724657048, 24.35683016, 657.8475124, 240.7914909, 6657.188353, 6067.828172, 605.3428107, 3284348.037, 1008098.668, 1250322.484, 82466.76394, 2669.89212, 22.78541743, 1203251.675, 708.3037125, 310014.1156, 1575.615407, 77001.19239, 149272.9739, 518050.23, 1149.121089, 87224.47689, 226.8333786, 130412.4274, 4380.330178, 33630.52061, 1.753190248, 62.00679643, 3721.910268, 25542.12214, 12.46240808, 359589.249, 187.0243199, 1688.011682, 898.7450344, 214.2750893, 155.1742924, 1789.673569, 848.7007171, 2079.173196, 5457.062948, 808.9399412, 159.8920185, 155.7089952, 43.29661515, 15927.13691, 551761.1404, 7.806938356, 21716.17677, 1273.486231, 72.0711443, 23622.3443, 13989.5556, 0.086957717, 343.6812869, 179.6834203, 797464.9419, 10644.40793, 1252.379708, 89561.96813, 4101150.754, 667105.0458, 2951.639513, 1861.555306, 458965.6506, 3929.970272, 12993.81104, 1772.320694, 1751826.073, 1.557544949, 62902.82442, 4039323.092, 1494396.795, 41580.78639, 78866.51987, 107509.3801, 46812.39463, 80.16057724, 3628.207853, 200.0845793, 13.66159091, 7.288886198, 780.0210681, 15416.2051, 28.88896271, 1.942505513, 119.7342788, 11306.00674, 1567.863478, 18.07427442, 1.301689411, 51695.02559, 5125.086526, 113.6298578, 813.5243106, 645.5443497, 38.87868498, 2.740335498, 296.8637976, 0.079571667, 0.742113662, 53688.36989, 1471.643268, 398.7096748, 1023.543097, 43.53999698, 53830.33358, 68368.55199, 1587804.205, 1621.80337, 1011.731042, 90.99234193, 1691.161473, 236437.6387, 1273.623175, 555.2002031, 140.6427351, 52839.9451, 7228.289489, 172.5717343, 11142.71215, 7609.807843, 360.3926152, 31.15775993, 5.342728331, 71768.54662, 4225.614561, 4.598129465, 962.559853, 29071.31858, 6579912.205, 501381.7021, 294.4964387, 5409.521153, 3388.037505, 915126.42, 4560.386678, 330690.1589, 82331.79149, 130555.5262, 3425.125929, 51.36605437, 4275.675468, 21.74314728, 6695.111274, 18.56636599, 26.75197638, 2782.508225, 222970.3082, 7202.154624, 73650.27424, 26706.80373, 39.92671456, 286.6661201, 4605.628335, 71865.03942, 6.472618969, 990.2201083, 0.575710627, 13812.54571, 421.51046, 86.10346983, 0.40340054, 159.9213937, 21.45491715, 140398.3148, 8190.608553, 22059.30222, 41.98396354, 1748.863129, 267041.7214, 4.540893003, 1.011697539, 149.14649, 116790.1164, 288.6755072, 82.80594509, 93589.64005, 6.649489973, 70635.64967, 6.197020577, 188.3798852, 9.443347779, 1071.764304, 1025.788882, 943.0231628, 99.19329911, 2128.050101, 76.21083128, 12530.09433, 153786.5214, 3553.85315, 12.67051331, 3217.02379, 20.03677467, 406806.1008, 197899.7673, 8698.372084, 116.2689716, 70581.99708, 53.9164548, 69.04700583, 15.95913996, 60.63500371, 720.8414073, 4.568773816, 3040.264095, 10896.88944, 0.027997171, 0.1056022, 1.176117142, 100.1890622, 70461.39814, 20.92329528, 19.69205014, 328.0119233, 249.8720373, 45360.67949, 1121.622549, 37.39621143, 22721.66544, 362.5026499, 0.998723173, 89.00757953, 61.88549572, 812.6510355, 9.877209432, 57156.095, 88955.20101, 3450.474388, 210.6298923, 2507.66933, 2.184970611, 13906.75595, 15016.94354, 204706.6037, 107.2275002, 3241.119342, 1904.926304, 104.414614, 319.7597179, 68.69200897, 42138.14709, 18.35200537, 148232.8351, 138.7609169, 3.649692951, 2442.196427, 33927.52794, 134.0228807, 7.533522309, 2.066606902, 8.582182834, 13179791.86, 428.660442, 35429.46223, 2199455.729, 745901.2575, 35.61132413, 2522690.178, 148709.0954],
      y: [61.5614999, 67.251868, 66.898684, 63.7296854, 58.756222, 61.2173565, 36.5053891, 58.8318772, 66.0740832, 64.78943, 44.462085, 67.146678, 34.871394, 25.395755, 36.009722, 37.3583836, 36.3551644, 48.8046506, 47.96935, 29.2166538, 34.129523, 37.7189997, 25.898814, 43.46167, 59.8463648, 67.45055, 58.756222, 47.1225521, 35.691031, 48.832778, 36.78928, 36.56471, 19.299004, 38.5398057, 32.229742, 39.27954, 43.729398, 40.3753949, 34.245852, 38.291308, 43.716892, 46.7558282, 34.90999, 40.5191016, 48.6020835, 38.533333, 42.962058, 25.4631936, 34.1859982, 37.7275919, 37.240801, 32.7696209, 41.753421, 27.577099, 30.393904, 36.4701139, 45.312493, 48.731667, 35.1610428, 30.404128, 40.5093134, 35.564766, 32.1792142, 36.2331995, 45.970362, 35.9, 36.154448, 31.903912, 37.8439986, 36.9202916, 48.10743, 38.9295007, 38.733081, 46.5178371, 46.8122706, 38.04195, 37.899209, 45.4171447, 44.811405, 46.966667, 41.121115, 42.868919, 24.56, 48.5109531, 29.4216948, 28.613144, 41.6199728, 44.9455077, 37.16748, 43.41665, 34.307545, 37.192189, 41.873101, 32.386916, 30.45445, 41.837222, 38.249822, 40.612879, 35.714722, 38.4657461, 30.7206567, 37.5965706, 35.238961, 44.3385559, 36.0638, 43.55635, 35.7772999, 20.856944, 41.2824455, 38.4657461, 35.938547, 58.756222, 42.8129207, 34.6881785, 40.6035923, 36.4869826, 33.783333, 38.4483, 36.602419, 44.104722, 36.371, 29.328389, 29.955125, 35.25, 39.6105435, 39.0556092, 40.7552554, 17.78694, 48.218333, 41.6306, 34.3807297, 18.34215, 42.0774026, 44.653496, 18.306111, 38.585278, 59.54944, 38.4838305, 32.007788, 33.9968515, 45.389167, 38.22, -14.29129, 38.4426255, 21.189792, 34.5089397, 34.942377, 38.308756, 35.151883, 37.218889, 41.864444, 37.429167, 37.593888, 38.87857, 35.161624, 35.548124, 38.841902, 38.900586, 37.6845859, 39.8122032, 39.633853, 34.5116392, 32.018264, 36.075278, 38.805198, 31.3458659, 38.678611, 42.095556, 42.7816632, 37.541667, 36.442602, 46.416175, 35.078017, 39.325379, 46.1370048, 43.0189449, 39.1675, 40.095596, 25.927065, 32.8483695, 39.4798039, 35.238961, 41.824167, 42.421703, 35.238961, 33.9830896, 37.219444, 41.6316468, 32.345551, 43.139283, 37.115556, 40.017274, 48.455833, 33.015464, 13.44645, 47.2423702, 39.3738532, 37.3775, 47.4003132, 38.9575, 40.7969641, 33.1889835, 39.3665648, 42.3552589, 46.407891, 30.285392, 37.068889, 35.575045, 44.588333, 40.4692629, 36.4848862, 35.043518, 43.875419, 43.764308, 19.689206, 39.664722, 38.995757, 33.66672, 34.520341, 17.778889, 42.471166, 34.6089399, 32.1514176, 32.63679, 45.6375, 34.1433109, 29.381974, 39.819078, 41.77043, 42.209167, 40.2081934, 35.073993, 38.0451225, 36.7284743, 34.5636358, 37.548179, 37.6146273, 36.7810744, 45.5605145, 34.0166096, 35.884486, 35.846872, 47.95819, 38.189289, 39.8122032, 39.819078, 38.185556, 43.6285354, 32.77, 37.8960372, 32.197776, 30.6017944, 35.938547, 32.995425, 37.787778, 48.00016, 35.938547, 19.689206, 19.4173278, 42.812124, 37.003611, 31.57766, 36.40425, 38.71312, 37.9921651, 37.535671, 38.5223783, 35.6175, 36.8346019, 42.3656798, 43.049044, 34.9807721, 44.013333, 31.223111, 29.716366, 35.273142, 38.971705, 40.371125, 37.123333, 36.9859501, 32.758321, 36.1312015, 40.2917267, 41.77043, 45.6252599, 31.7398039, 38.113702, 38.624901, 43.49751, 41.671985, 40.3508419, 41.77043, 38.89, 32.674287, 36.894948, 35.667514, 43.049044, 21.391667, 37.9338362, 31.543333, 30.3793742, 15.21226, 46.04, 38.936944, 42.6471941, 35.2273, 57.0519805, 39.794722, 35.88094, 31.606, 38.889444, 38.897222, 37.804208, 34.458784, 32.4505152, 20.027026, 40.882588, 41.264613, 18.468075, 32.0367522, 35.387619, 40.699067, 41.2566156, 39.41789, 32.4283309, 41.406345, 39.707252, 31.7680934, 42.095995, 40.916111, 39.263056, 42.3747172, 43.816298, 39.9480134, 38.890833, 41.913611, 36.862928, 33.7555614, 41.9551552, 37.16748, 41.635758, 27.371266, 34.738773, 32.758321, 41.654125, 17.746944, 37.767098, 38.6778773, 40.7012349, 21.339884, 32.4325, 40.7839654, 37.842788, 29.897989, 32.268672, 38.881389, 38.893611, 38.8977, 38.878611, 38.882153, 43.2119731, 36.117189, 37.97696, 39.7981317, 42.256412, 37.800695, 42.468009, 39.0936, 38.547834, 42.5217765, 38.8894, 38.863333, 38.967151, 38.883889, 33.635, 41.664495, 42.9106968, 38.889278, 42.3254655, 44.3385559, 37.9921651, 40.8933639, 29.955125, 39.393117, 40.733872, 41.831347, 39.119518, 38.887182, 38.886111, 38.891111, 38.896111, 39.037925, 42.376989, 40.7073139, 38.887778, 37.547778, 40.7035011, 42.901478, 41.836111, 34.307545, 34.307545, 33.515278, 32.34097, 40.812908, 42.36, 33.667172, 40.7073139, 39.9480134, 40.797611, 41.697222, 38.891944, 40.7150514, 38.896667, 38.91, 40.7387645, 42.3460692, 38.907778, 39.9480134],
      name: "Latitude",
      type: 'scatter',
      mode: "markers",
      marker: {
        color: "c56c39",
        size: 7
      }
    };
    var trace2 = {
      x: [338.7514314, 34766.27907, 13.63651004, 0.343944871, 3045.134062, 424.242424, 30907.51386, 1372.259424, 1310.872059, 139.8468513, 61681.66391, 521.0467526, 16.48720354, 603410.4554, 3249.049004, 72777.02156, 316425.9504, 1778.676381, 76458.19051, 763.2574801, 17.13552104, 42758.99469, 316.6652687, 242735.7444, 33683.63595, 0.344770867, 829.4903597, 2785109.207, 810878.1015, 727814.1057, 977.3883618, 122460.6017, 113139.5931, 119828.0065, 0.880662913, 173836.4991, 31227.96861, 101864.5926, 4316.597175, 243.957306, 0.588082457, 1595.260479, 43.90171377, 0.992710291, 2.047610217, 35986.97523, 18987.9403, 93543.25815, 160.0093233, 463.3710823, 58460.01493, 205.8740046, 88228.00392, 334248.2128, 44309.20922, 31131.73586, 649475.1372, 28418.37322, 244795.0679, 263.4488178, 790.5969234, 269.5601899, 46797.2668, 0.190195221, 473.237847, 20.04432674, 1.275232649, 20870.30689, 5740.454027, 6124.966513, 3468.952139, 117.5721062, 34375.33196, 54.56660573, 245685.1578, 28.23616758, 60.27894721, 11877.25961, 20804.46189, 9843.996974, 9873.79296, 12204.46571, 26.01276879, 14537.82502, 8.326043247, 8510.509891, 20448.38257, 26407.99796, 42.69566183, 4811.388264, 846.2442239, 182551.778, 53389.23842, 698956.1059, 24332.16278, 38363.56208, 41363.13032, 32720.53108, 113.6533546, 30.32626157, 3434914.761, 68950.15306, 6026738.313, 799.4358281, 1350.072694, 211361.8997, 65578.13088, 3.342207327, 18044.58572, 0.522457474, 2497.364355, 693.0609099, 113577.677, 1278.876109, 177.420958, 13.19575927, 1531728.486, 0.530989324, 19705.21763, 0.454152796, 1154.829107, 2264.265451, 6270.906543, 0.300562749, 997.964559, 140.2086559, 517.6370301, 1301.197997, 282.4035641, 897.3601007, 705.1123569, 273.8938049, 46.72097128, 368.2227102, 916.0088489, 25.0689149, 5416.595419, 495.7773064, 20.45776314, 71.04542751, 16.73584156, 232.257933, 720.6785426, 443.5753611, 208.3220817, 344.0611162, 8317.739991, 8.137991638, 8.399173219, 6.984000605, 9264.958495, 7.992321966, 675.2199531, 8472246.497, 194.426638, 27158.69, 11168.17411, 0.724657048, 24.35683016, 657.8475124, 240.7914909, 6657.188353, 6067.828172, 605.3428107, 3284348.037, 1008098.668, 1250322.484, 82466.76394, 2669.89212, 22.78541743, 1203251.675, 708.3037125, 310014.1156, 1575.615407, 77001.19239, 149272.9739, 518050.23, 1149.121089, 87224.47689, 226.8333786, 130412.4274, 4380.330178, 33630.52061, 1.753190248, 62.00679643, 3721.910268, 25542.12214, 12.46240808, 359589.249, 187.0243199, 1688.011682, 898.7450344, 214.2750893, 155.1742924, 1789.673569, 848.7007171, 2079.173196, 5457.062948, 808.9399412, 159.8920185, 155.7089952, 43.29661515, 15927.13691, 551761.1404, 7.806938356, 21716.17677, 1273.486231, 72.0711443, 23622.3443, 13989.5556, 0.086957717, 343.6812869, 179.6834203, 797464.9419, 10644.40793, 1252.379708, 89561.96813, 4101150.754, 667105.0458, 2951.639513, 1861.555306, 458965.6506, 3929.970272, 12993.81104, 1772.320694, 1751826.073, 1.557544949, 62902.82442, 4039323.092, 1494396.795, 41580.78639, 78866.51987, 107509.3801, 46812.39463, 80.16057724, 3628.207853, 200.0845793, 13.66159091, 7.288886198, 780.0210681, 15416.2051, 28.88896271, 1.942505513, 119.7342788, 11306.00674, 1567.863478, 18.07427442, 1.301689411, 51695.02559, 5125.086526, 113.6298578, 813.5243106, 645.5443497, 38.87868498, 2.740335498, 296.8637976, 0.079571667, 0.742113662, 53688.36989, 1471.643268, 398.7096748, 1023.543097, 43.53999698, 53830.33358, 68368.55199, 1587804.205, 1621.80337, 1011.731042, 90.99234193, 1691.161473, 236437.6387, 1273.623175, 555.2002031, 140.6427351, 52839.9451, 7228.289489, 172.5717343, 11142.71215, 7609.807843, 360.3926152, 31.15775993, 5.342728331, 71768.54662, 4225.614561, 4.598129465, 962.559853, 29071.31858, 6579912.205, 501381.7021, 294.4964387, 5409.521153, 3388.037505, 915126.42, 4560.386678, 330690.1589, 82331.79149, 130555.5262, 3425.125929, 51.36605437, 4275.675468, 21.74314728, 6695.111274, 18.56636599, 26.75197638, 2782.508225, 222970.3082, 7202.154624, 73650.27424, 26706.80373, 39.92671456, 286.6661201, 4605.628335, 71865.03942, 6.472618969, 990.2201083, 0.575710627, 13812.54571, 421.51046, 86.10346983, 0.40340054, 159.9213937, 21.45491715, 140398.3148, 8190.608553, 22059.30222, 41.98396354, 1748.863129, 267041.7214, 4.540893003, 1.011697539, 149.14649, 116790.1164, 288.6755072, 82.80594509, 93589.64005, 6.649489973, 70635.64967, 6.197020577, 188.3798852, 9.443347779, 1071.764304, 1025.788882, 943.0231628, 99.19329911, 2128.050101, 76.21083128, 12530.09433, 153786.5214, 3553.85315, 12.67051331, 3217.02379, 20.03677467, 406806.1008, 197899.7673, 8698.372084, 116.2689716, 70581.99708, 53.9164548, 69.04700583, 15.95913996, 60.63500371, 720.8414073, 4.568773816, 3040.264095, 10896.88944, 0.027997171, 0.1056022, 1.176117142, 100.1890622, 70461.39814, 20.92329528, 19.69205014, 328.0119233, 249.8720373, 45360.67949, 1121.622549, 37.39621143, 22721.66544, 362.5026499, 0.998723173, 89.00757953, 61.88549572, 812.6510355, 9.877209432, 57156.095, 88955.20101, 3450.474388, 210.6298923, 2507.66933, 2.184970611, 13906.75595, 15016.94354, 204706.6037, 107.2275002, 3241.119342, 1904.926304, 104.414614, 319.7597179, 68.69200897, 42138.14709, 18.35200537, 148232.8351, 138.7609169, 3.649692951, 2442.196427, 33927.52794, 134.0228807, 7.533522309, 2.066606902, 8.582182834, 13179791.86, 428.660442, 35429.46223, 2199455.729, 745901.2575, 35.61132413, 2522690.178, 148709.0954],
      y: [-143.8523096, -150.184189, -162.599068, -148.766697, -156.51724, -149.886172, -117.0794082, -136.9987946, -164.9347562, -141.202849, -110.642441, -161.292928, -117.020322, -80.5834525, -114.796667, -110.8076084, -112.6612088, -114.1625084, -123.49856, -103.2663479, -116.036937, -119.5571677, -81.318701, -113.56271, -150.1844857, -163.5490191, -156.51724, -88.5645333, -83.536198, -121.3475, -118.67286, -118.77337, -155.3569573, -109.5061713, -112.883295, -77.785195, -110.709055, -105.5059499, -119.2664691, -111.262257, -101.892914, -122.1207998, -109.806792, -108.9264524, -93.403716, -78.35, -122.148106, -80.3463139, -118.8861188, -105.6412527, -112.941626, -106.3182956, -124.194538, -97.230383, -87.0388, -84.6411206, -107.935565, -121.067222, -107.8410667, -94.415751, -121.4330998, -82.489803, -110.738004, -93.1060044, -68.619336, -106.533333, -109.552607, -104.868813, -122.5259596, -90.9045238, -118.21289, -114.2628251, -109.5925139, -86.4090096, -90.8209629, -122.7888848, -81.157499, -92.6462101, -86.056252, -103.45, -74.898707, -97.384615, -81.81, -122.2275204, -100.9068262, -80.8075783, -75.0508572, -93.0898974, -108.525539, -113.5166497, -88.720974, -86.121529, -121.519764, -104.221362, -81.44988, -69.972778, -75.1559737, -122.573041, -101.552778, -107.16668, -81.5502296, -112.1787896, -111.570755, -68.2733346, -107.9708, -103.47865, -106.2687907, -156.313056, -81.5706109, -107.16668, -75.712322, -156.51724, -99.9294552, -76.526505, -74.0588092, -121.2135701, -80.783333, -76.1387, -83.692026, -110.692778, -115.306, -103.205948, -90.064502, -115.11, -77.6881048, -108.7007007, -73.0168646, -64.61916, -122.683611, -87.086864, -85.6315729, -64.767569, -113.7037797, -119.650654, -64.726944, -77.379722, -135.269027, -102.7857891, -109.361298, -84.3338522, -92.6575, -80.89, -170.696426, -96.5730004, -156.980138, -96.969625, -85.259056, -77.455278, -88.329943, -76.5175, -110.775833, -77.373611, -110.009234, -76.969522, -106.719073, -105.682312, -77.048492, -105.336536, -113.0965036, -77.2215251, -77.448206, -93.0539835, -80.990196, -84.649444, -77.571996, -110.253776, -77.092778, -123.405833, -114.9521998, -80.999167, -94.025976, -116.797523, -81.395068, -77.738882, -123.8798795, -73.6456328, -78.300833, -75.423987, -97.511873, -83.6034314, -77.7394856, -111.570755, -103.665, -103.75388, -111.570755, -84.5780814, -77.361389, -112.4947092, -90.855577, -91.245468, -93.42, -78.909198, -122.985556, -85.687928, 144.786636, -88.4480218, -83.0073082, -78.796, -101.4864866, -77.045, -74.4659163, -111.9224398, -77.388428, -71.050518, -112.735579, -98.398629, -84.736111, -101.683787, -104.698333, -78.5437922, -87.8574308, -108.34627, -103.4531437, -103.607462, -156.021329, -75.565278, -76.895521, -111.1297924, -106.241127, -64.758889, -71.35372, -111.8412083, -109.4526832, -91.405532, -113.643611, -82.013465, -98.482254, -79.587852, -73.932905, -104.535861, -75.7735281, -81.8740202, -103.4336602, -118.1462983, -111.8543178, -108.548955, -119.0852642, -103.9695127, -107.4271624, -91.3451369, -86.43472, -105.018118, -89.6895741, -99.19959, -77.2215251, -79.587852, -76.916389, -72.5183519, -108.279999, -122.580256, -84.129294, -103.8955494, -75.712322, -111.5354502, -84.598056, -104.041483, -75.712322, -156.021329, -155.9080889, -114.898669, -76.3075, -110.999009, -110.910901, -77.025503, -122.130977, -85.7340637, -77.0285753, -99.700278, -107.9960917, -73.704337, -89.491477, -85.8063291, -96.325, -81.389279, -81.234059, -82.453088, -76.483576, -111.806123, -79.765833, -94.3510047, -79.856317, -79.8488024, -96.8348525, -73.932905, -122.6543063, -93.0835779, -86.999079, -90.186317, -72.373789, -91.346589, -78.7721602, -73.932905, -77.023611, -117.23963, -111.473479, -109.321948, -89.491477, -158.059722, -122.3442547, -91.383056, -81.5029008, 145.724335, -118.461389, -77.261944, -71.3097974, -118.5614, -135.3315533, -84.088889, -106.302632, -97.175, -77.035278, -77.064167, -122.431068, -78.107428, -85.6773793, -155.819965, -73.5053767, -95.924517, -66.115186, -84.3934827, -94.4290819, -74.028522, -73.4562524, -76.590414, -85.7091633, -75.6654819, -83.890227, -106.4583047, -72.583279, -74.181667, -76.58, -71.0540366, -101.899697, -75.1461357, -77.044444, -83.378333, -112.740538, -84.3734823, -121.4777694, -108.525539, -70.924046, -82.580364, -92.29732, -79.856317, -82.811077, -64.702222, -122.465741, -87.5353188, -74.0116813, -157.970901, -80.670556, -74.2339497, -94.705509, -81.312123, -86.717968, -77.036667, -77.023889, -77.0365, -77.051389, -77.073524, -75.4547454, -82.856625, -90.048672, -89.6451345, -71.011167, -121.981435, -71.008909, -94.415252, -90.356985, -70.8862569, -77.040517, -76.985278, -77.1403459, -77.044444, -85.908333, -81.35085, -76.8001038, -77.050139, -71.1320319, -68.2733346, -122.130977, -73.8264656, -90.064502, -99.617178, -74.002175, -71.410749, -84.508156, -77.018771, -77.044167, -77.047778, -77.032778, -95.676498, -71.12637, -74.010262, -77.047222, -77.438056, -74.0168506, -78.872416, -89.480722, -88.720974, -88.720974, -86.814722, -90.21265, -73.962923, -71.064722, -93.596489, -74.010262, -75.1461357, -81.375456, -87.609444, -77.003611, -74.0053687, -77.025833, -77.024167, -73.988999, -71.1244352, -77.030278, -75.1461357],
      name: "Longitude",
      type: 'scatter',
      mode: "markers",
      marker: {
        color: "2d4b1e",
        size: 7
      }
    };
    var data = [trace1, trace2];
    Plotly.newPlot('scatter', data);
    drawGaugeChart(att_2020);
  });
};
function drawGaugeChart(att_2020) {
  console.log(att_2020);
  // Divide 180 degree half circle into 9 parts
  var intervals = parseFloat(att_2020) * 20;

  // Define gauge chart values and ranges
  var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: att_2020,
      title: { text: "Recreation Visits 2020" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0, 15000000], tickwidth: 1, tickmode: "array", tickcolor: "darkblue" },
        bar: { color: "#c1121f" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 1000000], color: "#f2faeb" },
          { range: [1000001, 2000000], color: "#d3eebc" },
          { range: [2000001, 3000000], color: "#b5e28d" },
          { range: [3000001, 4000000], color: "#8cd34e" },
          { range: [4000001, 5000000], color: "#78c832" },
          { range: [5000001, 6000000], color: "#6eb82e" },
          { range: [6000001, 7000000], color: "#65a82a" },
          { range: [7000001, 8000000], color: "#5c9926" },
          { range: [8000001, 9000000], color: "#528922" },
          { range: [9000001, 10000000], color: "#49791e" },
          { range: [10000001, 11000000], color: "#3f6a1a" },
          { range: [11000001, 12000000], color: "#365a16" },
          { range: [12000001, 13000000], color: "#2c4a13" },
          { range: [13000001, 14000000], color: "#233a0f" },
          { range: [14000001, 15000000], color: "#1a2b0b" },
        ],
        threshold: {
          line: { color: "#d00000", width: 4 },
          thickness: 0.5,
          value: att_2020
        }
      }
    }
  ];

  // Define gauge chart layout
  var gaugeLayout = {
    title: "Recreation Visits 2020",
    width: window.innerWidth / 1.4,
    height:  400,
    margin: { t: 0, r: 0, l: 0, b: 0 },
  };
  // Make plot responsive within Bootstrap container
  var config = { responsive: true }

  // Plot gauge chart
  Plotly.newPlot("gauge", gaugeData, gaugeLayout, config);
};

function optionChanged(parkID) {
  // console.log(parkInfo);
  buildCharts(parkID);
}

function initDashboard() {
  var dropdown = d3.select("#selDataset")
  d3.json("/natparks").then((data) => {
    // var parksInfo = data.names;
    data.forEach((parkInfo) => {
      dropdown.append("option").text(parkInfo.name).property("value", parkInfo[""])
    });
    buildCharts("0")
  });
}
initDashboard();

console.log("emerson.js finished");