jQuery(document).ready(function () {
    jQuery('#vmap_canada').vectorMap({
        map: 'canada_en',
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
            bc: '#8e44ad',
        },
        onRegionClick: function (event, code, region) {
            var agent_company = 'ROMOR Ocean Solutions';
            var agent_title = 'Canada - ' + agent_company;
            var agent_name = "Mr. Darrin Verge";
            var agent_addr1 = '41 Martha Avenue, Mount Uniacke';
            var agent_addr2 = 'Nova Scotia, B0N 1Z0';
            var agent_addr3 = 'Canada';
            var agent_phone = "1-902- 466-7000";
            var agent_mobile = "1-902-456-3406";
            var agent_fax = "";
            var agent_website = "www.romor.ca";
            var agent_email = "dverge@romor.ca";
            switch (code) {
                case "bc":
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
                    agent_website = "www.subsea2020.com";
                    break;
                default:
                    // ROMOR is Default for Canada
                    agent_company = 'ROMOR Ocean Solutions';
                    agent_title = 'Canada - ' + agent_company;
                    agent_name = "Mr. Darrin Verge";
                    agent_addr1 = '41 Martha Avenue, Mount Uniacke';
                    agent_addr2 = 'Nova Scotia, B0N 1Z0';
                    agent_addr3 = 'Canada';
                    agent_phone = "1-902- 466-7000";
                    agent_mobile = "1-902-456-3406";
                    agent_fax = "";
                    agent_email = "dverge@romor.ca";
                    agent_website = "www.romor.ca";
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