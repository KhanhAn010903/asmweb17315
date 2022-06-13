const button = document.getElementById("button")
const menu = document.getElementById("menu")
button.addEventListener("click" , function(){
    menu.classList.toggle("hidden")
})
const user = {
  name: "Hi, I am John,",
  job: "Creative Technologis",
  description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  img: "https://res.cloudinary.com/https-asm2022-psi-vercel-app/image/upload/v1655086730/images/Ellipse_1_1_zyzo7w.jpg",
}

const post = [
  {
    id: 1,
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    short_description: "Design, Pattern",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    title: "Making a design system from scratch",
    date: "15 Dec 2022",
    short_description: "Design, Devoloper",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const work = [
  {
    id:1,
    image: "images/Rectangle 30.jpg",
    name: "Designing Dashboards",
    date: "2020",
    short_description: "Designing Dashboards",
    description: "   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
  },
  {
    id:2,
    image: "images/Rectangle 32.jpg",
    name: "Designing Dashboards",
    date: "2020",
    short_description: "Designing Dashboards",
    description: "   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
  },
  {
    id:3,
    image: "images/Rectangle 34.jpg",
    name: "Designing Dashboards",
    date: "2020",
    short_description: "Designing Dashboards",
    description: "   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
  },

]
function showUser(user) {
  let result = ` <section class="info py-10">
   <div class="max-w-6xl mx-auto px-5">
       <div class="grid grid-cols-1 md:grid-cols-3">
           <div class="md:col-span-2 order-2 md:order-1">
               <h2 class="text-3xl md:text-5xl font-bold mt-10 md:mt-0 md:leading-[60px]">${user.name}</h2>
               <h2 class="text-3xl md:text-5xl font-bold mt-10 md:mt-0 md:leading-[60px]">${user.job}</h2>
               <p class="text-base my-5">${user.description}</p>
               <a href="" class="inline-block bg-red-500 py-5 px-10 rounded-sm text-white">Download Resume</a>
           </div>
           <div class="md:col-span-1 order-1 md:order-2">
               <img class="md:ml-auto md:mr-0 mx-auto rounded-full" src="${user.img}" alt="">
           </div>
       </div>
   </div>
</section>`

  return result
}



function showPost(post) {
  let result = ""
  for (let i = 0; i < post.length; i++) {
    result += ` <div class="bg-white px-5 py-8">
       <h3 class="mb-5"><a href="" class="text-2xl font-bold">${post[i].title}</a></h3>
       <div class="flex space-x-4 mb-5">
           <span>${post[i].date}</span>
           <span>|</span>
           <span>${post[i].short_description}</span>
       </div>
       <p>
       ${post[i].description}
       </p>
   </div>`
  }
  return result
}


function showWork(work){
  let result=""
  for(let i=0 ; i<work.length ; i++){
    result += ` <div class="project-item grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
    <div class="">
        <img src="${work[i].image}" alt="" class="rounded-lg w-full">
    </div>
    <div>
        <div>
            <h3><a href="detail.html?id=${work[i].id}" class="text-[30px] font-bold">${work[i].name}</a></h3>
        </div>
        <div class="flex space-x-4 items-center py-5">
            <span class="inline-block bg-[#142850] py-1 px-2 text-white rounded-full">${work[i].date}</span>
            <span>${work[i].short_description}</span>
        </div>
        <p>
        ${work[i].description}
        </p>
    </div>
</div>`
  }
  return result
}



function render(elementId, content) {
  const id = document.getElementById(elementId)
  if (id) {
    id.innerHTML = content
  }
}
render("user", showUser(user))
render("post", showPost(post))
render("work" , showWork(work))