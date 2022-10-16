import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Document from 'pages/Document';
import GpaTool from 'pages/GpaTool';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result';  
import CourseRegistration from 'pages/CourseRegistration';
import StudentHelpDesk from 'components/StudentHelpDesk';
import StudentUnionAffairs from 'components/StudentUnionAffairs';
import SocialMedia from 'components/SocialMedia';
import Login from 'components/Login'; 
import PrintOutForm from 'components/PrintOutComponent/PrintOutForm';

 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    

import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import CourseTimeTables from 'components/CourseTimeTable';
import Examtimetable from "components/Examtimetable"
import UniversityMaps from 'components/UniversityMaps';
import ProfileEdit from 'components/ProfileComponents/ProfileEdit';
import EditPassword from 'components/ProfileComponents/EditPassword';
import EditMedia from 'components/ProfileComponents/EditMedia';
import SearchYear from "components/ResultsComponents/SearchYear"
import YourResult from 'components/ResultsComponents/YourResult';
import OutstandingResult from 'components/ResultsComponents/OutstandingResult';
import SubmitCourseForm from 'components/CoureRegistrationFormComponent/SubmitCourseForm';
import PrintOutSelectForm from 'components/PrintOutComponent/PrintOutSelectForm';
import PrintOutFormTable from 'components/PrintOutComponent/PrintOutFormTable';
import CGPACalculator from 'components/CGPAComponent/CGPACalculator';
import CGPAForecaster from 'components/CGPAComponent/CGPAForeCaster';
import CGPAGoalSetter from 'components/CGPAComponent/CGPAGoalSetter';
import CGPACalculatorinput from 'components/CGPAComponent/CGPACalculatorInput';
import CGPAGoalSetterInput from 'components/CGPAComponent/CGPAGoalSetterInput';
import CGPAForecasterInput from 'components/CGPAComponent/CGPAForecasterInput';
import UploadDoc from 'components/DocumentComponents/UploadDoc';
import Maps from 'components/Maps';
import SignUpTest from 'auth/SignUptest';
import Logintest from 'auth/Logintest';
import LoginHomePageTest from 'auth/LoginHomePageTest';
import ResetPassword from 'components/ResetPassword';
import ResultAmendment from 'components/ResultsComponents/ResultAmendment';
import ResultAmendmentSuccessful from 'components/ResultsComponents/ResultAmendmentSuccessful';
import RegisterStudent from 'components/StudentComponent/RegisterStudent';
import ResultHistory from 'components/StudentComponent/ResultHistory';
import UploadInDoc from 'components/DocumentComponents/IndividualDoc';
import BrowseUploadedDoc from 'components/DocumentComponents/UploadedDoc';
import ViewDoc from 'components/DocumentComponents/ViewDoc';
import FilterResult from 'components/ResultsComponents/FilterResult';
import FilterYear from 'components/ResultsComponents/FilterYear';
import FilterResult2 from 'components/ResultsComponents/FilterResult2';
import Unblocking from 'components/StudentComponent/Unblocking';
import CourseRegStats from 'components/StudentComponent/CourseRegStats';
import CourseUnit from 'components/CourseUnit/CourseUnit';
import CreateCourse from 'components/CreateCourse/CreateCourse';
import Activate from 'components/StudentComponent/Activate';
import ActivateProfile from 'components/StudentComponent/ActivateProfile';
import UnblockProfile from 'components/StudentComponent/UnblockProfile';
import UnBlock from 'components/StudentComponent/UnBlock';
import Fees from "components/Fees/Fees"
import UpdateFees from 'components/Fees/UpdateFees';
import LecturerAccount from 'components/CreateAccount';
// import { PrivateRoute } from './auth/PrivateRoute';
import LecturerActivate from "components/LecturerComponent/LecturerActivate"
import LecturerActivateProfile from "components/LecturerComponent/LecturerActivateProfile"
import LecturerList from 'components/LecturerComponent/LecturerList';
import ResultUploadSummary from 'components/LecturerComponent/ResultUploadSummary';
import MasterSheet from "components/MasterSheet/MasterSheet"
import MasterSheetMode from 'components/MasterSheet/MasterSheetMode';
import ResetStudentPassword from "components/StudentComponent/ResetPassword"
import BiodataCorrections from 'components/StudentComponent/BiodataCorrections';
import BiodataCorrrectionsProfile from 'components/StudentComponent/BiodataCorrectionsProfile';
import UploadStudentDoc from 'components/StudentComponent/UploadStudentDoc';
import LecturerBiodataCorrections from 'components/LecturerComponent/LecturerBiodataCorrection';
import LecturerBiodataProfile from 'components/LecturerComponent/LecturerBiodataProfile';
import CourseAllocation from 'components/LecturerComponent/CourseAllocation';
import AmendmentApprovalList from 'components/LecturerComponent/AmendmentapprovalList';
import AmendmentApproval from 'components/LecturerComponent/AmendmentApproval';
import ResetLecturerPassword from 'components/LecturerComponent/LecturerPassword';
import UpdateStudentStatus from 'components/StudentComponent/UpdateStudentStatus';
import AddDelete from 'components/StudentComponent/Add&Delete';
import AddDeleteProfile from 'components/StudentComponent/Add&DeleteProfile';
import CourseStatus from 'components/StudentComponent/CourseStatus';
import CreateNewCourse from 'components/CourseAdmin/CreateNewCourse';
import HideStudentList from 'components/MasterSheet/HideStudentList';
import RetrospectiveRegistration from 'components/MasterSheet/RestrospectiveReg';
import MasterUpdateStudentStatus from 'components/MasterSheet/MasterUpdateStudentStatus';
import MasterCourseStatus from 'components/MasterSheet/MasterCourseStatus';
import MasterSheetBiodataCorrections from 'components/MasterSheet/MasterSheetBiodataCorrection';
import MasterBiodataCorrrectionsProfile from 'components/MasterSheet/MasterBiodataCorrectionProfile';
import ListRegisterStudent from 'components/List/RegisterStudent';
import ExamList from 'components/List/ExamList';
import SubmittedResult from 'components/List/SubmittedResult';
import ViewCourses from 'components/CourseAdmin/ViewCourses';
import MasterViewCourses from 'components/MasterSheet/ViewCourses';




WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

   

    return ( 
        <>     

    
          
         <Route exact path="/login" component={Login} /> 
         <Route exact path="/logintest" component={Logintest} />   
         <Route exact path="/signup" component={SignupNow} />  
         <Route exact path="/signuptest" component={SignUpTest} />  
         <Route exact path="/homepagetest" component={LoginHomePageTest} />  
        

          <Route exact path="/createpassword" component={CreateLoginPassword} />  
          <Route exact path="/reset-password" component={ResetPassword} />   
         
         
        <div className="md:ml-64 white "> 
        
        <Switch>
        {/* <PrivateRoute path="/" exact>
                    <Dashboard />
                    </PrivateRoute> */} 
         <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/document" component={Document} />
            <Route exact path="/gpatool" component={GpaTool} />
            <Route exact path="/printout" component={PrintOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/help" component={StudentHelpDesk} />
            <Route exact path="/coursereg" component={CourseRegistration} />  
            <Route exact path="/studentunionaffairs" component={StudentUnionAffairs} /> 
            <Route exact path="/social-media" component={SocialMedia} /> 
            <Route exact path="/coursetimetable" component={CourseTimeTables} />   
            <Route exact path="/examtimetable" component={Examtimetable} />  
            <Route exact path="/maps" component={UniversityMaps} />  
            <Route exact path="/profile-edit" component={ProfileEdit} /> 
            <Route exact path="/editpassword" component={EditPassword} /> 
            <Route exact path="/editmedia" component={EditMedia} />  
            <Route exact path="/search-year" component={SearchYear} />  
            <Route exact path="/your-result" component={YourResult} /> 
            <Route exact path="/filter-year" component={FilterYear} />  
            <Route exact path="/filter-result" component={FilterResult} />  
            <Route exact path="/filter-result2" component={FilterResult2} />   
            <Route exact path="/outstanding-result" component={OutstandingResult} />  
            <Route exact path="/submit-course-form" component={SubmitCourseForm} />   
            <Route exact path="/printoutform" component={PrintOutForm} /> 
            <Route exact path="/printoutselectform" component={PrintOutSelectForm} /> 
            <Route exact path="/printoutformtable" component={PrintOutFormTable} /> 
            <Route exact path="/cgpa-calculator" component={CGPACalculator} /> 
            <Route exact path="/cgpa-forecaster" component={CGPAForecaster} /> 
            <Route exact path="/cgpa-goalsetter" component={CGPAGoalSetter} /> 
            <Route exact path="/cgpa-cal-input" component={CGPACalculatorinput} />  
            <Route exact path="/cgpa-goalsetter-input" component={CGPAGoalSetterInput} /> 
            <Route exact path="/cgpa-forecaster-input" component={CGPAForecasterInput} /> 
            <Route exact path="/upload-doc" component={UploadDoc} />     
            <Route exact path="/upload-ind-doc" component={UploadInDoc} />  
            <Route exact path="/loadmaps" component={Maps} />  

            <Route exact path="/result-amendment" component={ResultAmendment} />
            <Route exact path="/result-amendment-sucessfully" component={ResultAmendmentSuccessful} />
            <Route exact path="/register-student" component={RegisterStudent} />
            <Route exact path="/result-history" component={ResultHistory} />
            <Route exact path="/browse-uploaded-doc" component={BrowseUploadedDoc} />
            <Route exact path="/view-doc" component={ViewDoc} />
            <Route exact path="/unblocking" component={Unblocking} /> 
            <Route exact path="/course-reg-stats" component={CourseRegStats} /> 
            <Route exact path="/course-unit" component={CourseUnit} />  
            <Route exact path="/create-course" component={CreateCourse} />
            <Route exact path="/update-student-status" component={UpdateStudentStatus} /> 




            <Route exact path="/activate" component={Activate} /> 
            <Route exact path="/activate-profile" component={ActivateProfile} />
            <Route exact path="/unblock" component={UnBlock} /> 
            <Route exact path="/unblock-profile" component={UnblockProfile} /> 
            <Route exact path="/fees" component={Fees} /> 
            <Route exact path="/update-fees" component={UpdateFees} /> 
            <Route exact path="/create-account" component={LecturerAccount} /> 
            <Route exact path="/lecturer-activateprofile" component={LecturerActivateProfile} /> 
            <Route exact path="/lecturer-activate" component={LecturerActivate} /> 
            <Route exact path="/lecturer-list" component={LecturerList} /> 
            <Route exact path="/result-upload-summary" component={ResultUploadSummary} /> 
            <Route exact path="/master-sheet" component={MasterSheet} /> 
            <Route exact path="/master-sheetmode" component={MasterSheetMode} /> 
            <Route exact path="/reset-studentpassword" component={ResetStudentPassword} /> 
            <Route exact path="/biodata-correction" component={BiodataCorrections} /> 
            <Route exact path="/biodata-correctionprofile" component={BiodataCorrrectionsProfile} /> 
            <Route exact path="/upload-student-doc" component={UploadStudentDoc} /> 
            <Route exact path="/lecturer-biodata" component={LecturerBiodataCorrections} /> 
            <Route exact path="/lecturer-biodataprofile" component={LecturerBiodataProfile} /> 
            <Route exact path="/course-allocation" component={CourseAllocation} /> 
            <Route exact path="/amendment-approval" component={AmendmentApproval} /> 
            <Route exact path="/amendment-approval-list" component={AmendmentApprovalList} /> 
            <Route exact path="/reset-lecturer-password" component={ResetLecturerPassword} /> 
            <Route exact path="/add-delete" component={AddDelete} />
            <Route exact path="/add-delete-profile" component={AddDeleteProfile} /> 
            <Route exact path="/course-status" component={CourseStatus} /> 
            <Route exact path="/create-new-course" component={CreateNewCourse} /> 
            <Route exact path="/course-allocation" component={CourseAllocation} /> 
            <Route exact path="/hide-student-list" component={HideStudentList} />
            <Route exact path="/retrospective-reg" component={RetrospectiveRegistration} /> 
            <Route exact path="/master-update-status" component={MasterUpdateStudentStatus} /> 
            <Route exact path="/master-course-status" component={MasterCourseStatus} /> 
            <Route exact path="/master-biodata-correction" component={MasterSheetBiodataCorrections} /> 
            <Route exact path="/master-biodata-profile" component={MasterBiodataCorrrectionsProfile} />
            <Route exact path="/list-register-student" component={ListRegisterStudent} /> 
            <Route exact path="/exam-list" component={ExamList} /> 
            <Route exact path="/submitted-result" component={SubmittedResult} /> 
            <Route exact path="/view-courses" component={ViewCourses} /> 
            <Route exact path="/master-view-courses" component={MasterViewCourses} /> 
              
            
        </Switch>         
        </div> 

          

        </>
   
    );
}

export default App; 

