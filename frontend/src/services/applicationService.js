export const submitApplication = (application) => {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push(application);
    localStorage.setItem("applications", JSON.stringify(applications));
    return { success: true };
  };
  
  export const getApplications = () => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  };
  
  export const updateApplicationStatus = (id, status) => {
    let applications = getApplications();
    applications = applications.map((app) =>
      app.id === id ? { ...app, status } : app
    );
    localStorage.setItem("applications", JSON.stringify(applications));
  };
  