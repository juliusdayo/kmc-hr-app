import {
    Users2,
    UserCog,
    BookCheck,
    BriefcaseBusiness,

} from "lucide-react"

export const applicant = [
    {
        name: "Job Listings",
        screen: "JobListings",
        icon: BriefcaseBusiness,
    },
    {
        name: "Personal Information",
        screen: "Personal Information",
        icon: UserCog,
    }
];

export const client = [
    {
      name: "View Employee Ratings",
      screen: "EmployeeRatings",
      icon: Users2,
    },
    {
      name: "Personal Information",
      screen: "Personal Information",
      icon: UserCog,
    }
];

export const hiringManager = [
    {
        name: "Job Listings",
        url: "job-listings",
        screen: "JobListings",
        icon: BriefcaseBusiness,
    },
    {
      name: "View Employee Ratings",
      url: "job-listings",
      screen: "EmployeeRatings",
      icon: Users2,
    },
    {
        name: "Scheduling",
        url: "job-listings",
        screen: "MyCalendar",
        icon: BookCheck,
    },
    {
      name: "Personal Information",
      url: "job-listings",
      screen: "Personal Information",
      icon: UserCog,
    }
];
