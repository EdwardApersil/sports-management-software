let raceNumber = Math.floor(Math.random() * 1000);
      let runnerRegistered = true;
      let runnersName = prompt("please enter your name: ");
      let runnersAge = parseInt(prompt("Please enter your age: "));

      if (runnerRegistered && runnersAge === 18) {
        raceNumber * 1000;
      }
      //racing conditional flow
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