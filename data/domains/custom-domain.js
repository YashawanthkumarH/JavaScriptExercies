module.exports = {
    verifyOwnership: {
        'ownershipDesc': "Once ownership is verified, Pantheon will provision HTTPS for your domain. HTTPS needs to be provisioned before DNS propagation.",
        'dnsTXTDesc': "We detected __DNS-Host__ as the DNS provider for this domain. Login to your __DNS-Host__ and add the following records.",
        'siteDirectoryDesc': "Use your site’s directory to upload the validation file and access with the provided URL. The file must be accessible in both HTTP and HTTPS.",
        'skipOwnershipDialogTitle': 'Skip domain ownership verification',
        'skipOwnershipDialogDescription': 'Skipping this step will result in an incomplete domain setup. Do you want to continue skipping ownership verification?',
        'skipOwnershipText': 'Are you sure you want to skip without HTTPS?',
        'skipOwnershipDialogTitleCMS': "Skip without HTTPS",
        'skipOwnershipDialogDescriptionCMS': "Skipping means visitors will get a browser warning until Pantheon automatically provisions HTTPS, which will take some time after going live.",
        'verifyOwnershipText': "To go live with HTTPS, Pantheon needs proof that you own this domain.",
        'dnsTextRecordDesc': "Log in to your DNS host and update your DNS configuration with the provided name and value.",
        'domainVerificationSectionText': "After adding the DNS TXT record, verify ownership to add HTTPS.",
        'dnsrecordNotFoundDesc': "DNS record not found.Ensure the DNS record from Step 2 has been configured correctly, and try again. If you continue to have issues, contact support."

    },
    addCustDomain: {
        'addCusDmnDsc': 'This domain will be assigned to the production deployments for your site "Wordpress_edrt". Domains like "www.example.com" and bare domains like "example.com" must be added separately.'
    },
    domainDetails: {
        'HTTPCertDsc': "Pantheon will notify you when HTTPS is provisioned. Once HTTPS is provisioned, you’ll be able to update DNS records without HTTPS interruption.",
        'HTTPCertAlertConneced': "Let's Encrypt certificate deployed to Pantheon's Global CDN.",
        'HTTPCertAlertHttpProvisining': "Pantheon is provisioning Let's Encrypt certificate for this domain.",
        'HTTPCertAlertSetupRequired': "Domain ownership check is required.",
        'DNSConfigDsc': "We detected Example Provider as the DNS provider for this domain.",
        'DNSConfigAlertDNSPropogating': "Correct DNS records detected, waiting for DNS to propagate. It can take up to 72 hours for changes to propagate through the internet.",
        'DNSConfigAlertConnected': "DNS pointing successfully at Pantheon’s Global CDN.",
        'DNSConfigAlertHTTPSProvisioning': "DNS Records will be provided once HTTPS certificate is provisioned.",
        'DNSConfigAlertSetupRequired': 'DNS Records will be provided once HTTPS certificate is provisioned.',
        'DNSConfigAlertDNSPropagating': "Correct DNS records detected, waiting for DNS to propagate. It can take up to 72 hours for changes to propagate through the internet.",
        'DNSConfigAlertUpdateDNS': 'Point "__domainName__" at Pantheon’s Global CDN. Login to your DNS provider and update your DNS configuration to match the values provided.',
        'DNSConfigSectionColumns': ['TYPE', 'DETECTED VALUE', 'REQUIRED VALUE', 'STATUS'],
        'DNSDetails': [{
            type: 'A',
            //detected_value: '23.185.0.1',
            status: 'Correct Value Detected'
          },
          {
            type: 'AAA',
            //detected_value: '2620:12a:8000::1',
            status: 'Correct Value Detected'
          },
          {
            type: 'AAA',
            //detected_value: '2620:12a:8000::1',
            status: 'Correct Value Detected'
          }
        ],
        'DNSDetailsUpdateDNS': [{
            type: 'A',
            status: 'Add this required record'
          },
          {
            type: 'AAA',
            status: 'Add this required record'
          },
          {
            type: 'AAA',
            status: 'Add this required record'
          }
        ],
        'dnsAlertText': 'Pantheon is not a domain registrar, and we do not offer DNS management as a service. Before pointing traffic to Pantheon, you must purchase a domain from a 3rd-party domain registrar.'
    },
    domains: {
        domainStatus: {
            'dnsPropogating': 'DNS Propagating',
            'connected': 'Connected',
            'httpsProvisioning': 'HTTPS Provisioning',
            'setupRequired': 'Setup Required',
            'updateDNS': 'Update DNS'
        },
        domainNames: {
            'dnsPropogating': "example2-dns-propagating.com",
            'conected': "example.com",
            'httpsProvisioning': "example4-https-provisioning.com",
            'setupRequired': "example5-https-setup.com",
            'updateDNS': "example3-dns-setup.com",
            'primaryDomain': "example.com",
            'nonPrimaryDomain': 'example2-dns-propagating.com',
            'invalidDomain': 'invalid#$%.!com',
            'domainList': ['example2-dns-propagating.com', 'example3-dns-setup.com', 'example4-https-provisioning.com', 'example5-https-setup.com', 'example.com']
        },
        domainSection: {
            'domainText': 'Your site is always accessible with a Pantheon platform domain, based on your site’s name. You can also add custom domains to point to this site.',
            'domainTableHeaders': ['DOMAIN NAME', 'SOURCE', 'STATUS', 'MORE ACTIONS']
        },
        domainDetails:{
            "example2-dns-propagating.com":'DNS Propagating',
            "example3-dns-setup.com": 'Update DNS',
            "example4-https-provisioning.com":'HTTPS Provisioning', 
            "example5-https-setup.com":'Setup Required',
            "example.com":'Connected'
        },

        primaryDomain: {
            "setPrimaryDomainDialogText" : 'With a Primary Domain set at the platform level, all other domains (except the Platform Domain) will be pointed to your Primary Domain at the root level. Continue setting "__domainName__" as Primary Domain?',
            "primaryDialogCheckboxLabel": 'Yes, set "__domainName__" as Primary Domain.',
            "removePrimaryDomainDialogText" : 'Removing Primary Domain will no longer point all other custom domains to this domain at the root level. Continue removing "__domainName__" as Primary Domain?',
            "removePrimaryDialogCheckboxLabel": 'Yes, remove "__domainName__" as Primary Domain.',
            "removeDomainDialogText": 'This action cannot be undone. Pantheon will no longer respond to requests for',
            "removeDomainConfirmarionText": 'Type "__domainName__" to proceed with removal.'
        },
        routes: {
            link: {
            "Sites": '/site',
            "Settings": '/site/__siteID__/settings',
            "Domains": '/site/__siteID__/settings/domains'
            },
            "routeTexts":['Sites', 'Settings', 'Domains']
        }
        
    },
    connectionSummary: {
        'connectionSummaryTitle': "Congratulations, your HTTPS certificate is queued for ",
        'connectionSummaryDesc': "Domain ownership verification is completed! Pantheon is provisioning the HTTPS certificate. This process could take up to an hour.",
        'domainName': "www.abc.com"
    },
    removeDomain: {
        validationMessage: {
            "fieldIsRequired": "This field is required.",
            "domainNameNotMatch": "The domain name does not match."
        }
    }
};