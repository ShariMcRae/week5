class Course {
  constructor(name) {
    this.name = name;
  }

  display() {
    return this.name;
  }
}

class CourseMenu {
  constructor() {
    this.courses = [];
  }

  // display menu and prompt for option
  start() {
    let option = null;
    while (option !== 0) {
      option = prompt(
        `Please select from the available options:
         0) exit
         1) view courses
         2) add course
         ${this.courses.length > 0 ? "3) delete course\n" : ""}`
      );

      // if canceling, exit loop
      if (option === null) break;

      try {
        if (!option || isNaN(option))
          throw new Error(
            "'" + option + "' is not a number. Please try again."
          );
        if (
          option < 0 ||
          option > 3 ||
          (this.courses.length === 0 && option > 2)
        )
          throw new Error("Option is out of range. Please try again.");

        switch (option) {
          case "1":
            alert(this.displayCourses());
            break;
          case "2":
            this.addCourses();
            break;
          case "3":
            this.deleteCourses();
            break;

          // exit selected (option 0)
          default:
            option = 0;
        }
      } catch (err) {
        option = null;
        alert(err);
      }
    }
  }

  displayCourses() {
    // create course list string
    let coursesString = "\nCourse List:";
    for (let i = 0; i < this.courses.length; i++)
      coursesString += "\n     " + i + ") " + this.courses[i].display();
    if (this.courses.length === 0) coursesString += " Empty";
    return coursesString;
  }

  addCourses() {
    let name = null;
    while (name !== 0) {
      name = prompt(
        this.displayCourses() +
          "\n\nPlease enter the name of the course you wish to add:"
      );

      // if canceling, exit loop
      if (name === null) break;

      try {
        if (!name)
          throw new Error("'" + name + "' is not a name. Please try again.");
        this.courses.push(new Course(name));
      } catch (err) {
        alert(err);
        name = null;
      }
    }
  }

  deleteCourses() {
    let option = null;
    while (option !== 0) {
      option = prompt(
        this.displayCourses() +
          "\n\nPlease enter the index of the course you wish to delete:"
      );

      // if canceling, exit loop
      if (option === null) break;

      try {
        let number = parseInt(option);
        if (!option || isNaN(number))
          throw new Error(
            "'" + option + "' is not a number. Please try again."
          );
        if (number < 0 || number >= this.courses.length)
          throw new Error("Option is out of range. Please try again.");
        this.courses.splice(option, 1);
      } catch (err) {
        alert(err);
        option = null;
      }
      if (this.courses.length === 0) break;
    }
  }
}

let menu = new CourseMenu();
menu.start();
