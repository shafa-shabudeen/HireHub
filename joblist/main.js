

const jobs = [
    {
      title: "Software Engineer",
      image: "images/software-engineer.svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
        experiance : "fresher",
        salary : "2L - 5L / yr",
        industry : "IT",
        location : "benguluru,india",
      openPositions: "2",
      link: "#",
      
    },
  
    {
      title: "Data Scientist",
      image: "images/data-scientist.svg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
        experiance : "0-2 yrs",
        salary : "2L - 5L / yr",
        industry : "IT",
        location : "hyderabad,india",
        openPositions: "3",
      link: "#",
    },
  
    {
      title: "Project Manager",
      image: "images/project-manager.svg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
        experiance : "2-4 yrs",
        salary : "3L - 6L / yr",
        industry : "IT",
        location : "chennai,india",
        openPositions: "1",
      link: "#",
    },
  
    {
      title: "Product Manager",
      image: "images/product-manager.svg",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
        experiance : "fresher",
        salary : "2L - 5L / yr",
        industry : "IT",
        location : "benguluru,india",
        openPositions: "1",
      link: "#",
    },
  
    {
      title: "Sales Representative",
      image: "images/sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
        experiance : "3-6 yrs",
        salary : "6L - 10L / yr",
        industry : "IT",
        location : "delhi,india",
        openPositions: "4",
      link: "#",
    },
  
    {
      title: "Marketing Manager",
      image: "images/marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
        experiance : "fersher",
        salary : "2L - 2.5L / yr",
        industry : "IT",
        location : "kerala,india",
        openPositions: "1",
      link: "#",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let experiance = document.createElement("div");
        experiance.innerHTML = job.experiance;
        experiance.classList.add("experiance");
  
        
        let salary = document.createElement("div");
        salary.innerHTML = job.salary;
        salary.classList.add("salary");
  
        let industry = document.createElement("div");
        industry.innerHTML = job.industry;
        industry.classList.add("industry");
  
  
        let location = document.createElement("div");
        location.innerHTML = job.location;
        location.classList.add("location");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(experiance);
        jobCard.appendChild(salary);
        jobCard.appendChild(industry);
        jobCard.appendChild(location);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  