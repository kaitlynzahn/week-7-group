# To Do List

## Group To Do List for Assignment 6
### from design document: https://github.com/kaitlynzahn/kmzgm8/tree/master/project-two-designFocus

### Student 
1. Login/Logout
- database of students
- database of usernames
- database of passwords
- frontend 
- function for canLogin(){}

2. Student is able to read assignment instructions
- database of courses
- file storage
- database of permissions for user types
- frontend

3. Student selects assignment they want to submit
- class to check if selected
- database of permissions for user types

4. Student can upload files
- file storage
- frontend 
- database of permissions for user types

5. Student can upload comment with file submission
- file storage
- frontend with textbox
- database of permissions for user types

6. Student can submit/resubmit uploaded files
- file storage
- frontend with textbox
- database of permissions for user types
- class to timestamp
- class to check if assignment has been submitted
- function for hasSubmitted(){}

### Teaching Assistant
1. Login/Logout
- database of TAs
- database of usernames
- database of passwords
- frontend 
- function for canLogin(){}

2. TA can view course assignments
- database of courses
- database of permissions for user types
- frontend

3. TA can view student submissions for an assignment
- database of permissions for user types
- frontend

4. TA can search students in a course
- database of courses
- database of students

5. TA can collect assignments by downloading students' submission files
- database of courses
- database of students
- database of permissions for user types

### Instructor
1. Login/Logout
- database of instructors
- database of usernames
- database of passwords
- frontend 
- function for canLogin(){}

2. Instructors can perform all functions TAs can perform.
- (see TA dependencies)

3. Instructor can create/edit/remove courses and sections
- database of courses
- database of sections
- database of permissions for user types
- function for editCourse(){}

4. Instructor can add /remove TAs for the course sections
- database of courses
- database of TAs
- database of permissions for user types
- function for editSection(){}

5. Instructor can add/remove students in the course sections
- database of students
- database of courses
- database of sections
- database of permissions for user types
- function for editStudents(){}

6. Instructor can create/edit/remove assignments of each course
- database of permissions for user types
- database of courses
- access to file storage (assignments)
- function for editAssignments(){}

### System Administrator
1. Admin can add/edit/remove/disable instructors
- database of courses
- database of instructors
- database of permissions for user types
- function for editInstructors(){}

