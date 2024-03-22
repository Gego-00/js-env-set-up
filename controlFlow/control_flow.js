let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
let roleAuth;


if (userType === "admin"){
    roleAuth = "Authorized for 'Dietary Services' access and one-on-one interaction with dietician";
} else if(userType === "subscriber"){
    roleAuth = "Authorized for partial acces to facilitate 'Dietary Services'";
}else if (userType === " manager") {
    roleAuth = "Authorized for 'Dietary Services'";
}else {
    roleAuth = "Need to enroll, or subscribe first to enable access"
}


console.log("Dietary services eligibility:", roleAuth)


console.log("Authentication Status:", authenticationStatus);


if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}


console.log("Access Level:", accessLevel);


if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}


console.log("User Message:", userMessage);


switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("User Category:", userCategory);