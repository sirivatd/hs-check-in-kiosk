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

