const term = require('carbon-web/utils/terminus/terminus.util');
const { test } = require('@playwright/test');
const { setup, teardown } = require('carbon-web/config/envConfig/envSetup');

const Login = require('carbon-web/pages/login.page');
const CreateSite = require('carbon-web/pages/create-site.page');
const Home = require('carbon-web/pages/home.page');
const Workspace = require('carbon-web/pages/workspace.page');
const SiteCMS = require('carbon-web/pages/sites-cms.page');

const login = new Login();
const createSite = new CreateSite();
const home = new Home();
const wp = new Workspace();
const siteCMS = new SiteCMS();

const testConfig = require('../data/config.json')[testEnv];

const siteName = 'prof-ws-init-test' + Date.now();

test.describe("Verify that user is able to create new site from Professional WS and initalize to Test and live environment", async function () {

    test.beforeAll("Login to the Pantheon dashboard", async function () {
        await setup();
        await login.loginPage.login('create-site');
        expect(await login.loginPage.isLoggedIn(),
            "Not able to login to pantheon dashboard").to.be.true;
    });

    test.afterAll("Login to the Pantheon dashboard", async function ({ }) {
        await login.loginPage.logout();
        expect(await login.loginPage.loginIsDisplayed(),
            "loginPage not displayed").to.be.true;
        term.terminusCommand(`terminus site:delete ${siteName} --yes`);
        await teardown();
    });

    test('USERMGMT-2134 : Verify that customer is able to see recently visited site from Professional WS -> Home tab', async function ({ }, testInfo) {
        testInfo.annotations.push({ type: 'test_key', description: 'USERMGMT-2134'});
        let workspace = testConfig['silver']['workspaceName'];
        await test.step("Given: Navigate to Sites screen", async function () {
            await login.loginPage.navigateToDashboard();
            expect(await login.loginPage.isLoggedIn(),
                "Not navigated to personal workspace home page").to.be.true;
            await home.home.gotoWorkspace(workspace);
            expect(await home.home.isNavigatedToWS(workspace), "Not navigated to correct workspace").to.be.true;
            await home.home.gotoLeftMenu('Sites');
            expect(await wp.sites.isNavigatedToSitesPage(), "Not navigated to Sites page").to.be.true;
        });

        await test.step("And: Create a New Site ", async function () {
            await siteCMS.site.createNewSiteProfWS();
            expect(await createSite.create.isCMSSelectOptionsDisplayed(), "Create a CMS Site page is not displayed").to.be.true;
            await createSite.create.selectCMSType('WordPress');
            expect(await createSite.create.createPantheonSiteIsDisplayed(), "Create Your Pantheon Site page is not displayed").to.be.true;
        });

        await test.step("Then: Deploy the wordpress website", async function () {
            await createSite.create.nameYourSite(siteName);
            await createSite.create.closeCookie();
            await createSite.create.selectOrganization(workspace);
            await createSite.create.region('European Union');
            await createSite.create.clickContinue();
            await createSite.create.confirmOrganizationSelection();
        });

        await test.step("And: Setup the WordPress site and visit site dashboard after verifying workflow is completed", async function () {
            expect(await createSite.deployWordpress.deployingWordpressIsDisplayed(),"Deploying Wordpress is not displayed").to.be.true;
            expect(await createSite.deployWordpress.wordpressIsDeployedIsDisplayed(),"Wordpress is deployed message is not displayed").to.be.true;
            await createSite.deployWordpress.visitSiteDashBoard();
        });

        await test.step("And: Verify recntly visisted site is matching with created site", async function () {
            await home.home.getHomePageURL();
            expect(await home.home.getRecentlyVisitedSiteText(),"Check site names are matching or not").to.be.equal(siteName);
        });
    });

    test('USERMGMT-2142 : Verify that customer is able to see error message when customer is creating site with Invalid site names from Professional WS -> Home tab', async function ({ }, testInfo) {
        testInfo.annotations.push({ type: 'test_key', description: 'USERMGMT-2134'});
        let workspace = testConfig['silver']['workspaceName'];
        await test.step("Given: Navigate to Sites screen", async function () {
            await login.loginPage.navigateToDashboard();
            expect(await login.loginPage.isLoggedIn(),
                "Not navigated to personal workspace home page").to.be.true;
            await home.home.gotoWorkspace(workspace);
            expect(await home.home.isNavigatedToWS(workspace), "Not navigated to correct workspace").to.be.true;
            await home.home.gotoLeftMenu('Sites');
            expect(await wp.sites.isNavigatedToSitesPage(), "Not navigated to Sites page").to.be.true;
        });

        await test.step("And: Create a New Site ", async function () {
            await siteCMS.site.createNewSiteProfWS();
            expect(await createSite.create.isCMSSelectOptionsDisplayed(), "Create a CMS Site page is not displayed").to.be.true;
            await createSite.create.selectCMSType('WordPress');
            expect(await createSite.create.createPantheonSiteIsDisplayed(), "Create Your Pantheon Site page is not displayed").to.be.true;
        });

        await test.step("Then: Deploy the wordpress website", async function () {
            await createSite.create.nameYourSite("-1");
            await createSite.create.closeCookie();
            await createSite.create.selectOrganization(workspace);
            await createSite.create.region('European Union');
            await createSite.create.clickContinue();
            await createSite.create.confirmOrganizationSelection();
            expect(await createSite.create.getInavlidSiteErrorMessage(),"Error message not displayed").to.be.equal("The site name can only contain a-z, A-Z, 0-9, and dashes ('-'), cannot begin or end with a dash");
        });
    });
});