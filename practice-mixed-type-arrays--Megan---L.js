// Task 1: Create the Profile
let userProfile = [
    "John Doe",                   
    28,                           
    true,                         
    "New York, USA",              
    ["reading", "coding"]        
];

// Task 2: Access and Log Profile Details
console.log("User's Name:", userProfile[0]);        
console.log("Second Hobby:", userProfile[4][1]);   

// Task 3: Modify the Profile
userProfile[1] = 29;                 
userProfile[4].push("hiking");       

// Task 4: Display the Updated Profile
console.log("Updated Profile:", userProfile);
