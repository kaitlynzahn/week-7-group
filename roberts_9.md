from design document: https://github.com/jbreese99/jtbqcf/tree/master/lecture-labs/rw4


1. student login/logout
	database of names
	database of passwords
	server
	data of permissions/abilities of users & user types
	data of classes student is enrolled in

2. student is able to read assingment instructions
	database of permissions/abilities of users & user types
	link to be able to view assignments in course
	file storage

3. student can select assignment they want to submit
	classes that determine if selected or not
	file storage
	permissions to submit assignment

4. student can upload files
	file storage
	server config
	web server
	initil classes for managing logic

5. student can provide a comment along with a file submission
	field for comment
	file storage for saving comment
	database for linking comment to submission

6. student can submit/re-submit upload file
	file storage
	server config
	web server
	initil classes for managing logic



teacher assistant

1. TA login/logout
	database of names
	database of passwords
	server
	data of permissions/abilities of users & user types
	data of classes ta is assisting with

2. TA can view course assignments
	database of permissions/abilities of users & user types
	link to be able to view assignments in course
	file storage

3. TA can view student submissions for an assignment.
	be able to view students in course
	link to be able to view assignments submitted to course
	file storage


4. TA can search students in a course
	database of students
	database of courses

5. TA can collect assignments by downloading students' submission files
	be able to view students in course
	link to be able to view assignments submitted to course
	file storage
	"collect" feature

instructor

1. Instructor login/logout
	database of names
	database of passwords
	server
	data of permissions/abilities of users & user types
	data of classes teacher has created

2. Instructors can perform all functions TAs can perform.
xxx (see ta)

3. TA can collect assignments by downloading students' submission files
	be able to view students in course
	link to be able to view assignments submitted to course
	file storage
	"collect" feature

4. Instructor can add /remove TAs for the course sections
	database of ta's
	database of courses
	be able to grant permissions to course

5. Instructor can add/remove students in the course sections
	database of students
	database of courses
	be able to grant permissions to course

6. Instructor can create/edit/remove assignments of each course
	file storage
	database of courses
	

admin

1. Admin can add/edit/remove/disable instructors
	database of instructors
	be able to grant permissions to instructors
