
//Taking users input
      let runnerRegistered = true;
      let runnersName = prompt("please enter your name: ");
      let runnersAge = parseInt(prompt("Please enter your age: "));
//Converting users input into random numbers
      let raceNumber = Math.floor(Math.random() * 1000);

//This piece of code authomatically generate users ID number according to their inputs
      if (runnerRegistered && runnersAge === 18) {
        raceNumber * 1000;
      }


      /*racing conditional flow checks users 
      input and then deplay they're name, time to race,
       and thier respective user ID */
      if (runnerRegistered && runnersAge > 18) {
        document.write(
          `${runnersName}, Your race starts at 9:00AM. And your race ID is: ${raceNumber}`
        );
      } else if (!runnerRegistered && runnersAge > 18) {
        document.write(
          `${runnersName}, Your race  starts at 12:00PM. And your race ID is: ${raceNumber}`
        );
      } else if (runnerRegistered && runnersAge < 18) {
        document.write(
          `${runnersName}, Your race  starts at 3:30PM. And your race ID is: ${raceNumber}`
        );
      } else {
        document.write(
          `${runnersName}, Stay back and support your team. Thanks!`
        );
      }