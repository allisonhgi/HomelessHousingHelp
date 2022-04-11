import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import VoucherToolsPageReceivedExpand from "./components/VoucherToolsPageReceivedExpand";
import HomePage from "./components/HomePage";
import VoucherToolTutorialNextButton from "./components/VoucherToolTutorialNextButton";
import AccountPageAltV2 from "./components/AccountPageAltV2";
import VoucherToolTutorialBackButton from "./components/VoucherToolTutorialBackButton";
import HomePageV3 from "./components/HomePageV3";
import VoucherToolTutorialSaveDataButton from "./components/VoucherToolTutorialSaveDataButton";
import VoucherToolTutorialAudioButton from "./components/VoucherToolTutorialAudioButton";
import VoucherToolV3DownloadInfo from "./components/VoucherToolV3DownloadInfo";
import HousingTool from "./components/HousingTool";
import VoucherToolStartingScreen from "./components/VoucherToolStartingScreen";
import Resources from "./components/Resources";
import LogInPage from "./components/LogInPage";
import VoucherToolPopUp from "./components/VoucherToolPopUp";
import VoucherToolV3RAP from "./components/VoucherToolV3RAP";
import VoucherToolsPage from "./components/VoucherToolsPage";
import ProgressSavedPopUp from "./components/ProgressSavedPopUp";
import VoucherToolV3DownloadInfo2 from "./components/VoucherToolV3DownloadInfo2";
import ResourcesV3 from "./components/ResourcesV3";
import VoucherToolV2Disclaimers from "./components/VoucherToolV2Disclaimers";
import VoucherToolEligibilityQuestions from "./components/VoucherToolEligibilityQuestions";
import AccountPage from "./components/AccountPage";
import SignUpPage from "./components/SignUpPage";
import VoucherToolNextSteps from "./components/VoucherToolNextSteps";
import ResourcesLoggedIn from "./components/ResourcesLoggedIn";
import VoucherToolDisqualifications from "./components/VoucherToolDisqualifications";
import VoucherToolV3NextSteps from "./components/VoucherToolV3NextSteps";
import ProgressSavedPopUp3 from "./components/ProgressSavedPopUp3";
import VoucherToolPopUp3 from "./components/VoucherToolPopUp3";
import HomePageNewNavBarUserLoggedIn from "./components/HomePageNewNavBarUserLoggedIn";
import UserMenuPopUpLoggedIn from "./components/UserMenuPopUpLoggedIn";
import AccountPageVoucherClick from "./components/AccountPageVoucherClick";
import ResourcesV2 from "./components/ResourcesV2";
import AccountPageAltV22 from "./components/AccountPageAltV22";
import VoucherToolV2RAP from "./components/VoucherToolV2RAP";
import AccountPageMyResourcesClick from "./components/AccountPageMyResourcesClick";
import VoucherToolV2DisqualificationsNotic from "./components/VoucherToolV2DisqualificationsNotic";
import VoucherToolRequiredPaperwork from "./components/VoucherToolRequiredPaperwork";
import VoucherToolV2StartingScreen from "./components/VoucherToolV2StartingScreen";
import VoucherToolRAP from "./components/VoucherToolRAP";
import VoucherToolV3RequiredPaperwork from "./components/VoucherToolV3RequiredPaperwork";
import VoucherToolV2NextSteps from "./components/VoucherToolV2NextSteps";
import VoucherToolV3RequiredPaperwork2 from "./components/VoucherToolV3RequiredPaperwork2";
import VoucherToolDisqualificationsNoticeP from "./components/VoucherToolDisqualificationsNoticeP";
import VoucherToolV2DownloadInfo from "./components/VoucherToolV2DownloadInfo";
import VoucherToolV3Disqualifications from "./components/VoucherToolV3Disqualifications";
import VoucherToolV3TutorialBackButton from "./components/VoucherToolV3TutorialBackButton";
import VoucherToolV3Disclaimers from "./components/VoucherToolV3Disclaimers";
import VoucherToolV2Disqualifications from "./components/VoucherToolV2Disqualifications";
import VoucherToolV3EligibilityQuestions from "./components/VoucherToolV3EligibilityQuestions";
import VoucherToolV3TutorialNextButton from "./components/VoucherToolV3TutorialNextButton";
import VoucherToolV3TutorialAudioButton from "./components/VoucherToolV3TutorialAudioButton";
import VoucherToolV2TutorialSaveDataButton from "./components/VoucherToolV2TutorialSaveDataButton";
import AccountPageAltV2MyResourcesClick from "./components/AccountPageAltV2MyResourcesClick";
import VoucherToolTutorialNextButton2 from "./components/VoucherToolTutorialNextButton2";
import VoucherToolV2EligibilityQuestions from "./components/VoucherToolV2EligibilityQuestions";
import VoucherToolV3StartingScreen from "./components/VoucherToolV3StartingScreen";
import VoucherToolsPage2 from "./components/VoucherToolsPage2";
import ResourcesV32 from "./components/ResourcesV32";
import VoucherToolV2TutorialBackButton from "./components/VoucherToolV2TutorialBackButton";
import VoucherToolV2TutorialAudioButton from "./components/VoucherToolV2TutorialAudioButton";
import VoucherToolsPageReceivedExpand2 from "./components/VoucherToolsPageReceivedExpand2";
import PhonePopUpV2PhonePopUpDefault from "./components/PhonePopUpV2PhonePopUpDefault";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/voucher-tools-page-received-expand-1">
            <VoucherToolsPageReceivedExpand {...voucherToolsPageReceivedExpandData} />
          </Route>
          <Route path="/home-page">
            <HomePage {...homePageData} />
          </Route>
          <Route path="/voucher-tool-tutorial-next-button-1">
            <VoucherToolTutorialNextButton
              place="Home"
              myAccount="My Account"
              moreResources="More Resources"
              voucherTool="Voucher Tool"
              line1=""
              logoProps={voucherToolTutorialNextButtonData.logoProps}
            />
          </Route>
          <Route path="/account-page-alt-v2-1">
            <AccountPageAltV2
              pickUpWhereYouLe="Pick up where you left off with the voucher tool?"
              place="No"
              yes="Yes"
            />
          </Route>
          <Route path="/voucher-tool-tutorial-back-button">
            <VoucherToolTutorialBackButton {...voucherToolTutorialBackButtonData} />
          </Route>
          <Route path="/home-page-v3">
            <HomePageV3 {...homePageV3Data} />
          </Route>
          <Route path="/voucher-tool-tutorial-save-data-button">
            <VoucherToolTutorialSaveDataButton {...voucherToolTutorialSaveDataButtonData} />
          </Route>
          <Route path="/voucher-tool-tutorial-audio-button">
            <VoucherToolTutorialAudioButton {...voucherToolTutorialAudioButtonData} />
          </Route>
          <Route path="/voucher-tool-v3-download-info-1">
            <VoucherToolV3DownloadInfo
              voucherTool="Voucher Tool"
              line1=""
              getSummaryViaTextOrEmail="Get summary via text or email"
              downloadPdfOfSummary="Download PDF of summary"
              property1AudioProps={voucherToolV3DownloadInfoData.property1AudioProps}
              textInfoProps={voucherToolV3DownloadInfoData.textInfoProps}
            />
          </Route>
          <Route path="/housing-tool">
            <HousingTool {...housingToolData} />
          </Route>
          <Route path="/voucher-tool-starting-screen">
            <VoucherToolStartingScreen {...voucherToolStartingScreenData} />
          </Route>
          <Route path="/resources">
            <Resources {...resourcesData} />
          </Route>
          <Route path="/log-in-page">
            <LogInPage {...logInPageData} />
          </Route>
          <Route path="/voucher-tool-pop-up-1">
            <VoucherToolPopUp voucherToolPopUp2Props={voucherToolPopUpData.voucherToolPopUp2Props} />
          </Route>
          <Route path="/voucher-tool-v3-rap">
            <VoucherToolV3RAP
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3RAPData.property1AudioProps}
              regionalAccessPointsV2Props={voucherToolV3RAPData.regionalAccessPointsV2Props}
            />
          </Route>
          <Route path="/voucher-tools-page-1">
            <VoucherToolsPage
              resourceMatching="Resource Matching"
              ifYoureNotSureW="If you’re not sure which of our resources is right for you, get more information below."
              clickOnTheSection="Click on the section which best describes you:"
              property1DefaultProps={voucherToolsPageData.property1DefaultProps}
              property1IneligibleButtonProps={voucherToolsPageData.property1IneligibleButtonProps}
              property1Default4Props={voucherToolsPageData.property1Default4Props}
            />
          </Route>
          <Route path="/progress-saved-pop-up-1">
            <ProgressSavedPopUp progressSavedPopUp2Props={progressSavedPopUpData.progressSavedPopUp2Props} />
          </Route>
          <Route path="/voucher-tool-v3-download-info">
            <VoucherToolV3DownloadInfo2 {...voucherToolV3DownloadInfo2Data} />
          </Route>
          <Route path="/resources-v3-1">
            <ResourcesV3 {...resourcesV3Data} />
          </Route>
          <Route path="/voucher-tool-v2-disclaimers">
            <VoucherToolV2Disclaimers {...voucherToolV2DisclaimersData} />
          </Route>
          <Route path="/voucher-tool-eligibility-questions">
            <VoucherToolEligibilityQuestions {...voucherToolEligibilityQuestionsData} />
          </Route>
          <Route path="/account-page">
            <AccountPage {...accountPageData} />
          </Route>
          <Route path="/sign-up-page">
            <SignUpPage {...signUpPageData} />
          </Route>
          <Route path="/voucher-tool-next-steps">
            <VoucherToolNextSteps {...voucherToolNextStepsData} />
          </Route>
          <Route path="/resources-logged-in">
            <ResourcesLoggedIn {...resourcesLoggedInData} />
          </Route>
          <Route path="/voucher-tool-disqualifications">
            <VoucherToolDisqualifications {...voucherToolDisqualificationsData} />
          </Route>
          <Route path="/voucher-tool-v3-next-steps">
            <VoucherToolV3NextSteps {...voucherToolV3NextStepsData} />
          </Route>
          <Route path="/progress-saved-pop-up">
            <ProgressSavedPopUp3 progressSavedPopUp4Props={progressSavedPopUp3Data.progressSavedPopUp4Props} />
          </Route>
          <Route path="/voucher-tool-pop-up">
            <VoucherToolPopUp3 voucherToolPopUp4Props={voucherToolPopUp3Data.voucherToolPopUp4Props} />
          </Route>
          <Route path="/:path(|home-page-new-nav-bar-user-logged-in)">
            <HomePageNewNavBarUserLoggedIn {...homePageNewNavBarUserLoggedInData} />
          </Route>
          <Route path="/user-menu-pop-up-logged-in">
            <UserMenuPopUpLoggedIn
              userMenuPopUpLoggedIn2Props={userMenuPopUpLoggedInData.userMenuPopUpLoggedIn2Props}
            />
          </Route>
          <Route path="/account-page-voucher-click">
            <AccountPageVoucherClick {...accountPageVoucherClickData} />
          </Route>
          <Route path="/resources-v2">
            <ResourcesV2 {...resourcesV2Data} />
          </Route>
          <Route path="/account-page-alt-v2">
            <AccountPageAltV22
              name="John Doe"
              property1Default71Props={accountPageAltV22Data.property1Default71Props}
              property1Default72Props={accountPageAltV22Data.property1Default72Props}
            />
          </Route>
          <Route path="/voucher-tool-v2-rap">
            <VoucherToolV2RAP
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV2RAPData.property1AudioProps}
              regionalAccessPointsV2Props={voucherToolV2RAPData.regionalAccessPointsV2Props}
              property1SaveDataProps={voucherToolV2RAPData.property1SaveDataProps}
            />
          </Route>
          <Route path="/account-page-my-resources-click">
            <AccountPageMyResourcesClick {...accountPageMyResourcesClickData} />
          </Route>
          <Route path="/voucher-tool-v2-disqualifications-notice-page">
            <VoucherToolV2DisqualificationsNotic {...voucherToolV2DisqualificationsNoticData} />
          </Route>
          <Route path="/voucher-tool-required-paperwork">
            <VoucherToolRequiredPaperwork {...voucherToolRequiredPaperworkData} />
          </Route>
          <Route path="/voucher-tool-v2-starting-screen">
            <VoucherToolV2StartingScreen
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV2StartingScreenData.property1AudioProps}
              property1BackToHomeProps={voucherToolV2StartingScreenData.property1BackToHomeProps}
              property1SaveDataProps={voucherToolV2StartingScreenData.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tool-rap">
            <VoucherToolRAP {...voucherToolRAPData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork-1">
            <VoucherToolV3RequiredPaperwork {...voucherToolV3RequiredPaperworkData} />
          </Route>
          <Route path="/voucher-tool-v2-next-steps">
            <VoucherToolV2NextSteps {...voucherToolV2NextStepsData} />
          </Route>
          <Route path="/voucher-tool-v3-required-paperwork">
            <VoucherToolV3RequiredPaperwork2 {...voucherToolV3RequiredPaperwork2Data} />
          </Route>
          <Route path="/voucher-tool-disqualifications-notice-page">
            <VoucherToolDisqualificationsNoticeP {...voucherToolDisqualificationsNoticePData} />
          </Route>
          <Route path="/voucher-tool-v2-download-info">
            <VoucherToolV2DownloadInfo
              voucherTool="Voucher Tool"
              line1=""
              getSummaryViaTextOrEmail="Get summary via text or email"
              downloadPdfOfSummary="Download PDF of summary"
              property1AudioProps={voucherToolV2DownloadInfoData.property1AudioProps}
              textInfoProps={voucherToolV2DownloadInfoData.textInfoProps}
              property1SaveDataProps={voucherToolV2DownloadInfoData.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-disqualifications">
            <VoucherToolV3Disqualifications
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3DisqualificationsData.property1AudioProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-tutorial-back-button">
            <VoucherToolV3TutorialBackButton
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3TutorialBackButtonData.property1AudioProps}
              tipTypeBackButton2Props={voucherToolV3TutorialBackButtonData.tipTypeBackButton2Props}
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
              property1AudioProps={voucherToolV3DisclaimersData.property1AudioProps}
            />
          </Route>
          <Route path="/voucher-tool-v2-disqualifications">
            <VoucherToolV2Disqualifications
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV2DisqualificationsData.property1AudioProps}
              property1SaveDataProps={voucherToolV2DisqualificationsData.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-eligibility-questions">
            <VoucherToolV3EligibilityQuestions
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3EligibilityQuestionsData.property1AudioProps}
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
          <Route path="/voucher-tool-v3-tutorial-audio-button">
            <VoucherToolV3TutorialAudioButton
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3TutorialAudioButtonData.property1AudioProps}
              tipTypeAudioButton2Props={voucherToolV3TutorialAudioButtonData.tipTypeAudioButton2Props}
            />
          </Route>
          <Route path="/voucher-tool-v2-tutorial-save-data-button">
            <VoucherToolV2TutorialSaveDataButton
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV2TutorialSaveDataButtonData.property1AudioProps}
              property1SaveDataProps={voucherToolV2TutorialSaveDataButtonData.property1SaveDataProps}
              tipTypeSaveDataProps={voucherToolV2TutorialSaveDataButtonData.tipTypeSaveDataProps}
            />
          </Route>
          <Route path="/account-page-alt-v2-my-resources-click">
            <AccountPageAltV2MyResourcesClick
              name="John Doe"
              housingChoiceVouchers="Housing Choice Vouchers"
              theHousingChoiceV="The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses."
              removeFromResources=" Remove From Resources"
              exit="Exit"
              savedVoucherToolData={
                <>
                  My
                  <br />
                  Saved
                  <br />
                  Resources
                </>
              }
              bixProps={accountPageAltV2MyResourcesClickData.bixProps}
            />
          </Route>
          <Route path="/voucher-tool-tutorial-next-button">
            <VoucherToolTutorialNextButton2
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolTutorialNextButton2Data.property1AudioProps}
              tipTypeNextButtonProps={voucherToolTutorialNextButton2Data.tipTypeNextButtonProps}
              property1SaveDataProps={voucherToolTutorialNextButton2Data.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tool-v2-eligibility-questions">
            <VoucherToolV2EligibilityQuestions
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV2EligibilityQuestionsData.property1AudioProps}
              property1SaveDataProps={voucherToolV2EligibilityQuestionsData.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tool-v3-starting-screen">
            <VoucherToolV3StartingScreen
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV3StartingScreenData.property1AudioProps}
              property1BackToHomeProps={voucherToolV3StartingScreenData.property1BackToHomeProps}
            />
          </Route>
          <Route path="/voucher-tools-page">
            <VoucherToolsPage2
              resourceMatching="Resource Matching"
              ifYoureNotSureW="If you’re not sure which of our resources is right for you, get more information below."
              clickOnTheSection="Click on the section which best describes you:"
              homePageLinkProps={voucherToolsPage2Data.homePageLinkProps}
              property1DefaultProps={voucherToolsPage2Data.property1DefaultProps}
              property1IneligibleButtonProps={voucherToolsPage2Data.property1IneligibleButtonProps}
              property1Default4Props={voucherToolsPage2Data.property1Default4Props}
            />
          </Route>
          <Route path="/resources-v3">
            <ResourcesV32
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
              resourceAddedOrNotNotAdded5Props={resourcesV32Data.resourceAddedOrNotNotAdded5Props}
              resourceAddedOrNotResourceAddedOrNo3Props={resourcesV32Data.resourceAddedOrNotResourceAddedOrNo3Props}
            />
          </Route>
          <Route path="/voucher-tool-v2-tutorial-back-button">
            <VoucherToolV2TutorialBackButton
              voucherTool="Voucher Tool"
              line1=""
              tipTypeBackButton2Props={voucherToolV2TutorialBackButtonData.tipTypeBackButton2Props}
              property1SaveDataProps={voucherToolV2TutorialBackButtonData.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tool-v2-tutorial-audio-button">
            <VoucherToolV2TutorialAudioButton
              voucherTool="Voucher Tool"
              line1=""
              property1AudioProps={voucherToolV2TutorialAudioButtonData.property1AudioProps}
              tipTypeAudioButton2Props={voucherToolV2TutorialAudioButtonData.tipTypeAudioButton2Props}
              property1SaveDataProps={voucherToolV2TutorialAudioButtonData.property1SaveDataProps}
            />
          </Route>
          <Route path="/voucher-tools-page-received-expand">
            <VoucherToolsPageReceivedExpand2 {...voucherToolsPageReceivedExpand2Data} />
          </Route>
          <Route path="/phone-pop-up-v2-phone-pop-up-default">
            <PhonePopUpV2PhonePopUpDefault
              property1PhonePopUpDefaultProps={phonePopUpV2PhonePopUpDefaultData.property1PhonePopUpDefaultProps}
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

const voucherButton1Data = {
    iHaveAVoucher: "I need a voucher.",
};

const voucherButton2Data = {
    iHaveAVoucher: "I have a voucher.",
    className: "voucher-button-1",
};

const homePageData = {
    logIn: "Log In",
    moreResources: "More Resources",
    voucherTools: "Voucher Tools",
    title: "Housing Voucher Help",
    connectingHousingR: "Connecting housing resources with the people who need them.",
    whetherYoureACas: "Whether you’re a case manager guiding a client through this process or you’re getting an emergency housing voucher for yourself, we provide you with the tools necessary to help you achieve your goals.",
    noWeCantPersona: "No, we can’t personally distribute emergency housing vouchers. Vouchers have been given to specific organizations, but we will help you find out whether you’re eligible and where you can go to apply.",
    emergencyHousingVo: "Emergency Housing Vouchers, or EHVs, are similar to a “Section 8 Voucher” or a “Housing Choice Voucher” and specifically target people who are currently experiencing or at imminent risk of homelessness. EHV offer limited financial assistance for move in and housing navigation, but do not include any supportive services.",
    ourServices: "Our Services",
    weAreCurrentlyTar: "We are currently targeting the underuse of emergency housing vouchers in the Seattle area. We also aim to help you at every step - whether you need a voucher, are on the waitlist and want information about other resources, or have been granted a voucher - we’re here to help. Keep scrolling for more information on the vouchers!",
    ourMission: "Our Mission",
    doWeDistributeVouchers: "Do we distribute vouchers?",
    iNeedAVoucher: "I need a voucher.",
    moreInformation: "More Information",
    whatIsAnEmergencyHousingVoucher: "What is an emergency housing voucher?",
    logoProps: logo2Data,
    voucherButton1Props: voucherButton1Data,
    voucherButton2Props: voucherButton2Data,
};

const logo3Data = {
    className: "logo-2",
};

const voucherToolTutorialNextButtonData = {
    logoProps: logo3Data,
};

const logo5Data = {
    className: "logo-4",
};

const tipTypeBackButtonData = {
    thisButtonWillTak: "This button will take you  to the previous screen.",
};

const property1SaveData2Data = {
    className: "tutorial-buttons-39",
};

const voucherToolTutorialBackButtonData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo5Data,
    tipTypeBackButtonProps: tipTypeBackButtonData,
    property1SaveDataProps: property1SaveData2Data,
};

const logo6Data = {
    className: "logo-5",
};

const voucherButtonV21Data = {
    iHaveAVoucher: "I have a voucher.",
};

const iveAppliedForAVoucher1Data = {
    children: "I’ve applied for a voucher.",
};

const voucherButtonV22Data = {
    iHaveAVoucher: "I need a voucher.",
    className: "voucher-button-v2-2",
};

const homePageV3Data = {
    whetherYoureACas: "Whether you’re a case manager guiding a client through this process or you’re getting an emergency housing voucher for yourself, we provide you with the tools necessary to help you achieve your goals.",
    spanText1: "Emergency Housing Vouchers, or EHVs, target people who are currently experiencing or at risk of homelessness. EHV’s offer limited financial assistance for move in and housing navigation, but do not include any supportive services. For more details on EHV’s, go to: ",
    spanText2: "https://www.hud.gov/ehv",
    ourServices: "Our Services",
    weAreCurrentlyTar: "We are currently targeting the underuse of emergency housing vouchers in the Seattle area. We also aim to help you at every step - whether you need a voucher, are on the waitlist and want information about other resources, or have been granted a voucher - we’re here to help. Keep scrolling for more information on the vouchers!",
    ourMission: "Our Mission",
    whatIsAnEmergencyHousingVoucher: "What is an emergency housing voucher?",
    noWeCantPersona: "No, we can’t personally distribute emergency housing vouchers. Vouchers have been given to specific organizations, but we will help you find out whether you’re eligible and where you can go to apply.",
    housingVoucherHelp: "Housing Voucher Help",
    connectingHousingR: "Connecting housing resources with the people who need them.",
    doWeDistributeVouchers: "Do we distribute vouchers?",
    moreInformation: "More Information",
    unsureWhichToClick: "Unsure which to click?",
    getMoreInformation: "Get more information",
    logoProps: logo6Data,
    voucherButtonV21Props: voucherButtonV21Data,
    iveAppliedForAVoucherProps: iveAppliedForAVoucher1Data,
    voucherButtonV22Props: voucherButtonV22Data,
};

const logo7Data = {
    className: "logo-6",
};

const property1Audio3Data = {
    className: "tutorial-buttons-5",
};

const voucherToolTutorialSaveDataButtonData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    text1: "3/4",
    thisButtonWillSav: <>This button will save your work so you can come back to it later.<br /><br />Click the arrow for the next tip.</>,
    logoProps: logo7Data,
    property1AudioProps: property1Audio3Data,
};

const logo8Data = {
    className: "logo-7",
};

const property1Audio4Data = {
    className: "tutorial-buttons-6",
};

const tipTypeAudioButtonData = {
    thisButtonWillRea: "This button will read the text on the screen out loud to you.",
};

const voucherToolTutorialAudioButtonData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo8Data,
    property1AudioProps: property1Audio4Data,
    tipTypeAudioButtonProps: tipTypeAudioButtonData,
};

const property1Audio5Data = {
    className: "tutorial-buttons-7",
};

const textInfo1Data = {
    children: <>You’ve reached the end of our voucher tool! <br /><br />If you’d like, please choose how you’d like to get a summary of the information provided by this tool:</>,
};

const voucherToolV3DownloadInfoData = {
    property1AudioProps: property1Audio5Data,
    textInfoProps: textInfo1Data,
};

const property1Default2Data = {
    trySeattle: "Try “Seattle”",
    search: "Search",
};

const property1Default3Data = {
    homeType: "Home Type",
};

const evaarrowLeftFill2Data = {
    className: "evaarrow-left-fill-22",
};

const property1Variant2Data = {
    bedrooms: "Bedrooms",
    evaarrowLeftFillProps: evaarrowLeftFill2Data,
};

const property1Variant3Data = {
    moreFilters: "More Filters",
};

const housingToolData = {
    enterANeighborhood: "Enter a neighborhood, city, or zip code to search apartments:",
    findAHome: <>Find<br />a Home</>,
    useYourHousingVou: "Use your housing voucher to find the right place for you.",
    dontHaveAHousingVoucherYet: "Don’t have a housing voucher yet?",
    filter: "Filter:",
    goToOurVoucherApplicationTool: "Go to our Voucher Application Tool",
    property1Default2Props: property1Default2Data,
    property1Default3Props: property1Default3Data,
    property1Variant2Props: property1Variant2Data,
    property1Variant3Props: property1Variant3Data,
};

const logo11Data = {
    className: "logo-10",
};

const property1Audio6Data = {
    className: "tutorial-buttons-8",
};

const property1WelcomeData = {
    obot: <>Welcome! <br /><br />This tool is meant to help connect people like you with an emergency housing voucher. Before we begin, we’ll show you a few helpful features!</>,
    clickNextToCont: "Click “Next” to continue or “Skip” to skip the tutorial.",
    tutorial1: "/img/tutorial-1@2x.png",
    skip: "Skip",
};

const toolQuestionScreenData = {
    property1WelcomeProps: property1WelcomeData,
};

const property1SaveData5Data = {
    className: "tutorial-buttons-42",
};

const voucherToolStartingScreenData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo11Data,
    property1AudioProps: property1Audio6Data,
    toolQuestionScreenProps: toolQuestionScreenData,
    property1SaveDataProps: property1SaveData5Data,
};

const logo12Data = {
    className: "logo-11",
};

const resourcesData = {
    logIn: "Log In",
    voucherTools: "Voucher Tools",
    moreResources: "More Resources",
    ifYouHaveAlready: <>If you have already used our voucher tools and are interested in other resources, you’re in the right place! Click on any resource to learn more. <br /><br />Resources can also be saved and referred back to on your account page.</>,
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    temporaryHousingResources: "Temporary Housing Resources",
    logoProps: logo12Data,
};

const logo13Data = {
    className: "logo-12",
};

const property1Variant321Data = {
    children: "User Name",
};

const property1Variant322Data = {
    children: "Password",
    className: "text-field-2",
};

const logInPageData = {
    place: "Home",
    moreResources: "More Resources",
    voucherTools: "Voucher Tools",
    logIn1: "Log In",
    spanText1: <>We’re happy you’re back! <br /><br />Enter your information below to log in.<br /><br />Don’t have an account? Click </>,
    spanText2: "here",
    spanText3: " to sign up instead!",
    logIn2: "Log In",
    logoProps: logo13Data,
    property1Variant321Props: property1Variant321Data,
    property1Variant322Props: property1Variant322Data,
};

const voucherToolPopUp2Data = {
    thisWillTakeYouB: "This will take you back to the home page. Are you sure that you would like to exit?",
    noStayOnTheVoucherTool: "No, stay on the voucher tool",
    yesTakeMeToTheHomePage: "Yes, take me to the home page",
};

const voucherToolPopUpData = {
    voucherToolPopUp2Props: voucherToolPopUp2Data,
};

const property1Audio7Data = {
    className: "tutorial-buttons-9",
};

const property1Default821Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default822Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2",
};

const property1Default823Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-v2",
};

const property1Default824Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-v2",
};

const property1Default825Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-v2",
};

const regionalAccessPointsV21Data = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1Default81Props: property1Default821Data,
    property1Default82Props: property1Default822Data,
    property1Default83Props: property1Default823Data,
    property1Default84Props: property1Default824Data,
    property1Default85Props: property1Default825Data,
};

const voucherToolV3RAPData = {
    property1AudioProps: property1Audio7Data,
    regionalAccessPointsV2Props: regionalAccessPointsV21Data,
};

const property1Default4Data = {
    className: "havent-applied-button-1",
};

const property1IneligibleButton1Data = {
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
};

const property1Default42Data = {
    children: "I’ve applied for a voucher and have received one.",
};

const voucherToolsPageData = {
    property1DefaultProps: property1Default4Data,
    property1IneligibleButtonProps: property1IneligibleButton1Data,
    property1Default4Props: property1Default42Data,
};

const progressSavedPopUp2Data = {
    progressHasBeenSa: "Progress has been saved. View saved data under “My Account”",
};

const progressSavedPopUpData = {
    progressSavedPopUp2Props: progressSavedPopUp2Data,
};

const property1Audio8Data = {
    className: "tutorial-buttons-10",
};

const logo16Data = {
    className: "logo-15",
};

const homePageLink7Data = {
    className: "home-page-link-6",
};

const textInfo2Data = {
    children: <>You’ve reached the end of our voucher tool! <br /><br />If you’d like, please choose how you’d like to get a summary of the information provided by this tool:</>,
};

const moreResources4Data = {
    className: "more-resources-30",
};

const voucherToolV3DownloadInfo2Data = {
    voucherTool: "Voucher Tool",
    line1: "",
    getSummaryViaTextOrEmail: "Get summary via text or email",
    downloadPdfOfSummary: "Download PDF of summary",
    property1AudioProps: property1Audio8Data,
    logoProps: logo16Data,
    homePageLinkProps: homePageLink7Data,
    textInfoProps: textInfo2Data,
    moreResourcesProps: moreResources4Data,
};

const resourceAddedOrNotNotAdded3Data = {
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo2Data = {
    universityDistrictFoodBank: "University District Food Bank",
    ourMissionIsToBu: "Our mission is to build a hunger-free Northeast Seattle by providing our neighbors with reliable access to healthy food and life-changing resources.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotNotAdded4Data = {
    housingChoiceVouchers: "Rosie’s Tiny House Village",
    theHousingChoiceV: "LIHI provides a variety of supportive services to help residents maintain their housing and develop self-sufficiency. Our Tiny House Villages provide shelter and case management for residents of 36 tiny houses.",
};

const resourcesV3Data = {
    moreResources: "More Resources",
    spanText1: "If you have already used our voucher tools and are interested in other resources, you’re in the right place! ",
    spanText2: "Click on any resource to learn more.",
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    temporaryHousingResources: "Temporary Housing Resources",
    linkToResource: "Link to Resource",
    resourceAddedOrNotNotAdded3Props: resourceAddedOrNotNotAdded3Data,
    resourceAddedOrNotResourceAddedOrNo2Props: resourceAddedOrNotResourceAddedOrNo2Data,
    resourceAddedOrNotNotAdded4Props: resourceAddedOrNotNotAdded4Data,
};

const property1Audio9Data = {
    className: "tutorial-buttons-11",
};

const property1SaveData6Data = {
    className: "tutorial-buttons-43",
};

const voucherToolV2DisclaimersData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: <>One final note before you begin:<br /><br />We </>,
    spanText2: "cannot distribute vouchers",
    spanText3: <>, but this tool will help you know what resources you will need to apply, your voucher eligibility, <br />and where to go to apply. <br /><br />Click “Next” to continue.</>,
    voucherApplying1: "/img/voucher-applying-1@1x.png",
    property1AudioProps: property1Audio9Data,
    property1SaveDataProps: property1SaveData6Data,
};

const logo19Data = {
    className: "logo-18",
};

const property1Audio10Data = {
    className: "tutorial-buttons-12",
};

const property1SaveData7Data = {
    className: "tutorial-buttons-44",
};

const voucherToolEligibilityQuestionsData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo19Data,
    property1AudioProps: property1Audio10Data,
    property1SaveDataProps: property1SaveData7Data,
};

const logo20Data = {
    className: "logo-19",
};

const property1Default51Data = {
    savedVoucherToolData: "Saved Voucher Tool Data",
};

const property1Default52Data = {
    savedVoucherToolData: "My Saved Resources",
    className: "profile-section-small-1",
};

const accountPageData = {
    place: "Home",
    moreResources: "More Resources",
    voucherTools: "Voucher Tools",
    name: "John Doe",
    addInfo: "Add Info",
    yourProfileIs85Complete: "Your profile is 85% complete",
    personalInformation: "Personal Information",
    spanText1: "Full Name: ",
    spanText2: <>John Doe<br /></>,
    spanText3: "Housing Status: ",
    spanText4: <>At-Risk<br /></>,
    spanText5: "Email: ",
    spanText6: <>jdoe@gmail.com<br /></>,
    spanText7: "Case Manager: ",
    spanText8: <>Clark Kent<br /></>,
    spanText9: "Case Manager Contact: ",
    spanText10: "kentc@gmail.com",
    edit: "Edit",
    logoProps: logo20Data,
    property1Default51Props: property1Default51Data,
    property1Default52Props: property1Default52Data,
};

const logo21Data = {
    className: "logo-20",
};

const property1Variant323Data = {
    children: "Full Name",
    className: "text-field-3",
};

const property1Variant324Data = {
    children: "Email (not required)",
    className: "text-field-4",
};

const property1Variant325Data = {
    children: "User Name",
    className: "text-field-5",
};

const property1Variant326Data = {
    children: "Password",
    className: "text-field",
};

const signUpPageData = {
    place: "Home",
    moreResources: "More Resources",
    voucherTools: "Voucher Tools",
    signUp1: "Sign Up",
    spanText1: <>We’re happy you’re here! <br /><br />Enter your information below to sign up and get started.<br /><br />Already have an account? Click </>,
    spanText2: "here",
    spanText3: " to log in instead!",
    signUp2: "Sign Up",
    logoProps: logo21Data,
    property1Variant321Props: property1Variant323Data,
    property1Variant322Props: property1Variant324Data,
    property1Variant323Props: property1Variant325Data,
    property1Variant324Props: property1Variant326Data,
};

const logo22Data = {
    className: "logo-21",
};

const property1Audio11Data = {
    className: "tutorial-buttons-13",
};

const textInfo3Data = {
    children: <><br /><br />If you’re eligible to apply and you’re connected to a homeless service provider, contact them for how to apply.<br /><br />If you’re eligible to apply and you’re not connected to a homeless service provider, schedule an appointment through one of King County’s Coordinated Entry for All Regional Access Points on the next page.</>,
    className: "text-info-2",
};

const property1SaveData8Data = {
    className: "tutorial-buttons-45",
};

const voucherToolNextStepsData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo22Data,
    property1AudioProps: property1Audio11Data,
    textInfoProps: textInfo3Data,
    property1SaveDataProps: property1SaveData8Data,
};

const logo23Data = {
    className: "logo-22",
};

const resourcesLoggedInData = {
    myAccount: "My Account",
    voucherTools: "Voucher Tools",
    moreResources: "More Resources",
    ifYouHaveAlready: "If you have already used our voucher tools and are interested in other resources, you’re in the right place! Click on any resource to learn more. Resources can alsoo be saved and referred back to on your account page.",
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV1: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    universityDistrictFoodBank: "University District Food Bank",
    theHousingChoiceV2: "Our mission is to build a hunger-free Northeast Seattle by providing our neighbors with reliable access to healthy food and life-changing resources.",
    addToMyResources: "+ Add to My Resources",
    temporaryHousingResources: "Temporary Housing Resources",
    logoProps: logo23Data,
};

const logo24Data = {
    className: "logo-23",
};

const property1Audio12Data = {
    className: "tutorial-buttons-14",
};

const disqualificationQuestionsData = {
    checkIfAnyOfThe: "Check if any of the following apply to you:",
    youreARegistered: <>You’re a registered lifetime sex offender<br />You have been convicted of the production of methamphetamines in federally assisted housing<br />You have a history of violence or abuse towards Public Housing Agencies staff<br />Nobody in the applying household is documented for residency status<br />None of the above apply to me</>,
};

const property1SaveData9Data = {
    className: "tutorial-buttons-46",
};

const voucherToolDisqualificationsData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo24Data,
    property1AudioProps: property1Audio12Data,
    disqualificationQuestionsProps: disqualificationQuestionsData,
    property1SaveDataProps: property1SaveData9Data,
};

const property1Audio13Data = {
    className: "tutorial-buttons-15",
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
    property1AudioProps: property1Audio13Data,
};

const group2Data = {
    className: "group-1",
};

const progressSavedPopUp4Data = {
    progressHasBeenSa: "Progress has been saved. View saved data under “My Account”",
    groupProps: group2Data,
};

const progressSavedPopUp3Data = {
    progressSavedPopUp4Props: progressSavedPopUp4Data,
};

const voucherToolPopUp4Data = {
    thisWillTakeYouB: "This will take you back to the home page. Are you sure that you would like to exit?",
    noStayOnTheVoucherTool: "No, stay on the voucher tool",
    yesTakeMeToTheHomePage: "Yes, take me to the home page",
};

const voucherToolPopUp3Data = {
    voucherToolPopUp4Props: voucherToolPopUp4Data,
};

const logo26Data = {
    className: "logo-25",
};

const voucherButtonV23Data = {
    iHaveAVoucher: "I have a voucher.",
    className: "voucher-button-v2-3",
};

const iveAppliedForAVoucher2Data = {
    children: "I’ve applied for a voucher.",
};

const voucherButtonV24Data = {
    iHaveAVoucher: "I need a voucher.",
    className: "voucher-button-v2-4",
};

const homePageNewNavBarUserLoggedInData = {
    whetherYoureACas: "Whether you’re a case manager guiding a client through this process or you’re getting an emergency housing voucher for yourself, we provide you with the tools necessary to help you achieve your goals.",
    spanText1: "Emergency Housing Vouchers, or EHVs, target people who are currently experiencing or at risk of homelessness. EHV’s offer limited financial assistance for move in and housing navigation, but do not include any supportive services. For more details on EHV’s, go to: ",
    spanText2: "https://www.hud.gov/ehv",
    ourServices: "Our Services",
    weAreCurrentlyTar: "We are currently targeting the underuse of emergency housing vouchers in the Seattle area. We also aim to help you at every step - whether you need a voucher, are on the waitlist and want information about other resources, or have been granted a voucher - we’re here to help. Keep scrolling for more information on the vouchers!",
    ourMission: "Our Mission",
    whatIsAnEmergencyHousingVoucher: "What is an emergency housing voucher?",
    noWeCantPersona: "No, we can’t personally distribute emergency housing vouchers. Vouchers have been given to specific organizations, but we will help you find out whether you’re eligible and where you can go to apply.",
    housingVoucherHelp: "Housing Voucher Help",
    connectingHousingR: "Connecting housing resources with the people who need them.",
    doWeDistributeVouchers: "Do we distribute vouchers?",
    moreInformation: "More Information",
    unsureWhichToClick: "Unsure which to click?",
    getMoreInformation: "Get more information",
    logoProps: logo26Data,
    voucherButtonV21Props: voucherButtonV23Data,
    iveAppliedForAVoucherProps: iveAppliedForAVoucher2Data,
    voucherButtonV22Props: voucherButtonV24Data,
};

const userMenuPopUpLoggedIn2Data = {
    line6: "",
    name: "John Doe",
    viewYourAccountPage: "View your account page",
    quickLinks: "Quick Links",
    mySavedResources: "My Saved Resources",
    view1: "View",
    vector2: "",
    savedVoucherToolData: "Saved Voucher Tool Data",
    view2: "View",
    vector3: "",
    findAHomeTool: "“Find a Home” Tool",
    view3: "View",
    voucherApplicationTool: "Voucher Application Tool",
    view4: "View",
    vector4: "",
};

const userMenuPopUpLoggedInData = {
    userMenuPopUpLoggedIn2Props: userMenuPopUpLoggedIn2Data,
};

const logo27Data = {
    className: "logo-26",
};

const accountPageVoucherClickData = {
    place1: "Home",
    moreResources: "More Resources",
    voucherTools: "Voucher Tools",
    rectangle1: "/img/rectangle-1@1x.png",
    pickUpWhereYouLe: "Pick up where you left off with the voucher tool?",
    place2: "No",
    yes: "Yes",
    logoProps: logo27Data,
};

const resourceAddedOrNotResourceAddedOrNo3Data = {
    className: "resource-section-4",
};

const resourcesV2Data = {
    moreResources: "More Resources",
    spanText1: <>If you have already used our voucher tools and are interested in other resources, you’re in the right place! Click on any resource to learn more. <br /><br />Resources can also be saved and </>,
    spanText2: "referred back to on your account page",
    spanText3: <>.<br /></>,
    spanText4: "",
    otherVoucherPrograms: "Other Voucher Programs",
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    foodAndShelterResources: "Food and Shelter Resources",
    temporaryHousingResources: "Temporary Housing Resources",
    resourceAddedOrNotResourceAddedOrNoProps: resourceAddedOrNotResourceAddedOrNo3Data,
};

const property1Default71Data = {
    savedVoucherToolData: <>Saved <br />Voucher Tool Data</>,
};

const property1Default72Data = {
    savedVoucherToolData: <>My<br />Saved<br />Resources</>,
    className: "profile-section-v2-3",
};

const accountPageAltV22Data = {
    property1Default71Props: property1Default71Data,
    property1Default72Props: property1Default72Data,
};

const property1Audio14Data = {
    className: "tutorial-buttons-16",
};

const property1Default826Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default827Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-v2-1",
};

const property1Default828Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-v2-1",
};

const property1Default829Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-v2-1",
};

const property1Default8210Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-v2-1",
};

const regionalAccessPointsV22Data = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1Default81Props: property1Default826Data,
    property1Default82Props: property1Default827Data,
    property1Default83Props: property1Default828Data,
    property1Default84Props: property1Default829Data,
    property1Default85Props: property1Default8210Data,
};

const property1SaveData10Data = {
    className: "tutorial-buttons-47",
};

const voucherToolV2RAPData = {
    property1AudioProps: property1Audio14Data,
    regionalAccessPointsV2Props: regionalAccessPointsV22Data,
    property1SaveDataProps: property1SaveData10Data,
};

const logo31Data = {
    className: "logo-30",
};

const bix2Data = {
    className: "bix-1",
};

const accountPageMyResourcesClickData = {
    place: "Home",
    moreResources: "More Resources",
    voucherTools: "Voucher Tools",
    name: "John Doe",
    mySavedResources: "My Saved Resources",
    exit: "Exit",
    resourceSection: "",
    logoProps: logo31Data,
    bixProps: bix2Data,
};

const property1Audio15Data = {
    className: "tutorial-buttons-17",
};

const property1SaveData11Data = {
    className: "tutorial-buttons-48",
};

const voucherToolV2DisqualificationsNoticData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "There’s a possibility you might be disqualified for the voucher if you apply, based on the box you checked on the previous page. You can still apply, but your application is likely to be disqualified. Refer to the ",
    spanText2: "“More Resources” ",
    spanText3: <>page in the upper right-hand corner of the screen for other programs you may be eligible for.<br /><br /><br /><br /></>,
    spanText4: "Note:",
    spanText5: " ",
    spanText6: <>There are exceptions under the federal Violence Against Women Act for survivors who were convicted of producing methamphetamines if the conviction was due <br />to abuse.</>,
    property1AudioProps: property1Audio15Data,
    property1SaveDataProps: property1SaveData11Data,
};

const logo33Data = {
    className: "logo-32",
};

const property1Audio16Data = {
    className: "tutorial-buttons-18",
};

const textInfo22Data = {
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /><br />Social Security Number<br />Date of birth <br />Income<br />30% annual median income and lower are being prioritized, but any income can apply<br />Can be self-certified on the application<br />Owner certification for the initial housing quality inspection</>,
};

const property1SaveData12Data = {
    className: "tutorial-buttons-49",
};

const voucherToolRequiredPaperworkData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo33Data,
    property1AudioProps: property1Audio16Data,
    textInfo2Props: textInfo22Data,
    property1SaveDataProps: property1SaveData12Data,
};

const property1Audio17Data = {
    className: "tutorial-buttons-19",
};

const property1BackToHome2Data = {
    className: "tutorial-buttons-73",
};

const property1SaveData13Data = {
    className: "tutorial-buttons-50",
};

const voucherToolV2StartingScreenData = {
    property1AudioProps: property1Audio17Data,
    property1BackToHomeProps: property1BackToHome2Data,
    property1SaveDataProps: property1SaveData13Data,
};

const logo35Data = {
    className: "logo-34",
};

const property1Audio18Data = {
    className: "tutorial-buttons-20",
};

const property1Default61Data = {
    catholicCommunityServices: "Catholic Community Services - Seattle",
};

const property1Default62Data = {
    catholicCommunityServices: "Multi-Service Center - Federal Way",
    className: "regional-access-point-default",
};

const property1Default63Data = {
    catholicCommunityServices: "YWCA - Renton",
    className: "regional-access-point-default",
};

const property1Default64Data = {
    catholicCommunityServices: "Solid Ground - Seattle",
    className: "regional-access-point-default",
};

const property1Default65Data = {
    catholicCommunityServices: "Catholic Community Services - Bellevue",
    className: "regional-access-point-default",
};

const regionalAccessPointsData = {
    regionalAccessPoin: "Regional Access Points (Click for more detailed information)",
    property1Default61Props: property1Default61Data,
    property1Default62Props: property1Default62Data,
    property1Default63Props: property1Default63Data,
    property1Default64Props: property1Default64Data,
    property1Default65Props: property1Default65Data,
};

const property1SaveData14Data = {
    className: "tutorial-buttons-51",
};

const voucherToolRAPData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo35Data,
    property1AudioProps: property1Audio18Data,
    regionalAccessPointsProps: regionalAccessPointsData,
    property1SaveDataProps: property1SaveData14Data,
};

const property1Audio19Data = {
    className: "tutorial-buttons-21",
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

const property1SaveData15Data = {
    className: "tutorial-buttons-52",
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
    property1AudioProps: property1Audio19Data,
    property1Variant51Props: property1Variant51Data,
    property1Variant52Props: property1Variant52Data,
    property1Variant53Props: property1Variant53Data,
    property1SaveDataProps: property1SaveData15Data,
};

const property1Audio20Data = {
    className: "tutorial-buttons-22",
};

const property1SaveData16Data = {
    className: "tutorial-buttons-53",
};

const voucherToolV2NextStepsData = {
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
    property1AudioProps: property1Audio20Data,
    property1SaveDataProps: property1SaveData16Data,
};

const property1Audio21Data = {
    className: "tutorial-buttons-23",
};

const property1Variant54Data = {
    proofOfIncome: "Proof of Income",
};

const property1Variant55Data = {
    proofOfIncome: "Proof of Date of Birth",
    className: "document-button-4",
};

const property1Variant56Data = {
    proofOfIncome: "Social Security Number",
    className: "document-button-5",
};

const voucherToolV3RequiredPaperwork2Data = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: "No documents are needed ",
    spanText2: "at the time of application",
    spanText3: <> for an emergency housing voucher, however, you will need the following within 6 months of using the voucher:<br /></>,
    spanText4: "",
    ownerCertification: "Owner Certification",
    clickForDetails: "Click for Details",
    property1AudioProps: property1Audio21Data,
    property1Variant51Props: property1Variant54Data,
    property1Variant52Props: property1Variant55Data,
    property1Variant53Props: property1Variant56Data,
};

const logo39Data = {
    className: "logo-38",
};

const property1Audio22Data = {
    className: "tutorial-buttons-24",
};

const textInfo4Data = {
    spanText1: <>There’s a possibility you might be disqualified for the voucher if you apply, based on the box you checked on the previous page. You can still apply, but your application is likely to be disqualified. Refer to the “More Resources” page in the upper right-hand corner of the screen for other programs you may be eligible for.<br /><br /><br /><br /></>,
    spanText2: "Note:",
    spanText3: <> There are exceptions under the federal Violence Against Women Act for survivors who were convicted of producing methamphetamines if the conviction was due <br />to abuse.</>,
};

const property1SaveData17Data = {
    className: "tutorial-buttons-54",
};

const voucherToolDisqualificationsNoticePData = {
    place: "Home",
    myAccount: "My Account",
    moreResources: "More Resources",
    voucherTool: "Voucher Tool",
    line1: "",
    logoProps: logo39Data,
    property1AudioProps: property1Audio22Data,
    textInfo4Props: textInfo4Data,
    property1SaveDataProps: property1SaveData17Data,
};

const property1Audio23Data = {
    className: "tutorial-buttons-25",
};

const textInfo5Data = {
    children: <>You’ve reached the end of our voucher tool! <br /><br />If you’d like, please choose how you’d like to get a summary of the information provided by this tool:</>,
};

const property1SaveData18Data = {
    className: "tutorial-buttons-55",
};

const voucherToolV2DownloadInfoData = {
    voucherTool: "Voucher Tool",
    line1: "",
    getSummaryViaTextOrEmail: "Get summary via text or email",
    downloadPdfOfSummary: "Download PDF of summary",
    property1AudioProps: property1Audio23Data,
    textInfoProps: textInfo5Data,
    property1SaveDataProps: property1SaveData18Data,
};

const property1Audio24Data = {
    className: "tutorial-buttons-26",
};

const voucherToolV3DisqualificationsData = {
    property1AudioProps: property1Audio24Data,
};

const property1Audio25Data = {
    className: "tutorial-buttons-27",
};

const tipTypeBackButton21Data = {
    thisButtonWillTak: "This button will take you to the previous screen.",
};

const voucherToolV3TutorialBackButtonData = {
    property1AudioProps: property1Audio25Data,
    tipTypeBackButton2Props: tipTypeBackButton21Data,
};

const property1Audio26Data = {
    className: "tutorial-buttons-28",
};

const voucherToolV3DisclaimersData = {
    voucherTool: "Voucher Tool",
    line1: "",
    spanText1: <>One final note before you begin:<br /><br />We </>,
    spanText2: "cannot distribute vouchers",
    spanText3: <>, but this tool will help you know what resources you will need to apply, your voucher eligibility, <br />and where to go to apply. <br /><br />Click “Next” to continue.</>,
    voucherApplying1: "/img/voucher-applying-1@1x.png",
    property1AudioProps: property1Audio26Data,
};

const property1Audio27Data = {
    className: "tutorial-buttons-29",
};

const property1SaveData19Data = {
    className: "tutorial-buttons-56",
};

const voucherToolV2DisqualificationsData = {
    property1AudioProps: property1Audio27Data,
    property1SaveDataProps: property1SaveData19Data,
};

const property1Audio28Data = {
    className: "tutorial-buttons-30",
};

const voucherToolV3EligibilityQuestionsData = {
    property1AudioProps: property1Audio28Data,
};

const property1Audio29Data = {
    className: "tutorial-buttons-31",
};

const tipTypeNextButton2Data = {
    className: "tip-box-1",
};

const voucherToolV3TutorialNextButtonData = {
    property1AudioProps: property1Audio29Data,
    tipTypeNextButtonProps: tipTypeNextButton2Data,
};

const property1Audio30Data = {
    className: "tutorial-buttons-32",
};

const tipTypeAudioButton21Data = {
    thisButtonWillRea: "This button will read the text on the screen out loud to you.",
};

const voucherToolV3TutorialAudioButtonData = {
    property1AudioProps: property1Audio30Data,
    tipTypeAudioButton2Props: tipTypeAudioButton21Data,
};

const property1Audio31Data = {
    className: "tutorial-buttons-33",
};

const property1SaveData20Data = {
    className: "tutorial-buttons-57",
};

const tipTypeSaveDataData = {
    thisButtonWillSav: "This button will save your work so you can come back to it later.",
};

const voucherToolV2TutorialSaveDataButtonData = {
    property1AudioProps: property1Audio31Data,
    property1SaveDataProps: property1SaveData20Data,
    tipTypeSaveDataProps: tipTypeSaveDataData,
};

const bix3Data = {
    className: "bix-2",
};

const accountPageAltV2MyResourcesClickData = {
    name: "John Doe",
    housingChoiceVouchers: "Housing Choice Vouchers",
    theHousingChoiceV: "The Housing Choice Voucher program (formerly Section 8), helps low-income families, individuals, seniors and people with disabilities pay their monthly rent in privately owned apartments or houses.",
    removeFromResources: " Remove From Resources",
    exit: "Exit",
    savedVoucherToolData: <>My<br />Saved<br />Resources</>,
    bixProps: bix3Data,
};

const property1Audio32Data = {
    className: "tutorial-buttons-34",
};

const tipTypeNextButton3Data = {
    className: "tip-box-2",
};

const property1SaveData21Data = {
    className: "tutorial-buttons-58",
};

const voucherToolTutorialNextButton2Data = {
    property1AudioProps: property1Audio32Data,
    tipTypeNextButtonProps: tipTypeNextButton3Data,
    property1SaveDataProps: property1SaveData21Data,
};

const property1Audio33Data = {
    className: "tutorial-buttons-35",
};

const property1SaveData22Data = {
    className: "tutorial-buttons-59",
};

const voucherToolV2EligibilityQuestionsData = {
    property1AudioProps: property1Audio33Data,
    property1SaveDataProps: property1SaveData22Data,
};

const property1Audio34Data = {
    className: "tutorial-buttons-36",
};

const property1BackToHome3Data = {
    className: "tutorial-buttons-74",
};

const voucherToolV3StartingScreenData = {
    property1AudioProps: property1Audio34Data,
    property1BackToHomeProps: property1BackToHome3Data,
};

const homePageLink32Data = {
    className: "home-page-link-31",
};

const property1Default8Data = {
    className: "havent-applied-button-2",
};

const property1IneligibleButton2Data = {
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
};

const property1Default43Data = {
    children: "I’ve applied for a voucher and have received one.",
};

const voucherToolsPage2Data = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    clickOnTheSection: "Click on the section which best describes you:",
    homePageLinkProps: homePageLink32Data,
    property1DefaultProps: property1Default8Data,
    property1IneligibleButtonProps: property1IneligibleButton2Data,
    property1Default4Props: property1Default43Data,
};

const resourceAddedOrNotNotAdded52Data = {
    affordableHousing: "Affordable Housing",
    theLargestAndMost: "The largest and most trusted source for all Affordable Housing properties and programs in the United States.",
    linkToResource: "Link to Resource",
};

const resourceAddedOrNotResourceAddedOrNo32Data = {
    name: "King County Housing Authority Rental Search",
    kchaHelpsRentersI: "KCHA helps renters in King County find affordable, private-market homes. You can use either site to search for homes based on location, features, and nearby services.",
    linkToResource: "Link to Resource",
};

const resourcesV32Data = {
    resourceAddedOrNotNotAdded5Props: resourceAddedOrNotNotAdded52Data,
    resourceAddedOrNotResourceAddedOrNo3Props: resourceAddedOrNotResourceAddedOrNo32Data,
};

const tipTypeBackButton22Data = {
    thisButtonWillTak: "This button will take you  to the previous screen.",
};

const property1SaveData23Data = {
    className: "tutorial-buttons-60",
};

const voucherToolV2TutorialBackButtonData = {
    tipTypeBackButton2Props: tipTypeBackButton22Data,
    property1SaveDataProps: property1SaveData23Data,
};

const property1Audio36Data = {
    className: "tutorial-buttons-38",
};

const tipTypeAudioButton22Data = {
    thisButtonWillRea: "This button will read the text on the screen out loud to you.",
};

const property1SaveData24Data = {
    className: "tutorial-buttons-61",
};

const voucherToolV2TutorialAudioButtonData = {
    property1AudioProps: property1Audio36Data,
    tipTypeAudioButton2Props: tipTypeAudioButton22Data,
    property1SaveDataProps: property1SaveData24Data,
};

const property1Expanded2Data = {
    iveAppliedForAV: "I’ve applied for a voucher and have received one.",
    close: "Close",
    goToHousingTool: "Go to Housing Tool",
    spanText1: <>If you have applied for a voucher and received one, congratulations! This is a big accomplishment and we are so excited to help you with the next steps. <br /><br />The Seattle housing market can be confusing to navigate, so we’ve developed a platform to help make the housing hunt for voucher holders such as yourself to find a place to live.<br /></>,
    spanText2: <><br /><br /></>,
    spanText3: "Get help with housing with ",
    spanText4: "our housing tool:",
};

const voucherToolsPageReceivedExpand2Data = {
    resourceMatching: "Resource Matching",
    ifYoureNotSureW: "If you’re not sure which of our resources is right for you, get more information below.",
    clickOnTheSection: "Click on the section which best describes you:",
    spanText1: <>I’ve applied for a voucher but haven’t received one.<br /><br /></>,
    spanText2: <>OR<br /></>,
    spanText3: <><br />I’ve applied for a voucher and am ineligible.</>,
    iveAppliedForAV: "I’ve applied for a voucher and have received one.",
    property1Expanded2Props: property1Expanded2Data,
};

const property1PhonePopUpDefault2Data = {
    className: "phone-pop-up-v2-phone-pop-up-default",
};

const phonePopUpV2PhonePopUpDefaultData = {
    property1PhonePopUpDefaultProps: property1PhonePopUpDefault2Data,
};

