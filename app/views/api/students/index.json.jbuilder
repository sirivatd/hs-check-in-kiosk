@students.each do |student|
  json.set! student.id do
    json.extract! student, :id, :school, :first_name, :last_name, :email_address, :major
  end
end 