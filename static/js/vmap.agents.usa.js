
  jQuery(document).ready(function () {
    jQuery('#vmap_usa').vectorMap({
        map: 'usa_en',
        backgroundColor: null,
        color: '#ffffff',
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
        },
      onRegionClick: function (event, code, region) {
        switch (code) {
            case "co":
            $('#agentModal').on('show.bs.modal', function (event) {
              var agent_company = 'Brazillian Company 1';
              var agent_title = 'Brazil - ' + agent_company;
              var agent_name = "Bob Joe";
              var agent_addr1 = '1124 San Diego\n CA';
              var agent_addr2 = '1124 San Diego\n CA';
              var agent_addr3 = '1124 San Diego\n CA';
              var agent_phone = "858.842.3020";
              var agent_fax = "858.842.3020";
              var agent_email = "sales@rowetechinc.com"
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
              modal.find('.agent_email').attr("href", "mailto:"+agent_email);
            });
            break;
            default:
            // Rowe Technologies is Default
            $('#agentModal').on('show.bs.modal', function (event) {
              var agent_company = 'Rowe Technologies Inc';
              var agent_title = 'USA - ' + agent_company;
              var agent_name = "Rico Castelo";
              var agent_addr1 = '11265 Danielson Ct, Suite 306';
              var agent_addr2 = 'Poway, CA, 92064';
              var agent_addr3 = 'USA';
              var agent_phone = "858.842.3020";
              var agent_fax = "858.842.3021"
              var agent_email = "sales@rowetechinc.com"
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
              modal.find('.agent_email').attr("href", "mailto:"+agent_email);
            });
            break;
        }
        // Display the Modal Dialog of Agent Information
        $('#agentModal').modal('show');
      }
    });
  });
