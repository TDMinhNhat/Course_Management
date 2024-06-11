Use master
go

Create database CourseManagement
go

Use CourseManagement
go

Create table Person (
	PerID nvarchar(15) primary key,
	PerName nvarchar(200) not null,
	Sex bit not null,
	Address nvarchar(200),
	Phone nvarchar(15) not null unique,
	Email nvarchar(200) not null unique,
	AccountName nvarchar(100) not null unique,
	Password nvarchar(100) not null,
	Image nvarchar(300) default 'None',
	Role nvarchar(50) not null, 
	Status int not null,
	DateCreated date default GetDate(),
	DateModifier date default GetDate()
)

Create table TeacherInfo (
	TeacherID nvarchar(15) primary key,
	TeacherLevel nvarchar(50) not null, 
	CurrentJobName nvarchar(200) not null,
	constraint FK_TeacherID_TeacherInfo_Person foreign key (TeacherID) references Person(PerID)
)

Create table Skill (
	SkillID bigint primary key identity(1,1),
	SkillName nvarchar(100) not null,
	SkillParent bigint,
	constraint FK_SkillParent_Skill_Skill foreign key (SkillParent) references Skill(SkillID)
)

Create table TeacherSkill (
	TeacherID nvarchar(15) not null,
	SkillID bigint identity(1,1) not null,
	DateRecevied date not null,
	primary key(TeacherID, SkillID),
	constraint FK_TeacherID_TeacherSkill_Person foreign key (TeacherID) references Person(PerID),
	constraint FK_SkillID_TeacherSkill_Skill foreign key (SkillID) references Skill(SkillID)
)

Create table Category (
	CateID nvarchar(15) primary key,
	CateName nvarchar(200) not null,
	CateParent nvarchar(15),
	constraint FK_CateParent_Category_Category foreign key (CateParent) references Category(CateID)
)

Create table Course (
	CourseID nvarchar(15) primary key,
	CourseName nvarchar(200) not null,
	CourseDescription nvarchar(500),
	CateID nvarchar(15) not null,
	DateCreated date default GetDate(),
	DateModifier date default GetDate(),
	Image nvarchar(300) default '',
	constraint FK_CateID_Course_Category foreign key (CateID) references Category(CateID)
)

Create table ClassRoom (
	ClassID nvarchar(15) primary key,
	ClassDescription nvarchar(500),
	TypeStudy int not null,
	DateStarted date not null,
	DateEnded date not null,
	MaxStudent int not null,
	TeacherID nvarchar(15) not null,
	CourseID nvarchar(15) not null,
	ClassStatus nvarchar(20) not null,
	constraint FK_CourseID_ClassRoom_Course foreign key (CourseID) references Course(CourseID),
	constraint FK_TeacherID_ClassRoom_Person foreign key (TeacherID) references Person(PerID)
)

Create table EnrollCourse (
	EnrollID nvarchar(20) primary key,
	DateEnrolled date not null,
	StudentID nvarchar(15) not null,
	ClassID nvarchar(15) not null,
	constraint FK_StudentID_EnrollCourse_Person foreign key (StudentID) references Person(PerID),
	constraint FK_ClassID_EnrollCourse_ClassRoom foreign key (ClassID) references ClassRoom(ClassID)
)