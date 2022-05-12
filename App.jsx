
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import VoucherToolV3RAP from "./components/VoucherToolV3RAP";
import ResourceMatching from "./components/ResourceMatching";
import HomePageV3 from "./components/HomePageV3";
import VoucherToolV3DownloadInfo from "./components/VoucherToolV3DownloadInfo";
import VoucherToolV3NextSteps from "./components/VoucherToolV3NextSteps";
import FindAHome from "./components/FindAHome";
import VoucherToolV3DownloadInfo2 from "./components/VoucherToolV3DownloadInfo2";
import ResourcesV3 from "./components/ResourcesV3";
import VoucherToolV3RAPCCSB from "./components/VoucherToolV3RAPCCSB";
import VoucherToolV3RAPSG from "./components/VoucherToolV3RAPSG";
import VoucherToolV3StartingScreen from "./components/VoucherToolV3StartingScreen";
import VoucherToolV3RAPYMCA from "./components/VoucherToolV3RAPYMCA";
import VoucherToolV3RAPMSC from "./components/VoucherToolV3RAPMSC";
import VoucherToolV3RAPCCS from "./components/VoucherToolV3RAPCCS";
import VoucherToolV3RequiredPaperwork from "./components/VoucherToolV3RequiredPaperwork";
import VoucherToolV3RequiredPaperworkPOI from "./components/VoucherToolV3RequiredPaperworkPOI";
import VoucherToolV3RequiredPaperworkDOB from "./components/VoucherToolV3RequiredPaperworkDOB";
import VoucherToolV3TutorialBackButton from "./components/VoucherToolV3TutorialBackButton";
import VoucherToolV3Disqualifications from "./components/VoucherToolV3Disqualifications";
import VoucherToolV3RequiredPaperworkSSN from "./components/VoucherToolV3RequiredPaperworkSSN";
import VoucherToolV3DisqualificationsNotic from "./components/VoucherToolV3DisqualificationsNotic";
import VoucherToolV3EligibilityQuestions from "./components/VoucherToolV3EligibilityQuestions";
import VoucherToolV3Eligibility7 from "./components/VoucherToolV3Eligibility7";
import VoucherToolV3RequiredPaperworkOC from "./components/VoucherToolV3RequiredPaperworkOC";
import VoucherToolV3DisqualificationsCheck from "./components/VoucherToolV3DisqualificationsCheck";
import VoucherToolV3Disqualifications1 from "./components/VoucherToolV3Disqualifications1";
import VoucherToolV3Disqualifications2 from "./components/VoucherToolV3Disqualifications2";
import VoucherToolV3Disqualifications3 from "./components/VoucherToolV3Disqualifications3";
import VoucherToolV3Disqualifications4 from "./components/VoucherToolV3Disqualifications4";
import VoucherToolV3Disclaimers from "./components/VoucherToolV3Disclaimers";
import VoucherToolV3Eligibility2 from "./components/VoucherToolV3Eligibility2";
import VoucherToolV3DisqualificationsNotic2 from "./components/VoucherToolV3DisqualificationsNotic2";
import VoucherToolV3TutorialNextButton from "./components/VoucherToolV3TutorialNextButton";
import VoucherToolV3Eligibility1 from "./components/VoucherToolV3Eligibility1";
import VoucherToolV3Eligibility6 from "./components/VoucherToolV3Eligibility6";
import VoucherToolV3Eligibility5 from "./components/VoucherToolV3Eligibility5";
import VoucherToolV3Eligibility4 from "./components/VoucherToolV3Eligibility4";
import VoucherToolV3Eligibility3 from "./components/VoucherToolV3Eligibility3";
import VoucherToolV3TutorialAudioButton from "./components/VoucherToolV3TutorialAudioButton";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/landing-page">
            <LandingPage {...landingPageData} />
          </Route>
          <Route path="/voucher-tool-v3-rap">
            <VoucherToolV3RAP {...voucherToolV3RAPData} />
          </Route>
          <Route path="/resource-matching">
            <ResourceMatching {...resourceMatchingData} />
          </Route>
          <Route path="/:path(|home-page-v3)">
            <HomePageV3 {...homePageV3Data} />
          </Route>
          <Route path="/voucher-tool-v3-download-info-1">
            <VoucherToolV3DownloadInfo {...voucherToolV3DownloadInfoData} />
          </Route>
          <Route path="/voucher-tool-v3-next-steps">
            <VoucherToolV3NextSteps {...voucherToolV3NextStepsData} />
          </Route>
          <Route path="/find-a-home">
            <FindAHome {...findAHomeData} />
          </Route>
          <Route path="/voucher-tool-v3-download-info">
            <VoucherToolV3DownloadInfo2
              voucherTool="Voucher Tool"
              getSummaryViaTextOrEmail="Get summary via text or email"
              downloadPdfOfSummary="Download PDF of summary"
              logoProps={voucherToolV3DownloadInfo2Data.logoProps}
              homePageLinkProps={voucherToolV3DownloadInfo2Data.homePageLinkProps}
              moreResourcesProps={voucherToolV3DownloadInfo2Data.moreResourcesProps}
              textInfo2Props={voucherToolV3DownloadInfo2Data.textInfo2Props}
            />
          </Route>
          <Route path="/resources-v3">
            <ResourcesV3 {...resourcesV3Data} />
          </Route>
          <Route path="/voucher-tool-v3-rap-ccsb">
            <VoucherToolV3RAPCCSB {...voucherToolV3RAPCCSBData} />
          </Route>
          <Route path="/voucher-tool-v3-rap-sg">
            <VoucherToolV3RAPSG {...voucherToolV3RAPSGData} />
          </Route>
          <Route path="/voucher-tool-v3-starting-screen">
            <VoucherToolV3StartingScreen
              voucherTool="Voucher Tool"
              logoProps={voucherToolV3StartingScreenData.logoProps}
              homePageLinkProps={voucherToolV3StartingScreenData.homePageLinkProps}
              moreResourcesProps={voucherToolV3StartingScreenData.moreResourcesProps}
              property1WelcomeProps={voucherToolV3StartingScreenData.property1WelcomeProps}
              property1BackToHomeProps={voucherToolV3StartingScreenData.property1BackToHomeProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-rap-ymca">
            <VoucherToolV3RAPYMCA {...voucherToolV3RAPYMCAData} />
          </Route>
          <Route path="/voucher-tool-v3-rap-msc">
            <VoucherToolV3RAPMSC {...voucherToolV3RAPMSCData} />
          </Route>
          <Route path="/voucher-tool-v3-rap-ccs">
            <VoucherToolV3RAPCCS {...voucherToolV3RAPCCSData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork">
            <VoucherToolV3RequiredPaperwork {...voucherToolV3RequiredPaperworkData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-poi">
            <VoucherToolV3RequiredPaperworkPOI {...voucherToolV3RequiredPaperworkPOIData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-dob">
            <VoucherToolV3RequiredPaperworkDOB {...voucherToolV3RequiredPaperworkDOBData} />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-back-button">
            <VoucherToolV3TutorialBackButton
              voucherTool="Voucher Tool"
              logoProps={voucherToolV3TutorialBackButtonData.logoProps}
              homePageLinkProps={voucherToolV3TutorialBackButtonData.homePageLinkProps}
              moreResourcesProps={voucherToolV3TutorialBackButtonData.moreResourcesProps}
              tipTypeBackButtonProps={voucherToolV3TutorialBackButtonData.tipTypeBackButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications">
            <VoucherToolV3Disqualifications {...voucherToolV3DisqualificationsData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-ssn">
            <VoucherToolV3RequiredPaperworkSSN {...voucherToolV3RequiredPaperworkSSNData} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-notice-page-1">
            <VoucherToolV3DisqualificationsNotic
              voucherTool="Voucher Tool"
              logoProps={voucherToolV3DisqualificationsNoticData.logoProps}
              homePageLinkProps={voucherToolV3DisqualificationsNoticData.homePageLinkProps}
              moreResourcesProps={voucherToolV3DisqualificationsNoticData.moreResourcesProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-questions">
            <VoucherToolV3EligibilityQuestions {...voucherToolV3EligibilityQuestionsData} />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-7">
            <VoucherToolV3Eligibility7 {...voucherToolV3Eligibility7Data} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-oc">
            <VoucherToolV3RequiredPaperworkOC {...voucherToolV3RequiredPaperworkOCData} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-checked">
            <VoucherToolV3DisqualificationsCheck {...voucherToolV3DisqualificationsCheckData} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-1">
            <VoucherToolV3Disqualifications1 {...voucherToolV3Disqualifications1Data} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-2">
            <VoucherToolV3Disqualifications2 {...voucherToolV3Disqualifications2Data} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-3">
            <VoucherToolV3Disqualifications3 {...voucherToolV3Disqualifications3Data} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-4">
            <VoucherToolV3Disqualifications4 {...voucherToolV3Disqualifications4Data} />
          </Route>
          <Route path="/voucher-tool-v3-disclaimers">
            <VoucherToolV3Disclaimers {...voucherToolV3DisclaimersData} />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-2">
            <VoucherToolV3Eligibility2 {...voucherToolV3Eligibility2Data} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-notice-page">
            <VoucherToolV3DisqualificationsNotic2
              voucherTool="Voucher Tool"
              logoProps={voucherToolV3DisqualificationsNotic2Data.logoProps}
              homePageLinkProps={voucherToolV3DisqualificationsNotic2Data.homePageLinkProps}
              moreResourcesProps={voucherToolV3DisqualificationsNotic2Data.moreResourcesProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-next-button">
            <VoucherToolV3TutorialNextButton
              voucherTool="Voucher Tool"
              logoProps={voucherToolV3TutorialNextButtonData.logoProps}
              homePageLinkProps={voucherToolV3TutorialNextButtonData.homePageLinkProps}
              moreResourcesProps={voucherToolV3TutorialNextButtonData.moreResourcesProps}
              tipTypeNextButtonProps={voucherToolV3TutorialNextButtonData.tipTypeNextButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-1">
            <VoucherToolV3Eligibility1 {...voucherToolV3Eligibility1Data} />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-6">
            <VoucherToolV3Eligibility6 {...voucherToolV3Eligibility6Data} />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-5">
            <VoucherToolV3Eligibility5 {...voucherToolV3Eligibility5Data} />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-4">
            <VoucherToolV3Eligibility4 {...voucherToolV3Eligibility4Data} />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-3">
            <VoucherToolV3Eligibility3 {...voucherToolV3Eligibility3Data} />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-audio-button">
            <VoucherToolV3TutorialAudioButton
              voucherTool="Voucher Tool"
              logoProps={voucherToolV3TutorialAudioButtonData.logoProps}
              homePageLinkProps={voucherToolV3TutorialAudioButtonData.homePageLinkProps}
              moreResourcesProps={voucherToolV3TutorialAudioButtonData.moreResourcesProps}
              tipTypeAudioButtonProps={voucherToolV3TutorialAudioButtonData.tipTypeAudioButtonProps}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const landingPageData = {
    resourcesForHomelessRelief: "Resources for Homeless Relief",
    housingVoucherHelp: "Housing Voucher Help:",
    howWereSimplifyin: "How We’re Simplifying Resources for the Homeless Community",
    landinggraphic1: "/img/landinggraphic-1@1x.png",
    whatWeDid: "What We Did",
    withTheGoalOfInc: "With the goal of increasing the number of vouchers used in Seattle, we landed on the solution of  making a resource that homeless people could use to learn more about the emergency housing vouchers, how to apply, and what housing they would qualify for when awarded one.",
    weAlsoIncludedAdd: "We also included additional resources that the Seattle homeless population could use if they’re waiting for a voucher or ineligible to receive one.",
    asSeattlesHomeles: "As Seattle’s homeless population has been growing, countless resources have been created to combat this undeniable problem. The emergency housing voucher is just one program that was implemented across the US to help homeless people afford rent in their city, but after a year of being distributed, less than half of them have been awarded in the greater Seattle area. As Seattle residents who see this problem in our city every day, we wanted to make a difference, and take on the task of improving this program to get more people the housing they desperately need.",
    matchingdemo1: "/img/matchingdemo-1@1x.png",
    vouchertooldemo1: "/img/vouchertooldemo-1@1x.png",
    moreresourcesdemo1: "/img/moreresourcesdemo-1@1x.png",
    whyHomelessRelief: "Why Homeless Relief?",
    projectStatus: "Project Status",
    ourTargetAudience: "Our target audience, the homeless population in Seattle, is a unique demographic with specific needs, so considerations for our website needed to be made accordingly. With this in mind, we based our design off of the user research we conducted and the information we learned about the tech literacy of our target population and how they typically learn about resources available to them. Our solution provides clear instructions and information that allow the homeless population to effectively apply for and use the emergency housing vouchers in Seattle, no matter their prior experiences with technology.",
    bySimplifyingAnOt: "By simplifying an otherwise confusing and potentially inaccessible process, we hope to empower individuals experiencing homelessness or those who are risk of losing housing to better understand the resources available to them, so that they don’t have to feel lost and alone in an already difficult human experience. Our website acts as an anchoring point that individuals can come back to wherever they are in the voucher application process to get the help they need.",
    ourUsers: "Our Users",
    theBenefit: "The Benefit",
    ourTeam: "Our Team",
    nate1: "/img/nate-1@2x.png",
    alex1: "/img/alex-1@2x.png",
    me1: "/img/me-1@2x.png",
    waheeda1: "/img/waheeda-1@2x.png",
    weWillBePassingT: "We will be passing this project off to our sponsor, Frank Martinez and Last Myle, LLC, to maintain and possibly work on with another group in the future. The website will remain accessible with the same URL, but as a team, we will no longer be making updates to it after Spring Quarter 2022 ends.",
    spanText1: <React.Fragment>Nate Nguyen<br /></React.Fragment>,
    spanText2: "Project Manager",
    spanText3: <React.Fragment>Waheeda Hakim<br /></React.Fragment>,
    spanText4: "Data Analyst",
    spanText5: <React.Fragment>Allison Gibbons<br /></React.Fragment>,
    spanText6: "Web Developer",
    spanText7: <React.Fragment>Alex Gherman<br /></React.Fragment>,
    spanText8: "UX/UI Researcher and ",
    spanText9: "Designer",
    exploreOurServices: "Explore Our Services",
    text: "",
};

const logo2Data = {
    className: "logo-1",
};

const homePageLink2Data = {
    className: "home-page-link-1",
};

const moreResources2Data = {
    className: "more-resources-2",
};

const voucherToolV3RAPData = {
    voucherTool: "Voucher Tool",
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    catholicCommunityServicesSeattle: "Catholic Community Services - Seattle",
    clickForDetails1: "Click for Details",
    multiServiceCenterFederalWay: "Multi-Service Center - Federal Way",
    clickForDetails2: "Click for Details",
    ymcaRenton: "YMCA - Renton",
    clickForDetails3: "Click for Details",
    solidGroundSeattle: "Solid Ground - Seattle",
    clickForDetails4: "Click for Details",
    catholicCommunityServicesBellevue: "Catholic Community Services - Bellevue",
    clickForDetails5: "Click for Details",
    logoProps: logo2Data,
    homePageLinkProps: homePageLink2Data,
    moreResourcesProps: moreResources2Data,
};

const logo3Data = {
    className: "logo-2",
};

const homePageLink3Data = {
    className: "home-page-link-2",
};

const moreResources3Data = {
    className: "more-resources-3",
};

const resourceMatchingData = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    voucher1: "/img/voucher-1@2x.png",
    voucherApplicationTool: "Voucher Application Tool",
    guidanceForThoseI: <React.Fragment>Guidance for those interested in applying for an emergency <br />housing voucher.</React.Fragment>,
    goToVoucherTool: "Go to Voucher Tool",
    house1: "/img/house-1@2x.png",
    housingSearchResources: "Housing Search Resources",
    housingSearchResou: "Housing search resources to help make the Seattle housing market simpler for voucher holders.",
    searchForHousing: "Search for Housing",
    resource1: "/img/resource-1@2x.png",
    relatedResources: "Related Resources",
    generalResourcesFo: "General resources for the homeless community such as shelters, food banks, other voucher programs, and  temporary housing options.",
    getMoreResources: "Get More Resources",
    logoProps: logo3Data,
    homePageLinkProps: homePageLink3Data,
    moreResourcesProps: moreResources3Data,
};

const logo4Data = {
    className: "logo-3",
};

const homePageLink22Data = {
    children: "About",
};

const moreResources4Data = {
    className: "more-resources-4",
};

const homePageV3Data = {
    title: "Housing Voucher Help",
    connectingHousingR: "Connecting housing resources with the Seattle homeless community.",
    emergencyHousingVo: <React.Fragment>Emergency Housing Vouchers, or EHVs, target people who are currently experiencing or at risk of homelessness. EHV’s offer limited financial assistance for move in and housing navigation, but do not include any supportive services. <br /><br />For more details on EHV’s, go to:  https://www.hud.gov/ehv</React.Fragment>,
    moreInformation: "More Information",
    ourServices: "Our Services",
    weAreCurrentlyTar: "We are currently targeting the underuse of emergency housing vouchers in the Seattle area. We also aim to help you at every step - whether you need a voucher, are on the waitlist and want information about other resources, or have been granted a voucher - we’re here to help.",
    noWeCantPersona: "No, we can’t personally distribute emergency housing vouchers. Vouchers have been given to specific organizations, but we will help you find out whether you’re eligible and where you can go to apply.",
    unsureWhichToClick: "Unsure which to click?",
    getMoreInformation: "Get more information",
    whatIsAnEmergencyHousingVoucher: "What is an emergency housing voucher?",
    doWeDistributeVouchers: "Do we distribute vouchers?",
    imInterestedInOtherResources: "I’m interested in other resources",
    iNeedAVoucher: "I need a voucher.",
    iHaveAVoucher: "I have a voucher.",
    logoProps: logo4Data,
    homePageLink2Props: homePageLink22Data,
    moreResourcesProps: moreResources4Data,
};

const textInfoData = {
    children: <React.Fragment>You’ve reached the end of our voucher tool! <br /><br />If you’d like, please choose how you’d like to get a summary of the information provided by this tool:</React.Fragment>,
};

const property1PhonePopUpDefaultData = {
    children: "This functionality is not available right now.",
};

const homePageLink4Data = {
    className: "home-page-link-3",
};

const moreResources5Data = {
    className: "more-resources-5",
};

const logo5Data = {
    className: "logo-4",
};

const voucherToolV3DownloadInfoData = {
    voucherTool: "Voucher Tool",
    getSummaryViaTextOrEmail: "Get summary via text or email",
    downloadPdfOfSummary: "Download PDF of summary",
    textInfoProps: textInfoData,
    property1PhonePopUpDefaultProps: property1PhonePopUpDefaultData,
    homePageLinkProps: homePageLink4Data,
    moreResourcesProps: moreResources5Data,
    logoProps: logo5Data,
};

const logo6Data = {
    className: "logo-5",
};

const homePageLink5Data = {
    className: "home-page-link-4",
};

const moreResources6Data = {
    className: "more-resources-6",
};

const voucherToolV3NextStepsData = {
    voucherTool: "Voucher Tool",
    spanText1: "If you’re connected to a homeless service provider: ",
    spanText2: <React.Fragment>contact them for how to apply.<br /></React.Fragment>,
    spanText3: <React.Fragment><br />If you’re not connected to a homeless service provider: <br />schedule an appointment through one <br />of King County’s Coordinated Entry for <br />All </React.Fragment>,
    spanText4: "Regional Access Points",
    spanText5: <React.Fragment> on the <br />next page.<br /><br /><br /><br /></React.Fragment>,
    spanText6: "Click ",
    spanText7: "next",
    spanText8: " to see the Regional Access Points.",
    givingVoucher1: "/img/giving-voucher-1@2x.png",
    logoProps: logo6Data,
    homePageLinkProps: homePageLink5Data,
    moreResourcesProps: moreResources6Data,
};

const logo7Data = {
    className: "logo-6",
};

const homePageLink6Data = {
    className: "home-page-link-5",
};

const moreResources7Data = {
    className: "more-resources-7",
};

const resourceAddedOrNotNotAddedData = {
    affordableHousing: "Affordable Housing",
    theLargestAndMost: "The largest and most trusted source for all Affordable Housing properties and programs in the United States.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo1Data = {
    name: "King County Housing Authority Rental Search",
    kchaHelpsRentersI: "KCHA helps renters in King County find affordable, private-market homes. You can use either site to search for homes based on location, features, and nearby services.",
};

const resourceAddedOrNotResourceAddedOrNo2Data = {
    name: "Emphasys Software",
    kchaHelpsRentersI: "KCHA partners with Emphasys Software to help people find housing",
    className: "resource-section-housing-2",
};

const findAHomeData = {
    findAHome: "Find a Home",
    spanText1: <React.Fragment>If you have received your voucher and are interested in housing search resources, you’re in the right place! <br /><br /></React.Fragment>,
    spanText2: <React.Fragment>Click on any resource to learn more. <br /></React.Fragment>,
    spanText3: "",
    housingSearchResources: "Housing Search Resources",
    logoProps: logo7Data,
    homePageLinkProps: homePageLink6Data,
    moreResourcesProps: moreResources7Data,
    resourceAddedOrNotNotAddedProps: resourceAddedOrNotNotAddedData,
    resourceAddedOrNotResourceAddedOrNo1Props: resourceAddedOrNotResourceAddedOrNo1Data,
    resourceAddedOrNotResourceAddedOrNo2Props: resourceAddedOrNotResourceAddedOrNo2Data,
};

const logo8Data = {
    className: "logo-7",
};

const homePageLink7Data = {
    className: "home-page-link-6",
};

const moreResources8Data = {
    className: "more-resources-8",
};

const textInfo2Data = {
    spanText1: <React.Fragment>You’ve reached the end of our voucher tool! <br /><br /></React.Fragment>,
    spanText2: "If you’d like, please choose how you’d like to get a summary of the information provided, including a list of Regional Access Points and eligibility information:",
};

const voucherToolV3DownloadInfo2Data = {
    voucherTool: "Voucher Tool",
    getSummaryViaTextOrEmail: "Get summary via text or email",
    downloadPdfOfSummary: "Download PDF of summary",
    logoProps: logo8Data,
    homePageLinkProps: homePageLink7Data,
    moreResourcesProps: moreResources8Data,
    textInfo2Props: textInfo2Data,
};

const logo9Data = {
    className: "logo-8",
};

const homePageLink8Data = {
    className: "home-page-link-7",
};

const moreResources9Data = {
    className: "more-resources-9",
};

const resourceAddedOrNotNotAdded2Data = {
    housingChoiceVouchers: "Housing Choice Vouchers",
    spanText1: <React.Fragment>The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.<br /></React.Fragment>,
    spanText2: "",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo22Data = {
    universityDistrictFoodBank: "University District Food Bank",
    spanText1: <React.Fragment>Our mission is to build a hunger-free Northeast Seattle by providing our neighbors with reliable access to healthy food and life-changing resources.<br /></React.Fragment>,
    spanText2: "",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo31Data = {
    universityDistrictFoodBank: "Operations Nightwatch Food Distribution Center",
    ourMissionIsToBu: "Every night, Nightwatch staff and volunteers help homeless adults get food and shelter. A delicious hot meal is served at 9:00 p.m., using donated food and volunteer cooks.",
};

const resourceAddedOrNotResourceAddedOrNo32Data = {
    universityDistrictFoodBank: "Salvation Army",
    ourMissionIsToBu: "In addition to addressing the immediate symptoms of food insecurity, our programs are designed to help identify and treat its root cause. This approach focuses on meeting the physical, mental and spiritual needs of each person and helps move many from hungry to fully healed.",
    className: "resource-section-9",
};

const resourceAddedOrNotResourceAddedOrNo33Data = {
    universityDistrictFoodBank: "FamilyWorks - Wallingford Food Bank",
    ourMissionIsToBu: "The Wallingford Food Bank provides weekly groceries to people in need of food who live in the following zip codes: [98103, 98107, 98115, 98117, 98133, 98177]",
};

const resourceAddedOrNotResourceAddedOrNo34Data = {
    universityDistrictFoodBank: "The Inn",
    ourMissionIsToBu: "The Inn is a 24/7 enhanced shelter and related services for adults experiencing homelessness. This is a low barrier, harm reduction program.",
    className: "resource-section-11",
};

const resourceAddedOrNotResourceAddedOrNo35Data = {
    universityDistrictFoodBank: "Sacred Heart Shelter",
    ourMissionIsToBu: "Sacred Heart Shelter provides safe, comfortable shelter to families experiencing the crisis of homelessness. We welcome families with minor children (18 years or younger), including families with male heads of household or other guardians who staying someplace not intended for human habitation.",
};

const resourcesV3Data = {
    moreResources: "More Resources",
    spanText1: "If you have already used our voucher tools and are interested in other resources, you’re in the right place! ",
    spanText2: "Click on any resource to learn more.",
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers1: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    universityDistrictFoodBank: "Elizabeth Gregory Home",
    ourMissionIsToBu: "Elizabeth Gregory Home (EGH) serves single homeless women in the greater Seattle area by providing transitional housing, a Day Center and case management services. Elizabeth Gregory Home provides a welcoming and respectful refuge where homeless and at-risk women have access to compassionate care.",
    linkToResource1: "Link to Resource",
    temporaryHousingResources: "Temporary Housing Resources",
    housingChoiceVouchers2: "Rosie’s Tiny House Village",
    lihiProvidesAVari: "LIHI provides a variety of supportive services to help residents maintain their housing and develop self-sufficiency. Our Tiny House Villages provide shelter and case management for residents of 36 tiny houses.",
    linkToResource2: "Link to Resource",
    confidentialEmergen: "Confidential Emergency Domestic Violence Shelter",
    weOfferSafeConfi: "We offer safe, confidential, short-term housing for survivors of domestic violence at our 13-room emergency shelter.  Our shelter is for individuals and families experiencing intimate partner abuse who are in high risk of danger from their abuser and who need to escape into a safe confidential setting.",
    linkToResource3: "Link to Resource",
    catholicHousingSer: "Catholic Housing Services Transitional Housing",
    transitionalHousing: "Transitional Housing gives residents an opportunity to save money for permanent housing and get back on their feet. Many of our transitional housing properties offer a variety of essential supportive services, such as housing counseling, employment assistance, computer access and drug and alcohol recovery support.",
    linkToResource4: "Link to Resource",
    breadOfLife: "Bread of Life",
    whenSomeoneComesT: "When someone comes to the Mission their first stop is Emergency Services to meet their immediate physical needs. Guests can sign up for beds, eat three meals a day, take showers, an dpick out fresh clothes.",
    linkToResource5: "Link to Resource",
    name1: "Jan & Peter’s Place Women’s Shelter",
    name2: "Jan & Peter’s Place Women’s Shelter provides a safe, warm place to sleep each night for 50 homeless women.",
    linkToResource6: "Link to Resource",
    ottosPlace: "Otto’s Place",
    ottosPlaceIsAnE: "Otto’s Place is an enhanced shelter program for male-identifying individuals. We remove barriers for transitioning off the street by combining overnight shelter with 24/7 on-site support services, intensive case management, behavioral clinician, and housing navigation.",
    linkToResource7: "Link to Resource",
    logoProps: logo9Data,
    homePageLinkProps: homePageLink8Data,
    moreResourcesProps: moreResources9Data,
    resourceAddedOrNotNotAdded2Props: resourceAddedOrNotNotAdded2Data,
    resourceAddedOrNotResourceAddedOrNo2Props: resourceAddedOrNotResourceAddedOrNo22Data,
    resourceAddedOrNotResourceAddedOrNo31Props: resourceAddedOrNotResourceAddedOrNo31Data,
    resourceAddedOrNotResourceAddedOrNo32Props: resourceAddedOrNotResourceAddedOrNo32Data,
    resourceAddedOrNotResourceAddedOrNo33Props: resourceAddedOrNotResourceAddedOrNo33Data,
    resourceAddedOrNotResourceAddedOrNo34Props: resourceAddedOrNotResourceAddedOrNo34Data,
    resourceAddedOrNotResourceAddedOrNo35Props: resourceAddedOrNotResourceAddedOrNo35Data,
};

const logo10Data = {
    className: "logo-9",
};

const homePageLink9Data = {
    className: "home-page-link-8",
};

const moreResources10Data = {
    className: "more-resources-10",
};

const property1Default1Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default2Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2-1",
};

const property1Default3Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-v2-2",
};

const property1Default4Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-v2-3",
};

const regionalAccessPointsV2Data = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1Default1Props: property1Default1Data,
    property1Default2Props: property1Default2Data,
    property1Default3Props: property1Default3Data,
    property1Default4Props: property1Default4Data,
};

const voucherToolV3RAPCCSBData = {
    voucherTool: "Voucher Tool",
    catholicCommunityServicesBellevue: "Catholic Community Services - Bellevue",
    address11061Ne2N: <React.Fragment>Address: 11061 NE 2nd St<br />Phone Number: 425-213-1963<br />Hours of Operation: Monday - Friday, 9AM - 4PM</React.Fragment>,
    closeDetails: "Close Details",
    viewOnMap: "View on Map",
    logoProps: logo10Data,
    homePageLinkProps: homePageLink9Data,
    moreResourcesProps: moreResources10Data,
    regionalAccessPointsV2Props: regionalAccessPointsV2Data,
};

const logo11Data = {
    className: "logo-10",
};

const homePageLink10Data = {
    className: "home-page-link-9",
};

const moreResources11Data = {
    className: "more-resources-11",
};

const property1Default5Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default6Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2-5",
};

const property1Default7Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-v2-6",
};

const regionalAccessPointsV221Data = {
    property1Default1Props: property1Default5Data,
    property1Default2Props: property1Default6Data,
    property1Default3Props: property1Default7Data,
};

const voucherToolV3RAPSGData = {
    voucherTool: "Voucher Tool",
    solidGroundSeattle: "Solid Ground - Seattle",
    address1501N45Th: <React.Fragment>Address: 1501 N 45th St<br />Phone Number: 206-694-6700<br />Hours of Operation: Monday - Friday, 10AM - 2PM</React.Fragment>,
    closeDetails: "Close Details",
    viewOnMap: "View on Map",
    logoProps: logo11Data,
    homePageLinkProps: homePageLink10Data,
    moreResourcesProps: moreResources11Data,
    regionalAccessPointsV22Props: regionalAccessPointsV221Data,
};

const logo12Data = {
    className: "logo-11",
};

const homePageLink11Data = {
    className: "home-page-link-10",
};

const moreResources12Data = {
    className: "more-resources-12",
};

const property1WelcomeData = {
    welcomeThisToolI: <React.Fragment>Welcome! <br /><br />This tool is meant to help connect people like you with an emergency housing voucher. Before we begin, we’ll show you a few helpful features!</React.Fragment>,
    clickNextToCont: "Click “Next” to continue or “Skip” to skip the tutorial.",
    tutorial1: "/img/tutorial-1@2x.png",
    skip: "Skip",
};

const property1BackToHomeData = {
    children: "Back to Home",
};

const voucherToolV3StartingScreenData = {
    logoProps: logo12Data,
    homePageLinkProps: homePageLink11Data,
    moreResourcesProps: moreResources12Data,
    property1WelcomeProps: property1WelcomeData,
    property1BackToHomeProps: property1BackToHomeData,
};

const logo13Data = {
    className: "logo-12",
};

const homePageLink12Data = {
    className: "home-page-link-11",
};

const moreResources13Data = {
    className: "more-resources-13",
};

const property1Default8Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default9Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2-7",
};

const property1Default10Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-v2-8",
};

const regionalAccessPointsV222Data = {
    property1Default1Props: property1Default8Data,
    property1Default2Props: property1Default9Data,
    property1Default3Props: property1Default10Data,
};

const voucherToolV3RAPYMCAData = {
    voucherTool: "Voucher Tool",
    ymcaRenton: "YMCA - Renton",
    address13750Newca: <React.Fragment>Address: 13750 Newcastle Golf Club Rd<br />Phone Number: 425-282-1500<br />Hours of Operation: Mon - Fri, 6AM - 8PM and Sat - Sun, 8AM - 3PM</React.Fragment>,
    closeDetails: "Close Details",
    viewOnMap: "View on Map",
    logoProps: logo13Data,
    homePageLinkProps: homePageLink12Data,
    moreResourcesProps: moreResources13Data,
    regionalAccessPointsV22Props: regionalAccessPointsV222Data,
};

const logo14Data = {
    className: "logo-13",
};

const homePageLink13Data = {
    className: "home-page-link-12",
};

const moreResources14Data = {
    className: "more-resources-14",
};

const property1Default11Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default12Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-v2-9",
};

const property1Default13Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-v2-10",
};

const regionalAccessPointsV223Data = {
    property1Default1Props: property1Default11Data,
    property1Default2Props: property1Default12Data,
    property1Default3Props: property1Default13Data,
};

const voucherToolV3RAPMSCData = {
    voucherTool: "Voucher Tool",
    multiServiceCenterFederalWay: "Multi-Service Center - Federal Way",
    address1200South: <React.Fragment>Address: 1200 South 336th St<br />Phone Number: 253-838-6810<br />Hours of Operation: Monday - Friday, 8:30AM - 5PM</React.Fragment>,
    closeDetails: "Close Details",
    viewOnMap: "View on Map",
    logoProps: logo14Data,
    homePageLinkProps: homePageLink13Data,
    moreResourcesProps: moreResources14Data,
    regionalAccessPointsV22Props: regionalAccessPointsV223Data,
};

const logo15Data = {
    className: "logo-14",
};

const homePageLink14Data = {
    className: "home-page-link-13",
};

const moreResources15Data = {
    className: "more-resources-15",
};

const property1Default52Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default53Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2-15",
};

const property1Default22Data = {
    catholicCommunityServices: "YWCA - Renton",
    viewOnMap: "View on Map",
};

const property1Default14Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-v2-11",
};

const property1Default15Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-v2-12",
};

const property1Default16Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-v2-13",
};

const regionalAccessPointsV23Data = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1Default51Props: property1Default52Data,
    property1Default52Props: property1Default53Data,
    property1Default2Props: property1Default22Data,
    property1Default1Props: property1Default14Data,
    property1Default2Props2: property1Default15Data,
    property1Default3Props: property1Default16Data,
};

const voucherToolV3RAPCCSData = {
    voucherTool: "Voucher Tool",
    catholicCommunityServicesSeattle: "Catholic Community Services - Seattle",
    address10023RdAv: <React.Fragment>Address: 100 23rd Ave S.<br />Phone Number: 206-328-5900<br />Hours of Operation: Monday - Friday, 9AM - 5PM</React.Fragment>,
    closeDetails: "Close Details",
    viewOnMap: "View on Map",
    logoProps: logo15Data,
    homePageLinkProps: homePageLink14Data,
    moreResourcesProps: moreResources15Data,
    regionalAccessPointsV23Props: regionalAccessPointsV23Data,
};

const logo16Data = {
    className: "logo-15",
};

const homePageLink15Data = {
    className: "home-page-link-14",
};

const moreResources16Data = {
    className: "more-resources-16",
};

const voucherToolV3RequiredPaperworkData = {
    voucherTool: "Voucher Tool",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <React.Fragment> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></React.Fragment>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    logoProps: logo16Data,
    homePageLinkProps: homePageLink15Data,
    moreResourcesProps: moreResources16Data,
};

const logo17Data = {
    className: "logo-16",
};

const homePageLink16Data = {
    className: "home-page-link-15",
};

const moreResources17Data = {
    className: "more-resources-17",
};

const property1Default43Data = {
    className: "document-button-3",
};

const documentButtonVariant7Data = {
    proofOfIncome: "Proof of Income",
    closeDetails: "Close Details",
    incomeHelp: "Income Help",
};

const voucherToolV3RequiredPaperworkPOIData = {
    voucherTool: "Voucher Tool",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <React.Fragment> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></React.Fragment>,
    spanText4: "",
    spanText5: "The following article outlines 10 different ways to provide proof of income: ",
    spanText6: <React.Fragment>10 Ways Tenants Can Show Proof of Income<br /></React.Fragment>,
    spanText7: <React.Fragment><br /></React.Fragment>,
    spanText8: <React.Fragment>The above article outlines 10 different ways to provide proof of income. Additionally, households with 30% area median income or below will be prioritized in their voucher applications.<br /></React.Fragment>,
    spanText9: <React.Fragment><br />For more information about the 30% AMI prioritization, refer to:</React.Fragment>,
    logoProps: logo17Data,
    homePageLinkProps: homePageLink16Data,
    moreResourcesProps: moreResources17Data,
    property1Default4Props: property1Default43Data,
    documentButtonVariant7Props: documentButtonVariant7Data,
};

const logo18Data = {
    className: "logo-17",
};

const homePageLink17Data = {
    className: "home-page-link-16",
};

const moreResources18Data = {
    className: "more-resources-18",
};

const property1Default44Data = {
    className: "document-button-4",
};

const documentButtonVariant72Data = {
    proofOfDateOfBirth: "Proof of Date of Birth",
    aBirthCertificate: <React.Fragment>A birth certificate is the primary document to provide proof of date of birth.<br /><br />For more information and help with this documentation, refer to:</React.Fragment>,
    closeDetails: "Close Details",
    dobHelp: "DOB Help",
};

const voucherToolV3RequiredPaperworkDOBData = {
    voucherTool: "Voucher Tool",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <React.Fragment> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></React.Fragment>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    logoProps: logo18Data,
    homePageLinkProps: homePageLink17Data,
    moreResourcesProps: moreResources18Data,
    property1Default4Props: property1Default44Data,
    documentButtonVariant72Props: documentButtonVariant72Data,
};

const logo19Data = {
    className: "logo-18",
};

const homePageLink18Data = {
    className: "home-page-link-17",
};

const moreResources19Data = {
    className: "more-resources-19",
};

const tipTypeBackButtonData = {
    thisButtonWillTak: "This button will take you to the previous screen.",
};

const voucherToolV3TutorialBackButtonData = {
    logoProps: logo19Data,
    homePageLinkProps: homePageLink18Data,
    moreResourcesProps: moreResources19Data,
    tipTypeBackButtonProps: tipTypeBackButtonData,
};

const logo20Data = {
    className: "logo-19",
};

const homePageLink19Data = {
    className: "home-page-link-18",
};

const moreResources20Data = {
    className: "more-resources-20",
};

const voucherToolV3DisqualificationsData = {
    voucherTool: "Voucher Tool",
    checkWhichOneAppliesToYou: "Check which one applies to you:",
    youreARegistered: "You’re a registered lifetime sex offender",
    youHaveBeenConvic: "You have been convicted of the production of methamphetamines in federally assisted housing",
    youHaveAHistoryO: "You have a history of violence or abuse towards Public Housing Agencies staff",
    spanText1: "Nobody in the applying household is documented for residency ",
    spanText2: "status",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo20Data,
    homePageLinkProps: homePageLink19Data,
    moreResourcesProps: moreResources20Data,
};

const logo21Data = {
    className: "logo-20",
};

const homePageLink20Data = {
    className: "home-page-link-19",
};

const moreResources21Data = {
    className: "more-resources-21",
};

const documentButtonVariant73Data = {
    ifYouKnowYourSoc: <React.Fragment>If you know your social security number, this may be sufficient. However, it is best to have your social security card. <br /><br />For more information and help with this documentation, refer to:</React.Fragment>,
    socialSecurityNumber: "Social Security Number",
    closeDetails: "Close Details",
    ssnHelp: "SSN Help",
};

const voucherToolV3RequiredPaperworkSSNData = {
    voucherTool: "Voucher Tool",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <React.Fragment> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></React.Fragment>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    logoProps: logo21Data,
    homePageLinkProps: homePageLink20Data,
    moreResourcesProps: moreResources21Data,
    documentButtonVariant73Props: documentButtonVariant73Data,
};

const logo22Data = {
    className: "logo-21",
};

const homePageLink21Data = {
    className: "home-page-link-20",
};

const moreResources22Data = {
    className: "more-resources-22",
};

const voucherToolV3DisqualificationsNoticData = {
    logoProps: logo22Data,
    homePageLinkProps: homePageLink21Data,
    moreResourcesProps: moreResources22Data,
};

const logo23Data = {
    className: "logo-22",
};

const homePageLink23Data = {
    className: "home-page-link-21",
};

const moreResources23Data = {
    className: "more-resources-23",
};

const voucherToolV3EligibilityQuestionsData = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo23Data,
    homePageLinkProps: homePageLink23Data,
    moreResourcesProps: moreResources23Data,
};

const logo24Data = {
    className: "logo-23",
};

const homePageLink24Data = {
    className: "home-page-link-22",
};

const moreResources24Data = {
    className: "more-resources-24",
};

const voucherToolV3Eligibility7Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo24Data,
    homePageLinkProps: homePageLink24Data,
    moreResourcesProps: moreResources24Data,
};

const logo25Data = {
    className: "logo-24",
};

const homePageLink25Data = {
    className: "home-page-link-23",
};

const moreResources25Data = {
    className: "more-resources-25",
};

const property1Variant53Data = {
    proofOfIncome: "Proof of Income",
};

const property1Default45Data = {
    className: "document-button-5",
};

const voucherToolV3RequiredPaperworkOCData = {
    voucherTool: "Voucher Tool",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <React.Fragment> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></React.Fragment>,
    spanText4: "",
    forExistingPhaPro: <React.Fragment>For existing PHA program participants who need an emergency transfer, under VAWA, PHAs must accept HUD Form 5382 (VAWA self-certification form) to demonstrate that the individual is a survivor of domestic violence, dating violence, sexual assault, or stalking for the purposes of establishing eligibility for an emergency transfer, unless there is <br />conflicting information.</React.Fragment>,
    hudHelp: "HUD Help",
    logoProps: logo25Data,
    homePageLinkProps: homePageLink25Data,
    moreResourcesProps: moreResources25Data,
    property1Variant53Props: property1Variant53Data,
    property1Default4Props: property1Default45Data,
};

const logo26Data = {
    className: "logo-25",
};

const homePageLink26Data = {
    className: "home-page-link-24",
};

const moreResources26Data = {
    className: "more-resources-26",
};

const voucherToolV3DisqualificationsCheckData = {
    voucherTool: "Voucher Tool",
    checkWhichOneAppliesToYou: "Check which one applies to you:",
    youreARegistered: "You’re a registered lifetime sex offender",
    youHaveBeenConvic: "You have been convicted of the production of methamphetamines in federally assisted housing",
    youHaveAHistoryO: "You have a history of violence or abuse towards Public Housing Agencies staff",
    spanText1: "Nobody in the applying household is documented for residency ",
    spanText2: "status",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo26Data,
    homePageLinkProps: homePageLink26Data,
    moreResourcesProps: moreResources26Data,
};

const logo27Data = {
    className: "logo-26",
};

const homePageLink27Data = {
    className: "home-page-link-25",
};

const moreResources27Data = {
    className: "more-resources-27",
};

const voucherToolV3Disqualifications1Data = {
    voucherTool: "Voucher Tool",
    checkWhichOneAppliesToYou: "Check which one applies to you:",
    youreARegistered: "You’re a registered lifetime sex offender",
    youHaveBeenConvic: "You have been convicted of the production of methamphetamines in federally assisted housing",
    youHaveAHistoryO: "You have a history of violence or abuse towards Public Housing Agencies staff",
    spanText1: "Nobody in the applying household is documented for residency ",
    spanText2: "status",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo27Data,
    homePageLinkProps: homePageLink27Data,
    moreResourcesProps: moreResources27Data,
};

const logo28Data = {
    className: "logo-27",
};

const homePageLink28Data = {
    className: "home-page-link-26",
};

const moreResources28Data = {
    className: "more-resources-28",
};

const voucherToolV3Disqualifications2Data = {
    voucherTool: "Voucher Tool",
    checkWhichOneAppliesToYou: "Check which one applies to you:",
    youreARegistered: "You’re a registered lifetime sex offender",
    youHaveBeenConvic: "You have been convicted of the production of methamphetamines in federally assisted housing",
    youHaveAHistoryO: "You have a history of violence or abuse towards Public Housing Agencies staff",
    spanText1: "Nobody in the applying household is documented for residency ",
    spanText2: "status",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo28Data,
    homePageLinkProps: homePageLink28Data,
    moreResourcesProps: moreResources28Data,
};

const logo29Data = {
    className: "logo-28",
};

const homePageLink29Data = {
    className: "home-page-link-27",
};

const moreResources29Data = {
    className: "more-resources-29",
};

const voucherToolV3Disqualifications3Data = {
    voucherTool: "Voucher Tool",
    checkWhichOneAppliesToYou: "Check which one applies to you:",
    youreARegistered: "You’re a registered lifetime sex offender",
    youHaveBeenConvic: "You have been convicted of the production of methamphetamines in federally assisted housing",
    youHaveAHistoryO: "You have a history of violence or abuse towards Public Housing Agencies staff",
    spanText1: "Nobody in the applying household is documented for residency ",
    spanText2: "status",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo29Data,
    homePageLinkProps: homePageLink29Data,
    moreResourcesProps: moreResources29Data,
};

const logo30Data = {
    className: "logo-29",
};

const homePageLink30Data = {
    className: "home-page-link-28",
};

const moreResources30Data = {
    className: "more-resources-30",
};

const voucherToolV3Disqualifications4Data = {
    voucherTool: "Voucher Tool",
    checkWhichOneAppliesToYou: "Check which one applies to you:",
    youreARegistered: "You’re a registered lifetime sex offender",
    youHaveBeenConvic: "You have been convicted of the production of methamphetamines in federally assisted housing",
    youHaveAHistoryO: "You have a history of violence or abuse towards Public Housing Agencies staff",
    spanText1: "Nobody in the applying household is documented for residency ",
    spanText2: "status",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo30Data,
    homePageLinkProps: homePageLink30Data,
    moreResourcesProps: moreResources30Data,
};

const logo31Data = {
    className: "logo-30",
};

const homePageLink31Data = {
    className: "home-page-link-29",
};

const moreResources31Data = {
    className: "more-resources-31",
};

const voucherToolV3DisclaimersData = {
    voucherTool: "Voucher Tool",
    spanText1: <React.Fragment>One final note before you begin:<br /><br />We </React.Fragment>,
    spanText2: "cannot distribute vouchers",
    spanText3: <React.Fragment>, but this tool will help you know what resources you will need to apply, your voucher eligibility, and where to go to apply. <br /><br /><br />Click “Next” to continue.</React.Fragment>,
    voucherApplying1: "/img/voucher-applying-1@1x.png",
    logoProps: logo31Data,
    homePageLinkProps: homePageLink31Data,
    moreResourcesProps: moreResources31Data,
};

const logo32Data = {
    className: "logo-31",
};

const homePageLink32Data = {
    className: "home-page-link-30",
};

const moreResources32Data = {
    className: "more-resources-32",
};

const voucherToolV3Eligibility2Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo32Data,
    homePageLinkProps: homePageLink32Data,
    moreResourcesProps: moreResources32Data,
};

const logo33Data = {
    className: "logo-32",
};

const homePageLink33Data = {
    className: "home-page-link-31",
};

const moreResources33Data = {
    className: "more-resources-33",
};

const voucherToolV3DisqualificationsNotic2Data = {
    logoProps: logo33Data,
    homePageLinkProps: homePageLink33Data,
    moreResourcesProps: moreResources33Data,
};

const logo34Data = {
    className: "logo-33",
};

const homePageLink34Data = {
    className: "home-page-link-32",
};

const moreResources34Data = {
    className: "more-resources-34",
};

const tipTypeNextButtonData = {
    thisButtonWillTak: "This button will take you to the next section.",
};

const voucherToolV3TutorialNextButtonData = {
    logoProps: logo34Data,
    homePageLinkProps: homePageLink34Data,
    moreResourcesProps: moreResources34Data,
    tipTypeNextButtonProps: tipTypeNextButtonData,
};

const logo35Data = {
    className: "logo-34",
};

const homePageLink35Data = {
    className: "home-page-link-33",
};

const moreResources35Data = {
    className: "more-resources-35",
};

const voucherToolV3Eligibility1Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo35Data,
    homePageLinkProps: homePageLink35Data,
    moreResourcesProps: moreResources35Data,
};

const logo36Data = {
    className: "logo-35",
};

const homePageLink36Data = {
    className: "home-page-link-34",
};

const moreResources36Data = {
    className: "more-resources-36",
};

const voucherToolV3Eligibility6Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo36Data,
    homePageLinkProps: homePageLink36Data,
    moreResourcesProps: moreResources36Data,
};

const logo37Data = {
    className: "logo-36",
};

const homePageLink37Data = {
    className: "home-page-link-35",
};

const moreResources37Data = {
    className: "more-resources-37",
};

const voucherToolV3Eligibility5Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo37Data,
    homePageLinkProps: homePageLink37Data,
    moreResourcesProps: moreResources37Data,
};

const logo38Data = {
    className: "logo-37",
};

const homePageLink38Data = {
    className: "home-page-link-36",
};

const moreResources38Data = {
    className: "more-resources-38",
};

const voucherToolV3Eligibility4Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo38Data,
    homePageLinkProps: homePageLink38Data,
    moreResourcesProps: moreResources38Data,
};

const logo39Data = {
    className: "logo-38",
};

const homePageLink39Data = {
    className: "home-page-link-37",
};

const moreResources39Data = {
    className: "more-resources-39",
};

const voucherToolV3Eligibility3Data = {
    voucherTool: "Voucher Tool",
    inOrderToBeEligi: <React.Fragment>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /><br />Please select which one applies to you.</React.Fragment>,
    homeless: "Homeless",
    atRiskOfHomelessness: "At Risk of Homelessness",
    fleeingOrAttemptin: "Fleeing or attempting to flee domestic violence",
    datingViolence: "Dating violence",
    sexualAssault: "Sexual assault",
    stalkingOrHumanTrafficking: "Stalking or human trafficking",
    noneOfTheAboveApplyToMe: "None of the above apply to me",
    logoProps: logo39Data,
    homePageLinkProps: homePageLink39Data,
    moreResourcesProps: moreResources39Data,
};

const logo40Data = {
    className: "logo-39",
};

const homePageLink40Data = {
    className: "home-page-link-38",
};

const moreResources40Data = {
    className: "more-resources-40",
};

const tipTypeAudioButtonData = {
    thisButtonWillRea: "This button will read the text on the screen out loud to you.",
};

const voucherToolV3TutorialAudioButtonData = {
    logoProps: logo40Data,
    homePageLinkProps: homePageLink40Data,
    moreResourcesProps: moreResources40Data,
    tipTypeAudioButtonProps: tipTypeAudioButtonData,
};

