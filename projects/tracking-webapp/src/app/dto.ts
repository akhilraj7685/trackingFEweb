export interface MarkersAssetMap{
    markerid:string,
    assetId:string,
    marker:google.maps.marker.AdvancedMarkerElement
}

export interface CreateUserRequest{
    
    countryCode: string | undefined,
    day: 0,
    email: string |undefined,
    emailVerified: true,
    gender: "FEMALE",
    month: 0,
    password: string | undefined,
    phoneNo: string | undefined,
    userId: 0,
    userName: string | undefined,
    userRole: "ADMIN",
    year: 0
  }





export interface LoginResponse{
token:any;
profileDto4Session:ProfileDto4Session
}





export interface ProfileDto4Session2{

  profileId:number;
  verified: boolean;
  gender: Gender|undefined;
  disabled:boolean;
  userName:string|undefined;
  profilePicId:number;
}



  export interface ProfileDto4Session{

    profileId:number;
    verified: boolean;
    gender: Gender|undefined;
    disabled:boolean;
    userName:string|undefined;
    profilePicId:number;


  }


export interface CreateUserResponse{
  token:string;
  userDto:ProfileDto4Session
}




export enum Gender{
    MALE,FEMALE,OTHER
  }








export interface UserProfileDto

  {
    age:number;
    bio: string,
    contactBook: {
      contactBookId: 0,
      contacts: [
        {
          contactBookId: 0,
          cotactEntryId: 0,
          entryUserProfile: {
            bio: string,
            coverPicId: 0,
            gender: Gender,
            profileId: 0,
            profilePicId: 0,
            userName: string
            age:number;
          },
          isBlocked: true,
          requestType: RequestType,
          startDate: "2022-06-03T14:56:43.391Z",
          userId: 0,
          userName: string
        }
      ]
    },
    contactInfos: [
      {
        addedDate: "2022-06-03T14:56:43.391Z",
        contactInfoId: 0,
        contactInfoType: "EMAIL",
        countryCode: string,
        mail: string,
        phoneNumber: 0,
        privacyType: PrivacyType,
        userProfileId: 0
      }
    ],
    coverPicId: 0,
    currentAddress: {
      addressId: 0,
      city: string,
      country: string,
      state: string
    },
    disabled: true,
    disabledTime: "2022-06-03T14:56:43.391Z",
    educations: [
      {
         educationGrade: EducationGrade,
        educationId: 0,
        instituteAddress: {
          addressId: 0,
          city: string,
          country: string,
          state: string
        },
        instituteName: string
      }
    ],
    gender: Gender,
    groupInvitationIds: [
      0
    ],
    groupMap: {


    },
    homeTownAddress: {
      addressId: 0,
      city: string,
      country: string,
      state: string
    },
    imagefileIds: [

    ],
    newsFeedId: 0,
    notificationIds: [
      0
    ],
    officialAccount: true,
    pageMap: {

    },
    postIds: [
      0
    ],
    postPrivacy: PostPrivacy,
    profileId: 0,
    profilePicId: 0,
    profilePrivacy: profilePrivacy,
    relationshipDetails: {
      beginDate: "2022-06-03T14:56:43.391Z",
      newPartner: true,
      oldPartnerName: string,
      oldPartnerUserId: 0,
      partnerName: string,
      partnerUserId: 0,

      privacyType: PrivacyType,
      relationshipStatus: RelationshipStatus,
      relationsipDetailsId: 0
    },
    relationshipStatus:RelationshipStatus,
    socialContactList: [
      {
        plateformName: string,
        profileUrl: string,
        socialContactId: 0
      }
    ],
    statusIds: [
      0
    ],
    userName: string,
    verified: true,
    videoFileIds: [
      0
    ],
    worksAt: string,
    hobbies:string[]
    dob: Date;
  }



  export enum RequestType{
    BLOCKED, BOTH, MESSAGEBLOCKED, RECEIVED, SENT
  }

  export enum PostPrivacy{
    FRIENDS, ONLYME, PUBLIC
  }


  export enum PrivacyType{
    FRIENDS, ONLYME, PUBLIC
  }

  export enum profilePrivacy{
    FRIENDS, ONLYME, PUBLIC
  }

  export enum RelationshipStatus{
  DIVORCED, ENGAGED, IN_A_RELATIONSHIP, MARRIED, SEPERATED, SINGLE, WIDOW
  }

export enum EducationGrade{
  COLLEGE, SCHOOL, UNIVERSITY

}



export class LoginRequest
{
  email:any;
  password:any
}




export interface PeoplesMap{
  contents:UserProfileDto[],
  currentPage:number,
  totalPages:number
}




export interface MatchDto  {

id:number;
profileId:number;
matchesIds:number[];
 matches:UserProfileDto[];
}




export interface ContactBookDto{
contactBookId:number;
contacts:ContactEntryDto[];
}


export interface ContactEntryDto{
	cotactEntryId:number;
  contactBookId:number;
	requestType:RequestType ;
	startDate:Date;
	isBlocked:boolean;
	entryUserProfile:UserProfileDto2;
}


export interface UserProfileDto2{
  age:number;
	profileId:number;
	gender:Gender ;
userName:string;
profilePicId:number;
coverPicId:number;
bio:string;
}



export interface ULocationDto{

	id:number
	lat:number;
  lng:number;
}













export interface MatchProfileDetails {

	 profileId:number;

	 isVerified:boolean;
	gender:Gender;
	isDisabled:boolean;
	userName:string;
	isOfficialAccount:boolean;
	relationshipStatus:RelationshipStatus;

	relationshipDetails:{
    beginDate: "2022-06-03T14:56:43.391Z",
    newPartner: true,
    oldPartnerName: string,
    oldPartnerUserId: 0,
    partnerName: string,
    partnerUserId: 0,

    privacyType: PrivacyType,
    relationshipStatus: RelationshipStatus,
    relationsipDetailsId: 0
  };

  worksAt:string;
	bio:string;
  age:number;

	currentAddress:homeTownAddress;
	homeTownAddress:currentAddress;

	socialContactList:socialContact;
  profilePicId:number;
  coverPicId:number;

email:string;
phoneNo:string;
countryCode:string;

hobbies:string[];

}



export interface homeTownAddress{
  addressId: 0,
  city: string,
  country: string,
  state: string
}


export interface currentAddress{
  addressId: 0,
  city: string,
  country: string,
  state: string
}

export interface socialContact{
socialContactId:number;
plateformName:string;
profileUrl:string;
}

export interface Wallet{


  Id:number;
	reference:string;
	userProfileId:number;
	balance:number;
	startdate:Date;

}





export interface bdy{
  CALLBACK_URL:string,
  CHANNEL_ID: string,
  CHECKSUMHASH:string,
  CUST_ID: string,
  EMAIL: string,
  INDUSTRY_TYPE_ID: string,
  MID: string,
  MOBILE_NO: string,
  ORDER_ID:string,
  TXN_AMOUNT:string,
  WEBSITE:string,
  }


  export interface Message {

from:number,
to:number;
body:string,
type:string,
time:number
  }