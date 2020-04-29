export const fetchCheckins = () => {
  return $.ajax({
    url: `api/students`,
    method: "GET"
  });
};

export const createStudent = student => {
  return $.ajax({
    method: "POST",
    url: `/api/students`,
    data: student,
    processData: false,
    contentType: false,
  });
};

export const fetchMajors = () => {
  return $.ajax({
    url: `https://hs-check-in-kiosk-api.herokuapp.com/api/majors`,
    method: "GET"
  });
};
