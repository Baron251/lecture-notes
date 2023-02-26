//? Object Methods

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [{
          episode_title: "Simpson Roasting on an Open Fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the Genius",
          aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
      ],
      "season two": [
        /* .... */
      ],
      "season three": [
        /* .... */
      ],
    },
    currently_running: true,
  };
  
  //* Object.keys(), returns an array of our keys
  console.log("Keys: ", Object.keys(theSimpsons));
  
  //* Object.values(), returns an array of our values
  console.log("Values: ", Object.values(theSimpsons));
  
  //* Object.create(), uses an existing object to frame out a new object, we use a variable to store the base of the object creation
  
  const futurama = Object.create(theSimpsons);
  //console.log(futurama);
  futurama.id = 2;
  futurama.est = 1999;
  // console.log(futurama);
  
  //* delete object.key
  futurama.currently_running = false;
  
  console.log("Before: ", Object.keys(futurama));
  delete futurama.currently_running;
  console.log("After: ", Object.keys(futurama));