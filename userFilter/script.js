let userSearchInput = document.querySelector("#userInput");
let userData = document.querySelector(".userData");

const userDetailArr = [
  {
    profileUrl:
      "https://imgs.search.brave.com/_jrXZ2CZxFNJAnGxzZMYrDOQso7zcKPNy--qYzs6Vc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA4L3N0cmFu/Z2VyLXRoaW5ncy1z/dGV2ZS0xLmpwZz9x/PTUwJmZpdD1jcm9w/Jnc9ODI1JmRwcj0x/LjU",
    name: "stive",
    email: "stive@strangerthing.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/YdIN_0YR90484GmIknOaYs-AS_HHj591MSQhfYkf2pk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/MXQzRUJVdWlXUmNC/elFxTjhtYVF1elpR/bDRBPS8yODJ4MTg4/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOm1h/eF9ieXRlcygxNTAw/MDApOnN0cmlwX2lj/YygpL2dhdGVuLW1h/dGFyYXp6by10aGUt/YWNhZGVteS1vZi1t/b3Rpb24tcGljdHVy/ZS1hcnRzLWFuZC1z/Y2llbmNlcy0yMDIy/LW5ldy1tZW1iZXJz/LXJlY2VwdGlvbi0w/NTI5MjQtMS1hZmFh/ZjFkNmZhNjQ0NTMw/YjViYjY1ZjIxNmFh/YzYyMy5qcGc",
    name: "Dustin Henderson",
    email: "Henderson@strangerthing.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/ikysJ1f6LZ3WwEuEFNYdzcTrmifvJUeTD8nDlkYYuz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMTAvU2Fk/aWUtU2luay1QZnAt/Zm9yLUZhY2Vib29r/LmpwZw",
    name: "sadie sink",
    email: "sadie@strangerthing.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/jI0Dw21yhowWI92nzchcA7cW36rzl4ipHTzXeVi_YS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiLzVh/L2JjL2NiNWFiYzUy/ZWI2NzcyNmRjODkw/NDM5NDUwNTEwOGJl/LmpwZw",
    name: "nancy",
    email: "nancy@strangerthing.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/f9rxFf_i0ate82e8FDJ4XZKzoqkn26tZmV9FJDnq7bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzhmNzU1/MDIzZDRkMTg4ZWZk/MDZlMmMyMjVmNzQ0/MDc0YmExYjI2Mzgv/MF85MF8zNzg2XzIy/NzIvbWFzdGVyLzM3/ODYuanBnP3dpZHRo/PTQ2NSZkcHI9MSZz/PW5vbmUmY3JvcD01/OjQ",
    name: "millie bobby brown",
    email: "millie@strangerthing.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/oeifLpcwkUTrzI5CtKm6OlmDTMysdCJGZv8Y4lb6woY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkLzE5/LzI5LzdkMTkyOWY4/NGZiNWJjZjBjNDI2/MGUyZjY3ZmNkNTU3/LmpwZw",
    name: "robin",
    email: "robin@strangerthing.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=1",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=2",
    name: "Isha Patel",
    email: "isha.patel@service.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=3",
    name: "Arjun Verma",
    email: "arjun.v@webmail.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=4",
    name: "Ananya Iyer",
    email: "ananya.iyer@domain.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=5",
    name: "Vihaan Gupta",
    email: "vihaan.g@provider.net",
  },
  {
    profileUrl: "https://picsum.photos/200?random=6",
    name: "Diya Reddy",
    email: "diya.reddy@startup.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=7",
    name: "Rohan Das",
    email: "rohan.das@coolmail.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=8",
    name: "",
    email: "myra.kaur@tech.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=9",
    name: "Kabir Malhotra",
    email: "k.malhotra@freemail.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=10",
    name: "Saanvi Joshi",
    email: "saanvi.j@mailbox.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=11",
    name: "Aryan Nair",
    email: "aryan.nair@example.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=12",
    name: "Kavya Menon",
    email: "kavya.m@service.net",
  },
  {
    profileUrl: "https://picsum.photos/200?random=13",
    name: "Reyansh Singh",
    email: "reyansh.s@domain.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=14",
    name: "Zoya Khan",
    email: "zoya.khan@webmail.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=15",
    name: "Ayaan Mukherjee",
    email: "ayaan.m@corp.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=16",
    name: "Kiara Bose",
    email: "kiara.bose@digital.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=17",
    name: "Ishaan Chaudhary",
    email: "ishaan.c@provider.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=18",
    name: "Aditi Rao",
    email: "aditi.rao@site.com",
  },
  {
    profileUrl: "https://picsum.photos/200?random=19",
    name: "Vivaan Saxena",
    email: "vivaan.s@mail.in",
  },
  {
    profileUrl: "https://picsum.photos/200?random=20",
    name: "Anika Deshmukh",
    email: "anika.d@classic.com",
  },
];

function displayUserOnScreen(arr) {
  userData.innerHTML = "";
  arr.map((obj) => {
    let divElem = document.createElement("div");
    divElem.className = "user";
    let { profileUrl, name, email } = obj;
    divElem.innerHTML = `
    <div class="userImage">
    <img src=${profileUrl}>
    </div>
    <div class="userDetails">
    <p>${name}</p>
    <p>${email}</h3>
    </div>
    `;

    userData.append(divElem);
  });
}

displayUserOnScreen(userDetailArr);

function handleSearch(e) {
  let inputedValue = e.target.value;
  let filterdUserDetailsArr = userDetailArr.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(inputedValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(inputedValue.toLowerCase())
    );
  });
  if (filterdUserDetailsArr.length === 0) {
    userData.innerHTML = `<p class="error">No User found with this nama and email "${inputedValue}"</p>`;
  } else {
    displayUserOnScreen(filterdUserDetailsArr);
  }
}
userSearchInput.addEventListener("input", handleSearch);

// userDetail.map((obj) => {
//   let divElem = document.createElement("div");
//   divElem.className = "user";
//   divElem.innerHTML = `
// <div class="user">
//     <div class="userImage">
//         <img src="https://imgs.search.brave.com/_jrXZ2CZxFNJAnGxzZMYrDOQso7zcKPNy--qYzs6Vc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA4L3N0cmFu/Z2VyLXRoaW5ncy1z/dGV2ZS0xLmpwZz9x/PTUwJmZpdD1jcm9w/Jnc9ODI1JmRwcj0x/LjU">
//     </div>
//     <div class="userDetails">
//         <h4>stive</h4>
//         <p>stive@strangerthing.com</h3>
//     </div>
// </div>
// `;

//   userData.append(divElem);
// });
