const images = {
    '/been1.html': '../images/b1.png',
    '/been2.html': '../images/b2.png',
    '/been3.html': '../images/b3.png',
    '/want1.html': '../images/w1.png',
    '/want2.html': '../images/w2.png',
    '/want3.html': '../images/w3.png',
};

if (Object.keys(images).indexOf(document.location.pathname) >= 0) {
    document.getElementById('restoImage').src =     images[document.location.pathname];
}

function callFirebase() {
    var firebaseConfig = {
                apiKey: "AIzaSyCARNLv6s7Hd8M0q3XXMbnUyXQbtCOp0Pg",
                authDomain: "comp1850-finalproject.firebaseapp.com",
                databaseURL: "https://comp1850-finalproject.firebaseio.com",
                projectId: "comp1850-finalproject",
                storageBucket: "comp1850-finalproject.appspot.com",
                messagingSenderId: "52812964021",
                appId: "1:52812964021:web:d4d935cf6cefa6e4"
            };
            
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);callFirebase
}

function addData() {
    var db = firebase.firestore();
    var input_Email = document.getElementById("inputEmail").value;
    var input_Restaurant = document.getElementById("restaurant").value;
    var input_Comment = document.getElementById("inputComment").value;

    db.collection("contactForm").add({
        inputEmail: input_Email,
        restaurantType: input_Restaurant,
        inputComment: input_Comment
    })
        .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.forms[0].reset()
        //update the products view
    })
        .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


function openModal() {
    
}