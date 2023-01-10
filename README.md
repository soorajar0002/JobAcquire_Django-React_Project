# JOB ACQUIRE
JOB ACQUIRE is a job portal website done using React JS as frontend and django as backend. It has three modules user, recruiter and admin. User can dicover job post and apply for the post. Recruiter can select the suitable candidate from the applicants. Admin can manage the user and recruiters.
## Features

* User, Recruiter and Admin Dashboard
* View Job Post and Apply
* Chat and Video Call 
* Post Management
* Payment Integration
* Email account verification 
* Admin user and recruiter management

## Screenshots

![Home](https://i.ibb.co/2d66N91/Screenshot-2023-01-10-132830.jpg)

## Prerequisites

* Django 3.1+
* Python 3.7+
* Other dependencies are listed in `requirements.txt`

## Installation

1. Clone the repository:
  git clone https://github.com/soorajar0002/JobAcquire_Django-React_Project.git
2. Navigate to the frontend directory:
  cd job-portal/frontend
3. Install the required packages:
  npm install
4. In a new terminal window, navigate to the backend directory:
  cd job-portal/backend
5. Create a virtual environment and activate it:
   python3 -m venv venv
   source venv/bin/activate
6. Install the required packages:
   pip install -r requirements.txt
7. Run the server:
   python manage.py runserver
8. Open a browser window and navigate to 
  http://localhost:8000
  Now you should have a running instance of the job portal locally,

## Development
To start developing the project, you can follow the instructions from the previous section to set up the project locally.

When making changes to the frontend code, make sure to run the following command in the frontend directory to start the development server:
 
 npm start

Make sure to run the following command in the backend directory to apply the migration:

python manage.py makemigrations
python manage.py migrate



## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
