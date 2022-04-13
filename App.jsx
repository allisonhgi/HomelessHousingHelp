import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import VoucherToolsPageReceivedExpand from "./components/VoucherToolsPageReceivedExpand";
import HomePageV3 from "./components/HomePageV3";
import VoucherToolV3StartingScreen from "./components/VoucherToolV3StartingScreen";
import VoucherToolPopUp from "./components/VoucherToolPopUp";
import VoucherToolV3RAP from "./components/VoucherToolV3RAP";
import ResourcesV3 from "./components/ResourcesV3";
import VoucherToolV3DownloadInfo from "./components/VoucherToolV3DownloadInfo";
import ResourcesV32 from "./components/ResourcesV32";
import VoucherToolV3NextSteps from "./components/VoucherToolV3NextSteps";
import VoucherToolV3DownloadInfo2 from "./components/VoucherToolV3DownloadInfo2";
import VoucherToolV3DisqualificationsNotic from "./components/VoucherToolV3DisqualificationsNotic";
import VoucherToolsPage from "./components/VoucherToolsPage";
import VoucherToolV3RequiredPaperwork from "./components/VoucherToolV3RequiredPaperwork";
import VoucherToolV3Disqualifications from "./components/VoucherToolV3Disqualifications";
import VoucherToolV3Disclaimers from "./components/VoucherToolV3Disclaimers";
import VoucherToolV3TutorialBackButton from "./components/VoucherToolV3TutorialBackButton";
import VoucherToolV3TutorialAudioButton from "./components/VoucherToolV3TutorialAudioButton";
import VoucherToolV3TutorialNextButton from "./components/VoucherToolV3TutorialNextButton";
import VoucherToolV3EligibilityQuestions from "./components/VoucherToolV3EligibilityQuestions";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/voucher-tools-page-received-expand">
            <VoucherToolsPageReceivedExpand {...voucherToolsPageReceivedExpandData} />
          </Route>
          <Route path="/:path(|home-page-v3)">
            <HomePageV3 {...homePageV3Data} />
          </Route>
          <Route path="/voucher-tool-v3-starting-screen">
            <VoucherToolV3StartingScreen
              voucherTool="Voucher Tool"
              line1=""
              property1WelcomeProps={voucherToolV3StartingScreenData.property1WelcomeProps}
              property1BackToHomeProps={voucherToolV3StartingScreenData.property1BackToHomeProps}
            />
          </Route>
          <Route path="/voucher-tool-pop-up">
            <VoucherToolPopUp voucherToolPopUp2Props={voucherToolPopUpData.voucherToolPopUp2Props} />
          </Route>
          <Route path="/voucher-tool-v3-rap">
            <VoucherToolV3RAP
              voucherTool="Voucher Tool"
              line1=""
              regionalAccessPointsV2Props={voucherToolV3RAPData.regionalAccessPointsV2Props}
            />
          </Route>
          <Route path="/resources-v3-1">
            <ResourcesV3
              findAHome="Find a Home"
              ifYouHaveReceived={
                <>
                  If you have received your voucher and are interested in other resources, you’re in the right place!{" "}
                  <br />
                  <br />
                  Click on any resource to learn more.
                </>
              }
              housingSearchResources="Housing Search Resources"
              resourceAddedOrNotNotAdded32Props={resourcesV3Data.resourceAddedOrNotNotAdded32Props}
              resourceAddedOrNotResourceAddedOrNoProps={resourcesV3Data.resourceAddedOrNotResourceAddedOrNoProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-download-info-1">
            <VoucherToolV3DownloadInfo {...voucherToolV3DownloadInfoData} />
          </Route>
          <Route path="/resources-v3">
            <ResourcesV32 {...resourcesV32Data} />
          </Route>
          <Route path="/voucher-tool-v3-next-steps">
            <VoucherToolV3NextSteps {...voucherToolV3NextStepsData} />
          </Route>
          <Route path="/voucher-tool-v3-download-info">
            <VoucherToolV3DownloadInfo2
              voucherTool="Voucher Tool"
              line1=""
              getSummaryViaTextOrEmail="Get summary via text or email"
              downloadPdfOfSummary="Download PDF of summary"
            />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications-notice-page">
            <VoucherToolV3DisqualificationsNotic {...voucherToolV3DisqualificationsNoticData} />
          </Route>
          <Route path="/voucher-tools-page">
            <VoucherToolsPage
              resourceMatching="Resource Matching"
              ifYoureNotSureW="If you’re not sure which of our resources is right for you, get more information below."
              clickOnTheSection="Click on the section which best describes you:"
              property1DefaultProps={voucherToolsPageData.property1DefaultProps}
              property1IneligibleButtonProps={voucherToolsPageData.property1IneligibleButtonProps}
              property1Default3Props={voucherToolsPageData.property1Default3Props}
            />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork">
            <VoucherToolV3RequiredPaperwork {...voucherToolV3RequiredPaperworkData} />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications">
            <VoucherToolV3Disqualifications
              voucherTool="Voucher Tool"
              line1=""
              property1Default4Props={voucherToolV3DisqualificationsData.property1Default4Props}
            />
          </Route>
          <Route path="/voucher-tool-v3-disclaimers">
            <VoucherToolV3Disclaimers
              voucherTool="Voucher Tool"
              line1=""
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
                  , but this tool will help you know what resources you will need to apply, your voucher eligibility,{" "}
                  <br />
                  and where to go to apply. <br />
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
              line1=""
              property1AudioProps={voucherToolV3TutorialBackButtonData.property1AudioProps}
              tipTypeBackButtonProps={voucherToolV3TutorialBackButtonData.tipTypeBackButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-audio-button">
            <VoucherToolV3TutorialAudioButton
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3TutorialAudioButtonData.property1AudioProps}
              tipTypeAudioButtonProps={voucherToolV3TutorialAudioButtonData.tipTypeAudioButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-next-button">
            <VoucherToolV3TutorialNextButton
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3TutorialNextButtonData.property1AudioProps}
              tipTypeNextButtonProps={voucherToolV3TutorialNextButtonData.tipTypeNextButtonProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-questions">
            <VoucherToolV3EligibilityQuestions
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3EligibilityQuestionsData.property1AudioProps}
              selectionsDefaultProps={voucherToolV3EligibilityQuestionsData.selectionsDefaultProps}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
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
    property1ExpandedProps: property1ExpandedData,
};

const logo2Data = {
    className: "logo-1",
};

const moreResources2Data = {
    className: "more-resources-2",
};

const voucherButtonV21Data = {
    iHaveAVoucher: "I need a voucher.",
    className: "",
};

const voucherButtonV31Data = {
    voucherButtonV2Props: voucherButtonV21Data,
};

const voucherButtonV22Data = {
    iHaveAVoucher: "I have a voucher.",
    className: "voucher-button-v2-2",
};

const voucherButtonV32Data = {
    className: "voucher-button-v3-2",
    voucherButtonV2Props: voucherButtonV22Data,
};

const homePageV3Data = {
    title: "Housing Voucher Help",
    connectingHousingR: "Connecting housing resources with the people who need them.",
    whetherYoureACas: "Whether you’re a case manager guiding a client through this process or you’re getting an emergency housing voucher for yourself, we provide you with the tools necessary to help you achieve your goals.",
    spanText1: <>Emergency Housing Vouchers, or EHVs, target people who are currently experiencing or at risk of homelessness. EHV’s offer limited financial assistance for move in and housing navigation, but do not include any supportive services. <br /><br />For more details on EHV’s, go to: </>,
    spanText2: "https://www.hud.gov/ehv",
    moreInformation: "More Information",
    ourServices: "Our Services",
    weAreCurrentlyTar: <>We are currently targeting the underuse of emergency housing vouchers in the Seattle area. We also aim to help you at every step - whether you need a voucher, are on the waitlist and want information about other resources, or have been granted a voucher - we’re here to help. <br /><br />Keep scrolling for more information on the vouchers!</>,
    ourMission: "Our Mission",
    whatIsAnEmergencyHousingVoucher: "What is an emergency housing voucher?",
    noWeCantPersona: "No, we can’t personally distribute emergency housing vouchers. Vouchers have been given to specific organizations, but we will help you find out whether you’re eligible and where you can go to apply.",
    doWeDistributeVouchers: "Do we distribute vouchers?",
    unsureWhichToClick: "Unsure which to click?",
    getMoreInformation: "Get more information",
    imInterestedInOtherResources: "I’m interested in other resources",
    logoProps: logo2Data,
    moreResourcesProps: moreResources2Data,
    voucherButtonV31Props: voucherButtonV31Data,
    voucherButtonV32Props: voucherButtonV32Data,
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

const voucherToolPopUp2Data = {
    thisWillTakeYouB: "This will take you back to the home page. Are you sure that you would like to exit?",
    noStayOnTheVoucherTool: "No, stay on the voucher tool",
    yesTakeMeToTheHomePage: "Yes, take me to the home page",
};

const voucherToolPopUpData = {
    voucherToolPopUp2Props: voucherToolPopUp2Data,
};

const property1Default21Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default22Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2",
};

const property1Default23Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-v2",
};

const property1Default24Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-v2",
};

const property1Default25Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-v2",
};

const regionalAccessPointsV2Data = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1Default21Props: property1Default21Data,
    property1Default22Props: property1Default22Data,
    property1Default23Props: property1Default23Data,
    property1Default24Props: property1Default24Data,
    property1Default25Props: property1Default25Data,
};

const voucherToolV3RAPData = {
    regionalAccessPointsV2Props: regionalAccessPointsV2Data,
};

const resourceAddedOrNotNotAdded32Data = {
    affordableHousing: "Affordable Housing",
    theLargestAndMost: "The largest and most trusted source for all Affordable Housing properties and programs in the United States.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNoData = {
    name: "King County Housing Authority Rental Search",
    kchaHelpsRentersI: "KCHA helps renters in King County find affordable, private-market homes. You can use either site to search for homes based on location, features, and nearby services.",
    linkToResource: "Link to Resource",
};

const resourcesV3Data = {
    resourceAddedOrNotNotAdded32Props: resourceAddedOrNotNotAdded32Data,
    resourceAddedOrNotResourceAddedOrNoProps: resourceAddedOrNotResourceAddedOrNoData,
};

const property1Audio3Data = {
    className: "tutorial-buttons-5",
};

const logo6Data = {
    className: "logo-5",
};

const homePageLink5Data = {
    className: "home-page-link-4",
};

const moreResources6Data = {
    className: "more-resources-10",
};

const property1PhonePopUpDefaultData = {
    wouldYouLikeToGe: "Would you like to get a text or an email?",
    email: "Email",
    text: "Text",
};

const voucherToolV3DownloadInfoData = {
    voucherTool: "Voucher Tool",
    line1: "",
    getSummaryViaTextOrEmail: "Get summary via text or email",
    downloadPdfOfSummary: "Download PDF of summary",
    property1AudioProps: property1Audio3Data,
    logoProps: logo6Data,
    homePageLinkProps: homePageLink5Data,
    moreResourcesProps: moreResources6Data,
    property1PhonePopUpDefaultProps: property1PhonePopUpDefaultData,
};

const moreResources7Data = {
    className: "more-resources-12",
};

const resourceAddedOrNotNotAdded2Data = {
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo2Data = {
    universityDistrictFoodBank: "University District Food Bank",
    ourMissionIsToBu: "Our mission is to build a hunger-free Northeast Seattle by providing our neighbors with reliable access to healthy food and life-changing resources.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotNotAdded3Data = {
    housingChoiceVouchers: "Rosie’s Tiny House Village",
    theHousingChoiceV: "LIHI provides a variety of supportive services to help residents maintain their housing and develop self-sufficiency. Our Tiny House Villages provide shelter and case management for residents of 36 tiny houses.",
};

const resourcesV32Data = {
    moreResources: "More Resources",
    spanText1: "If you have already used our voucher tools and are interested in other resources, you’re in the right place! ",
    spanText2: "Click on any resource to learn more.",
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    temporaryHousingResources: "Temporary Housing Resources",
    linkToResource: "Link to Resource",
    moreResourcesProps: moreResources7Data,
    resourceAddedOrNotNotAdded2Props: resourceAddedOrNotNotAdded2Data,
    resourceAddedOrNotResourceAddedOrNo2Props: resourceAddedOrNotResourceAddedOrNo2Data,
    resourceAddedOrNotNotAdded3Props: resourceAddedOrNotNotAdded3Data,
};

const property1Audio4Data = {
    className: "tutorial-buttons-6",
};

const voucherToolV3NextStepsData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "If you’re connected to a homeless service provider: ",
    spanText2: <>contact them for how to apply.<br /></>,
    spanText3: <><br />If you’re not connected to a homeless service provider: <br />schedule an appointment through one <br />of King County’s Coordinated Entry for <br />All </>,
    spanText4: "Regional Access Points",
    spanText5: <> on the <br />next page.<br /><br /><br /><br /></>,
    spanText6: "Click ",
    spanText7: "next",
    spanText8: " to see the Regional Access Points.",
    givingVoucher1: "/img/giving-voucher-1@2x.png",
    property1AudioProps: property1Audio4Data,
};

const voucherToolV3DisqualificationsNoticData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "There’s a possibility you might be disqualified for the voucher if you apply, based on the box you checked on the previous page. You can still apply, but your application is likely to be disqualified. Refer to the ",
    spanText2: "“More Resources” ",
    spanText3: <>page in the upper right-hand corner of the screen for other programs you may be eligible for.<br /><br /><br /><br /></>,
    spanText4: "Note:",
    spanText5: " ",
    spanText6: <>There are exceptions under the federal Violence Against Women Act for survivors who were convicted of producing methamphetamines if the conviction was due <br />to abuse.</>,
};

const property1Default3Data = {
    className: "havent-applied-button-1",
};

const property1IneligibleButtonData = {
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
};

const property1Default32Data = {
    children: "I’ve applied for a voucher and have received one.",
};

const voucherToolsPageData = {
    property1DefaultProps: property1Default3Data,
    property1IneligibleButtonProps: property1IneligibleButtonData,
    property1Default3Props: property1Default32Data,
};

const property1Variant51Data = {
    proofOfIncome: "Proof of Income",
};

const property1Variant52Data = {
    proofOfIncome: "Proof of Date of Birth",
    className: "document-button-1",
};

const property1Variant53Data = {
    proofOfIncome: "Social Security Number",
    className: "document-button-2",
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
    property1Variant51Props: property1Variant51Data,
    property1Variant52Props: property1Variant52Data,
    property1Variant53Props: property1Variant53Data,
};

const property1Default4Data = {
    checkIfAnyOfThe: "Check if any of the following apply to you:",
    youreARegistered: <>You’re a registered lifetime sex offender<br />You have been convicted of the production of methamphetamines in federally assisted housing<br />You have a history of violence or abuse towards Public Housing Agencies staff<br />Nobody in the applying household is documented for residency status<br />None of the above apply to me</>,
};

const voucherToolV3DisqualificationsData = {
    property1Default4Props: property1Default4Data,
};

const property1Audio10Data = {
    className: "tutorial-buttons-12",
};

const tipTypeBackButtonData = {
    thisButtonWillTak: "This button will take you to the previous screen.",
};

const voucherToolV3TutorialBackButtonData = {
    property1AudioProps: property1Audio10Data,
    tipTypeBackButtonProps: tipTypeBackButtonData,
};

const property1Audio11Data = {
    className: "tutorial-buttons-13",
};

const tipTypeAudioButtonData = {
    thisButtonWillRea: "This button will read the text on the screen out loud to you.",
};

const voucherToolV3TutorialAudioButtonData = {
    property1AudioProps: property1Audio11Data,
    tipTypeAudioButtonProps: tipTypeAudioButtonData,
};

const property1Audio12Data = {
    className: "tutorial-buttons-14",
};

const tipTypeNextButtonData = {
    thisButtonWillTak: "This button will take you to the next section.",
};

const voucherToolV3TutorialNextButtonData = {
    property1AudioProps: property1Audio12Data,
    tipTypeNextButtonProps: tipTypeNextButtonData,
};

const property1Audio13Data = {
    className: "tutorial-buttons-15",
};

const selectionsDefaultData = {
    spanText1: <>In order to be eligible for an emergency housing voucher, you must be experiencing one of the following.<br /></>,
    spanText2: <><br />Please select all that apply to you.</>,
    homelessAtRiskOf: <>Homeless  <br />At Risk of Homelessness<br />Fleeing or attempting to flee domestic violence<br />Dating violence<br />Sexual assault<br />Stalking or human trafficking<br />None of the above apply to me</>,
};

const voucherToolV3EligibilityQuestionsData = {
    property1AudioProps: property1Audio13Data,
    selectionsDefaultProps: selectionsDefaultData,
};

