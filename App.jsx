
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import VoucherToolV3RAP from "./components/VoucherToolV3RAP";
import VoucherToolsPageVoucherExpand from "./components/VoucherToolsPageVoucherExpand";
import HomePageV3 from "./components/HomePageV3";
import VoucherToolV3DownloadInfo from "./components/VoucherToolV3DownloadInfo";
import ResourcesV3 from "./components/ResourcesV3";
import VoucherToolV3NextSteps from "./components/VoucherToolV3NextSteps";
import VoucherToolsPageReceivedExpand from "./components/VoucherToolsPageReceivedExpand";
import VoucherToolV3DownloadInfo2 from "./components/VoucherToolV3DownloadInfo2";
import VoucherToolV3RAPCCS from "./components/VoucherToolV3RAPCCS";
import VoucherToolV3RequiredPaperwork from "./components/VoucherToolV3RequiredPaperwork";
import VoucherToolV3RequiredPaperworkDOB from "./components/VoucherToolV3RequiredPaperworkDOB";
import VoucherToolV3Disqualifications from "./components/VoucherToolV3Disqualifications";
import VoucherToolsPageWaitlistExpand from "./components/VoucherToolsPageWaitlistExpand";
import VoucherToolV3RequiredPaperworkSSN from "./components/VoucherToolV3RequiredPaperworkSSN";
import VoucherToolV3Disclaimers from "./components/VoucherToolV3Disclaimers";
import VoucherToolV3TutorialBackButton from "./components/VoucherToolV3TutorialBackButton";
import VoucherToolV3RequiredPaperworkPOI from "./components/VoucherToolV3RequiredPaperworkPOI";
import VoucherToolV3DisqualificationsNotic from "./components/VoucherToolV3DisqualificationsNotic";
import VoucherToolV3EligibilityQuestions from "./components/VoucherToolV3EligibilityQuestions";
import VoucherToolV3DisqualificationsCheck from "./components/VoucherToolV3DisqualificationsCheck";
import VoucherToolV3TutorialAudioButton from "./components/VoucherToolV3TutorialAudioButton";
import VoucherToolV3StartingScreen from "./components/VoucherToolV3StartingScreen";
import VoucherToolV3TutorialNextButton from "./components/VoucherToolV3TutorialNextButton";
import VoucherToolsPage from "./components/VoucherToolsPage";
import ResourcesV32 from "./components/ResourcesV32";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/landing-page">
            <LandingPage
              spanText1={
                <>
                  {" "}
                  Housing Voucher Help: <br />
                </>
              }
              spanText2="Resources "
              spanText3="for Homeless Relief"
              simplyifyingHousing="Simplyifying Housing Resources for the Homeless Community"
              getHousingResources="Get Housing Resources"
            />
          </Route>
          <Route path="/voucher-tool-v3-rap">
            <VoucherToolV3RAP
              voucherTool="Voucher Tool"
              regionalAccessPointsV2Props={voucherToolV3RAPData.regionalAccessPointsV2Props}
            />
          </Route>
          <Route path="/voucher-tools-page-voucher-expand">
            <VoucherToolsPageVoucherExpand {...voucherToolsPageVoucherExpandData} />
          </Route>
          <Route path="/:path(|home-page-v3)">
            <HomePageV3 {...homePageV3Data} />
          </Route>
          <Route path="/voucher-tool-v3-download-info-1">
            <VoucherToolV3DownloadInfo {...voucherToolV3DownloadInfoData} />
          </Route>
          <Route path="/resources-v3-1">
            <ResourcesV3 {...resourcesV3Data} />
          </Route>
          <Route path="/voucher-tool-v3-next-steps">
            <VoucherToolV3NextSteps {...voucherToolV3NextStepsData} />
          </Route>
          <Route path="/voucher-tools-page-received-expand">
            <VoucherToolsPageReceivedExpand {...voucherToolsPageReceivedExpandData} />
          </Route>
          <Route path="/voucher-tool-v3-download-info">
            <VoucherToolV3DownloadInfo2
              voucherTool="Voucher Tool"
              getSummaryViaTextOrEmail="Get summary via text or email"
              downloadPdfOfSummary="Download PDF of summary"
              property1AudioProps={voucherToolV3DownloadInfo2Data.property1AudioProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-rap-ccs">
            <VoucherToolV3RAPCCS
              voucherTool="Voucher Tool"
              regionalAccessPointsV23Props={voucherToolV3RAPCCSData.regionalAccessPointsV23Props}
            />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork">
            <VoucherToolV3RequiredPaperwork {...voucherToolV3RequiredPaperworkData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-dob">
            <VoucherToolV3RequiredPaperworkDOB {...voucherToolV3RequiredPaperworkDOBData} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications">
            <VoucherToolV3Disqualifications
              voucherTool="Voucher Tool"
              line1=""
              noneOfTheAboveApplyToMe="None of the above apply to me"
              property1AudioProps={voucherToolV3DisqualificationsData.property1AudioProps}
              property1Default3Props={voucherToolV3DisqualificationsData.property1Default3Props}
            />
          </Route>
          <Route path="/voucher-tools-page-waitlist-expand">
            <VoucherToolsPageWaitlistExpand {...voucherToolsPageWaitlistExpandData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-ssn">
            <VoucherToolV3RequiredPaperworkSSN {...voucherToolV3RequiredPaperworkSSNData} />
          </Route>
          <Route path="/voucher-tool-v3-disclaimers">
            <VoucherToolV3Disclaimers
              voucherTool="Voucher Tool"
              spanText1={
                <>
                  One final note before you begin:
                  <br />
                  <br />
                  We{" "}
                </>
              }
              spanText2="cannot distribute vouchers"
              spanText3={
                <>
                  , but this tool will help you know what resources you will need to apply, your voucher eligibility,
                  and where to go to apply. <br />
                  <br />
                  <br />
                  Click “Next” to continue.
                </>
              }
              voucherApplying1="/img/voucher-applying-1@1x.png"
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-back-button">
            <VoucherToolV3TutorialBackButton
              voucherTool="Voucher Tool"
              property1AudioProps={voucherToolV3TutorialBackButtonData.property1AudioProps}
              tipTypeBackButtonProps={voucherToolV3TutorialBackButtonData.tipTypeBackButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-poi">
            <VoucherToolV3RequiredPaperworkPOI {...voucherToolV3RequiredPaperworkPOIData} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-notice-page">
            <VoucherToolV3DisqualificationsNotic
              voucherTool="Voucher Tool"
              spanText1="There’s a possibility you might be disqualified for the voucher if you apply, based on the box you checked on the previous page. You can still apply, but your application is likely to be disqualified. Refer to the "
              spanText2="“More Resources” "
              spanText3={
                <>
                  page in the upper right-hand corner of the screen for other programs you may be eligible for.
                  <br />
                  <br />
                  <br />
                  <br />
                </>
              }
              spanText4="Note:"
              spanText5=" "
              spanText6={
                <>
                  There are exceptions under the federal Violence Against Women Act for survivors who were convicted of
                  producing methamphetamines if the conviction was due <br />
                  to abuse.
                </>
              }
            />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-questions">
            <VoucherToolV3EligibilityQuestions
              voucherTool="Voucher Tool"
              selectionsDefaultProps={voucherToolV3EligibilityQuestionsData.selectionsDefaultProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-checked">
            <VoucherToolV3DisqualificationsCheck
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3DisqualificationsCheckData.property1AudioProps}
              property1Default42Props={voucherToolV3DisqualificationsCheckData.property1Default42Props}
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-audio-button">
            <VoucherToolV3TutorialAudioButton
              voucherTool="Voucher Tool"
              property1AudioProps={voucherToolV3TutorialAudioButtonData.property1AudioProps}
              tipTypeAudioButtonProps={voucherToolV3TutorialAudioButtonData.tipTypeAudioButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-starting-screen">
            <VoucherToolV3StartingScreen
              voucherTool="Voucher Tool"
              property1WelcomeProps={voucherToolV3StartingScreenData.property1WelcomeProps}
              property1BackToHomeProps={voucherToolV3StartingScreenData.property1BackToHomeProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-next-button">
            <VoucherToolV3TutorialNextButton
              voucherTool="Voucher Tool"
              property1AudioProps={voucherToolV3TutorialNextButtonData.property1AudioProps}
              tipTypeNextButtonProps={voucherToolV3TutorialNextButtonData.tipTypeNextButtonProps}
            />
          </Route>
          <Route path="/voucher-tools-page">
            <VoucherToolsPage {...voucherToolsPageData} />
          </Route>
          <Route path="/resources-v3">
            <ResourcesV32
              findAHome="Find a Home"
              spanText1={
                <>
                  If you have received your voucher and are interested in housing search resources, you’re in the right
                  place! <br />
                  <br />
                </>
              }
              spanText2={
                <>
                  Click on any resource to learn more. <br />
                </>
              }
              spanText3=""
              housingSearchResources="Housing Search Resources"
              resourceAddedOrNotNotAdded2Props={resourcesV32Data.resourceAddedOrNotNotAdded2Props}
              resourceAddedOrNotResourceAddedOrNo2Props={resourcesV32Data.resourceAddedOrNotResourceAddedOrNo2Props}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const property1DefaultData = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
    clickForDetails: "Click for Details",
};

const property1Default81Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
};

const property1Default82Data = {
    catholicCommunityServices: "YWCA - Renton",
};

const property1Default83Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
};

const property1Default84Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
};

const regionalAccessPointsV2Data = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1DefaultProps: property1DefaultData,
    property1Default81Props: property1Default81Data,
    property1Default82Props: property1Default82Data,
    property1Default83Props: property1Default83Data,
    property1Default84Props: property1Default84Data,
};

const voucherToolV3RAPData = {
    regionalAccessPointsV2Props: regionalAccessPointsV2Data,
};

const haventAppliedButtonVariant4Data = {
    iHaventAppliedFo: "I haven’t applied for a voucher but would like to.",
    close: "Close",
    spanText1: <>If you haven’t yet applied for a voucher, but are interested in applying and finding out more about this program, these are the tools we have to help you:<br /><br />What is the emergency housing voucher program?<br /><br />Emergency Housing Vouchers, or EHVs, target people who are currently experiencing or at risk of homelessness. EHV’s offer limited financial assistance for move in and housing navigation, but do not include any supportive services. For more details on EHV’s, go to: </>,
    spanText2: <>https://www.hud.gov/ehv<br /></>,
    spanText3: <><br /></>,
    spanText4: "Get help applying with ",
    spanText5: "our voucher tool:",
    goToVoucherTool: "Go to Voucher Tool",
};

const voucherToolsPageVoucherExpandData = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    clickOnTheSection: "Click on the section which best describes you:",
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
    iveAppliedForAV: "I’ve applied for a voucher and have received one.",
    haventAppliedButtonVariant4Props: haventAppliedButtonVariant4Data,
};

const logo3Data = {
    className: "logo-2",
};

const homePageLink22Data = {
    children: "About",
};

const moreResources3Data = {
    className: "more-resources-3",
};

const homePageV3Data = {
    housingVoucherHelp: "Housing Voucher Help",
    connectingHousingR: "Connecting housing resources with the Seattle homeless community.",
    whetherYoureACas: "Whether you’re a case manager guiding a client through this process or you’re getting an emergency housing voucher for yourself, we provide you with the tools necessary to help you achieve your goals.",
    emergencyHousingVo: <>Emergency Housing Vouchers, or EHVs, target people who are currently experiencing or at risk of homelessness. EHV’s offer limited financial assistance for move in and housing navigation, but do not include any supportive services. <br /><br />For more details on EHV’s, go to:</>,
    httpsWwwHudGovEhv: "https://www.hud.gov/ehv",
    moreInformation: "More Information",
    ourServices: "Our Services",
    noWeCantPersona: "No, we can’t personally distribute emergency housing vouchers. Vouchers have been given to specific organizations, but we will help you find out whether you’re eligible and where you can go to apply.",
    weAreCurrentlyTar: "We are currently targeting the underuse of emergency housing vouchers in the Seattle area. We also aim to help you at every step - whether you need a voucher, are on the waitlist and want information about other resources, or have been granted a voucher - we’re here to help.",
    ourMission: "Our Mission",
    unsureWhichToClick: "Unsure which to click?",
    whatIsAnEmergencyHousingVoucher: "What is an emergency housing voucher?",
    getMoreInformation: "Get more information",
    doWeDistributeVouchers: "Do we distribute vouchers?",
    imInterestedInOtherResources: "I’m interested in other resources",
    iNeedAVoucher: "I need a voucher.",
    iHaveAVoucher: "I have a voucher.",
    logoProps: logo3Data,
    homePageLink2Props: homePageLink22Data,
    moreResourcesProps: moreResources3Data,
};

const property1Audio2Data = {
    className: "tutorial-buttons-4",
};

const property1PhonePopUpDefaultData = {
    wouldYouLikeToGe: "Would you like to get a text or an email?",
    email: "Email",
    text: "Text",
};

const homePageLink3Data = {
    className: "home-page-link-2",
};

const moreResources4Data = {
    className: "more-resources-4",
};

const logo4Data = {
    className: "logo-3",
};

const voucherToolV3DownloadInfoData = {
    voucherTool: "Voucher Tool",
    getSummaryViaTextOrEmail: "Get summary via text or email",
    downloadPdfOfSummary: "Download PDF of summary",
    property1AudioProps: property1Audio2Data,
    property1PhonePopUpDefaultProps: property1PhonePopUpDefaultData,
    homePageLinkProps: homePageLink3Data,
    moreResourcesProps: moreResources4Data,
    logoProps: logo4Data,
};

const resourceAddedOrNotNotAddedData = {
    housingChoiceVouchers: "Housing Choice Vouchers",
    spanText1: <>The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.<br /></>,
    spanText2: "",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNoData = {
    universityDistrictFoodBank: "University District Food Bank",
    spanText1: <>Our mission is to build a hunger-free Northeast Seattle by providing our neighbors with reliable access to healthy food and life-changing resources.<br /></>,
    spanText2: "",
    linkToResource: "Link to Resource",
};

const resourcesV3Data = {
    moreResources: "More Resources",
    spanText1: "If you have already used our voucher tools and are interested in other resources, you’re in the right place! ",
    spanText2: "Click on any resource to learn more.",
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers1: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    temporaryHousingResources: "Temporary Housing Resources",
    housingChoiceVouchers2: "Rosie’s Tiny House Village",
    lihiProvidesAVari: "LIHI provides a variety of supportive services to help residents maintain their housing and develop self-sufficiency. Our Tiny House Villages provide shelter and case management for residents of 36 tiny houses.",
    linkToResource: "Link to Resource",
    resourceAddedOrNotNotAddedProps: resourceAddedOrNotNotAddedData,
    resourceAddedOrNotResourceAddedOrNoProps: resourceAddedOrNotResourceAddedOrNoData,
};

const logo6Data = {
    className: "logo-1",
};

const homePageLink5Data = {
    className: "home-page-link-3",
};

const moreResources6Data = {
    className: "more-resources-5",
};

const property1Audio3Data = {
    className: "tutorial-buttons-5",
};

const voucherToolV3NextStepsData = {
    voucherTool: "Voucher Tool",
    spanText1: "If you’re connected to a homeless service provider: ",
    spanText2: <>contact them for how to apply.<br /></>,
    spanText3: <><br />If you’re not connected to a homeless service provider: <br />schedule an appointment through one <br />of King County’s Coordinated Entry for <br />All </>,
    spanText4: "Regional Access Points",
    spanText5: <> on the <br />next page.<br /><br /><br /><br /></>,
    spanText6: "Click ",
    spanText7: "next",
    spanText8: " to see the Regional Access Points.",
    givingVoucher1: "/img/giving-voucher-1@2x.png",
    logoProps: logo6Data,
    homePageLinkProps: homePageLink5Data,
    moreResourcesProps: moreResources6Data,
    property1AudioProps: property1Audio3Data,
};

const homePageLink6Data = {
    className: "home-page-link-4",
};

const moreResources7Data = {
    className: "more-resources-6",
};

const property1ExpandedData = {
    iveAppliedForAV: "I’ve applied for a voucher and have received one.",
    close: "Close",
    goToHousingTool: "Go to Housing Tool",
    spanText1: <>If you have applied for a voucher and received one, congratulations! This is a big accomplishment and we are so excited to help you with the next steps. <br /><br />The Seattle housing market can be confusing to navigate, so we’ve developed a platform to help make the housing hunt for voucher holders such as yourself to find a place to live.<br /></>,
    spanText2: <><br /><br /></>,
    spanText3: "Get help with housing with ",
    spanText4: "our housing tool:",
};

const voucherToolsPageReceivedExpandData = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    clickOnTheSection: "Click on the section which best describes you:",
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
    iveAppliedForAV: "I’ve applied for a voucher and have received one.",
    homePageLinkProps: homePageLink6Data,
    moreResourcesProps: moreResources7Data,
    property1ExpandedProps: property1ExpandedData,
};

const property1Audio4Data = {
    className: "tutorial-buttons-6",
};

const voucherToolV3DownloadInfo2Data = {
    property1AudioProps: property1Audio4Data,
};

const property1Default85Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
    className: "regional-access-point-v2-3",
};

const property1Default86Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
};

const property1Default87Data = {
    catholicCommunityServices: "YWCA - Renton",
};

const property1Default88Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
};

const property1Default89Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
};

const regionalAccessPointsV23Data = {
    property1Default1Props: property1Default85Data,
    property1Default2Props: property1Default86Data,
    property1Default3Props: property1Default87Data,
    property1Default4Props: property1Default88Data,
    property1Default5Props: property1Default89Data,
};

const voucherToolV3RAPCCSData = {
    regionalAccessPointsV23Props: regionalAccessPointsV23Data,
};

const property1Audio6Data = {
    className: "tutorial-buttons-8",
};

const voucherToolV3RequiredPaperworkData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    property1AudioProps: property1Audio6Data,
};

const property1Audio7Data = {
    className: "tutorial-buttons-9",
};

const property1Variant531Data = {
    proofOfIncome: "Proof of Income",
};

const documentButtonVariant7Data = {
    proofOfDateOfBirth: "Proof of Date of Birth",
    aBirthCertificate: <>A birth certificate is the primary document to provide proof of date of birth.<br /><br />For more information and help with this documentation, refer to:</>,
    closeDetails: "Close Details",
    dobHelp: "DOB Help",
};

const voucherToolV3RequiredPaperworkDOBData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    property1AudioProps: property1Audio7Data,
    property1Variant53Props: property1Variant531Data,
    documentButtonVariant7Props: documentButtonVariant7Data,
};

const property1Audio8Data = {
    className: "tutorial-buttons-10",
};

const property1Default3Data = {
    checkIfAnyOfThe: "Check if any of the following apply to you:",
    youreARegistered: <>You’re a registered lifetime sex offender<br />You have been convicted of the production of methamphetamines in federally assisted housing<br />You have a history of violence or abuse towards Public Housing Agencies staff<br />Nobody in the applying household is documented for residency status</>,
};

const voucherToolV3DisqualificationsData = {
    property1AudioProps: property1Audio8Data,
    property1Default3Props: property1Default3Data,
};

const logo13Data = {
    className: "logo-1",
};

const homePageLink12Data = {
    className: "home-page-link-5",
};

const moreResources13Data = {
    className: "more-resources-7",
};

const property1Expanded2Data = {
    spanText1: <>I’ve applied for a voucher but haven’t received one yet.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
    close: "Close",
    goToMoreResources: "Go to More Resources",
    spanText4: <>If you are on the voucher waitlist or you used our voucher tool and were told you were potentially ineligible, there are other resources you can utilize.<br /><br />Our “More Resources” page has other voucher programs you can apply to, as well as general resources for the homeless community. You can access it in the upper right hand corner of your screen, or below:<br /></>,
    spanText5: <><br /><br /></>,
    spanText6: "Go to ",
    spanText7: "our other resources",
    spanText8: ":",
    spanText9: "",
};

const voucherToolsPageWaitlistExpandData = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    clickOnTheSection: "Click on the section which best describes you:",
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
    iveAppliedForAV: "I’ve applied for a voucher and have received one.",
    logoProps: logo13Data,
    homePageLinkProps: homePageLink12Data,
    moreResourcesProps: moreResources13Data,
    property1Expanded2Props: property1Expanded2Data,
};

const property1Audio9Data = {
    className: "tutorial-buttons-11",
};

const property1Variant532Data = {
    proofOfIncome: "Proof of Date of Birth",
    className: "document-button-4",
};

const property1Variant533Data = {
    proofOfIncome: "Social Security Number",
    className: "document-button-5",
};

const documentButtonVariant72Data = {
    ifYouKnowYourSoc: <>If you know your social security number, this may be sufficient. However, it is best to have your social security card. <br /><br />For more information and help with this documentation, refer to:</>,
    socialSecurityNumber: "Social Security Number",
    closeDetails: "Close Details",
    ssnHelp: "SSN Help",
};

const voucherToolV3RequiredPaperworkSSNData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    property1AudioProps: property1Audio9Data,
    property1Variant531Props: property1Variant532Data,
    property1Variant532Props: property1Variant533Data,
    documentButtonVariant72Props: documentButtonVariant72Data,
};

const property1Audio11Data = {
    className: "tutorial-buttons-12",
};

const tipTypeBackButtonData = {
    thisButtonWillTak: "This button will take you to the previous screen.",
};

const voucherToolV3TutorialBackButtonData = {
    property1AudioProps: property1Audio11Data,
    tipTypeBackButtonProps: tipTypeBackButtonData,
};

const property1Audio12Data = {
    className: "tutorial-buttons-13",
};

const property1Variant534Data = {
    proofOfIncome: "Proof of Income",
};

const documentButtonVariant73Data = {
    proofOfIncome: "Proof of Income",
    spanText1: "The following article outlines 10 different ways to provide proof of income: ",
    spanText2: <>10 Ways Tenants Can Show Proof of Income<br /><br /></>,
    spanText3: <>Additionally, households with 30% area median income or below will be prioritized in their voucher applications.<br /><br />For more information about the 30% AMI prioritization, refer to:</>,
    incomeHelp: "Income Help",
    closeDetails: "Close Details",
};

const voucherToolV3RequiredPaperworkPOIData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    property1AudioProps: property1Audio12Data,
    property1Variant53Props: property1Variant534Data,
    documentButtonVariant73Props: documentButtonVariant73Data,
};

const selectionsDefaultData = {
    spanText1: <>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /></>,
    spanText2: <><br />Please select all that apply to you.</>,
    homelessAtRiskOf: <>Homeless  <br />At Risk of Homelessness<br />Fleeing or attempting to flee domestic violence<br />Dating violence<br />Sexual assault<br />Stalking or human trafficking<br />None of the above apply to me</>,
};

const voucherToolV3EligibilityQuestionsData = {
    selectionsDefaultProps: selectionsDefaultData,
};

const property1Audio15Data = {
    className: "tutorial-buttons-14",
};

const property1Default422Data = {
    checkIfAnyOfThe: "Check if any of the following apply to you:",
    youreARegistered: <>You’re a registered lifetime sex offender<br />You have been convicted of the production of methamphetamines in federally assisted housing<br />You have a history of violence or abuse towards Public Housing Agencies staff<br />Nobody in the applying household is documented for residency status<br />None of the above apply to me</>,
};

const voucherToolV3DisqualificationsCheckData = {
    property1AudioProps: property1Audio15Data,
    property1Default42Props: property1Default422Data,
};

const property1Audio16Data = {
    className: "tutorial-buttons-15",
};

const tipTypeAudioButtonData = {
    thisButtonWillRea: "This button will read the text on the screen out loud to you.",
};

const voucherToolV3TutorialAudioButtonData = {
    property1AudioProps: property1Audio16Data,
    tipTypeAudioButtonProps: tipTypeAudioButtonData,
};

const property1WelcomeData = {
    welcomeThisToolI: <>Welcome! <br /><br />This tool is meant to help connect people like you with an emergency housing voucher. Before we begin, we’ll show you a few helpful features!</>,
    clickNextToCont: "Click “Next” to continue or “Skip” to skip the tutorial.",
    tutorial1: "/img/tutorial-1@2x.png",
    skip: "Skip",
};

const property1BackToHomeData = {
    children: "Back to Home",
};

const voucherToolV3StartingScreenData = {
    property1WelcomeProps: property1WelcomeData,
    property1BackToHomeProps: property1BackToHomeData,
};

const property1Audio18Data = {
    className: "tutorial-buttons-16",
};

const tipTypeNextButtonData = {
    thisButtonWillTak: "This button will take you to the next section.",
};

const voucherToolV3TutorialNextButtonData = {
    property1AudioProps: property1Audio18Data,
    tipTypeNextButtonProps: tipTypeNextButtonData,
};

const logo24Data = {
    className: "logo-1",
};

const homePageLink24Data = {
    className: "home-page-link-6",
};

const moreResources24Data = {
    className: "more-resources-8",
};

const property1Default24Data = {
    className: "havent-applied-button-2",
};

const property1IneligibleButtonData = {
    spanText1: <>I’ve applied for a voucher but haven’t received one yet.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
};

const property1Default7Data = {
    children: "I’ve applied for a voucher and have received one.",
};

const voucherToolsPageData = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    clickOnTheSection: "Click on the section which best describes you:",
    logoProps: logo24Data,
    homePageLinkProps: homePageLink24Data,
    moreResourcesProps: moreResources24Data,
    property1Default2Props: property1Default24Data,
    property1IneligibleButtonProps: property1IneligibleButtonData,
    property1Default7Props: property1Default7Data,
};

const resourceAddedOrNotNotAdded2Data = {
    affordableHousing: "Affordable Housing",
    theLargestAndMost: "The largest and most trusted source for all Affordable Housing properties and programs in the United States.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo2Data = {
    name: "King County Housing Authority Rental Search",
    kchaHelpsRentersI: "KCHA helps renters in King County find affordable, private-market homes. You can use either site to search for homes based on location, features, and nearby services.",
    linkToResource: "Link to Resource",
};

const resourcesV32Data = {
    findAHome: "Find a Home",
    spanText1: <>If you have received your voucher and are interested in housing search resources, you’re in the right place! <br /><br /></>,
    spanText2: <>Click on any resource to learn more. <br /></>,
    spanText3: "",
    housingSearchResources: "Housing Search Resources",
    resourceAddedOrNotNotAdded2Props: resourceAddedOrNotNotAdded2Data,
    resourceAddedOrNotResourceAddedOrNo2Props: resourceAddedOrNotResourceAddedOrNo2Data,
};

