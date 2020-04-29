class Api::StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def new
    @student = Student.new
    render :new
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to 'root_url'
    else
      flash.now[:errors] = @student.errors.full_messages
      render :new
    end
  end

  
  private

  def student_params
    params.require(:student).permit(:school, :first_name, :last_name, :major, :email_address)
  end
end