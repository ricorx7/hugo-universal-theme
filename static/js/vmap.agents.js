jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#ffffff',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        values: sample_data,
        normalizeFunction: 'polynomial',
        onRegionClick: function (event, code, region) {
            var agent_company = 'Rowe Technologies Inc';
            var agent_title = 'USA - ' + agent_company;
            var agent_name = "Rico Castelo";
            var agent_addr1 = '11265 Danielson Ct, Suite 306';
            var agent_addr2 = 'Poway, CA, 92064';
            var agent_addr3 = 'USA';
            var agent_phone = "+1 858.842.3020";
            var agent_mobile = "+1 858.361.8504";
            var agent_fax = "+1 858.842.3021";
            var agent_website = "http://www.rowetechinc.com";
            var agent_email = "sales@rowetechinc.com";
            switch (code) 
            {
                case "us":
                    window.location = "/agents_usa";
                    break;
                case "ca":
                    window.location = "/agents_canada";
                    break;
                case "de":
                case "at":
                case "ch":
                    agent_company = 'MBT';
                    agent_title = 'Germany - ' + agent_company;
                    agent_name = "Dr. Alexander Davidov";
                    agent_addr1 = 'Wischhofstrasse 1-3';
                    agent_addr2 = 'Gebaude 11 D-24148';
                    agent_addr3 = 'Kiel, Germany';
                    agent_phone = "+49 431 535 500 70";
                    agent_mobile = "";
                    agent_fax = "+49 431 535 500 99";
                    agent_email = "a.davidov@m-b-t.com";
                    agent_website = "www.m-b-t.com";
                    break;
                case "tr":
                    agent_company = 'Elite Elektrik Üretim Ve';
                    agent_title = 'Turkey - ' + agent_company;
                    agent_name = "Mr. Irfan  Guray";
                    agent_addr1 = 'Makine Sanayi Ticaret A.S.';
                    agent_addr2 = 'Caddesi (8. Cd.) No:14/4';
                    agent_addr3 = 'Ovecler-Cankaya Ankara, 06460, Turkey';
                    agent_phone = "+90 312 472 83 93";
                    agent_mobile = "(312) 472 83 93";
                    agent_fax = "(312) 472 20 67";
                    agent_email = "elite@elite.com.tr";
                    agent_website = "www.elite.com.tr";
                    break;
                case "it":
                    agent_company = 'Codevintec';
                    agent_title = 'Italy - ' + agent_company;
                    agent_name = "Mr. Andrea Faccioli";
                    agent_addr1 = 'Via G. Labus, 13';
                    agent_addr2 = '20147 Milano Italy';
                    agent_addr3 = '';
                    agent_phone = "+39 02 4830 2157";
                    agent_mobile = "";
                    agent_fax = "+39 02 4830 2169";
                    agent_email = "andrea.faccioli@codevintec.it";
                    agent_website = "www.codevintec.it";
                    break;
                case "es":
                    agent_company = 'Casco Antiguo Spain';
                    agent_title = 'Spain - ' + agent_company;
                    agent_name = "Mr. Wenceslao González-Garra";
                    agent_addr1 = 'C/ La Forja 9';
                    agent_addr2 = 'Torrejón de Ardoz Madrid, Spain';
                    agent_addr3 = '';
                    agent_phone = "+34 91 151 02 50";
                    agent_mobile = "+34 618 465 771";
                    agent_fax = "";
                    agent_email = "wenceslao@cascoantiguo.com";
                    agent_website = "www.cascoantiguopro.com";
                    break;
                case "pt":
                    agent_company = 'Casco Antiguo Portugal';
                    agent_title = 'Portugal - ' + agent_company;
                    agent_name = "Mr. Joao Lima";
                    agent_addr1 = 'C/ Estrada Nacional 10 – KM 18';
                    agent_addr2 = 'Coina, Portugal';
                    agent_addr3 = '';
                    agent_phone = "+351 21 210 92 69";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "portugal@cascoantiguo.com";
                    agent_website = "http://cascoantiguo.pt";
                    break;
                case "fr":
                    agent_company = 'NEOTEK Groupe';
                    agent_title = 'France - ' + agent_company;
                    agent_name = "Mr. Didier Clec’h";
                    agent_addr1 = '25 rue Michel Marion';
                    agent_addr2 = '56850 Caudan France';
                    agent_addr3 = '';
                    agent_phone = "+33 (0)2 97 89 87 20";
                    agent_mobile = "";
                    agent_fax = "+33 (0)2 97 89 88 72";
                    agent_email = "didier.clech@neotek-web.com";
                    agent_website = "www.neotek-web.com";
                    break;
                case "gb":
                    agent_company = 'RS Aqua Ltd';
                    agent_title = 'United Kingdom - ' + agent_company;
                    agent_name = "Mr. Sam Forbes";
                    agent_addr1 = 'Units 4 -6, Hurst Barns, Privett';
                    agent_addr2 = 'Alton, Hampshire,';
                    agent_addr3 = 'United Kingdpm, GU34-3PL';
                    agent_phone = "+44 (0)1730 828222";
                    agent_mobile = "";
                    agent_fax = "+44 (0)1730 828128";
                    agent_email = "S.Forbes@rsaqua.co.uk";
                    agent_website = "www.rsaqua.co.uk";
                    break;
                case "nl":
                case "be":
                case "lu":
                    agent_company = 'Stema-Systema Systems';
                    agent_title = 'Netherlands - ' + agent_company;
                    agent_name = "Mr. Michael Malik";
                    agent_addr1 = 'P.O.Box 69 4190 CB Geldermalsen';
                    agent_addr2 = 'The Netherlands';
                    agent_addr3 = '';
                    agent_phone = "+31-345-580395";
                    agent_mobile = "";
                    agent_fax = "+31-345-570649";
                    agent_email = "Michael.malik@stema-systems.nl";
                    agent_website = "www.stema-systems.nl";
                    break;
                case "gr":
                    agent_company = 'Tree Company Corporation SA';
                    agent_title = 'Greece - ' + agent_company;
                    agent_name = "Mr. Thanassis Xiromeritis";
                    agent_addr1 = '27 Ayias Kyriakis Zip 17 564';
                    agent_addr2 = 'Paleo Faliro, Athens Greece';
                    agent_addr3 = '';
                    agent_phone = "+ 30 2109473600";
                    agent_mobile = "+ 30 2109473617";
                    agent_fax = "972-3-9440845";
                    agent_email = "thess@treecomp.gr";
                    agent_website = "www.treecomp.gr";
                    break;
                case "ro":
                    agent_company = 'TehnoINSTRUMENT IMPEX SRL';
                    agent_title = 'Romania - ' + agent_company;
                    agent_name = "Robertino Caravia";
                    agent_addr1 = 'Laboratorului nr. 31B,';
                    agent_addr2 = 'Ploiesti-100301';
                    agent_addr3 = 'RO';
                    agent_phone = "+40244 435250";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "office@tehnoinstrument.ro";
                    agent_website = "http://www.tehnoinstrument.ro";
                    break;
                case "dk":
                    agent_company = 'Herskind Consult';
                    agent_title = 'Romania - ' + agent_company;
                    agent_name = "Mr. Palle Herskind";
                    agent_addr1 = 'Katterhøjvej 24';
                    agent_addr2 = 'DK-8270 Højbjerg, Denmark';
                    agent_addr3 = '';
                    agent_phone = "+45 304 304 06";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "ph@herskindconsult.com";
                    agent_website = "www.herskindconsult.com";
                    break;
                case "cn":
                    agent_company = 'Pan-Comm';
                    agent_title = 'China - ' + agent_company;
                    agent_name = "Mr. Johnny Man";
                    agent_addr1 = 'Suite 701, Building 11';
                    agent_addr2 = '518 Xinshuan Highway';
                    agent_addr3 = 'Songjinag District, Shanghai 201612, China';
                    agent_phone = "+86-21-34060911";
                    agent_mobile = "+86 13788979565";
                    agent_fax = "";
                    agent_email = "jkfman@pan-comm.com";
                    agent_website = "http://www.pan-comm.com";
                    break;
                case "jp":
                    agent_company = 'S.E.A. Corporation';
                    agent_title = 'Japan - ' + agent_company;
                    agent_name = "Mr. Teruki Tanaka";
                    agent_addr1 = '3-16-3, Fujimi, Urayasu City';
                    agent_addr2 = 'Chiba Pref., Japan';
                    agent_addr3 = '';
                    agent_phone = "+81 47 350 1251";
                    agent_mobile = "";
                    agent_fax = "+81 47 350 1259";
                    agent_email = "teruki@seanet.co.jp";
                    agent_website = "www.seanet.co.jp";
                    break;
                case "kr":
                    agent_company = 'Tae Kwang Electronics Corporation';
                    agent_title = 'Korea - ' + agent_company;
                    agent_name = "Mr. Dong Kim";
                    agent_addr1 = '5th FLR., K-BLDG., 3, Sangam-ro 41-gil,';
                    agent_addr2 = 'Gangdong-gu, Seoul 05307, South Korea';
                    agent_addr3 = '';
                    agent_phone = "+82 (0)2 479 2703";
                    agent_mobile = "+82 (0)10 8960 2703";
                    agent_fax = "+82 (0)2 479 2705";
                    agent_email = "taekwang@nuri.net";
                    agent_website = "tkec.co.kr";
                    break;
                case "tw":
                    agent_company = 'Sino Instruments Co., Ltd';
                    agent_title = 'Taiwan - ' + agent_company;
                    agent_name = "Mr. Alan Chuang";
                    agent_addr1 = '1F, No. 14, Lane 181 JiuZong Rd,';
                    agent_addr2 = 'Section 2, Nei-Hu';
                    agent_addr3 = 'Taipei City, Taiwan';
                    agent_phone = "+886-2-2659-7131";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "sinoalan@ms1.hinet.net";
                    agent_website = "www.sinolan.com.tw";
                    break;
                case "au":
                    agent_company = 'Western Advance Group';
                    agent_title = 'Austrailia - ' + agent_company;
                    agent_name = "Mr. Cory  Brooks";
                    agent_addr1 = 'Unit 10, 199 Balcatta Rd Balcatta,';
                    agent_addr2 = 'Perth 6021 Australia';
                    agent_addr3 = '';
                    agent_phone = "+ 61 (0) 418 205 212";
                    agent_mobile = "+61 89240 4622";
                    agent_fax = "";
                    agent_email = "c.brooks@westernadvance.com";
                    agent_website = "www.westernadvance.com";
                    break;
                case "id":
                    agent_company = 'PT. Geotindo Mitra Kencana';
                    agent_title = 'Indonesia - ' + agent_company;
                    agent_name = "Hasan Mulachela";
                    agent_addr1 = 'GRAHA MITRA 1st Floor, Jl. Rempoa Raya No. 5B';
                    agent_addr2 = 'Jakarta Selatan (12330) - Indonesia';
                    agent_addr3 = '';
                    agent_phone = "+62-21-736 1571";
                    agent_mobile = "+6285218197685";
                    agent_fax = "+62-21-735 2978";
                    agent_email = "sales@geotindo.com";
                    agent_website = "http://www.geotindo.com";
                    break;
                case "vn":
                    agent_company = 'Phan Le Consultancy Technology & Equip. JSC';
                    agent_title = 'Vietnam - ' + agent_company;
                    agent_name = "Ms. Dinh Thi Chung Anh";
                    agent_addr1 = 'Room 1501, 17T4 Building';
                    agent_addr2 = 'Hoang Dao Thuy Street';
                    agent_addr3 = 'Xuan Dist, Hanoi, Viet Nam';
                    agent_phone = "+ 84-4-224 74 4455";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "chunganh@phanleco.com";
                    agent_website = "www.phanleco.com";
                    break;
                case "my":
                case "sg":
                case "ph":
                    agent_company = 'Ren Star Instrumentation';
                    agent_title = 'Malaysia - ' + agent_company;
                    agent_name = "Mr. Jew-Jin Lee";
                    agent_addr1 = 'No.58-1 Jalan SL 11/9 Bandar Sungai Long';
                    agent_addr2 = '43000 Kajang';
                    agent_addr3 = 'Selangor Malaysia';
                    agent_phone = "+603-9019 2630";
                    agent_mobile = "";
                    agent_fax = "+603-9019 5301";
                    agent_email = "yjlee@reefmapper.com";
                    agent_website = "www.renstarinst.com";
                    break;
                case "th":
                    agent_company = 'Multiproof Company Limited';
                    agent_title = 'Thailand - ' + agent_company;
                    agent_name = "Mr. Adithep Phinyakasem";
                    agent_addr1 = '47/102 Moo. 7 Saotonghin,';
                    agent_addr2 = 'Bangyal, Nonthauri  11141';
                    agent_addr3 = 'Bangkok, Thailand';
                    agent_phone = "+662-156-9922";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "thirawat.p@multiproof.com";
                    agent_website = "www.multiproof.com";
                    break;
                case "mx":
                    agent_company = 'Liderti Inc.';
                    agent_title = 'Mexico - ' + agent_company;
                    agent_name = "Mr. Carlos Cardenas";
                    agent_addr1 = 'Gabriel Mancera 516 Despacho 301';
                    agent_addr2 = 'Colonia Del Valle, Delegación Benito Juárez,';
                    agent_addr3 = 'CP 03100 México City';
                    agent_phone = "+(55) 5543-0968";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "ccardenas@lidertiinc.com";
                    agent_website = "www.lidertiinc.com";
                    break;
                case "pa":
                    agent_company = 'Casco Antiguo Panama';
                    agent_title = 'Panama - ' + agent_company;
                    agent_name = "Mr. Gabriel Ramos";
                    agent_addr1 = 'Avenida Ricardo J. Alfaro';
                    agent_addr2 = 'Edificio El Dorado Nº2. Local 1-B';
                    agent_addr3 = 'Ciudad de Panamá';
                    agent_phone = "(+507) 398 8039";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "infopanama@cascoantiguo.com";
                    agent_website = "www.cascoantiguopro.com";
                    break;
                case "co":
                    agent_company = 'Casco Antiguo Colombia';
                    agent_title = 'Columbia - ' + agent_company;
                    agent_name = "Mr. Zoila García";
                    agent_addr1 = 'C/ 42B Nº 12a - 61';
                    agent_addr2 = 'Bogotá - Colombia';
                    agent_addr3 = '';
                    agent_phone = "(+507) 398 8039";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "z.garcia@cascoantiguo.com";
                    agent_website = "www.cascoantiguopro.com";
                    break;
                case "br":
                    agent_company = 'Ambidados Consultoria em Meio Ambiente Ltda.';
                    agent_title = 'Brazil - ' + agent_company;
                    agent_name = "Mr. Leonardo Kuniyoshi";
                    agent_addr1 = 'Rua Paulo Emidio Barbosa,485';
                    agent_addr2 = 'Quadra 06, Modulo 08, Parque Tecnologico, UFRJ, Cidade Universitaria';
                    agent_addr3 = 'Rio de Janeiro/RJ – 21941-615';
                    agent_phone = "+55 21 3733-1762";
                    agent_mobile = "";
                    agent_fax = "+55 21 3733-1769";
                    agent_email = "rowerep@ambidados.com";
                    agent_website = "www.ambidados.com";
                    break;
                case "cl":
                case "pe":
                    agent_company = 'Casco Antiguo';
                    agent_title = 'Chile - ' + agent_company;
                    agent_name = "Mr. Gustavo Rival";
                    agent_addr1 = 'Bernardino 1057, módulo 1';
                    agent_addr2 = 'Puerto Montt, Chile';
                    agent_addr3 = '';
                    agent_phone = "(+56) 65 2 270961";
                    agent_mobile = "+56 9 97586470";
                    agent_fax = "";
                    agent_email = "g.rival@cascoantiguo.com";
                    agent_website = "www.cascoantiguopro.com";
                    break;
                case "bo":
                case "ec":
                case "gy":
                case "py":
                case "sr":
                case "uy":
                case "ve":
                    agent_company = 'MessenOcean';
                    agent_title = 'Bolivia - ' + agent_company;
                    agent_name = "Marcelo Rocha Toffoli";
                    agent_addr1 = 'Rua Hélio Marconi, nº 150,';
                    agent_addr2 = 'Bento Ferreira, Vitória - ES';
                    agent_addr3 = '';
                    agent_phone = "+55 270988981770";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "marcelo@messenocean.com";
                    agent_website = "www.messenocean.com";
                    break;
                case "ar":
                    agent_company = 'Duolink';
                    agent_title = 'Argentina - ' + agent_company;
                    agent_name = "Mr. Diego Sayago";
                    agent_addr1 = 'Uruguay 1037 - CABA - Argentina';
                    agent_addr2 = '';
                    agent_addr3 = '';
                    agent_phone = "(011) 6009-2043";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "diego.sayago@duolink.com.ar";
                    agent_website = "www.duolink.com.ar";
                    break;
                case "in":
                case "lk":
                    agent_company = 'Deekay Marine Services PVT, LTD';
                    agent_title = 'India - ' + agent_company;
                    agent_name = "Mr. Kamal Singh";
                    agent_addr1 = '101, Sai Pooja, JB Nagar';
                    agent_addr2 = 'Andheri (E.), Mumbai-400 059';
                    agent_addr3 = '';
                    agent_phone = "+91 22 2838 7874";
                    agent_mobile = "";
                    agent_fax = "+91 22 2838 9659";
                    agent_email = "sales@deekaymarine.com";
                    agent_website = "www.deekaymarine.com";
                    break;
                case "bd":
                    agent_company = 'M/S Asha Enterprise';
                    agent_title = 'Bangladesh - ' + agent_company;
                    agent_name = "Engr. Md. Miraz Uddin Hyder";
                    agent_addr1 = '440 Shaheen Bagh';
                    agent_addr2 = 'Tejgaon, Dhaka.1215';
                    agent_addr3 = 'Bangladesh';
                    agent_phone = "880-2-58151593 || 880-2-9125994";
                    agent_mobile = "8801670021012";
                    agent_fax = "+91 22 2838 9659";
                    agent_email = "mirazuhyder@gmail.com";
                    agent_website = "http://asha-enterprise.com";
                    break;
                case "pk":
                    agent_company = 'Public Survey Systems';
                    agent_title = 'Pakistan - ' + agent_company;
                    agent_name = "A. Syed, CEO";
                    agent_addr1 = '160 Anarkali, Lahore';
                    agent_addr2 = 'Pakistan';
                    agent_addr3 = '';
                    agent_phone = "+92-42-37236923";
                    agent_mobile = "+92-300-8497427";
                    agent_fax = "";
                    agent_email = "ine@brain.net.pk";
                    agent_website = "";
                    break;
                case "ae":
                case "iq":
                case "sa":
                case "om":
                case "qa":
                case "bh":
                    agent_company = 'Tridel Maritime Services LLC';
                    agent_title = 'UAE - ' + agent_company;
                    agent_name = "Bipin Kumar Srivastava";
                    agent_addr1 = 'Office # 405C, Al Montazah Tower,';
                    agent_addr2 = 'AAl Khaldiya,Zayed the First Street,';
                    agent_addr3 = 'Abu Dhabi, United Arab Emirates';
                    agent_phone = "+971 2449 9794";
                    agent_mobile = "+971561367766";
                    agent_fax = "+97143483650";
                    agent_email = "bipin@trideltechnologies.com";
                    agent_website = "www.trideltechnologies.com";
                    break;
                case "il":
                    agent_company = 'A. O. Ezra Electronics 2002 Ltd.';
                    agent_title = 'Israel - ' + agent_company;
                    agent_name = "Mr. Oren Abraham";
                    agent_addr1 = '19,Saharov David St.';
                    agent_addr2 = 'P.O.Box 3262';
                    agent_addr3 = 'Holon 5813201, Israel';
                    agent_phone = "+972-3-9440844 || +972-54-2299662/772";
                    agent_mobile = "+972-54-2299662/772";
                    agent_fax = "+972-3-9440845";
                    agent_email = "aoeab@bezeqint.net";
                    agent_website = "www.aoe.co.il";
                    break;
                case "il":
                    agent_company = 'SMD Telecommunications (Pty) Ltd';
                    agent_title = 'South Africa - ' + agent_company;
                    agent_name = "Niamatullah Cassiem";
                    agent_addr1 = '53 Paardeneiland Rd';
                    agent_addr2 = 'Paarden Eiland 7405';
                    agent_addr3 = 'Cape Town, South Africa';
                    agent_phone = "+27-21-511-0556";
                    agent_mobile = "+27 (0)83 652 6818";
                    agent_fax = "+27-21-511-2886";
                    agent_email = "Niamatullah.Cassiem@smd-marine.com";
                    agent_website = "www.smd-marine.com";
                    break;
                default:
                    // Rowe Technologies is Default
                    agent_company = 'Rowe Technologies Inc';
                    agent_title = 'USA - ' + agent_company;
                    agent_name = "Rico Castelo";
                    agent_addr1 = '11265 Danielson Ct, Suite 306';
                    agent_addr2 = 'Poway, CA, 92064';
                    agent_addr3 = 'USA';
                    agent_phone = "+1 858.842.3020";
                    agent_mobile = "+1 858.361.8504"
                    agent_fax = "+1 858.842.3021";
                    agent_email = "sales@rowetechinc.com";
                    agent_website = "http://www.rowetechinc.com";
                    break;
            }
            // Display the Modal Dialog of Agent Information
            $('#agentModal').on('show.bs.modal', function (event) {
                var modal = $(this);
                modal.find('.modal-title').text(agent_title)
                modal.find('.agent_name').text(agent_name);
                modal.find('.agent_company').text(agent_company);
                modal.find('.agent_addr1').text(agent_addr1);
                modal.find('.agent_addr2').text(agent_addr2);
                modal.find('.agent_addr3').text(agent_addr3);
                modal.find('.agent_phone').text(agent_phone);
                modal.find('.agent_mobile').text(agent_mobile);
                modal.find('.agent_fax').text(agent_fax);
                modal.find('.agent_email').text(agent_email);
                modal.find('.agent_email').attr("href", "mailto:" + agent_email);
                modal.find('.agent_website').text(agent_website);
                modal.find('.agent_website').attr("href", agent_website);
            });
            $('#agentModal').modal('show');
        }
    });
});