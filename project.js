 var Firstname = document.getElementById('firstname').value;
         var  Lastname = document.getElementById('lastname').value;
         var Email = document.getElementById('emailaddress').value;
         var password = document.getElementById('password').value;
         var passkey = document.getElementById('checkpass').value;

    function handleFormSubmission(event) {
      event.preventDefault();
       var  Firstname = document.getElementById('firstname').value;
       var  Lastname = document.getElementById('lastname').value;
         var Email = document.getElementById('emailaddress').value;
         var password = document.getElementById('password').value;
         var passkey = document.getElementById('checkpass').value;

      if (!Firstname || !Lastname || !password || !Email || !passkey) {
        alert("Please fill out all fields.");
        return;
      }
      else{

      window.location.href = "explore.html";
    } 
    }
    document.getElementById('form').addEventListener('submit',handleFormSubmission);

   document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (event)=>{
      event.preventDefault();

    var  Firstname = document.getElementById('firstname').value;
       var  Lastname = document.getElementById('lastname').value;
         var Email = document.getElementById('emailaddress').value;
         var password = document.getElementById('password').value;

     fetch("https://jodna-portfolio.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname: Firstname,
          lastname: Lastname,
          email: Email,
          password: password
        }) })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Login success:", data);
      })
      .catch(error => console.error("Fetch error:", error));
    });
  });
function login(event) {
    
        var Email = document.getElementById('emailaddress').value;
        var password = document.getElementById('password').value;
        if (!Email || !password) {
          alert("provide input");
          event.preventDefault();
          return;
        }else{
          window.location.href = "profile-dashboard.html";
        } 
      };
      
        function checkUserTokenAndRedirect() {
      const token = localStorage.getItem('authToken');

    if (token) {
       window.location.href = '/profile-dashboard.html';
       } else {
      window.location.href = '/signUP.html';
     }
      };
      
      function log() {
       document.addEventListener('DOMContentLoaded', () =>{
         checkUserTokenAndRedirect()
         })
    };
    
     document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (event)=>{
      event.preventDefault();

      const Email = document.getElementById('emailaddress').value;
      const password = document.getElementById('password').value;

     fetch("https://jodna-portfolio.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: Email,
          password: password,
        }) })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Login success:", data);
      })
      .catch(error => console.error("Fetch error:", error));
    });
  });
      
       function toggleDropdown() {
  const dropdown = document.getElementById("dropcontent");
  var SubHead = document.getElementById("console")
  var gridMove = document.getElementById('grid');
  if(dropdown.style.display=== "none"){
    dropdown.style.display = "flex";
    gridMove.style.marginLeft = "10%";
    SubHead.style.marginLeft = "15%"
  }
  else{
    dropdown.style.display ="none";
    gridMove.style.marginLeft = "-15%";
    SubHead.style.marginLeft= "-17%";
  }
  
};
function display() {
            var Bar = document.getElementById('nav')
            var IMG = document.getElementById('mobimg')
            var User = document.getElementById('user')
            var Body = document.getElementById('main')
        
            if(Bar.style.display= "none"){
              Bar.style.display= "flex";
              Bar.style.justifySelf = "center"
              Bar.style.marginLeft = "-45%"
              IMG.style.marginLeft= "50%";
              Bar.style.height= "800px"
            
              User.style.width= "400px";
             Body.style.display= "none";
             
            }
            else{
              Bar.style.display= "none";
            }
          };

    let savedItems = [];

function saveItem(buttonElement) {
  let itemId = buttonElement.closest('.gridbox').id;
  if (!savedItems.includes(itemId)) {
    savedItems.push(itemId);
    console.log("Saved:", itemId);
    buttonElement.textContent = "Saved";
    buttonElement.disabled = true;
  }
};    

function sendSavedItems() {
  if (savedItems.length === 0) {
    alert("No items saved yet.");
    return;
  }

  fetch("https://jodna-portfolio.onrender.com/item/save/ProjectId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      userId: "12345",
      items: savedItems
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to save items.");
    }
    return response.json();
  })
  .then(data => {
    console.log("Server Response:", data);
    alert("Saved items successfully sent to backend.");
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Failed to send saved items.");
  });
};


document.addEventListener("DOMContentLoaded", () => {
    fetchSavedItems();
  });

  function fetchSavedItems() {
    fetch('https://jodna-portfolio.onrender.com/item/all')
      .then(response => response.json())
      .then(data => {
        const savedItems = data.items;
        const grid = document.getElementById("grid");

        
        grid.innerHTML = "";

        savedItems.forEach(item => {
          
          const saveBox = document.createElement("div");
          saveBox.className = "savebox";

          
          saveBox.innerHTML = `
            <div style="padding: 10px;">
              <h4>${item.title}</h4>
              <img src="${item.image}" alt="${item.title}" style="height: 80px; width: auto;" />
              <p>${item.description}</p>
            </div>
          `;

        
          grid.appendChild(saveBox);
        });
      })
      .catch(error => {
        console.error("Failed to fetch saved items:", error);
      });
  };

  async function editUserProfile() {
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const bio = document.getElementById("bio").value.trim();
    const website = document.getElementById("web").value.trim();
    const username = document.getElementById("usernameedit").value.trim();
    const fullName = `${firstName} ${lastName}`;

    
    const picInput = document.getElementById("pic");
    const file = picInput.files[0];

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("bio", bio);
    formData.append("website", website);
    formData.append("username", username);
    if (file) {
      formData.append("photo", file);
    }

    try {
      const response =  fetch("https://jodna-portfolio.onrender.com/user/update", {
        method: "PATCH",
        credentials: "include",
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Profile updated successfully:", result);

      document.getElementById("name").innerText = fullName;
      document.getElementById("profilebio").innerText = bio;
      document.getElementById("skill").innerText = username;

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("dp").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("There was a problem updating your profile. Please try again.");
    }
  }

  async function logoutUser() {
  try {
    const response = await fetch('https://jodna-portfolio.onrender.com/auth/logout', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Logout failed: ${response.statusText}`);
    }

    console.log('User logged out successfully.');

    window.location.href = '/index.html';
  } catch (error) {
    console.error('Logout error:', error);
  }
};

