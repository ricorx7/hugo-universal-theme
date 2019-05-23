jQuery(document).ready(function () {
    jQuery('#vmap_usa').vectorMap({
        map: 'usa_en',
        backgroundColor: null,
        borderColor: '#333333',
        borderOpacity: 0.05,
        borderWidth: 1,
        color: '#40739e',
        enableZoom: false,
        showTooltip: true,
        selectedColor: null,
        hoverColor: null,
        colors: {
            ms: '#2980b9',
            tx: '#2980b9',
            la: '#2980b9',
            al: '#27ae60',
            fl: '#27ae60',
            ga: '#27ae60',
            wa: '#8e44ad',
            or: '#8e44ad',
            ak: '#8e44ad',
            nj: '#00aabd',
            pa: '#00aabd',
            ny: '#00aabd',
            ct: '#00aabd',
            ma: '#00aabd',
            vt: '#00aabd',
            nh: '#00aabd',
            me: '#00aabd',
            ri: '#00aabd',
            de: '#AA5510',
            md: '#AA5510',
            nc: '#AA5510',
            sc: '#AA5510',
            va: '#AA5510',
            dc: '#AA5510',
        },
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
            switch (code) {
                case "de":
                case "md":
                case "nc":
                case "sc":
                case "va":
                case "dc":
                    agent_company = 'KRK Consultants, Ltd.';
                    agent_title = 'US Mid Atlantic - ' + agent_company;
                    agent_name = "Mr. Ray Mahr Jr";
                    agent_addr1 = '17476 Slipper Shell Way, Suite 6';
                    agent_addr2 = 'Lewes, DE . 19958';
                    agent_addr3 = '';
                    agent_phone = "302-330-7063";
                    agent_mobile = "302-569-0019";
                    agent_fax = "";
                    agent_email = "rmahrjr@gmail.com";
                    agent_website = "http://www.krkconsultantsltd.com";
                    break;
                case "nj":
                case "pa":
                case "ny":
                case "ct":
                case "ma":
                case "vt":
                case "nh":
                case "me":
                case "ri":
                    agent_company = 'Electronic Sales of New England';
                    agent_title = 'US Northeast - BC Canada - ' + agent_company;
                    agent_name = "Mr. Mark Warren";
                    agent_addr1 = '33 Main St., Unit E';
                    agent_addr2 = 'Old Saybrook, CT 06475 USA';
                    agent_addr3 = '';
                    agent_phone = "+1 860 388 1196";
                    agent_mobile = "+1 860 884 8870";
                    agent_fax = "+1 860 388 1232";
                    agent_email = "sales@esalesne.com";
                    agent_website = "http://www.esalesne.com";
                    break;
                case "wa":
                case "or":
                case "ak":
                    agent_company = 'Subsea 20/20, Inc.';
                    agent_title = 'US Northwest - BC Canada - ' + agent_company;
                    agent_name = "Mr. Eric Munday";
                    agent_addr1 = '2503 4th Ave.';
                    agent_addr2 = 'N. Seattle, WA 98109 USA/BC Canada';
                    agent_addr3 = '';
                    agent_phone = "+1 206 963 6369";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "eric@subsea2020.com";
                    agent_website = "http://www.subsea2020.com";
                    break;
                case "ms":
                case "tx":
                case "la":
                    agent_company = 'Richards & Associates, Inc.';
                    agent_title = 'US Gulf Coast - ' + agent_company;
                    agent_name = "Mr. Chuck Richards C.A.";
                    agent_addr1 = '10801 Hammerly Blvd., Suite 202';
                    agent_addr2 = 'Houston, TX 77043';
                    agent_addr3 = '';
                    agent_phone = "+1 281 531 7417";
                    agent_mobile = "";
                    agent_fax = "+1 281 531 7456";
                    agent_email = "chuck@carichards.com";
                    agent_website = "http://www.carichards.com";
                    break;
                case "al":
                case "fl":
                case "ga":
                    agent_company = 'Higgs Hydrographic Tek LLC';
                    agent_title = 'US Southeast - ' + agent_company;
                    agent_name = "Mr. Michael Higgs";
                    agent_addr1 = '10415 La Mirage Ct';
                    agent_addr2 = 'Tampa Fl 33615 USA';
                    agent_addr3 = '';
                    agent_phone = "+1 813 230 0069";
                    agent_mobile = "";
                    agent_fax = "";
                    agent_email = "Michael.higgs@higgshydrographictek.com";
                    agent_website = "http://www.higgshydrographictek.com";
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
                    agent_mobile = "+1 858.361.8504";
                    agent_fax = "+1 858.842.3021";
                    agent_email = "sales@rowetechinc.com";
                    agent_website = "http://www.rowetechinc.com";
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
                modal.find('.agent_website').attr("target", "_blank");
            });
            $('#agentModal').modal('show');
        }
    });
});