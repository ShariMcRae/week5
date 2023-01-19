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
    while (true) {

      try {
        option = prompt(
          `Please select from the available options:
           1) view courses
           2) add courses
           ${this.courses.length > 0 ? "3) delete courses\n" : ""}`
        );
  
        // if canceling, exit loop
        if (option === null) break;
                
        // validate input
        if (!option || isNaN(option))
          throw new Error("'" + option + "' is not a number. Please try again.");
        if (
          option < 1 ||
          option > 3 ||
          (this.courses.length === 0 && option > 2)
        )
          throw new Error("Option is out of range. Please try again.");

        // perform action based on option
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
          default:
            throw new Error("Unexpected input:" + option);
        }

      } catch (err) {
        alert(err);
      }
    }
  }

  // return string showing course list
  displayCourses() {
    // create course list string
    let coursesString = "\nCourse List:";
    for (let i = 0; i < this.courses.length; i++)
      coursesString += "\n     " + i + ") " + this.courses[i].display();
    if (this.courses.length === 0) coursesString += " Empty";
    return coursesString;
  }

  // promt for courses to add and add them to the courses array
  addCourses() {
    let name = null;
    while (true) {

      try {
        // prompt user for the course to add
        name = prompt(
          this.displayCourses() +
            "\n\nPlease enter the name of the course you wish to add:"
        );

        // if canceling, exit loop
        if (name === null) break;

        // validate the input
        if (!name)
          throw new Error("'" + name + "' is not a name. Please try again.");

        // add course to list
        this.courses.push(new Course(name));

      // display error message and continue
      } catch (err) {
        alert(err);
      }
    }
  }

  // prompt for courses to delete and remove them from the courses array
  deleteCourses() {
    let option = null;
    while (true) {

      try {
        // prompt user for the course to delete
        option = prompt(
          this.displayCourses() +
            "\n\nPlease enter the index of the course you wish to delete:"
        );

        // if canceling, exit loop
        if (option === null) break;

        // validate the input
        if (!option || isNaN(option))
          throw new Error("'" + option + "' is not a number. Please try again.");
        if (option < 0 || option >= this.courses.length)
          throw new Error("Option is out of range. Please try again.");

        // delete the selected course from the list
        this.courses.splice(option, 1);

        // return to main menu if they delete the last course
        if (this.courses.length === 0) break;

      // display error message and continue
      } catch (err) {
        alert(err);
      }
    }
  }
}

let menu = new CourseMenu();
menu.start();
