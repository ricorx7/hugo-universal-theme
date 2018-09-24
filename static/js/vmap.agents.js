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
            var agent_phone = "858.842.3020";
            var agent_fax = "858.842.3021";
            var agent_website = "http://www.rowetechinc.com";
            var agent_email = "sales@rowetechinc.com";
            switch (code) 
            {
                case "us":
                    window.location = "/agents_usa";
                    break;
                case "br":
                    agent_company = 'Brazillian Company 1';
                    agent_title = 'Brazil - ' + agent_company;
                    agent_name = "Bob Joe";
                    agent_addr1 = '1124 San Diego\n CA';
                    agent_addr2 = '1124 San Diego\n CA';
                    agent_addr3 = '1124 San Diego\n CA';
                    agent_phone = "858.842.3020";
                    agent_fax = "858.842.30202222";
                    agent_email = "sales@rowetechinc.com";
                    agent_website = "http:///www.test.com";
                    break;
                default:
                    // Rowe Technologies is Default
                    agent_company = 'Rowe Technologies Inc';
                    agent_title = 'USA - ' + agent_company;
                    agent_name = "Rico Castelo";
                    agent_addr1 = '11265 Danielson Ct, Suite 306';
                    agent_addr2 = 'Poway, CA, 92064';
                    agent_addr3 = 'USA';
                    agent_phone = "858.842.30201111";
                    agent_fax = "858.842.3021";
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