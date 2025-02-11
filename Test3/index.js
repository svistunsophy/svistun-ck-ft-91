function printStudentInfo(student) {
    console.log(`Студент: ${student.firstName} ${student.lastName}`);
    
    student.marks.forEach((mark) => {
        console.log(`${mark.subject}: ${mark.mark}`);
    });
}

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {

        constructor(firstName, lastName, marks = []) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.marks = marks;
        }

    addMark(mark) {
        this.marks.push(new Mark(subject, mark));
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return totalMarks / this.marks.length;
    }

    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}